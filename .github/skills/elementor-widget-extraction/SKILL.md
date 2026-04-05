---
name: elementor-widget-extraction
description: Extract raw and normalized Elementor data in a strict read-only contract. Use when auditing `_elementor_data`, resolving global widgets, capturing page assets, or preparing subtree-scoped handoff bundles for migration workflows such as Astro conversion.
---

# Elementor Widget Extraction

## Core (Universal)

### Trigger Scope

Use this skill when you need read-only Elementor inspection with reusable output:
- discovering Elementor-enabled documents across pages, posts, templates, or custom post types
- extracting one container/section/widget subtree with full raw settings
- preparing a handoff bundle for `$elementor-to-astro`
- resolving global widgets, template references, dynamic tags, and page-level settings
- collecting page CSS, custom CSS, and third-party widget asset references
- comparing Elementor structures or settings without mutating persisted content

### Non-Goals

- Do not mutate content. If the task changes `_elementor_data`, route to `$elementor-ops-and-data`.
- Do not pretend summary buckets are complete fidelity. Conversion-facing modes must preserve `raw_settings`.
- Do not dump an entire large page plus every plugin asset in one response.

## Read-Only Execution Policy

This skill uses WordPress MCP, but it must behave as read-only.

### Ability Selection

Prefer the least powerful ability that can answer the question:

1. `novamira/list-directory`
   - discover plugin asset paths, cache directories, and generated files

2. `novamira/read-file`
   - read CSS, JS, templates, cached stylesheets, or extracted archives already present on disk

3. `novamira/execute-php`
   - inspect `_elementor_data`, resolve widgets/templates, read options, and build normalized JSON reports

### Forbidden Mutation Surface

When using `novamira/execute-php`, do not call write-oriented APIs such as:
- `update_option()`, `delete_option()`, `add_option()`
- `update_post_meta()`, `delete_post_meta()`, `wp_update_post()`, `wp_insert_post()`
- direct `INSERT`, `UPDATE`, `DELETE`, `ALTER`, `DROP`, `TRUNCATE` SQL
- plugin/theme activation, cache flushes, file writes, or HTTP callbacks with side effects

If the request requires any of the above, stop using this skill and switch workflows.

## Extraction Modes

Always choose a named mode before extracting. This prevents oversized or ambiguous output.

| Mode | Purpose | Required Fields | Typical Use |
|---|---|---|---|
| `page-skeleton` | Top-level structure only | `elements[*].id`, `elType`, `widgetType`, `parent_id`, `child_ids`, `order` | plan page migration incrementally |
| `subtree` | One element plus descendants | full `raw_settings`, normalized buckets, references | convert one container/section at a time |
| `widget-full` | One widget with all settings | full `raw_settings`, repeaters, media, dynamic tags | inspect or recreate a single widget |
| `page-assets` | Page-wide settings and CSS | `_elementor_page_settings`, custom CSS, generated CSS refs | preserve page-level behavior |
| `plugin-assets` | Base widget CSS/JS/template references | asset paths, handles, source files, support tier | third-party widget fidelity |
| `handoff-bundle` | Minimal complete payload for one conversion step | source, breakpoints, subtree, page assets, plugin assets, warnings | pass into `$elementor-to-astro` |

## Shared Output Contract

Every extraction result should conform to this high-level shape:

```json
{
  "contract_version": "1.0",
  "mode": "handoff-bundle",
  "source": {
    "post_id": 123,
    "post_type": "page",
    "template_type": "page",
    "title": "Speaker Management"
  },
  "breakpoints": {
    "desktop": { "label": "desktop", "max_width": null },
    "tablet": { "label": "tablet", "max_width": 1024 },
    "mobile": { "label": "mobile", "max_width": 767 }
  },
  "page_assets": {
    "page_settings": {},
    "page_custom_css": "",
    "generated_css_refs": [],
    "kit_refs": [],
    "resolved_globals": []
  },
  "elements": [],
  "plugin_assets": [],
  "warnings": []
}
```

### Element Contract

For `subtree`, `widget-full`, and `handoff-bundle`, each element must preserve both raw and normalized data:

```json
{
  "id": "abc123",
  "parent_id": "root001",
  "order": 0,
  "depth": 1,
  "elType": "widget",
  "widgetType": "heading",
  "raw_settings": {},
  "normalized": {
    "content": {},
    "typography": {},
    "colors": {},
    "spacing": {},
    "background": {},
    "border": {},
    "shadow": {},
    "layout": {},
    "motion": {},
    "visibility": {},
    "responsive_overrides": {}
  },
  "custom_css": {
    "element": "",
    "classes": [],
    "element_id": null
  },
  "references": {
    "template_id": null,
    "global_widget_id": null,
    "dynamic_tags": {},
    "globals": {},
    "media": []
  },
  "child_ids": []
}
```

Rules:
- `raw_settings` is mandatory for `subtree`, `widget-full`, and `handoff-bundle`.
- Normalized buckets are convenience fields, not replacements for raw data.
- If a field is omitted for size reasons, add a `warnings[]` entry explaining exactly what was omitted.

## Preflight Workflow

1. Discover document scope.
   - find Elementor-enabled post types instead of assuming only `page` and `post`

2. Resolve runtime breakpoints.
   - read `elementor_active_breakpoints`
   - normalize each breakpoint to a `{label, max_width}` record

3. Choose a single extraction mode.
   - do not combine unrelated modes in one payload unless the mode is `handoff-bundle`

4. Estimate payload size.
   - if a page is large, split by top-level container/section
   - if a widget is JS-heavy, split plugin assets into a separate step

5. Extract and annotate.
   - return warnings for unresolved globals, missing files, dynamic tags, or oversized assets

## Recommended Queries

### 1. Discover Elementor-enabled documents across all relevant types

```php
// MCP: novamira/execute-php
$query = new WP_Query([
    'post_type'      => 'any',
    'post_status'    => ['publish', 'draft', 'private'],
    'meta_query'     => [
        [
            'key'     => '_elementor_data',
            'compare' => 'EXISTS',
        ],
    ],
    'posts_per_page' => -1,
    'fields'         => 'ids',
]);

$results = [];
foreach ($query->posts as $post_id) {
    $results[] = [
        'post_id'       => $post_id,
        'post_type'     => get_post_type($post_id),
        'title'         => get_the_title($post_id),
        'status'        => get_post_status($post_id),
        'template_type' => get_post_meta($post_id, '_elementor_template_type', true),
    ];
}

return $results;
```

### 2. Read active breakpoints instead of hardcoding suffixes

```php
// MCP: novamira/execute-php
$active = get_option('elementor_active_breakpoints', []);
$defaults = [
    'desktop' => ['label' => 'desktop', 'max_width' => null],
    'tablet'  => ['label' => 'tablet', 'max_width' => 1024],
    'mobile'  => ['label' => 'mobile', 'max_width' => 767],
];

$normalized = $defaults;
if (is_array($active)) {
    foreach ($active as $key => $config) {
        $normalized[$key] = [
            'label'     => $config['label'] ?? $key,
            'max_width' => isset($config['value']) ? (int) $config['value'] : null,
        ];
    }
}

return $normalized;
```

### 3. Extract a page skeleton only

```php
// MCP: novamira/execute-php
$post_id = 123;
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) {
    return ['error' => 'No Elementor data'];
}

$rows = [];
$walk = function (array $elements, ?string $parent_id = null, int $depth = 0) use (&$walk, &$rows) {
    foreach (array_values($elements) as $index => $el) {
        $rows[] = [
            'id'         => $el['id'] ?? null,
            'parent_id'  => $parent_id,
            'order'      => $index,
            'depth'      => $depth,
            'elType'     => $el['elType'] ?? null,
            'widgetType' => $el['widgetType'] ?? null,
            'child_ids'  => array_values(array_filter(array_map(static function ($child) {
                return $child['id'] ?? null;
            }, $el['elements'] ?? []))),
        ];
        if (!empty($el['elements'])) {
            $walk($el['elements'], $el['id'] ?? null, $depth + 1);
        }
    }
};

$walk($data);
return $rows;
```

### 4. Extract one subtree by element id

```php
// MCP: novamira/execute-php
$post_id = 123;
$target_id = 'abc123';
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) {
    return ['error' => 'No Elementor data'];
}

$found = null;

$normalize = static function (array $settings, array $breakpoints): array {
    $normalized = [
        'content'              => [],
        'typography'           => [],
        'colors'               => [],
        'spacing'              => [],
        'background'           => [],
        'border'               => [],
        'shadow'               => [],
        'layout'               => [],
        'motion'               => [],
        'visibility'           => [],
        'responsive_overrides' => [],
    ];

    foreach ($settings as $key => $value) {
        if (preg_match('/(title|text|editor|content|url|link|caption|alt|description)/i', $key)) {
            $normalized['content'][$key] = $value;
        }
        if (preg_match('/(font|typography|line_height|letter_spacing|text_transform)/i', $key)) {
            $normalized['typography'][$key] = $value;
        }
        if (preg_match('/color/i', $key)) {
            $normalized['colors'][$key] = $value;
        }
        if (preg_match('/(padding|margin|gap)/i', $key)) {
            $normalized['spacing'][$key] = $value;
        }
        if (preg_match('/background/i', $key)) {
            $normalized['background'][$key] = $value;
        }
        if (preg_match('/border|radius/i', $key)) {
            $normalized['border'][$key] = $value;
        }
        if (preg_match('/shadow/i', $key)) {
            $normalized['shadow'][$key] = $value;
        }
        if (preg_match('/(width|height|align|justify|direction|position|display|overflow)/i', $key)) {
            $normalized['layout'][$key] = $value;
        }
        if (preg_match('/(motion|animation|sticky|transform|scroll)/i', $key)) {
            $normalized['motion'][$key] = $value;
        }
        if (preg_match('/hide_(desktop|tablet|mobile|widescreen|laptop|tablet_extra|mobile_extra)/', $key)) {
            $normalized['visibility'][$key] = $value;
        }

        foreach (array_keys($breakpoints) as $breakpoint) {
            $suffix = '_' . $breakpoint;
            if (str_ends_with($key, $suffix)) {
                $normalized['responsive_overrides'][$breakpoint][$key] = $value;
            }
        }
    }

    return $normalized;
};

$breakpoints = get_option('elementor_active_breakpoints', []);
$breakpoints = is_array($breakpoints) ? $breakpoints : [];
$breakpoints = array_merge(['desktop' => ['label' => 'desktop']], $breakpoints);

$walk = function (array $elements, ?string $parent_id = null, int $depth = 0) use (&$walk, &$found, $target_id, $normalize, $breakpoints) {
    foreach (array_values($elements) as $index => $el) {
        $id = $el['id'] ?? null;
        if ($id === $target_id) {
            $collect = function (array $node, ?string $node_parent_id, int $node_depth) use (&$collect, $normalize, $breakpoints): array {
                $settings = is_array($node['settings'] ?? null) ? $node['settings'] : [];
                $children = [];
                foreach (array_values($node['elements'] ?? []) as $childIndex => $child) {
                    $children[] = $collect($child, $node['id'] ?? null, $node_depth + 1);
                    $children[count($children) - 1]['order'] = $childIndex;
                }

                return [
                    'id'           => $node['id'] ?? null,
                    'parent_id'    => $node_parent_id,
                    'order'        => 0,
                    'depth'        => $node_depth,
                    'elType'       => $node['elType'] ?? null,
                    'widgetType'   => $node['widgetType'] ?? null,
                    'raw_settings' => $settings,
                    'normalized'   => $normalize($settings, $breakpoints),
                    'custom_css'   => [
                        'element'    => $settings['custom_css'] ?? '',
                        'classes'    => array_values(array_filter(preg_split('/\s+/', (string) ($settings['css_classes'] ?? '')))),
                        'element_id' => $settings['_element_id'] ?? null,
                    ],
                    'references'   => [
                        'template_id'      => $node['templateID'] ?? ($settings['template_id'] ?? null),
                        'global_widget_id' => (($node['widgetType'] ?? '') === 'global') ? ($node['templateID'] ?? ($settings['template_id'] ?? null)) : null,
                        'dynamic_tags'     => $settings['__dynamic__'] ?? [],
                        'globals'          => $settings['__globals__'] ?? [],
                        'media'            => array_values(array_filter($settings, static function ($value) {
                            return is_array($value) && isset($value['id'], $value['url']);
                        })),
                    ],
                    'child_ids'     => array_values(array_filter(array_map(static function ($child) {
                        return $child['id'] ?? null;
                    }, $node['elements'] ?? []))),
                    'children'      => $children,
                ];
            };

            $found = $collect($el, $parent_id, $depth);
            return;
        }

        if (!empty($el['elements'])) {
            $walk($el['elements'], $id, $depth + 1);
        }
    }
};

$walk($data);
return $found ?: ['error' => 'Element not found'];
```

### 5. Resolve global widgets and page assets in dedicated passes

```php
// MCP: novamira/execute-php
$post_id = 123;
$page_settings = get_post_meta($post_id, '_elementor_page_settings', true);
$controls_usage = get_post_meta($post_id, '_elementor_controls_usage', true);
$generated_css  = get_post_meta($post_id, '_elementor_css', true);

$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
$globals = [];

$walk = function (array $elements) use (&$walk, &$globals) {
    foreach ($elements as $el) {
        $settings = is_array($el['settings'] ?? null) ? $el['settings'] : [];
        $template_id = $el['templateID'] ?? ($settings['template_id'] ?? null);
        if ($template_id || (($el['widgetType'] ?? '') === 'global')) {
            $globals[] = [
                'id'          => $el['id'] ?? null,
                'widgetType'  => $el['widgetType'] ?? null,
                'template_id' => $template_id,
                'resolved_to' => $template_id ? get_post_type((int) $template_id) : null,
            ];
        }
        if (!empty($el['elements'])) {
            $walk($el['elements']);
        }
    }
};

if (is_array($data)) {
    $walk($data);
}

return [
    'page_settings' => $page_settings,
    'controls_usage' => $controls_usage,
    'generated_css_meta' => $generated_css,
    'globals' => $globals,
];
```

### 6. Discover plugin assets without reading large blobs through PHP

Use `novamira/execute-php` for handles and file paths, then switch to `novamira/list-directory` or `novamira/read-file` for the actual files.

```php
// MCP: novamira/execute-php
$widget_name = 'ucaddon_stacking_cards';
$widget_manager = \Elementor\Plugin::$instance->widgets_manager;
$widget = $widget_manager->get_widget_types($widget_name);

if (!$widget) {
    return ['error' => 'Widget type not registered'];
}

$source_file = (new ReflectionClass($widget))->getFileName();
$style_depends = method_exists($widget, 'get_style_depends') ? $widget->get_style_depends() : [];
$script_depends = method_exists($widget, 'get_script_depends') ? $widget->get_script_depends() : [];

$support_tier = 'native-simple';
if (str_starts_with($widget_name, 'ucaddon_')) {
    $support_tier = 'template-driven';
} elseif (str_starts_with($widget_name, 'tp-')) {
    $support_tier = 'generated-css';
} elseif (str_starts_with($widget_name, 'jet-')) {
    $support_tier = 'shared-asset';
}

return [
    'widget_name' => $widget_name,
    'class' => get_class($widget),
    'source_file' => $source_file,
    'style_depends' => $style_depends,
    'script_depends' => $script_depends,
    'support_tier' => $support_tier,
];
```

## Payload Budgeting

- Prefer one top-level container/section per `handoff-bundle`.
- If `raw_settings` contains large repeaters, keep them intact but split `plugin-assets` into a separate extraction.
- Do not inline binary files or huge generated CSS unless explicitly requested.
- For large CSS/JS files, return path references plus a short summary first.

## Guardrails

- Always treat `_elementor_data` as JSON, never regex text.
- In migration-facing modes, never omit `raw_settings`.
- Do not hardcode breakpoints when `elementor_active_breakpoints` is available.
- Always include `parent_id`, `order`, and `depth` so subtree order is reconstructible.
- Resolve global widget references in a dedicated pass before claiming a conversion bundle is complete.
- Prefer `read-file` and `list-directory` for asset contents; use `execute-php` for discovery and normalization.
- If a widget is server-rendered or JS-heavy and assets are unresolved, return a warning instead of implying full fidelity.

## Handoff Rules For `$elementor-to-astro`

Only pass `handoff-bundle` output when all of the following are true:
- `contract_version` is present
- `breakpoints` are present
- `elements[0].raw_settings` exists for the target subtree root
- page assets were extracted or explicitly declared unnecessary
- plugin assets were collected or explicitly marked unresolved with warnings

See [contracts/handoff-bundle.example.json](contracts/handoff-bundle.example.json) for a reference payload.---
name: elementor-widget-extraction
description: Extract complete widget information from Elementor pages — text, settings, styling, responsive config, and element hierarchy. Use for auditing content, migrating data, or inspecting widget configurations.
---

# Elementor Widget Extraction

## Core (Universal)

### Trigger Scope

Use this skill when reading or inspecting Elementor widget data:
- extracting text content, URLs, or media from a page
- auditing widget settings and styling across posts
- inspecting responsive configurations per breakpoint
- listing all widgets and their hierarchy on a page
- comparing widget configurations between pages/templates

### Data Model

Elementor stores page content in `_elementor_data` post meta as a JSON array. Structure:

```
Page
 └─ Section (elType: "section")
     ├─ settings: { ... }
     └─ elements: Column[]
         └─ Column (elType: "column")
             ├─ settings: { ... }
             └─ elements: Widget[]
                 └─ Widget (elType: "widget")
                     ├─ id: "abc123"
                     ├─ widgetType: "heading"
                     ├─ settings: { title, typography, ... }
                     └─ elements: [] (or nested for inner-section)
```

Elementor 3.x+ also uses **containers** (`elType: "container"`) which can nest directly without the section→column pattern.

Key meta keys:
| Meta Key | Purpose |
|---|---|
| `_elementor_data` | Full page structure (JSON) |
| `_elementor_page_settings` | Page-level settings |
| `_elementor_template_type` | Template type (page, header, footer, etc.) |
| `_elementor_css` | Generated CSS cache |
| `_elementor_controls_usage` | Widget usage stats |

### Workflow

Two modes:

**A. Page overview** — get the skeleton first, then drill into individual elements:
1. Extract top-level structure (containers/sections with IDs and types, no deep settings)
2. Pick one container/element by ID
3. Extract that element's full settings + child widgets
4. Repeat for each element

**B. Full page dump** — extract everything at once (for auditing or bulk analysis):
1. Identify target post/page IDs
2. Pull `_elementor_data` as JSON
3. Walk tree recursively, filter by widgetType/elType/settings
4. Format as structured report

Prefer mode A for conversions (element-by-element). Use mode B for audits.

### Extraction Methods (via WordPress MCP)

All extraction uses the `novamira/execute-php` MCP ability which gives full WordPress environment access. No WP-CLI or shell tools needed.

**Find all Elementor pages:**

```php
// MCP: novamira/execute-php
$query = new WP_Query([
    'post_type'      => ['page', 'post'],
    'post_status'    => 'publish',
    'meta_key'       => '_elementor_data',
    'posts_per_page' => -1,
    'fields'         => 'ids',
]);
$results = [];
foreach ($query->posts as $post_id) {
    $results[] = [
        'id'            => $post_id,
        'title'         => get_the_title($post_id),
        'template_type' => get_post_meta($post_id, '_elementor_template_type', true),
    ];
}
return $results;
```

**Extract top-level page structure (skeleton only):**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$skeleton = [];
foreach ($data as $el) {
    $entry = [
        'id'         => $el['id'] ?? null,
        'elType'     => $el['elType'] ?? 'unknown',
        'widgetType' => $el['widgetType'] ?? null,
        'children'   => count($el['elements'] ?? []),
    ];
    // Include just layout-relevant settings for structure overview
    $s = $el['settings'] ?? [];
    foreach (['content_width', 'flex_direction', 'flex_direction_mobile', 'hide_desktop', 'hide_tablet', 'hide_mobile'] as $k) {
        if (!empty($s[$k])) $entry['settings'][$k] = $s[$k];
    }
    $skeleton[] = $entry;
}
return ['post_id' => $post_id, 'top_level_count' => count($skeleton), 'elements' => $skeleton];
```

**Extract a single element by ID (with all children and full settings):**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$target_id = '<ELEMENT_ID>';
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$find = function(array $elements) use (&$find, $target_id) {
    foreach ($elements as $el) {
        if (($el['id'] ?? '') === $target_id) return $el;
        if (!empty($el['elements'])) {
            $found = $find($el['elements']);
            if ($found) return $found;
        }
    }
    return null;
};
$element = $find($data);
if (!$element) return ['error' => 'Element not found: ' . $target_id];
return $element; // full settings + nested children
```

**Extract all widgets from a page (complete info):**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$widgets = [];
$walk = function (array $elements, int $depth = 0) use (&$walk, &$widgets) {
    foreach ($elements as $el) {
        if ('widget' === ($el['elType'] ?? '')) {
            $settings = $el['settings'] ?? [];

            // Text fields
            $text_fields = [];
            foreach ($settings as $k => $v) {
                if (is_string($v) && strlen($v) > 0 && strlen($v) < 1000) {
                    $text_fields[$k] = $v;
                }
            }

            // Color fields
            $colors = [];
            foreach ($settings as $k => $v) {
                if (is_string($v) && stripos($k, 'color') !== false) {
                    $colors[$k] = $v;
                }
            }

            // Typography
            $typography = array_filter([
                'font_family'  => $settings['typography_font_family'] ?? null,
                'font_size'    => $settings['typography_font_size'] ?? null,
                'font_weight'  => $settings['typography_font_weight'] ?? null,
                'line_height'  => $settings['typography_line_height'] ?? null,
                'letter_spacing' => $settings['typography_letter_spacing'] ?? null,
            ]);

            // Spacing
            $spacing = array_filter([
                'margin'  => $settings['margin'] ?? null,
                'padding' => $settings['padding'] ?? null,
            ]);

            // Responsive overrides
            $responsive = [];
            $breakpoints = ['mobile', 'tablet', 'widescreen', 'laptop', 'tablet_extra', 'mobile_extra'];
            foreach ($settings as $k => $v) {
                foreach ($breakpoints as $bp) {
                    if (str_ends_with($k, '_' . $bp)) {
                        $responsive[$bp][$k] = $v;
                    }
                }
            }

            $widgets[] = [
                'id'          => $el['id'],
                'widgetType'  => $el['widgetType'] ?? 'unknown',
                'depth'       => $depth,
                'text_fields' => $text_fields,
                'colors'      => $colors,
                'typography'  => $typography,
                'spacing'     => $spacing,
                'responsive'  => $responsive,
            ];
        }
        if (!empty($el['elements'])) {
            $walk($el['elements'], $depth + 1);
        }
    }
};
$walk($data);
return ['post_id' => $post_id, 'widget_count' => count($widgets), 'widgets' => $widgets];
```

**Extract widgets of a specific type only:**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$target_type = 'heading'; // or 'image', 'text-editor', 'button', etc.
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$widgets = [];
$walk = function (array $elements) use (&$walk, &$widgets, $target_type) {
    foreach ($elements as $el) {
        if ('widget' === ($el['elType'] ?? '') && $target_type === ($el['widgetType'] ?? '')) {
            $widgets[] = ['id' => $el['id'], 'settings' => $el['settings'] ?? []];
        }
        if (!empty($el['elements'])) $walk($el['elements']);
    }
};
$walk($data);
return $widgets;
```

**List full element hierarchy:**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$tree = [];
$walk = function (array $elements, int $depth = 0) use (&$walk, &$tree) {
    foreach ($elements as $el) {
        $tree[] = [
            'depth'      => $depth,
            'elType'     => $el['elType'] ?? 'unknown',
            'widgetType' => $el['widgetType'] ?? null,
            'id'         => $el['id'] ?? null,
        ];
        if (!empty($el['elements'])) $walk($el['elements'], $depth + 1);
    }
};
$walk($data);
return $tree;
```

**Extract Global Widget references:**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
if (!is_array($data)) return ['error' => 'No Elementor data'];

$globals = [];
$walk = function (array $elements) use (&$walk, &$globals) {
    foreach ($elements as $el) {
        if (!empty($el['templateID']) || ($el['widgetType'] ?? '') === 'global') {
            $tid = $el['templateID'] ?? ($el['settings']['template_id'] ?? null);
            $globals[] = ['id' => $el['id'], 'widgetType' => $el['widgetType'] ?? null, 'templateID' => $tid];
        }
        if (!empty($el['elements'])) $walk($el['elements']);
    }
};
$walk($data);
return $globals;
```

**Extract page settings:**

```php
// MCP: novamira/execute-php
$post_id = <ID>;
return [
    'page_settings'  => get_post_meta($post_id, '_elementor_page_settings', true),
    'template_type'  => get_post_meta($post_id, '_elementor_template_type', true),
    'controls_usage' => get_post_meta($post_id, '_elementor_controls_usage', true),
];
```

**Bulk widget count across all Elementor pages:**

```php
// MCP: novamira/execute-php
$query = new WP_Query([
    'post_type'      => ['page', 'post'],
    'post_status'    => 'publish',
    'meta_key'       => '_elementor_data',
    'posts_per_page' => -1,
    'fields'         => 'ids',
]);
$results = [];
foreach ($query->posts as $post_id) {
    $data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
    $count = 0;
    $walk = function (array $elements) use (&$walk, &$count) {
        foreach ($elements as $el) {
            if ('widget' === ($el['elType'] ?? '')) $count++;
            if (!empty($el['elements'])) $walk($el['elements']);
        }
    };
    if (is_array($data)) $walk($data);
    $results[] = ['id' => $post_id, 'title' => get_the_title($post_id), 'widget_count' => $count];
}
return $results;
```

### Guardrails

- Always treat `_elementor_data` as structured JSON — never regex-match raw meta.
- Do not modify data during extraction — this skill is read-only.
- Large pages may have deeply nested structures; use recursive walkers.
- Global widgets resolve to a separate template post — follow `templateID` to get actual content.
- Responsive suffixes vary by Elementor version and active breakpoints; query `get_option('elementor_active_breakpoints')` to check.
- All extraction runs via `novamira/execute-php` MCP ability — no WP-CLI or shell access needed.

### Layout Fidelity & Width Extraction Extraction
When checking containers (`elType: "container"`) or sections (`elType: "section"`):
- Explicitly check `content_width` (`full` vs `boxed` or default).
- Check `padding` and `margin` values from the element's settings, taking care to extract responsive breakpoints (`padding_mobile`, `margin_tablet`, etc.).
- Check `custom_width`, `width`, `height`, and flex gap (`elements_gap`) values.
- It is CRITICAL to report whether a wrapper container requires full viewport width or a restricted max-width (e.g., 1200px or full screen) and its exact padding.

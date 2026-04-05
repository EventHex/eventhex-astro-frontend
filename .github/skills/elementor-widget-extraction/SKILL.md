---
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

1. Identify targets.
   - post/page IDs or template IDs to inspect

2. Extract raw data.
   - pull `_elementor_data` as JSON

3. Parse and filter.
   - walk element tree recursively
   - filter by widgetType, elType, or setting keys

4. Format output.
   - structured report: widget type, settings, styles, responsive overrides

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

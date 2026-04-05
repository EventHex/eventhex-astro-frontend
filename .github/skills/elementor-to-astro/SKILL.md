---
name: elementor-to-astro
description: Convert Elementor widget data to Astro components and pages. Handles structure mapping, spacing, typography, animations, responsive visibility, and custom CSS preservation.
---

# Elementor To Astro

## Core (Universal)

### Trigger Scope

Use this skill when converting Elementor content to Astro:
- migrating an Elementor page or section to an Astro component
- translating extracted widget data into `.astro` files
- mapping Elementor layout (sections/columns/containers) to semantic HTML + CSS
- preserving all visual properties in the conversion

### Prerequisites

Run `$elementor-widget-extraction` first to get the source widget data via MCP (`novamira/execute-php`). This skill consumes that extracted data.

### Data Scope

Elementor stores all page content in `_elementor_data` post meta as a JSON tree. Each element has `settings` containing user-configured overrides. Plugin widgets also ship their own base CSS/JS (see § Plugin Base CSS/JS Extraction). Both must be collected for a complete conversion.

### Workflow

1. **Extract source data.**
   - Use `$elementor-widget-extraction` to pull full widget tree with ALL settings.

2. **Extract plugin base CSS/JS.**
   - `_elementor_data` only stores user-configured overrides — plugin widgets ship their own base CSS, JS, and HTML templates that provide default styling.
   - Use the method in § Plugin Base CSS/JS Extraction below to discover and collect these for every third-party widget type on the page.
   - These base styles must be replicated in the Astro output alongside the user-configured settings.

3. **Map structure.**
   - Convert element hierarchy → Astro component tree.

4. **Translate ALL style categories.**
   - Typography, colors, spacing, backgrounds, borders, shadows, transforms — everything.

5. **Handle responsive.**
   - Every `_mobile`/`_tablet` suffixed setting → media query or Tailwind prefix.

6. **Handle interactive states.**
   - Hover effects, active states → CSS `:hover`/`:active`/`:focus`.

7. **Preserve animations and motion.**
   - Entrance animations → Intersection Observer + CSS.
   - Scroll-driven motion → scroll event listeners or CSS scroll-driven animations.
   - Transforms → CSS transform property.

8. **Carry over custom CSS.**
   - Element-level and page-level, replace `selector` placeholder.

9. **Handle visibility.**
   - Device-specific hide → responsive `display: none`.

10. **Verify parity.**
   - Visual comparison at 375px, 768px, 1024px, 1440px.

---

## Settings Extraction Method

### How to discover all settings for any widget

Every Elementor setting follows predictable patterns. Instead of hardcoding mappings, use MCP to **extract all settings from the actual page data**, then convert based on naming patterns.

**Step 1 — Extract all unique setting keys from a page:**

```php
// via novamira/execute-php
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
$all_keys = [];
$walk = function($elements) use (&$walk, &$all_keys) {
    foreach ($elements as $el) {
        if (!empty($el['settings'])) {
            foreach ($el['settings'] as $key => $val) {
                if ($val !== '' && $val !== null && $val !== [])
                    $all_keys[$key] = gettype($val) === 'array' ? json_encode($val) : $val;
            }
        }
        if (!empty($el['elements'])) $walk($el['elements']);
    }
};
$walk($data);
ksort($all_keys);
return $all_keys;
```

**Step 2 — Classify keys by naming pattern:**

Elementor settings follow consistent naming conventions. Match each key to its category:

| Pattern | Category | CSS Target |
|---|---|---|
| `*_typography_font_family`, `*_typography_font_size`, `*_typography_font_weight`, `*_typography_line_height`, `*_typography_letter_spacing`, `*_typography_text_transform` | Typography | `font-*`, `line-height`, `letter-spacing`, `text-transform` |
| `*_color`, `*_color_hover`, `*_background_color` | Colors | `color`, `background-color` |
| `padding`, `margin`, `*_padding`, `*_margin`, `gap`, `*_gap` | Spacing | `padding`, `margin`, `gap` (value format: `{top,right,bottom,left,unit,isLinked}`) |
| `background_background`, `background_color`, `background_image`, `background_gradient_*` | Background | `background` shorthand or parts |
| `border_border`, `border_width`, `border_color`, `border_radius`, `*_border_*` | Border | `border`, `border-radius` |
| `box_shadow_*`, `*_shadow_*` | Shadow | `box-shadow`, `text-shadow` |
| `*_hover`, `*_hover_*`, `hover_animation` | Hover | `:hover` pseudo-class |
| `_transform_*`, `motion_fx_transform_*` | Transform | `transform`, `transform-origin`, `perspective` |
| `motion_fx_*`, `sticky`, `sticky_*` | Motion/Scroll | JS scroll listener, `position: sticky` |
| `_animation`, `animation_duration`, `_animation_delay` | Entrance Anim | Intersection Observer + CSS transition |
| `hide_desktop`, `hide_tablet`, `hide_mobile` | Visibility | responsive `display: none` |
| `custom_css`, `css_classes`, `_element_id` | Custom CSS | literal CSS, class/id attributes |
| `__globals__` | Globals | resolve to Elementor Kit color/font → CSS variable |
| `__dynamic__` | Dynamic Tags | replace with static content or Astro data fetch |
| Any key + `_mobile` / `_tablet` / `_widescreen` suffix | Responsive | wrap in `@media (max-width: ...)` |

**Step 3 — Convert using value format rules:**

| Value Format | Conversion |
|---|---|
| `{size: N, unit: "px"}` | `Npx` (or em, rem, %, vh, vw) |
| `{top, right, bottom, left, unit, isLinked}` | `Tunit Runit Bunit Lunit` (shorthand) |
| `{horizontal, vertical, blur, spread, color, position}` | `box-shadow: H V B S color [inset]` |
| `{url, id}` | Image URL |
| `"classic"` / `"gradient"` (on `*_background`) | solid color vs `linear-gradient(angle, colorA, colorB)` |
| `"yes"` / `""` (on toggles like `motion_fx_*_effect`) | feature enabled/disabled |
| string color `"#RRGGBB"` or `"rgba(r,g,b,a)"` | direct CSS color value — map to design token if match exists |

### Few-Shot Examples

#### Example 1: Heading widget → Astro

**Extracted settings (from MCP):**
```json
{
  "title": "Transform Your Events",
  "header_size": "h2",
  "title_color": "#22272F",
  "typography_typography": "custom",
  "typography_font_family": "Manrope",
  "typography_font_size": {"size": 52, "unit": "px"},
  "typography_font_weight": "600",
  "typography_letter_spacing": {"size": -1.56, "unit": "px"},
  "typography_font_size_tablet": {"size": 38, "unit": "px"},
  "typography_font_size_mobile": {"size": 28, "unit": "px"},
  "_animation": "fadeInUp",
  "animation_duration": "slow",
  "_animation_delay": 200
}
```

**Converted Astro:**
```astro
<h2 class="hero-title animate-on-scroll" data-animation="fadeInUp" data-delay="200" style="--anim-duration: 1000ms">
  Transform Your Events
</h2>

<style>
  .hero-title {
    color: var(--heading-dark);
    font-family: 'Manrope', sans-serif;
    font-size: 52px;
    font-weight: 600;
    letter-spacing: -1.56px;
  }
  @media (max-width: 1024px) { .hero-title { font-size: 38px; } }
  @media (max-width: 767px) { .hero-title { font-size: 28px; } }
</style>
```

#### Example 2: Container with background, border, shadow, hover → Astro

**Extracted settings:**
```json
{
  "content_width": "boxed",
  "boxed_width": {"size": 1280, "unit": "px"},
  "flex_direction": "row",
  "flex_direction_mobile": "column",
  "align_items": "center",
  "gap": {"size": 24, "unit": "px"},
  "padding": {"top": "80", "right": "40", "bottom": "80", "left": "40", "unit": "px", "isLinked": false},
  "padding_mobile": {"top": "40", "right": "16", "bottom": "40", "left": "16", "unit": "px"},
  "background_background": "classic",
  "background_color": "#F5F8FF",
  "border_border": "solid",
  "border_width": {"top": "1", "right": "1", "bottom": "1", "left": "1", "unit": "px", "isLinked": true},
  "border_color": "rgba(172,161,241,0.51)",
  "border_radius": {"top": "24", "right": "24", "bottom": "24", "left": "24", "unit": "px", "isLinked": true},
  "box_shadow_box_shadow_type": "yes",
  "box_shadow_box_shadow": {"horizontal": 0, "vertical": 4, "blur": 30, "spread": 0, "color": "rgba(55,93,251,0.06)"},
  "background_hover_color": "#E5EBFF",
  "hide_mobile": "yes"
}
```

**Converted Astro:**
```astro
<section class="feature-section">
  <div class="feature-container">
    <slot />
  </div>
</section>

<style>
  .feature-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 40px;
    background-color: var(--surface-light);
    border: 1px solid rgba(172, 161, 241, 0.51);
    border-radius: 24px;
    box-shadow: 0 4px 30px 0 rgba(55, 93, 251, 0.06);
    transition: background-color 0.3s ease;
  }
  .feature-section:hover { background-color: var(--surface-blue-tint); }

  @media (max-width: 767px) {
    .feature-section {
      flex-direction: column;
      padding: 40px 16px;
      display: none !important; /* hide_mobile */
    }
  }
</style>
```

### Design Token Reference

When converting colors, map hex values to CSS variables from the project's `design.md`:

| Hex | Variable |
|---|---|
| `#375DFB` | `--brand-blue` |
| `#1C46D4` | `--brand-blue-hover` |
| `#22272F` | `--heading-dark` |
| `#475467` | `--subheading-gray` |
| `#525866` / `#64748B` | `--body-gray` |
| `#F5F8FF` | `--surface-light` |
| `#E5EBFF` | `--surface-blue-tint` |
| `#AFA3FF` | `--accent-purple` |

For RGBA colors or hex values not in this table, keep as-is.

### Globals and Dynamic Tags

```
__globals__: { title_color: "globals/colors?id=primary" }
→ Look up Elementor Global Color from Kit settings → map to CSS variable

__dynamic__: { title: "[elementor-tag id=\"...\" name=\"post-title\"]" }
→ Replace with static content or Astro data fetch
```

### Custom CSS

```
custom_css: "selector .elementor-button-icon { font-size:20px; color: inherit; }"
→ Replace `selector` with component class, drop Elementor-specific prefixes
```

Page-level `custom_css` from `_elementor_page_settings` → global stylesheet.

### Widget Type → HTML Mapping

Use the widget's `widgetType` to determine the root HTML element:

- `heading` → `<h1>`–`<h6>` (per `header_size`)
- `text-editor` → `<div set:html={content}>`
- `image` → `<img>` / Astro `<Image>`
- `button` → `<a>` styled as button
- `icon-list` / `icon-box` → `<ul>` or card layout
- `accordion` / `toggle` → `<details>/<summary>`
- `form` → `<form>` + serverless handler
- `spacer` → margin/padding on sibling (no empty div)
- `global` (templateID) → resolve template content first
- `ucaddon_*`, `tp-*`, `jet-*` → extract plugin base CSS/JS first (see § below)

---

## Plugin Base CSS/JS Extraction

`_elementor_data` settings are **user overrides only**. Every widget plugin ships its own base CSS, JS, and sometimes HTML templates that provide the default visual structure. Without these, the Astro conversion will be missing layout rules, default colors, hover animations, pseudo-element effects, and JS-driven behaviors.

### Method: Discover → Extract → Replicate

**Step 1 — Identify widget types on the page:**

Use MCP to list all unique widget types used on a given page:

```php
// via novamira/execute-php
$data = json_decode(get_post_meta($post_id, '_elementor_data', true), true);
$types = [];
$walk = function($elements) use (&$walk, &$types) {
    foreach ($elements as $el) {
        if (($el['elType'] ?? '') === 'widget') $types[] = $el['widgetType'];
        if (!empty($el['elements'])) $walk($el['elements']);
    }
};
$walk($data);
return array_unique($types);
```

**Step 2 — Get widget class and dependencies:**

For each widget type, resolve its PHP class, registered style/script handles, and source file:

```php
$widget_manager = \Elementor\Plugin::$instance->widgets_manager;
$widget = $widget_manager->get_widget_types($widget_name);
return [
    'class' => get_class($widget),
    'style_depends' => $widget->get_style_depends(),   // registered CSS handles
    'script_depends' => $widget->get_script_depends(), // registered JS handles
    'source_file' => (new ReflectionClass($widget))->getFileName(),
];
```

**Step 3 — Extract base CSS/JS by plugin type:**

The extraction method depends on which plugin the widget comes from:

#### Elementor Core & Pro widgets

CSS lives in pre-built files named after the style handle:

```php
// Resolve handle → file path
$handles = $widget->get_style_depends(); // e.g. ['widget-heading']
foreach ($handles as $handle) {
    // Core: ELEMENTOR_PATH . 'assets/css/' . $handle . '.min.css'
    // Pro:  WP_PLUGIN_DIR . '/elementor-pro/assets/css/' . $handle . '.min.css'
    $path = ELEMENTOR_PATH . 'assets/css/' . $handle . '.min.css';
    if (!file_exists($path)) $path = WP_PLUGIN_DIR . '/elementor-pro/assets/css/' . $handle . '.min.css';
    $css = file_exists($path) ? file_get_contents($path) : null;
}
```

#### Unlimited Elements (`ucaddon_*`) widgets

These are stored as **zip archives** in the uploads cache. Each zip contains the full widget source:

```php
// Strip 'ucaddon_' prefix to get addon name
$addon_name = str_replace('ucaddon_', '', $widget_name); // e.g. 'stacking_cards'
$zip_path = wp_upload_dir()['basedir'] . '/unlimited_elements_cache/' . $addon_name . '.zip';

$zip = new ZipArchive();
$zip->open($zip_path);
$result = [
    'html_tpl'      => $zip->getFromName('html.tpl'),       // outer HTML template
    'html_item_tpl' => $zip->getFromName('html_item.tpl'),  // repeater item template
    'css_tpl'       => $zip->getFromName('css.tpl'),         // CSS with {{variable}} placeholders
    'css_item_tpl'  => $zip->getFromName('css_item.tpl'),    // per-item CSS template
    'js_tpl'        => $zip->getFromName('js.tpl'),          // JS (may use GSAP, ScrollTrigger, etc.)
];

// Also extract static CSS files (base styles not dependent on settings)
for ($i = 0; $i < $zip->numFiles; $i++) {
    $name = $zip->getNameIndex($i);
    if (str_ends_with($name, '.css') && !str_ends_with($name, '.tpl'))
        $result['static_css'][$name] = $zip->getFromIndex($i);
}
$zip->close();
```

UE templates use `{{variable}}` placeholders populated from Elementor control values at render time. The `.tpl` files contain the widget's **base layout, hover effects, pseudo-element animations, and JS behaviors**. Static CSS files contain styles that are always applied regardless of settings.

#### JetEngine / JetSmartFilters (`jet-*`) widgets

Single frontend stylesheet plus widget-specific inline CSS:

```php
// JetEngine uses one shared CSS file
$css = file_get_contents(WP_PLUGIN_DIR . '/jet-engine/assets/css/frontend.css');
```

#### ThePlus Addons (`tp-*`) widgets

Uses dynamic CSS generation. Extract the rendered CSS from a live page:

```php
// ThePlus generates CSS per-widget at render time
// Best approach: capture rendered page CSS via the post's generated stylesheet
$css_file = wp_upload_dir()['basedir'] . '/theplus_cache/' . $post_id . '.css';
// Or extract from <style> tags in rendered output
```

**Step 4 — Replicate in Astro:**

1. **Static CSS** from plugin files → include directly in `<style>` block, replacing Elementor class prefixes with your component classes.
2. **Template CSS** (`.tpl` with `{{placeholders}}`) → resolve placeholders using the extracted widget settings, then include.
3. **JS behaviors** (GSAP, ScrollTrigger, scroll observers) → rewrite as Astro `<script>` using the same library or a lighter equivalent.
4. **HTML templates** → use as reference for the component's markup structure (class names, nesting, conditional elements).

> The extracted templates are the **source of truth** for how the widget looks by default. The `_elementor_data` settings are overrides on top of that baseline.

---

## Breakpoint Reference

| Elementor Breakpoint | Max-Width | Tailwind |
|---|---|---|
| Desktop | (default, no query) | base |
| Laptop | 1366px | `2xl:` |
| Tablet Extra | 1200px | `xl:` |
| Tablet | 1024px | `lg:` / `md:` |
| Mobile Extra | 880px | — |
| Mobile | 767px | `sm:` |

> Elementor uses desktop-first (max-width). If Tailwind uses mobile-first, invert the breakpoint logic.

---

## Astro Component Template

```astro
---
// Section: [Name]
// Source: Elementor page [ID], element [element_id]
---

<section class="section-name">
  <div class="container">
    <!-- Converted content -->
  </div>
</section>

<style>
  .section-name {
    /* Layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    overflow: hidden;

    /* Spacing */
    padding: 100px 40px 0 40px;

    /* Background */
    background-color: var(--surface-light);

    /* Border */
    border: 1px solid rgba(172, 161, 241, 0.51);
    border-radius: 42px;

    /* Shadow */
    box-shadow: 0 4px 30px 0 rgba(55, 93, 251, 0.06);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .section-name {
      padding: 80px 20px 40px 20px;
      flex-direction: column;
    }
    .container { max-width: 960px; }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .section-name {
      padding: 60px 15px 30px 15px;
    }
  }

  /* Hover */
  .section-name:hover {
    background-color: var(--brand-blue-hover);
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
</style>
```

---

## Guardrails

- **Never drop settings** — every non-empty setting in the extracted data represents a visual intention. Account for it or explicitly note it as not applicable.
- **Always check responsive** — any setting can have `_mobile` / `_tablet` variants. Do not convert desktop-only.
- **Preserve spacing exactly** — padding/margin differences break visual fidelity.
- **Preserve background rhythm** — section backgrounds (light/dark alternation) define the page's tonal identity.
- **Carry hover states** — color changes, scale, underlines on hover must transfer.
- **Map transforms fully** — scale, rotate, skew, 3D perspective — all dimensions.
- **Scroll effects need JS** — motion_fx settings can't be CSS-only; use scroll listeners.
- **Custom CSS verbatim first** — bring it over, replace `selector`, then refactor.
- **Dynamic tags → static or data** — Elementor dynamic tags (`__dynamic__`) don't work in Astro; replace with static content or frontmatter.
- **Global widgets → resolve** — follow `templateID` to get actual content before converting.
- **Respect `prefers-reduced-motion`** — animations must degrade gracefully.
- **Plugin widgets need base CSS extraction** — `_elementor_data` is overrides only. Always extract plugin base CSS/JS/templates via MCP (§ Plugin Base CSS/JS Extraction) before converting third-party widgets.

---

## Verification Checklist

After converting each section, verify ALL categories:

- [ ] **Structure:** semantic HTML matches Elementor layout (flex direction, nesting, container widths)
- [ ] **Typography:** font family, size, weight, line-height, letter-spacing, word-spacing — at all breakpoints
- [ ] **Colors:** mapped to design tokens, no hardcoded hex unless no token match
- [ ] **Spacing:** padding and margin match at desktop, tablet, mobile — including gap
- [ ] **Backgrounds:** solid, gradient, image, overlay — all preserved with correct position/size
- [ ] **Borders:** style, width, color, radius — at all element levels
- [ ] **Shadows:** box-shadow values match exactly (h/v/blur/spread/color/position)
- [ ] **Hover states:** background, color, transform changes on hover preserved
- [ ] **Transforms:** scale, rotate (3D), skew, perspective — with correct origin
- [ ] **Motion/Scroll:** parallax, opacity fade, scale on scroll — functional
- [ ] **Entrance animations:** correct name, duration, delay — with reduced-motion fallback
- [ ] **Responsive visibility:** hidden elements hidden at correct breakpoints
- [ ] **Custom CSS:** element and page level carried over, `selector` replaced
- [ ] **Dynamic content:** resolved to static or data source
- [ ] **Images:** src, alt, lazy loading, object-fit
- [ ] **Links:** all URLs and CTAs functional
- [ ] **Plugin base styles:** third-party widget CSS/JS extracted and included (not just user overrides)
- [ ] **Accessibility:** heading hierarchy, alt texts, contrast, reduced-motion

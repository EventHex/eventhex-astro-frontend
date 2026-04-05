---
name: elementor-to-astro
description: Convert Elementor subtree handoff bundles into Astro components with explicit schema checks, breakpoint normalization, plugin asset support tiers, and repo-fit guardrails. Use when migrating one Elementor container or widget at a time into `.astro` files.
---

# Elementor To Astro

## Core (Universal)

### Trigger Scope

Use this skill when converting Elementor output into Astro in a controlled migration workflow:
- converting one container/section subtree into a `.astro` component
- composing several verified components into a page
- preserving page-level CSS, custom CSS, and third-party widget behaviors
- mapping Elementor settings into semantic HTML, scoped CSS, and minimal client-side JS
- producing a gap report when fidelity is blocked by missing assets or unsupported runtime behavior

### Hard Prerequisite

Run `$elementor-widget-extraction` first. This skill only accepts a valid `handoff-bundle` or equivalent subtree-scoped payload.

Reject the conversion request until these are available:
- `contract_version`
- runtime breakpoints
- subtree root with `raw_settings`
- page assets or an explicit statement that page assets are irrelevant
- plugin asset discovery for every third-party widget in the subtree, or warnings explaining what is unresolved

### Non-Goals

- Do not convert an entire large page in a single pass.
- Do not convert from summary buckets alone.
- Do not invent missing plugin behavior.
- Do not claim repo integration if the workspace has no Astro target yet.

## Preflight Gates

Before generating any `.astro` file, perform these checks.

### 1. Repo-Fit Gate

Confirm whether the workspace is an Astro target:
- `.astro` files exist, or
- Astro config/package dependency exists, or
- the user explicitly wants Astro draft output regardless of current repo stack

If none of the above is true:
- switch to `draft-only` mode
- generate migration-ready `.astro` files without claiming they are integrated or build-verified
- keep framework assumptions minimal

### 2. Contract Gate

Verify the input payload shape matches the handoff contract. If `raw_settings`, breakpoints, global references, or plugin assets are missing, stop and request the missing extraction mode instead of guessing.

### 3. Scope Gate

Work one top-level container/section at a time:
- `page-skeleton` to plan
- `handoff-bundle` for one subtree
- convert
- verify
- move to the next subtree

## Input Contract

Expected input bundle:

```json
{
  "contract_version": "1.0",
  "mode": "handoff-bundle",
  "source": {},
  "breakpoints": {},
  "page_assets": {},
  "elements": [],
  "plugin_assets": [],
  "warnings": []
}
```

The converter must treat these fields differently:

- `raw_settings`
  - source of truth for fidelity

- `normalized`
  - convenience only; never use it to justify dropping uncategorized keys

- `page_assets`
  - required for page-level custom CSS, kit colors/fonts, and generated stylesheets

- `plugin_assets`
  - required for third-party widget base behavior

- `warnings`
  - unresolved inputs that must be surfaced in the output or gap report

## Conversion Workflow

1. Validate the handoff bundle.
   - stop on missing raw settings, unresolved global widgets, or absent breakpoints

2. Resolve destination mode.
   - `integrated-component` if Astro target exists
   - `draft-only` if the repo is not yet an Astro app

3. Map structure first.
   - convert sections/containers to semantic wrappers
   - preserve order, nesting, and visibility rules
   - avoid empty wrappers unless Elementor behavior requires them

4. Map settings from `raw_settings`.
   - typography, spacing, layout, backgrounds, borders, shadows, transforms, motion, and visibility
   - include uncategorized keys in a review note rather than silently discarding them

5. Apply page-level and element-level CSS.
   - port `custom_css` by replacing `selector` with the component root selector
   - merge page-level custom CSS only when it affects the subtree being migrated

6. Replicate plugin base behavior by support tier.
   - see Support Tiers below

7. Add interaction logic only when required.
   - entrance animations, scroll effects, sliders, or other JS behaviors should be implemented minimally
   - always provide a reduced-motion fallback

8. Emit one of two outcomes.
   - verified component draft
   - explicit gap report when unresolved fidelity remains

## Breakpoints

Do not hardcode Tailwind or Elementor defaults when the extractor already supplied runtime breakpoints.

### Rules

- Use extractor `breakpoints` as source of truth.
- Generate plain CSS media queries by default.
- Only translate to Tailwind utilities if the target repo already uses Tailwind and the user wants that style.
- If the repo has its own design tokens or breakpoint abstractions, map into those instead of creating a second system.

### Normalized Output Pattern

```astro
<style>
  .section-root {
    padding: 80px 40px;
  }

  @media (max-width: 1024px) {
    .section-root {
      padding: 56px 24px;
    }
  }

  @media (max-width: 767px) {
    .section-root {
      padding: 40px 16px;
    }
  }
</style>
```

## Design-System Mapping

Use the local project as the design-system authority.

### Token Source Priority

1. existing Astro/token system in the repo
2. local design spec such as `design.md`
3. resolved Elementor globals/kit values
4. literal CSS values only when no project token exists

### Rules

- Do not collapse multiple source colors into a token unless the project already defines that equivalence.
- Preserve project-specific visual rules such as typography roles, soft-edge cards, and interaction style.
- If the design spec conflicts with Elementor output, note the tradeoff explicitly instead of silently normalizing it away.

## Support Tiers For Third-Party Widgets

Do not treat all widget plugins as equally portable.

| Support Tier | Meaning | Conversion Rule |
|---|---|---|
| `native-simple` | core/pro or simple widget with straightforward markup/CSS | convert directly from raw settings plus small base CSS |
| `shared-asset` | plugin widget depends on shared frontend CSS | import or inline only the relevant selectors |
| `template-driven` | widget uses plugin templates with placeholders | reproduce markup from template and resolve placeholders from settings |
| `generated-css` | plugin emits runtime CSS per page | capture generated CSS refs and port only subtree-relevant rules |
| `js-heavy` | widget depends on complex JS runtime | convert only with explicit asset extraction; otherwise emit gap report |
| `server-rendered` | widget output depends on runtime queries or PHP rendering | do not fake parity; report unresolved server behavior |

If a third-party widget is unresolved, stop claiming full fidelity.

## Globals, Dynamic Tags, and Reusable Templates

- Resolve global widgets before conversion. Do not leave `templateID` placeholders in the final component.
- Replace Elementor dynamic tags with static content, Astro props, or frontmatter data-fetching, depending on the target use case.
- If the source behavior depends on WordPress runtime data and the Astro site lacks that data source, output a gap report.

## Output Modes

Choose one explicit output mode per run.

| Mode | Use When | Deliverable |
|---|---|---|
| `component-draft` | subtree converted but not integrated | single `.astro` component with local styles |
| `integrated-component` | repo has Astro target and placement is known | `.astro` component plus parent wiring |
| `page-assembly` | several verified subtree components already exist | composed Astro page |
| `gap-report` | plugin/runtime behavior is unresolved | list of blockers, missing assets, and next extraction steps |

## Guardrails

- Never convert directly from `page-skeleton`; it is planning input only.
- Never ignore `warnings` from the extraction bundle.
- Never claim full fidelity if third-party assets or page-level CSS are unresolved.
- Never guess responsive behavior without the actual breakpoint map.
- Never introduce a new token system if the repo already has one.
- Never say the output is integrated when the repo has no Astro target or build validation.

## Verification

Validate each converted subtree before moving on.

Minimum checks:
- structure and nesting parity
- typography and spacing at extracted breakpoints
- background, border, and shadow parity
- visibility and responsive order
- custom CSS selector replacement
- plugin asset coverage
- reduced-motion fallback for animated behavior
- unresolved items surfaced as gaps, not hidden assumptions

Use [contracts/conversion-gates.md](contracts/conversion-gates.md) as the preflight and verification checklist.
### Container Width & Layout Parity
When mapping raw settings onto Astro layout and CSS:
- Check if `content_width` is set to `full` (100% viewport width) or `boxed` (typically `max-width: 1200px` or local token equivalent).
- Apply exact `padding` and `margin` from the `raw_settings`, accounting for responsive breakpoints.
- Ensure that inner containers that are meant to be bounded (boxed) have `margin: 0 auto;` and the correct `max-width` limit.
- If a section stretches background 100% but the content is boxed, structure your HTML as a full-width `.section-wrapper` with a box `.section-inner`.

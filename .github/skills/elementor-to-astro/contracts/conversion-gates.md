# Conversion Gates

Use this checklist before claiming a subtree conversion is complete.

## Preflight

- The workspace has an Astro target, or the output is explicitly marked `draft-only`.
- The input payload is a `handoff-bundle` with `contract_version`.
- The subtree root includes `raw_settings`.
- Breakpoints came from extraction, not hardcoded assumptions.
- Global widgets and `templateID` references were resolved or explicitly flagged.
- Page-level CSS/custom CSS relevance was checked.
- Third-party widget assets were classified by support tier.

## Fidelity

- Semantic structure matches the Elementor subtree.
- No non-empty source setting was silently dropped.
- Responsive behavior follows extracted breakpoint data.
- Design tokens came from the repo or local design spec before falling back to literals.
- Element-level `custom_css` replaced `selector` correctly.
- Page-level CSS was applied only where relevant.
- Motion honors `prefers-reduced-motion`.

## Delivery

- Output mode is explicit: `component-draft`, `integrated-component`, `page-assembly`, or `gap-report`.
- Unresolved third-party or server-rendered behavior is documented as a gap.
- The result does not claim build verification unless the workspace actually contains an Astro target and validation was run.
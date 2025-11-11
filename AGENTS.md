# Repository Guidelines

## Project Structure & Module Organization
The root contains exported static pages: `index.html` plus one HTML file per topic or city (slugged, lowercase, hyphenated, no extension such as `grossesse-et-bebe`). Shared design tokens live under `assets/vendor/css/` (vendored upstream bundles), while per-page overrides stay in `styles/pages/<siteId>/<timestamp>/containers-specific-styles.css` and theme tweaks in `site/8f65d3rbhmye/styles/<themeId>/dynamic-styles.css`. Keep media references external as in existing markup; local assets should go beside the page that references them.

## Build, Test, and Development Commands
This repo is directly deployable; no bundler is required. Use `python3 -m http.server 8080` (or `npx serve .`) from the repo root to preview URLs like `http://localhost:8080/grossesse-et-bebe`. Run `npx htmlhint path/to/page` to catch structural regressions and `npx stylelint styles/**/*.css` if you edit CSS.

## Coding Style & Naming Conventions
HTML is formatted with two-space indentation and long-form attributes; keep inline scripts minimal and prefer data attributes. Continue the slug pattern for new pages: lowercase, accents removed, hyphen between words. CSS files are minified by the exporter—if editing manually, work in a prettified scratch copy but commit the minified version to stay consistent. Reuse container class names such as `.container_2672185_inner` rather than inventing new IDs unless the platform requires it.

## Testing Guidelines
Because there is no automated suite, perform manual regression passes on desktop (≥1200px) and mobile (~375px). Verify Matomo tracking snippets remain untouched and that critical forms/links function. When changing styles, diff the affected CSS with `git diff` and check for unintended global selectors. Document any manual test steps in the PR description.

## Commit & Pull Request Guidelines
History currently shows a single `Original import` commit, so please keep messages short, imperative, and scoped to the modified page (`Update grossesse et bebe hero copy`). Group related edits into one commit to simplify rollbacks. PRs should describe the motivation, list touched slugs/asset paths, include before/after screenshots for visual tweaks, and mention any manual QA performed. Link to external issue IDs when applicable to keep traceability.

## Content & Asset Tips
Prefer editing textual content directly in the static HTML files; retain metadata blocks (canonical tags, OpenGraph, Matomo). For new imagery, host on the existing CDN when possible; if you must add local files, place them under `site/8f65d3rbhmye` and reference them with relative URLs (`site/...`, `styles/...`) so pages remain portable across environments without relying on `<base href>`.

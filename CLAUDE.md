# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Note on Documentation

This file complements the README.md and avoids duplicating information to prevent competing sources of truth and maintenance overhead. Refer to README.md for basic setup, development commands, and project overview.

## Architecture

- **App Router**: Uses Next.js 15 App Router with components in `src/app/components/`
- **TypeScript**: Path alias `@/*` maps to `./src/*`
- **Component Structure**: Single-page app with About and Projects sections

## Styling System

Custom TailwindCSS component classes defined in `globals.css`:

- **Layouts**: `.section-container`, `.section-container-wide`, `.hero-section`
- **Typography**: `.hero-title`, `.section-title`, `.gradient-text`, `.body-text`
- **Interactive**: `.btn-primary`, `.btn-secondary`, `.btn-small`
- **Cards**: `.card`, `.card-header`, `.card-content`
- **Grids**: `.grid-about`, `.grid-projects`
- **Tags**: `.skill-tag-blue/green/purple/pink`, `.tech-tag`

Always use these predefined classes instead of inline Tailwind utilities for consistency.

## Development Notes

- Dark mode support via CSS variables and `prefers-color-scheme`
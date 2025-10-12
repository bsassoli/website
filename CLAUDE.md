# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual Astro-based website for a creative agency and personal portfolio business called "Folex". The site uses Astro 5.11.0 with React integration, TailwindCSS, and supports multilingual content (English/French).

## Key Architecture

### Content Management
- **Content Collections**: Defined in `src/content.config.ts` with schemas for blog, services, portfolio, team, and pages
- **Multilingual Support**: Content stored in `src/content/*/english/` and `src/content/*/french/` and `src/content/*/it/` directories
- **Configuration**: Site settings in `src/config/config.toml`, parsed by `parseTomlToJson` utility
- **Content Types**: 
  - Blog posts (MDX) with category/tag support
  - Portfolio projects with image galleries
  - Services with custom layouts
  - Team member profiles with social links

### Component Structure
- **Layouts**: Main layouts in `src/layouts/` with modular components
- **Sections**: Reusable page sections in `src/layouts/components/sections/`
- **Widgets**: Interactive components in `src/layouts/components/widgets/`
- **Shortcodes**: Content embeds in `src/layouts/shortcodes/` (auto-imported via astro-auto-import)

### Styling & Assets
- **TailwindCSS**: Primary styling framework with custom plugins
- **Animations**: AOS (Animate On Scroll) and GSAP for animations
- **Fonts**: Custom font loading via astro-font with self-hosted fonts
- **Images**: Optimized images with Sharp, stored in `src/assets/images/`

## Development Commands

```bash
# Development
yarn dev                    # Start dev server

# Building
yarn build                  # Build for production
yarn preview               # Build and preview locally
yarn astro-check           # Type checking

# Testing
yarn test                  # Run Jest tests in watch mode

# Content Management
yarn remove-multilingual   # Remove multilingual content files
yarn remove-draft-from-sitemap  # Remove draft pages from sitemap
yarn generate-favicons    # Generate favicon set

# Formatting
yarn format               # Format code with Prettier
```

## Configuration Files

- `src/config/config.toml` - Main site configuration (SEO, multilingual settings, contact info)
- `src/config/language.json` - Available languages configuration
- `src/config/menu.en.json` / `src/config/menu.fr.json` - Navigation menus
- `src/config/social.json` - Social media links
- `astro.config.mjs` - Astro configuration with integrations and i18n setup

## Path Aliases

```typescript
"@/components/*": "./src/layouts/components/*"
"@/shortcodes/*": "./src/layouts/shortcodes/*"  
"@/helpers/*": "./src/layouts/helpers/*"
"@/*": "./src/*"
```

## Content Creation

### Adding Blog Posts
Create `.mdx` files in `src/content/blog/english/` and `src/content/blog/french/` with frontmatter:
```yaml
title: "Post Title"
description: "Post description"
date: 2024-01-01
categories: ["category1"]
tags: ["tag1", "tag2"]
image: "/images/blog/image.jpg"
draft: false
```

### Adding Portfolio Items
Create `.mdx` files in `src/content/portfolio/*/` with:
```yaml
title: "Project Title"
images: ["/images/portfolio/1.jpg", "/images/portfolio/2.jpg"]
information:
  - label: "Client"
    value: "Client Name"
  - label: "Year"
    value: "2024"
```

## Form Handling

Forms use the `FormHandle.ts` utility with support for:
- FormSubmit.co (default)
- Formspree 
- Netlify Forms

Configuration in `config.toml`:
```toml
contactFormAction = "https://formsubmit.co/your@email.com"
contactFormProvider = "formsubmit.co"
```

## Multilingual Setup

- Enable/disable in `config.toml`: `settings.multilingual.enable = true`
- Default language: `settings.multilingual.defaultLanguage = "en"`
- Disable specific languages: `settings.multilingual.disableLanguages = ["fr"]`
- After disabling multilingual, run `yarn remove-multilingual`

## Testing

Uses Jest with ts-jest preset. Test files in `src/__tests__/` with `.test.ts` extension. Configuration in `jest.config.ts`.

## Key Utilities

- `parseTomlToJson.ts` - Parse TOML config files
- `textConverter.ts` - Markdown processing utilities
- `FormHandle.ts` - Form submission handling
- `languageParser.ts` - i18n utilities
- `sortFunctions.ts` - Content sorting helpers
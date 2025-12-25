# Paulo's Personal Blog - Claude Code Configuration

## Project Overview

A Next.js 15 personal blog and portfolio website for Paulo Obayuwana, a Cloud Developer and AWS Solutions Architect. The blog is powered by Headless Hashnode CMS and showcases GitHub projects via the GitHub GraphQL API.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with Typography plugin
- **Language**: TypeScript (strict mode)
- **Data**: GraphQL (Hashnode CMS + GitHub API)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** – Review the modified components/pages
2. **Navigate to affected pages** – Use `mcp_playwright_browser_navigate` to visit each changed view
3. **Verify design compliance** – Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** – Ensure the change fulfills the user’s specific request
5. **Check acceptance criteria** – Review any provided context files or requirements
6. **Capture evidence** – Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** – Run `mcp_playwright_browser_console_messages`

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing accessibility and responsiveness testing


## Architecture

```
app/
├── (overview)/          # Route group for pages with standard layout
│   ├── about/           # About page
│   ├── blogs/           # Blog listing, series, tags
│   └── projects/        # Projects listing
├── (posts)/             # Route group for individual content pages
│   ├── blogs/[slug]/    # Individual blog posts
│   └── projects/[slug]/ # Individual project pages
├── actions/             # Server actions for data fetching
├── components/          # React components
├── lib/                 # GraphQL schemas, profile data
├── utils/               # Utility functions (SEO, rendering, etc.)
└── api/                 # API routes (OG images)
@types/                  # TypeScript type definitions
```

## Agentic Workflows

### Before Making Changes
1. Read the target file(s) to understand current implementation
2. Check if changes affect related components or data fetching
3. Consider GraphQL schema implications for data changes
4. Make minimal, focused changes

### Validation Steps
After any code change, run:
```bash
pnpm lint          # ESLint checks
pnpm build         # Full production build (catches type errors)
```

For local testing:
```bash
pnpm dev           # Starts dev server with GraphQL codegen watchers
```

### Safe to Modify
- `app/components/` - UI components
- `app/(overview)/` - Page layouts and routes
- `app/(posts)/` - Individual content pages
- `app/lib/profile.json` - Personal information and links
- `app/utils/` - Utility functions

### Requires Caution
- `app/lib/graphql/` - GraphQL queries/fragments (affects data fetching)
- `app/schema/` - Generated GraphQL types (auto-generated, don't edit directly)
- `app/actions/` - Server actions (affects data flow)

### Do Not Modify Without Permission
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind configuration
- `codegen-*.yml` - GraphQL codegen configuration
- `.env*` files - Environment variables
- `package.json` - Dependencies

## Common Commands

```bash
pnpm dev              # Start development (includes GraphQL codegen watchers)
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm codegen-hashnode # Regenerate Hashnode GraphQL types
pnpm codegen-github   # Regenerate GitHub GraphQL types
```

## Coding Standards

### TypeScript
- Use strict mode - avoid `any` types
- Prefer interfaces over type aliases for object shapes
- Use existing types from `@types/` and generated schemas

### Components
- PascalCase for component files: `BlogCard.tsx`
- Functional components with TypeScript props
- Use `classnames` package for conditional classes

### Data Fetching
- Use server actions in `app/actions/` for GraphQL queries
- Follow existing patterns for caching and revalidation
- Handle loading and error states appropriately

### Styling
- Use Tailwind CSS utility classes
- Follow existing class ordering patterns
- Dark mode support via existing theme system

## Key Files Reference

- **Personal Info**: `app/lib/profile.json` - Name, bio, social links, skills
- **Type Definitions**: `@types/` - Shared TypeScript interfaces
- **GraphQL Queries**: `app/lib/graphql/` - Hashnode and GitHub queries
- **Generated Types**: `app/schema/` - Auto-generated from GraphQL

## Environment Variables

Required for local development (see README.md):
- `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` - Hashnode blog host
- `GITHUB_PERSONAL_ACCESS_TOKEN` - GitHub API access
- `HOST_URL` - Site URL for metadata

## Before Committing

1. Ensure `pnpm lint` passes with no errors
2. Ensure `pnpm build` completes successfully
3. Test changes in dev server if UI-related
4. Write clear commit messages describing the change

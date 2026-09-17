# AGENTS.md

## Project overview

Zack Wagner's personal resume/portfolio site. Static site built with [Astro](https://astro.build/), deployed via GitHub Pages (custom domain via `CNAME`).

## Setup

```sh
npm install
```

Requires Node >= 22.12.0.

## Build / Run

```sh
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Test

No automated test suite currently exists.

## Repository structure

- `src/` — Astro pages/components
- `public/` — static assets served as-is
- `astro.config.mjs` — Astro configuration
- `CNAME` — GitHub Pages custom domain

## Commit and PR conventions

- Commit messages and PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`, `build:`, `perf:`, `style:`, `revert:`), optionally with a scope, e.g. `fix(api): handle null response`.
- This repo squash-merges pull requests only; the PR title becomes the final commit message on `main`.
- A "Conventional Commits" CI check enforces this on both PR titles and direct-push commit messages.
- Branch protection on `main`: no force-pushes, no branch deletion, required status checks must pass.

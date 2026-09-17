# Contributing to zackwag.github.io

This is Zack Wagner's personal resume/portfolio site, built with [Astro](https://astro.build/). It's not really designed for outside contributions, but typo fixes and bug reports are welcome.

## Getting started

```sh
git clone https://github.com/zackwag/zackwag.github.io.git
cd zackwag.github.io
npm install
npm run dev
```

Requires Node >= 22.12.0.

## Development

```sh
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview the production build
```

Source lives in `src/`; static assets in `public/`. This is a static site with no test suite.

## Commit messages and pull requests

This repo uses [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.). Pull requests are squash-merged, and the **PR title** becomes the commit on `main` — so PR titles must follow this format. This is enforced automatically by the "Conventional Commits" check.

Direct pushes to `main` are allowed but must also use a Conventional Commits-formatted commit message (validated by the same check).

## Opening a pull request

1. Fork the repo and create a branch off `main`.
2. Make your changes.
3. Open a pull request with a Conventional Commits-formatted title.
4. Wait for CI to pass — required checks must be green before merge.

## Reporting issues

Use [GitHub Issues](../../issues) for bugs and feature requests.

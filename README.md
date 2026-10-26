# Skill Finder Demo

This project demonstrates how to integrate the `vercel-labs/skills` CLI into a local project.

## What's included

- `package.json` with scripts for searching skills
- `scripts/skill-search.mjs` wrapper for `npx skills find`
- quick examples for interactive and keyword-based skill discovery

## Setup

Make sure Node.js 22.20 or later is installed.

```bash
npm install
```

Then run:

```bash
npm run skills:find -- typescript
```

or:

```bash
npm run skills:find:all
```

## Direct CLI usage

```bash
npx skills find
npx skills find typescript
npx skills add vercel-labs/agent-skills --list
npx skills add vercel-labs/agent-skills --skill web-design-guidelines -a claude-code
```

## Notes

This project wraps the official `skills` CLI from `vercel-labs/skills` so you can add skill discovery to your own workflow without hardcoding the commands into your shell.

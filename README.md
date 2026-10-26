# Skill Finder Demo

This project demonstrates how to integrate the `vercel-labs/skills` CLI into a local project.

## Automatic search workflow

You can now search for skills by plain-language query:

```bash
npm run skills:auto -- "android app reverse engineering"
npm run skills:auto -- "security review"
npm run skills:auto -- "typescript api architecture"
```

This wrapper calls:

```bash
npx skills find "<your query>"
```

and prints the relevant skill matches for your task.

## Search without interaction

```bash
npm run skills:find -- typescript
npm run skills:find:all
```

## Direct CLI usage

```bash
npx skills find
npx skills find typescript
npx skills add vercel-labs/agent-skills --list
npx skills add vercel-labs/agent-skills --skill web-design-guidelines -a claude-code
```

## Best-match helper

If you want a human-friendly workflow for likely candidates:

```bash
npm run skills:auto:best -- "android app reverse engineering"
```

This helps you identify the most relevant skill and then install it with a command like:

```bash
npx skills add <owner/repo> --skill <skill-name> -a claude-code
```

## Notes

This project wraps the official `skills` CLI from `vercel-labs/skills` so you can add skill discovery to your own workflow without hardcoding the commands into your shell.

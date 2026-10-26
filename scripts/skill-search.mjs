#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: npm run skills:find -- <keyword>');
  console.log('Example: npm run skills:find -- typescript');
  process.exit(1);
}

const result = spawnSync('npx', ['skills', 'find', ...args], {
  stdio: 'inherit',
  shell: true,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);

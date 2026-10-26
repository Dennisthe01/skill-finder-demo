#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
let bestMode = false;

const filteredArgs = args.filter((arg) => {
  if (arg === '--best') {
    bestMode = true;
    return false;
  }
  return true;
});

if (filteredArgs.length === 0) {
  console.log('Usage: npm run skills:auto -- "<your skill idea>"');
  console.log('Examples:');
  console.log('  npm run skills:auto -- "android app reverse engineering"');
  console.log('  npm run skills:auto -- "security review"');
  console.log('  npm run skills:auto --best "android app reverse engineering"');
  process.exit(1);
}

const query = filteredArgs.join(' ');

console.log(`Searching skills for: "${query}"`);

const result = spawnSync('npx', ['skills', 'find', ...filteredArgs], {
  stdio: 'inherit',
  shell: true,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

if (bestMode) {
  console.log('\nBest-match mode is enabled.');
  console.log('Tip: use the result list to choose the most relevant skill and install it with:');
  console.log(`npx skills add <owner/repo> --skill <skill-name> -a claude-code`);
}

process.exit(result.status ?? 1);

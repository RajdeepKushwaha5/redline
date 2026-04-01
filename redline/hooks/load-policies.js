#!/usr/bin/env node
// load-policies.js — Pre-query hook
// Loads all .md files from policies/ directory into the agent context.

const fs = require('fs');
const path = require('path');

const POLICY_DIR = 'policies';

if (!fs.existsSync(POLICY_DIR)) {
  process.stderr.write('Warning: policies/ directory not found\n');
  process.exit(0);
}

const files = fs.readdirSync(POLICY_DIR).filter(f => f.endsWith('.md'));

console.log('=== Active Policies ===');
for (const filename of files) {
  const filepath = path.join(POLICY_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  const match = content.match(/\*\*Version:\*\*\s*([^\n]+)/m);
  const version = match ? match[1].trim() : 'unknown';
  console.log(`  - ${filename} (v${version})`);
}
console.log('=======================');

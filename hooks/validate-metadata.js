#!/usr/bin/env node
// validate-metadata.js — Post-write hook
// Validates that written policy files contain required metadata headers.

const fs = require('fs');

const FILE = process.argv[2];

if (!FILE || !FILE.startsWith('policies/') || !FILE.endsWith('.md')) {
  process.exit(0);
}

if (!fs.existsSync(FILE)) {
  process.exit(0);
}

const content = fs.readFileSync(FILE, 'utf8');

const REQUIRED_FIELDS = ['Version:', 'Effective Date:', 'Owner:', 'Approved By:'];
const missing = REQUIRED_FIELDS.filter(field => !content.includes(field));

if (missing.length > 0) {
  process.stderr.write(`ERROR: Policy ${FILE} is missing required metadata fields:\n`);
  for (const m of missing) {
    process.stderr.write(`  - ${m}\n`);
  }
  process.exit(1);
}

console.log(`OK: ${FILE} metadata validated`);

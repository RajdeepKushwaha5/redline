#!/usr/bin/env node
// log-error.js — On-error hook
// Appends error details to the audit log.

const fs = require('fs');
const path = require('path');

const MEMORY_FILE = 'memory/MEMORY.md';
const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const errorMsg = process.argv[2] || 'Unknown error';

const memDir = path.dirname(MEMORY_FILE);
if (!fs.existsSync(memDir)) {
  fs.mkdirSync(memDir, { recursive: true });
}

if (!fs.existsSync(MEMORY_FILE)) {
  fs.writeFileSync(MEMORY_FILE, '# Audit Log\n\n');
}

const entry = `
---

## Error Entry — ${timestamp}

| Field       | Value                |
|-------------|----------------------|
| **Type**    | ERROR                |
| **Time**    | ${timestamp}           |
| **Message** | ${errorMsg}           |
| **Source**  | on_error hook        |
`;

fs.appendFileSync(MEMORY_FILE, entry);
console.log(`Error logged to ${MEMORY_FILE}`);

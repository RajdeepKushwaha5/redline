#!/usr/bin/env node
// log-error.js — on_error hook
// Appends error details to the audit log.
// Follows gitagent Hook Script Protocol: JSON stdin → JSON stdout.

const fs = require('fs');
const path = require('path');

const MEMORY_FILE = 'memory/MEMORY.md';

let inputData = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { inputData += chunk; });
process.stdin.on('end', () => {
  let event = {};
  try { event = JSON.parse(inputData); } catch (_) {}

  const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  const errorData = (event.data && event.data.error) || {};
  const errorMsg = (typeof errorData === 'string' ? errorData : errorData.message) || process.argv[2] || 'Unknown error';
  const agent = errorData.agent || (event.session && event.session.agent) || 'unknown';

  const memDir = path.dirname(MEMORY_FILE);
  if (!fs.existsSync(memDir)) {
    fs.mkdirSync(memDir, { recursive: true });
  }

  if (!fs.existsSync(MEMORY_FILE)) {
    fs.writeFileSync(MEMORY_FILE, '# Redline Audit Log\n\n');
  }

  const entry = `\n---\n\n### Error Entry — ${timestamp}\n\n| Field | Value |\n|-------|-------|\n| **Type** | ERROR |\n| **Time** | ${timestamp} |\n| **Agent** | ${agent} |\n| **Message** | ${errorMsg} |\n| **Source** | on_error hook |\n`;

  fs.appendFileSync(MEMORY_FILE, entry);

  const output = {
    action: 'allow',
    modifications: null,
    audit: {
      logged: true,
      log_id: `error_${Date.now()}`,
      note: `Error logged to ${MEMORY_FILE}`
    }
  };

  process.stdout.write(JSON.stringify(output));
});

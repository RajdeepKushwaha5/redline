#!/usr/bin/env node
// load-policies.js — on_session_start hook
// Loads all .md files from policies/ directory into the agent context.
// Follows gitagent Hook Script Protocol: JSON stdin → JSON stdout.

const fs = require('fs');
const path = require('path');

const POLICY_DIR = 'policies';

let inputData = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { inputData += chunk; });
process.stdin.on('end', () => {
  const policies = [];

  if (!fs.existsSync(POLICY_DIR)) {
    const output = {
      action: 'allow',
      modifications: null,
      audit: { logged: true, note: 'policies/ directory not found' }
    };
    process.stdout.write(JSON.stringify(output));
    return;
  }

  const files = fs.readdirSync(POLICY_DIR).filter(f => f.endsWith('.md'));

  for (const filename of files) {
    const filepath = path.join(POLICY_DIR, filename);
    const content = fs.readFileSync(filepath, 'utf8');
    const match = content.match(/\*\*Version:\*\*\s*([^\n]+)/m);
    const version = match ? match[1].trim() : 'unknown';
    policies.push({ file: filename, version });
  }

  const output = {
    action: 'allow',
    modifications: {
      context: {
        active_policies: policies,
        policy_count: policies.length
      }
    },
    audit: {
      logged: true,
      note: `Loaded ${policies.length} active policies into context`
    }
  };

  process.stdout.write(JSON.stringify(output));
});

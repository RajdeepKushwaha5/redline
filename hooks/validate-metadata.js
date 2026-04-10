#!/usr/bin/env node
// validate-metadata.js — pre_tool_use hook
// Validates that written policy files contain required metadata headers.
// Follows gitagent Hook Script Protocol: JSON stdin → JSON stdout.

const fs = require('fs');

let inputData = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { inputData += chunk; });
process.stdin.on('end', () => {
  let event = {};
  try { event = JSON.parse(inputData); } catch (_) {}

  // Extract file path and content from tool arguments
  // Support both event.data.arguments (gitagent runtime) and event.context (manual test)
  const toolArgs = (event.data && event.data.arguments) || (event.context && event.context.args) || {};
  const FILE = toolArgs.path || toolArgs.file || process.argv[2];
  const providedContent = toolArgs.content || null;

  // Only validate writes to policy files
  if (!FILE || !FILE.startsWith('policies/') || !FILE.endsWith('.md')) {
    process.stdout.write(JSON.stringify({ action: 'allow', modifications: null }));
    return;
  }

  // Check content from input payload first, fall back to disk
  let content = providedContent;
  if (!content && fs.existsSync(FILE)) {
    content = fs.readFileSync(FILE, 'utf8');
  }

  if (!content) {
    process.stdout.write(JSON.stringify({ action: 'allow', modifications: null }));
    return;
  }
  const REQUIRED_FIELDS = ['Version:', 'Effective Date:', 'Owner:', 'Approved By:'];
  const missing = REQUIRED_FIELDS.filter(field => !content.includes(field));

  if (missing.length > 0) {
    const output = {
      action: 'block',
      modifications: null,
      audit: {
        logged: true,
        note: `Policy ${FILE} missing metadata: ${missing.join(', ')}`
      }
    };
    process.stdout.write(JSON.stringify(output));
    return;
  }

  const output = {
    action: 'allow',
    modifications: null,
    audit: {
      logged: true,
      note: `Policy ${FILE} metadata validated successfully`
    }
  };
  process.stdout.write(JSON.stringify(output));
});

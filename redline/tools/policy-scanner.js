#!/usr/bin/env node
// policy-scanner.js — Custom tool
// Scans policy files and produces a markdown summary table.

const fs = require('fs');
const path = require('path');

let inputData = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { inputData += chunk; });
process.stdin.on('end', () => {
  let dir = 'policies';
  try {
    const parsed = JSON.parse(inputData);
    if (parsed.directory) dir = parsed.directory;
  } catch (_) {
    // stdin may be empty or non-JSON — fall back to default
  }

  if (!fs.existsSync(dir)) {
    process.stderr.write(`Error: directory "${dir}" not found\n`);
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  console.log('# Policy Scan Report');
  console.log('');
  console.log('| Policy | Version | Owner | Last Reviewed | Issues |');
  console.log('|--------|---------|-------|---------------|--------|');

  for (const filename of files) {
    const filepath = path.join(dir, filename);
    const content = fs.readFileSync(filepath, 'utf8');

    const name = path.basename(filename, '.md');

    const versionMatch = content.match(/\*\*Version:\*\*\s*([^\n]+)/);
    const version = versionMatch ? versionMatch[1].trim() : 'N/A';

    const ownerMatch = content.match(/\*\*Owner:\*\*\s*([^\n]+)/);
    const owner = ownerMatch ? ownerMatch[1].trim() : 'N/A';

    const reviewedMatch = content.match(/\*\*Last Reviewed:\*\*\s*([^\n]+)/);
    const reviewed = reviewedMatch ? reviewedMatch[1].trim() : 'N/A';

    let issues = 0;
    if (!content.includes('Purpose')) issues++;
    if (!content.includes('Scope')) issues++;
    if (!content.includes('Policy Review')) issues++;

    const issueCell = issues > 0 ? `⚠️ ${issues}` : '✅ None';
    console.log(`| ${name} | ${version} | ${owner} | ${reviewed} | ${issueCell} |`);
  }
});

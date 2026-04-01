#!/usr/bin/env bash
# load-policies.sh — Pre-query hook
# Loads all .md files from policies/ directory into the agent context.

set -euo pipefail

POLICY_DIR="policies"

if [ ! -d "$POLICY_DIR" ]; then
  echo "Warning: policies/ directory not found" >&2
  exit 0
fi

echo "=== Active Policies ==="
for policy in "$POLICY_DIR"/*.md; do
  if [ -f "$policy" ]; then
    filename=$(basename "$policy")
    version=$(grep -m1 "^\\*\\*Version:" "$policy" | sed 's/.*: *//;s/\\*//g' || echo "unknown")
    echo "  - $filename (v$version)"
  fi
done
echo "======================="

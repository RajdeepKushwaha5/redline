#!/usr/bin/env bash
set -euo pipefail

# Read JSON input from stdin and extract directory argument
INPUT=$(cat)
DIR=$(echo "$INPUT" | grep -o '"directory"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*"directory"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/' || true)
DIR="${DIR:-policies}"

echo "# Policy Scan Report"
echo ""
echo "| Policy | Version | Owner | Last Reviewed | Issues |"
echo "|--------|---------|-------|---------------|--------|"
for f in "$DIR"/*.md; do
  if [ -f "$f" ]; then
    name=$(basename "$f" .md)
    version=$(grep -m1 "Version:" "$f" | sed 's/.*\*\*Version:\*\* *//' || echo "N/A")
    owner=$(grep -m1 "Owner:" "$f" | sed 's/.*\*\*Owner:\*\* *//' || echo "N/A")
    reviewed=$(grep -m1 "Last Reviewed:" "$f" | sed 's/.*\*\*Last Reviewed:\*\* *//' || echo "N/A")
    issues=0
    grep -q "Purpose" "$f" || issues=$((issues + 1))
    grep -q "Scope" "$f" || issues=$((issues + 1))
    grep -q "Policy Review" "$f" || issues=$((issues + 1))
    if [ $issues -gt 0 ]; then
      echo "| $name | $version | $owner | $reviewed | ⚠️ $issues |"
    else
      echo "| $name | $version | $owner | $reviewed | ✅ None |"
    fi
  fi
done

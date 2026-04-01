#!/usr/bin/env bash
# validate-metadata.sh — Post-write hook
# Validates that written policy files contain required metadata headers.

set -euo pipefail

FILE="$1"

if [[ ! "$FILE" == policies/*.md ]]; then
  exit 0
fi

REQUIRED_FIELDS=("Version:" "Effective Date:" "Owner:" "Approved By:")
MISSING=()

for field in "${REQUIRED_FIELDS[@]}"; do
  if ! grep -q "$field" "$FILE"; then
    MISSING+=("$field")
  fi
done

if [ ${#MISSING[@]} -gt 0 ]; then
  echo "ERROR: Policy $FILE is missing required metadata fields:" >&2
  for m in "${MISSING[@]}"; do
    echo "  - $m" >&2
  done
  exit 1
fi

echo "OK: $FILE metadata validated"

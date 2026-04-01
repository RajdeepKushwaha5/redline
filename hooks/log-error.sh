#!/usr/bin/env bash
# log-error.sh — On-error hook
# Appends error details to the audit log.

set -euo pipefail

MEMORY_FILE="memory/MEMORY.md"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
ERROR_MSG="${1:-Unknown error}"

if [ ! -f "$MEMORY_FILE" ]; then
  echo "# Audit Log" > "$MEMORY_FILE"
  echo "" >> "$MEMORY_FILE"
fi

cat >> "$MEMORY_FILE" << EOF

---

## Error Entry — $TIMESTAMP

| Field       | Value                |
|-------------|----------------------|
| **Type**    | ERROR                |
| **Time**    | $TIMESTAMP           |
| **Message** | $ERROR_MSG           |
| **Source**  | on_error hook        |
EOF

echo "Error logged to $MEMORY_FILE"

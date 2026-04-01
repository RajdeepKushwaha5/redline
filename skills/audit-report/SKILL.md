---
name: audit-report
description: "Generate compliance audit records documenting the full policy change lifecycle — gap analysis, drafting, review, and validation — for regulatory traceability"
license: MIT
allowed-tools: Read Write Bash
metadata:
  author: "redline-team"
  version: "1.0.0"
  category: "compliance"
  risk_tier: "high"
---

# Audit Report

## Purpose

Generate a complete audit record of a policy lifecycle action. This skill creates an immutable record of what happened, who was involved, what was decided, and what evidence supports the decision. Executed by the **auditor** agent (auditor role).

## Inputs

- **Action type**: what happened (`policy_update`, `compliance_certification`, `gap_analysis`, `policy_retirement`)
- **Change summary**: output from the draft-policy skill (if applicable)
- **Compliance result**: output from the compliance-check skill (if applicable)
- **Policy path**: path to the affected policy

## Instructions

1. **Gather context** by reading:
   - The policy file at the specified path
   - The memory file at `memory/MEMORY.md` for historical context
   - Run `git log --oneline -20` to get recent commit history for the audit trail

2. **Construct the audit record** with all required fields (see output format below).

3. **Append the audit record** to `memory/MEMORY.md` under the `## Audit Trail` section. If the section does not exist, create it.

4. **Verify integrity** of the audit chain:
   - If there are previous audit entries, confirm the chain is continuous (no gaps in sequence numbers)
   - Flag any anomalies in the audit trail

## Output Format

```
### Audit Record [sequence-number]

| Field | Value |
|-------|-------|
| **Timestamp** | [ISO 8601 datetime] |
| **Action** | [policy_update / compliance_certification / gap_analysis / policy_retirement] |
| **Policy** | [policy file path] |
| **Agent** | auditor |
| **Role** | auditor |

#### Chain of Actions

| Step | Agent | Role | Action | Result |
|------|-------|------|--------|--------|
| 1 | [agent] | [role] | [what they did] | [outcome] |
| 2 | [agent] | [role] | [what they did] | [outcome] |

#### Key Findings

[Summarize: What gaps were found? What changes were made? What was the compliance result?]

#### SOD Verification

- [x] Maker and checker were different agents
- [x] No agent held conflicting roles
- [x] All required handoffs completed

#### Evidence References

- Gap analysis: [reference or summary]
- Draft changes: [reference or summary]
- Review decision: [reference or summary]
- Compliance scorecard: [reference or summary]
- Git commits: [relevant commit hashes]

---
```

## Rules

- Audit records are append-only — never modify or delete existing records
- Every audit record must have a unique, sequential identifier
- Record the actual agents and roles involved — do not fabricate the chain if steps were skipped
- If the SOD verification fails (e.g., same agent drafted and reviewed), flag it as a violation
- Include enough detail that an external auditor could reconstruct what happened without access to the agents
- Timestamp must be ISO 8601 format

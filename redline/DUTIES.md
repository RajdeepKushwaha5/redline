# Duties — Segregation of Duties Policy

## Overview

redline enforces strict segregation of duties across its four agent roles. No single agent may control a policy change end-to-end. Every policy update requires participation from at least three independent roles before it takes effect.

## Roles

| Role | Agent | Permissions | Description |
|------|-------|-------------|-------------|
| **maker** | `drafter` | create, submit | Analyzes gaps and drafts policy language. Proposes changes but cannot approve them. |
| **checker** | `reviewer` | review, approve, reject | Reviews drafts for quality, clarity, and cross-policy consistency. Cannot draft or audit. |
| **executor** | `compliance-checker` | validate, certify | Validates approved policies against GDPR and SOC 2 requirements. Cannot draft or audit. |
| **auditor** | `auditor` | audit, report | Verifies the integrity of the full process. Generates audit records. Cannot draft or validate. |

## Conflict Matrix

The following role pairs must never be held by the same agent:

| Role A | Role B | Reason |
|--------|--------|--------|
| maker | checker | An agent must not approve its own drafts |
| maker | auditor | An agent must not audit its own work product |
| executor | maker | A compliance validator must not draft the policies it validates |
| executor | auditor | A compliance validator must not audit its own validation |

## Handoff Workflows

### Policy Update (standard flow)

```
drafter (maker) → reviewer (checker) → compliance-checker (executor)
```

1. **drafter** identifies gaps and writes updated policy language → submits draft
2. **reviewer** evaluates the draft for clarity, completeness, and cross-policy consistency → approves or rejects with comments
3. **compliance-checker** validates the approved draft against regulatory requirements → certifies or returns with findings
4. **auditor** records the full chain: gap findings, draft, review decision, compliance result

All four steps must complete. If any step rejects, the process returns to the drafter with feedback.

### Compliance Certification

```
compliance-checker (executor) → auditor (auditor)
```

1. **compliance-checker** produces a compliance scorecard for a policy against specified frameworks
2. **auditor** verifies the scorecard methodology and records the certification

### Policy Retirement

```
drafter (maker) → reviewer (checker) → auditor (auditor)
```

1. **drafter** proposes retirement with justification
2. **reviewer** confirms the policy is no longer needed and no regulatory gap is created
3. **auditor** records the retirement and archives the policy

## Isolation Policy

- **State isolation**: full — each agent operates with its own context and cannot read another agent's working memory
- **Credential isolation**: separate — each agent uses independent credentials for any external operations

## Enforcement

**Mode: strict** — the gitagent validator will block deployment if any agent holds conflicting roles or if handoff chains are incomplete.

---
name: compliance-check
description: Validate an approved policy against regulatory framework checklists and produce a structured compliance scorecard
license: MIT
allowed-tools: Read
metadata:
  author: redline-team
  version: 1.0.0
  category: compliance
  risk_tier: high
  regulatory_frameworks: gdpr,soc2
confidence: 0.8
usage_count: 1
success_count: 0
failure_count: 1
negative_examples:
  - The policy has significant gaps and is NON-COMPLIANT with SOC2 requirements.
---

# Compliance Check

## Purpose

Validate an approved policy against one or more regulatory framework checklists. Produce a structured compliance scorecard with pass/fail for every requirement. This skill is executed by the **compliance-checker** agent (executor role).

## Inputs

- **Policy path**: path to the approved policy file
- **Frameworks**: list of frameworks to validate against (e.g., `[gdpr, soc2]`)

## Instructions

1. **Read the policy** from the specified path.

2. **For each framework**, read the checklist from `knowledge/frameworks/<framework>/checklist.md`.

3. **Evaluate every checklist item** against the policy content:
   - ✅ **PASS** — The policy clearly and specifically addresses this requirement
   - ❌ **FAIL** — The policy does not address this requirement
   - ⚠️ **PARTIAL** — The policy mentions the topic but lacks sufficient detail or specificity

4. **For each item**, provide a brief evidence note — quote or reference the specific policy section that covers the requirement (or note its absence).

5. **Calculate the compliance score** per framework:
   - Percentage of PASS items out of total items
   - Percentage of PASS + PARTIAL out of total items (partial compliance rate)

## Output Format

Produce a scorecard in this exact structure:

```
## Compliance Scorecard: [Policy Name]

**Validated by**: compliance-checker (executor role)
**Date**: [date]
**Frameworks**: [list]

---

### [Framework Name] Compliance

**Score**: [N]/[total] PASS ([percentage]%)
**Partial compliance**: [N]/[total] PASS+PARTIAL ([percentage]%)
**Status**: COMPLIANT / SUBSTANTIALLY COMPLIANT / MATERIAL GAPS / NON-COMPLIANT

| ID | Requirement | Ref | Status | Evidence |
|----|------------|-----|--------|----------|
| G01 | Lawful basis for processing | Art. 6 | ✅ | Section 4 defines lawful basis per activity |
| G02 | Special category data | Art. 9 | ⚠️ | Mentioned in Section 4 but no specific conditions |
| G09 | Automated decision-making | Art. 22 | ❌ | Not addressed in policy |

### Certification

Based on this validation:
- [ ] Policy meets full compliance requirements for [framework]
- [ ] Policy has material gaps requiring remediation before certification
- [ ] Recommended remediation actions: [list critical FAILs]
```

## Status Thresholds

- **COMPLIANT**: All items PASS
- **SUBSTANTIALLY COMPLIANT**: No FAIL items, some PARTIAL. Partial items should be improved but are not blocking.
- **MATERIAL GAPS**: Any FAIL item that is classified as critical in the checklist
- **NON-COMPLIANT**: 5+ FAIL items or any critical-severity FAIL

## Rules

- Evaluate strictly — a requirement is only PASS if the policy provides specific, actionable coverage
- Vague language like "appropriate measures will be taken" is PARTIAL, not PASS
- Reference specific policy sections in the evidence column (e.g., "Section 5.7" or "Not found")
- Do not evaluate requirements outside the checklist — only use items defined in the knowledge base
- If the policy references an external document that might cover a gap, note it but still evaluate what is in this policy document

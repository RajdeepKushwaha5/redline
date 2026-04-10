---
name: gap-analysis
description: Analyze organizational policies against regulatory framework requirements (GDPR, SOC 2) and produce a structured findings report with severity-rated gaps
license: MIT
allowed-tools: Read
metadata:
  author: redline-team
  version: 1.0.0
  category: compliance
  risk_tier: high
  regulatory_frameworks: gdpr,soc2
---

# Gap Analysis

## Purpose

Compare an existing organizational policy against the requirements of a specified regulatory framework and produce a structured findings report identifying where the policy falls short.

## Inputs

- **Policy path**: path to the policy file to analyze (e.g., `policies/data-privacy.md`)
- **Framework**: which regulatory framework to analyze against (`gdpr` or `soc2`)

## Instructions

1. **Read the policy** from the specified path. Read the entire document — do not skip sections.

2. **Read the framework requirements** from `knowledge/frameworks/<framework>/requirements.md`. This contains every requirement the policy should address.

3. **Read the framework checklist** from `knowledge/frameworks/<framework>/checklist.md`. This is the structured evaluation template.

4. **For each requirement in the checklist**, evaluate whether the policy:
   - **PASS** — Clearly addresses the requirement with sufficient specificity and actionable detail
   - **FAIL** — Does not mention or address the requirement at all
   - **PARTIAL** — Mentions the topic but lacks specificity, is vague, or is incomplete

5. **For every FAIL or PARTIAL finding**, assign a severity:
   - **CRITICAL** — Exposes the organization to direct regulatory enforcement, fines, or legal liability
   - **HIGH** — Likely to result in audit failure or significant compliance risk
   - **MEDIUM** — Best practice gap that weakens the overall compliance posture
   - **LOW** — Improvement opportunity with minimal regulatory risk

6. **Cross-reference**: note if the gap is partially covered by another policy in the `policies/` directory.

## Output Format

Produce findings in this exact structure:

```
## Gap Analysis: [Policy Name] vs [Framework]

**Analyzed**: [date]
**Policy version**: [from policy header or "undated"]
**Framework**: [GDPR / SOC 2]
**Overall status**: [Compliant / Substantially Compliant / Material Gaps / Non-Compliant]

### Summary

- Total requirements checked: [N]
- PASS: [N]
- PARTIAL: [N]
- FAIL: [N]

### Findings

| # | Requirement | Ref | Status | Severity | Finding |
|---|------------|-----|--------|----------|---------|
| 1 | [requirement name] | [article/CC ref] | FAIL | CRITICAL | [what's missing] |
| 2 | ... | ... | ... | ... | ... |

### Recommended Actions

1. [CRITICAL] [specific action to address finding #X]
2. [HIGH] [specific action to address finding #Y]
3. ...
```

## Rules

- Cite specific article or section numbers from the framework — never say "GDPR requires" without an article number
- When a requirement is PARTIAL, explain exactly what is present and what is missing
- Order findings by severity (CRITICAL first, then HIGH, MEDIUM, LOW)
- If the policy references another document that might cover the gap, note it but still mark the finding
- Do not fabricate regulatory requirements — only evaluate against items in the knowledge base

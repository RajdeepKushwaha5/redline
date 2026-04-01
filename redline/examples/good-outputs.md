# Good Output Examples

These examples show what high-quality redline output looks like for each skill.

---

## Gap Analysis — Good Example

**Input:** `policies/data-privacy.md` against GDPR

```markdown
# Gap Analysis Report

**Policy:** policies/data-privacy.md
**Framework:** GDPR
**Date:** 2024-11-15

## Findings

| # | Requirement | Article | Severity | Gap Description |
|---|-------------|---------|----------|-----------------|
| 1 | Automated Decision-Making | Art. 22 | CRITICAL | Policy contains no provisions for automated decision-making or profiling. Must include: right to human intervention, right to contest decisions, meaningful information about logic involved. |
| 2 | Data Portability | Art. 20 | HIGH | Right to data portability not mentioned. Policy must state data subjects can receive their data in structured, machine-readable format. |
| 3 | Cross-Border Transfers | Ch. V | CRITICAL | No mention of international data transfer mechanisms. Must specify: adequacy decisions, SCCs, BCRs, or other Art. 46 safeguards. |
| 4 | Retention Periods | Art. 5(1)(e) | HIGH | Retention stated as "as long as necessary" — non-compliant. Must specify concrete periods per data category. |
| 5 | DPIA Process | Art. 35 | MEDIUM | No Data Protection Impact Assessment process described. Required for high-risk processing. |

## Summary

- **Total requirements checked:** 12
- **Compliant:** 5
- **Gaps found:** 5
- **Partial:** 2
- **Compliance rate:** 42%
```

**Why this is good:**
- Every finding cites a specific GDPR article
- Severity levels are appropriate (missing Art. 22 is CRITICAL, not MEDIUM)
- Gap descriptions state what is missing AND what the policy must include
- Summary provides quantitative overview

---

## Review Scorecard — Good Example

```markdown
# Policy Review

**Policy:** policies/data-privacy.md (v2.1 — post-update)
**Reviewer:** reviewer agent
**Decision:** APPROVED WITH COMMENTS

## Scorecard

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Clarity | 4 | Clear language. §7.3 could simplify "notwithstanding the foregoing" |
| Completeness | 5 | All 12 GDPR requirements now addressed |
| Consistency | 3 | §4.2 retention says "2 years" but §9 says "as required" — reconcile |
| Regulatory Accuracy | 5 | All citations verified against GDPR text |
| Structural Integrity | 4 | Follows template. Missing table of contents for 20+ page document |

**Overall: 21/25**

## Cross-Policy Check

⚠️ **Contradiction detected:** acceptable-use.md §4.2 prohibits personal devices, but this policy §6.1 references "employee device data collection." Clarify scope.

## Remediation (for COMMENTS)

1. Reconcile retention periods between §4.2 and §9
2. Add table of contents
3. Clarify "employee device" scope relative to AUP
```

**Why this is good:**
- Each dimension has a specific score with justification
- Cross-policy contradiction detected and cited with section numbers
- Remediation items are actionable and specific

---

## Compliance Scorecard — Good Example

```markdown
# Compliance Scorecard

**Policy:** policies/access-control.md
**Framework:** SOC2
**Date:** 2024-11-15

| ID  | Requirement | Status | Notes |
|-----|-------------|--------|-------|
| S01 | Access control policies documented | ✅ | Present in §1-§2 |
| S02 | Unique user identification | ❌ | §3.1 allows shared accounts for "non-sensitive" systems |
| S03 | Role-based access control | ✅ | §10 — RBAC implemented |
| S04 | Least privilege enforced | ✅ | §3.1 — explicitly stated |
| S05 | MFA for remote access | ⚠️ | §4.2 says "recommended" not "required" — partial |
| S06 | Access review process | ⚠️ | §5 — annual only; best practice is quarterly for privileged |
| S07 | Timely deprovisioning | ⚠️ | §3.2 — 5 business days for voluntary; should be same day |

**Pass:** 3 | **Fail:** 1 | **Partial:** 3 | **Total:** 7/25 shown
**Score: 64% (below 80% threshold — NON-COMPLIANT)**
```

**Why this is good:**
- Each item has specific section references
- ⚠️ items explain what exists AND what's missing
- Quantitative pass rate with threshold comparison

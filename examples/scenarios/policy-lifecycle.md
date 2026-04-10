# Example Scenarios

These scenarios demonstrate end-to-end workflows for evaluating redline.

---

## Scenario 1: New Policy Gap Analysis

**Setup:** A startup has a data privacy policy that was written two years ago and never updated for GDPR. They need to know where it falls short.

**Input:**
```
Run gap-analysis on policies/data-privacy.md against the GDPR framework
```

**Expected behavior:**
1. Compliance-checker (executor role) reads the policy
2. Reads GDPR checklist (22 items) and requirements
3. Evaluates each item: PASS / FAIL / PARTIAL
4. Produces a structured findings table ordered by severity
5. Identifies CRITICAL gaps: Art. 22 (automated decisions), Art. 20 (portability), Art. 37-39 (DPO), Art. 35 (DPIA)

**What to verify:**
- Every finding cites a specific GDPR article number
- Severity ratings are appropriate (missing data subject rights = CRITICAL)
- Output uses the exact table format from the skill instructions
- No regulatory citations are fabricated

---

## Scenario 2: Full Policy Update Lifecycle

**Setup:** After gap analysis found 6 CRITICAL issues, the organization wants to fix the data privacy policy and get it through the full review pipeline.

**Input:**
```
Run the policy-update-flow workflow on policies/data-privacy.md with framework gdpr
```

**Expected behavior:**
1. **Step 1 — Gap Analysis** (compliance-checker, executor): Identifies all gaps
2. **Step 2 — Draft Update** (drafter, maker): Updates policy with `<!-- REDLINE: ... -->` annotations
3. **Step 3 — Review** (reviewer, checker): Scores across 5 dimensions, renders APPROVED/REJECTED
4. **Step 4 — Compliance Check** (compliance-checker, executor): Validates updated policy
5. **Step 5 — Audit** (auditor, auditor): Appends immutable record to memory/MEMORY.md

**What to verify:**
- No single agent performs two conflicting roles (SOD enforced)
- Drafter does NOT approve its own work
- Reviewer does NOT modify policy content
- Auditor only records — never drafts or reviews
- If reviewer REJECTS, flow returns to drafter (max 2 retries)
- Immutable audit entry includes all actors, timestamps, and SOD verification

---

## Scenario 3: Cross-Policy Contradiction Detection

**Setup:** The acceptable-use policy says BYOD requires "written approval from manager and CISO" but a draft update to the data privacy policy references "employee device data collection" without acknowledging the BYOD restrictions.

**Input:**
```
Review policies/data-privacy.md for cross-policy consistency
```

**Expected behavior:**
1. Reviewer (checker) reads ALL policies in the `policies/` directory
2. Detects contradiction between acceptable-use BYOD rules and data-privacy device references
3. Flags the specific sections and policy paths in the review output
4. Renders APPROVED WITH COMMENTS or REJECTED depending on severity

**What to verify:**
- Both policy paths are cited (policies/acceptable-use.md §4.2, policies/data-privacy.md §X)
- Contradiction is described specifically, not vaguely
- 5-dimension scorecard includes a CONFLICT FOUND on consistency dimension

---

## Scenario 4: SOC 2 Compliance Scorecard

**Setup:** The organization is preparing for a SOC 2 Type II audit and needs to know if the access control policy meets the 34-item Security checklist.

**Input:**
```
Run compliance-check on policies/access-control.md against SOC2
```

**Expected behavior:**
1. Compliance-checker reads the access control policy
2. Evaluates all 34 SOC2 items (S01-S25, C01-C04, P01-P05)
3. Produces scorecard with ✅/❌/⚠️ per item
4. Calculates pass rate and overall status

**What to verify:**
- Known gaps are correctly identified (e.g., S02 fails because §3.1 allows shared accounts)
- ⚠️ items explain what is present AND what is missing
- Score includes percentage and threshold comparison
- Status determination follows the defined thresholds

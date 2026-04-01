---
name: draft-policy
description: "Draft new policy sections or update existing policies to address identified compliance gaps while preserving document structure and tone"
license: MIT
allowed-tools: Read Write
metadata:
  author: "redline-team"
  version: "1.0.0"
  category: "compliance"
  risk_tier: "high"
---

# Draft Policy

## Purpose

Write or update policy language to address compliance gaps identified by the gap-analysis skill. Produce publication-ready policy text that integrates naturally with the existing document.

## Inputs

- **Gap findings**: output from the gap-analysis skill (list of gaps with severity and requirement references)
- **Policy path**: path to the current policy file to update
- **Framework**: the regulatory framework the gaps relate to

## Instructions

1. **Read the current policy** from the specified path. Understand its structure, tone, formatting conventions, and existing content.

2. **Read the relevant template** from `knowledge/templates/` to understand what good coverage looks like for each gap.

3. **Read the framework requirements** from `knowledge/frameworks/<framework>/requirements.md` to understand the exact regulatory language for each gap.

4. **For each gap (ordered by severity):**

   a. Determine where in the existing policy the new content belongs:
      - If the policy has a relevant section, add or expand content within it
      - If no relevant section exists, create a new section following the document's numbering scheme

   b. Draft policy language that:
      - Addresses the specific regulatory requirement cited in the gap finding
      - Uses the same tone, voice, and formatting as the surrounding document
      - Is actionable — employees should be able to follow it (not just "we will comply")
      - Cites the relevant regulation where appropriate within the policy text

   c. Mark every new or changed section with an inline comment:
      ```
      <!-- REDLINE: Added to address [requirement], [framework] [article/section] -->
      ```

5. **Write the updated policy** to the same file path, preserving all original content that is not being changed.

6. **Produce a change summary** listing each modification:
   ```
   ## Change Summary
   
   | Section | Change | Reason | Regulation |
   |---------|--------|--------|------------|
   | 5.7 | Added automated decision-making rights | Gap G09 | GDPR Art. 22 |
   | 9 (new) | Added cross-border transfer section | Gap G15 | GDPR Art. 44-49 |
   ```

## Rules

- Never remove existing policy content unless it directly contradicts the new language — if there is a contradiction, flag it and include both the original and proposed text
- Match the existing document's formatting: heading levels, list styles, table formats
- Policy language must be specific and implementable — "data will be retained for 5 years" not "data will be retained for an appropriate period"
- Do not add requirements beyond what is needed to close the identified gaps — minimize scope
- Every added section must have a REDLINE comment explaining why it was added
- If a gap requires organizational decisions (e.g., choosing a lawful basis, setting a retention period), insert a placeholder: `[DECISION REQUIRED: description of what needs to be decided]`

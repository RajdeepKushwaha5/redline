# Bad Output Examples

These examples show what redline output should NOT look like, with explanations of why.

---

## Gap Analysis — Bad Example

```markdown
# Gap Analysis

The policy has some gaps. It should mention GDPR more. Some sections are missing.
The retention period is vague. Consider adding more detail about data subject rights.
Overall the policy needs improvement.
```

**Why this is bad:**
- No specific article citations
- No severity ratings
- "Some gaps" and "some sections" are vague — which gaps? which sections?
- No structured table or quantitative summary
- "Consider adding more detail" is not actionable

---

## Review — Bad Example

```markdown
# Review

This policy looks pretty good overall. I'd give it a 4/5.
There might be some issues with consistency but it's mostly fine.
I recommend approval.

Decision: APPROVED
```

**Why this is bad:**
- Single dimension score instead of five-dimension breakdown
- "Might be some issues" — reviews must be definitive
- No cross-policy consistency check
- No section references or specific findings
- No justification for the score

---

## Compliance Check — Bad Example

```markdown
# Compliance Results

The policy is mostly compliant with SOC2. Here are some areas for improvement:
- Access controls could be stronger
- Consider implementing MFA
- Review processes should be more frequent

Score: 75%
```

**Why this is bad:**
- No checklist item IDs
- No ✅/❌/⚠️ per item
- "Could be stronger" is not a compliance finding
- No section references showing where the policy falls short
- Score without showing the underlying item-by-item assessment

---

## SOD Violation — Bad Example

```markdown
I've reviewed the policy and it looks good, so I'll go ahead and update it
with the necessary changes and mark it as approved.
```

**Why this is bad:**
- Single agent performing review (checker), drafting (maker), AND approval — triple SOD violation
- No handoff between agents
- No audit record
- No separation of concerns

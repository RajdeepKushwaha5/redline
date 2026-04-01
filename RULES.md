# Rules

## Must Always

- Cite specific regulation article or section numbers when identifying gaps (e.g., "GDPR Article 17" not "GDPR right to erasure")
- Use severity levels consistently: CRITICAL (legal exposure), HIGH (audit failure risk), MEDIUM (best practice gap), LOW (improvement opportunity)
- Preserve the existing document's structure, tone, and formatting when drafting updates
- Generate a change summary for every policy modification explaining what changed and why
- Check for contradictions with other policies in the repository before approving any draft
- Maintain the audit trail — every finding, draft, review, and approval must be logged
- Flag ambiguous regulatory requirements explicitly rather than choosing an interpretation silently
- Read the full policy document before beginning any analysis — never work from partial context

## Must Never

- Approve, review, or audit work produced by the same agent role — segregation of duties is non-negotiable
- Fabricate or hallucinate regulatory citations — if unsure of the exact article number, say so
- Delete or overwrite existing policy content without showing what was removed in the change summary
- Make policy decisions that require human judgment (e.g., choosing between two valid lawful bases for processing)
- Store or log personally identifiable information — redact PII from all analysis outputs
- Weaken existing policy protections unless explicitly instructed by a human with a documented reason
- Present compliance check results as legal advice — always include the disclaimer that this is automated analysis, not legal counsel

## Output Constraints

- Gap analysis findings must be structured as a table: Requirement | Status | Gap Description | Severity | Reference
- Policy drafts must include inline comments marking new or changed sections with `<!-- REDLINE: [reason] -->`
- Compliance check results must use a checklist format: ✅ PASS / ❌ FAIL / ⚠️ PARTIAL for each requirement
- Audit reports must include: timestamp, agent role, action taken, inputs, outputs, and result hash

## Interaction Boundaries

- Scope is limited to GDPR and SOC 2 frameworks — do not analyze against other frameworks unless knowledge base is extended
- Operate only on files within the `policies/` directory and `knowledge/` directory — do not modify agent configuration files
- Maximum of 3 policies analyzed in a single session to maintain depth and accuracy
- When asked about jurisdictions or regulations outside the knowledge base, explicitly state the limitation rather than guessing

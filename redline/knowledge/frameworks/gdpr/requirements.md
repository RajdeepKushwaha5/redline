# GDPR Requirements — Policy Mapping

This document maps key GDPR requirements to what organizational policies must address. Used by the gap-analysis skill to evaluate policy completeness.

## R1: Lawful Basis for Processing (Articles 6, 9)

**Policy must state:**
- Which lawful basis applies to each category of processing (consent, contract, legal obligation, vital interests, public task, legitimate interests)
- For special category data (Article 9): the specific condition that permits processing
- How the chosen lawful basis is documented and reviewed

**Common gaps:** Policy says "we process data as permitted by law" without specifying which lawful basis applies to which processing activity.

## R2: Data Subject Rights (Articles 15-22)

**Policy must address each right:**
- Right of access (Art. 15) — how data subjects request their data, response timeline (30 days)
- Right to rectification (Art. 16) — process for correcting inaccurate data
- Right to erasure (Art. 17) — conditions for deletion, exceptions (legal obligations, public interest)
- Right to restrict processing (Art. 18) — when and how processing is limited
- Right to data portability (Art. 20) — machine-readable format, direct transfer to another controller
- Right to object (Art. 21) — process must exist, compelling grounds test for legitimate interests
- Rights related to automated decision-making (Art. 22) — right not to be subject to decisions based solely on automated processing that produce legal or significant effects

**Common gaps:** Policy lists rights but provides no process for exercising them. Article 22 rights frequently omitted entirely.

## R3: Consent Requirements (Articles 7, 8)

**Policy must state:**
- How consent is obtained (freely given, specific, informed, unambiguous)
- How consent is recorded and stored
- How consent can be withdrawn (must be as easy as giving it)
- Age verification for children's data (Article 8 — under 16, or under 13 depending on member state)

**Common gaps:** No mechanism for consent withdrawal. No mention of children's data.

## R4: Data Protection Impact Assessment (Article 35)

**Policy must define:**
- When a DPIA is required (systematic monitoring, large-scale special category processing, automated decision-making)
- Who conducts the DPIA (must consult the DPO)
- What a DPIA must contain (systematic description, necessity assessment, risk assessment, mitigation measures)
- When supervisory authority consultation is required (Article 36 — when high risk cannot be mitigated)

**Common gaps:** Policy mentions DPIAs but provides no trigger criteria or process.

## R5: Data Breach Notification (Articles 33, 34)

**Policy must define:**
- Notification to supervisory authority within 72 hours of becoming aware (Article 33)
- What must be reported: nature of breach, categories of data, approximate number of subjects, likely consequences, measures taken
- When data subjects must be notified (Article 34 — when breach likely results in high risk)
- Internal breach detection and escalation procedures

**Common gaps:** 72-hour timeline mentioned but no internal escalation process to enable it.

## R6: Cross-Border Data Transfers (Chapter V, Articles 44-49)

**Policy must address:**
- Whether personal data is transferred outside the EEA
- Legal mechanism for transfers: adequacy decisions (Art. 45), standard contractual clauses (Art. 46(2)(c)), binding corporate rules (Art. 47), or derogations (Art. 49)
- Transfer impact assessments for non-adequate countries
- Schrems II implications — supplementary measures where SCCs are insufficient

**Common gaps:** Policy does not mention cross-border transfers at all, or mentions them without specifying the legal mechanism.

## R7: Data Retention (Article 5(1)(e))

**Policy must define:**
- Specific retention periods for each category of personal data — not "as long as necessary"
- Legal or business justification for each retention period
- Process for periodic review of retention schedules
- Procedure for secure deletion or anonymization when retention period expires

**Common gaps:** Vague retention language ("retained as long as needed for business purposes") with no specific timeframes.

## R8: Privacy by Design and Default (Article 25)

**Policy must address:**
- How data protection is integrated into system design (not bolted on after)
- Default settings must be the most privacy-protective (data minimization by default)
- Technical and organizational measures appropriate to the risk

**Common gaps:** Policy mentions privacy by design as a principle but provides no implementation requirements.

## R9: Data Protection Officer (Articles 37-39)

**Policy must state:**
- Whether a DPO is required (and why/why not)
- DPO contact information
- DPO independence guarantees (reports to highest management, no conflicts of interest)
- DPO involvement in all data protection matters

**Common gaps:** DPO mentioned but role responsibilities and independence not documented.

## R10: Records of Processing Activities (Article 30)

**Policy must require:**
- Maintaining a register of all processing activities
- Contents: purposes, data categories, recipients, transfers, retention periods, security measures
- Made available to supervisory authority on request

**Common gaps:** No mention of processing register, or register exists but policy does not reference it.

## R11: Automated Decision-Making and Profiling (Article 22)

**Policy must address:**
- Right not to be subject to decisions based solely on automated processing (including profiling) that produce legal effects or similarly significant effects
- Exceptions: contract performance, authorized by law, explicit consent
- Safeguards: right to obtain human intervention, right to express point of view, right to contest the decision
- Meaningful information about the logic involved, significance, and envisaged consequences

**Common gaps:** This requirement is frequently missing entirely from data privacy policies, especially those written before widespread AI/ML adoption.

## R12: Third-Party Processor Agreements (Article 28)

**Policy must require:**
- Written contracts with all data processors
- Processor obligations: process only on documented instructions, ensure confidentiality, assist with data subject rights, delete/return data on termination
- Sub-processor approval and flow-down requirements
- Audit rights

**Common gaps:** Policy acknowledges third-party processors but does not specify contractual requirements.

# Risk Assessment

## Agent: redline v0.1.0

**Risk Tier:** HIGH
**Assessment Date:** 2026-04-01
**Next Review:** Q3 2026
**Assessor:** redline-team

---

## 1. Risk Identification

| Risk ID | Category         | Description                                        | Likelihood | Impact | Severity |
|---------|------------------|----------------------------------------------------|------------|--------|----------|
| R-01    | Regulatory       | Policy gap missed by gap-analysis skill            | Medium     | High   | HIGH     |
| R-02    | Data Privacy     | PII leakage in audit logs or policy drafts         | Low        | High   | HIGH     |
| R-03    | Accuracy         | Hallucinated compliance requirements               | Medium     | High   | HIGH     |
| R-04    | Availability     | Model rate-limit or outage blocks policy workflow  | Medium     | Medium | MEDIUM   |
| R-05    | Integrity        | Unauthorized policy approval bypasses SOD controls | Low        | High   | HIGH     |
| R-06    | Regulatory       | Framework requirements change between assessments  | Medium     | High   | HIGH     |
| R-07    | Security         | Prompt injection via malicious policy content      | Low        | High   | HIGH     |
| R-08    | Operational      | Model drift produces inconsistent scoring over time| Medium     | Medium | MEDIUM   |

## 2. Controls

| Risk ID | Control                                      | Type        | Effectiveness |
|---------|----------------------------------------------|-------------|---------------|
| R-01    | Human-in-the-loop review on all approvals    | Preventive  | High          |
| R-02    | PII redaction in data_governance config       | Preventive  | High          |
| R-03    | Dual-agent review (drafter → reviewer)       | Detective   | High          |
| R-04    | Fallback model configured (gemini-2.0-flash) | Corrective  | Medium        |
| R-05    | SOD conflict matrix in DUTIES.md             | Preventive  | High          |
| R-06    | Quarterly validation schedule with triggers   | Detective   | Medium        |
| R-07    | Input validation hook (validate-metadata.js)  | Preventive  | High          |
| R-08    | Good/bad output examples as few-shot anchors  | Preventive  | Medium        |

## 3. Residual Risk

After controls, residual risk is **MEDIUM**. All HIGH-severity risks have at least one preventive or detective control. R-04 and R-08 carry residual MEDIUM risk due to external dependencies (model provider, model behavior). Ongoing monitoring via quarterly validation cadence.

## 4. Review Schedule

- **Last review:** 2026-04-01
- **Next scheduled review:** Q3 2026
- **Trigger-based review:** On any compliance framework update, agent version bump, or P1/P2 incident.

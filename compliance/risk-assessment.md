# Risk Assessment

## Agent: redline v0.1.0

**Risk Tier:** HIGH
**Assessment Date:** 2025-07-12
**Assessor:** redline-team

---

## 1. Risk Identification

| Risk ID | Category         | Description                                        | Likelihood | Impact |
|---------|------------------|----------------------------------------------------|------------|--------|
| R-01    | Regulatory       | Policy gap missed by gap-analysis skill            | Medium     | High   |
| R-02    | Data Privacy     | PII leakage in audit logs or policy drafts         | Low        | High   |
| R-03    | Accuracy         | Hallucinated compliance requirements               | Medium     | High   |
| R-04    | Availability     | Model rate-limit or outage blocks policy workflow   | Medium     | Medium |
| R-05    | Integrity        | Unauthorized policy approval bypasses SOD controls | Low        | High   |

## 2. Controls

| Risk ID | Control                                     | Type        |
|---------|---------------------------------------------|-------------|
| R-01    | Human-in-the-loop review on all approvals   | Preventive  |
| R-02    | PII redaction in data_governance config      | Preventive  |
| R-03    | Dual-agent review (drafter → reviewer)      | Detective   |
| R-04    | Fallback model configured (gemini-2.0-flash)| Corrective  |
| R-05    | SOD conflict matrix in DUTIES.md            | Preventive  |

## 3. Residual Risk

After controls, residual risk is **MEDIUM**. All high-impact risks have at least one preventive control. Ongoing monitoring via quarterly validation cadence.

## 4. Review Schedule

- **Next scheduled review:** Q4 2025
- **Trigger-based review:** On any compliance framework update or agent version bump.

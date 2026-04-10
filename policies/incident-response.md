# Incident Response Policy

**Version:** 1.0
**Effective Date:** January 10, 2026
**Last Reviewed:** March 28, 2026
**Owner:** Security Operations
**Approved By:** CISO

## 1. Purpose

This policy establishes procedures for detecting, reporting, responding to, and recovering from security incidents. It ensures timely containment, minimizes damage, and meets regulatory notification requirements under GDPR and SOC2.

## 2. Scope

This policy applies to all employees, contractors, and third-party service providers handling organizational systems, data, and networks.

## 3. Incident Classification

| Severity | Description | Response Time |
|----------|-------------|---------------|
| **Critical (P1)** | Active data breach, system compromise, ransomware | Immediate — within 15 minutes |
| **High (P2)** | Confirmed unauthorized access, exploited vulnerability | Within 1 hour |
| **Medium (P3)** | Suspicious activity requiring investigation | Within 4 hours |
| **Low (P4)** | Policy violation, minor security event | Within 24 hours |

## 4. Incident Response Team

| Role | Responsibility |
|------|---------------|
| Incident Commander | Overall response coordination |
| Security Lead | Technical analysis, containment, and remediation |
| Communications Lead | Internal/external communications |
| Business Owner | Impact assessment and continuity decisions |

## 5. Response Phases

### 5.1 Detection and Reporting
- All personnel must report suspected incidents within 1 hour of discovery
- Automated detection via SIEM and monitoring tools
- Initial triage within response time SLA

### 5.2 Containment
- Isolate affected systems, disable compromised accounts, block malicious IPs
- Preserve forensic evidence before making changes

### 5.3 Eradication
- Remove root cause: malware removal, vulnerability patching, credential rotation
- Verify eradication through scanning

### 5.4 Recovery
- Restore systems from verified clean backups
- Gradual return to production with verification
- Confirm normal operations with business owners

### 5.5 Post-Incident Review
- Conduct review within 5 business days of resolution
- Produce incident report with timeline, root cause, impact, and lessons learned

## 6. Regulatory Notification

### 6.1 GDPR (Art. 33 / Art. 34)
- Notify supervisory authority within 72 hours of becoming aware of a personal data breach that poses a risk to individuals' rights and freedoms
- Notify affected data subjects without undue delay if the breach is likely to result in high risk

### 6.2 Contractual
- Customer notification per contractual SLA (typically 24-72 hours)

## 7. Evidence Preservation

- Maintain chain of custody for all evidence
- System images and logs preserved before remediation
- Minimum retention: 1 year for security events, 7 years for breach-related evidence

## 8. Metrics

- Mean time to detect (MTTD)
- Mean time to respond (MTTR)
- Quarterly incident summary report to management

## 9. Policy Review

This policy is reviewed annually or after any P1/P2 incident.

---

*This document is an internal policy. All incident information is confidential.*

# Incident Response Policy — Template

**Version:** [version]
**Effective Date:** [date]
**Last Reviewed:** [date]
**Owner:** [role/department]
**Approved By:** [name/role]

## 1. Purpose

This policy establishes the procedures for detecting, reporting, responding to, and recovering from security incidents. It ensures timely containment, minimizes damage, preserves evidence, and meets regulatory notification requirements.

## 2. Scope

This policy covers all security incidents affecting organizational systems, data, networks, and personnel. It applies to all employees, contractors, and third-party service providers.

## 3. Incident Classification

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| **Critical (P1)** | Active data breach, system compromise, ransomware | Immediate — within 15 minutes | Active exfiltration, ransomware encryption in progress |
| **High (P2)** | Confirmed unauthorized access, significant vulnerability exploited | Within 1 hour | Compromised admin account, successful phishing with data access |
| **Medium (P3)** | Potential compromise, suspicious activity requiring investigation | Within 4 hours | Unusual login patterns, malware detected and contained |
| **Low (P4)** | Policy violation, minor security event | Within 24 hours | Unauthorized software installation, failed brute force attempts |

## 4. Incident Response Team

| Role | Responsibility |
|------|---------------|
| **Incident Commander** | Overall response coordination, decision authority |
| **Security Lead** | Technical analysis, containment, and remediation |
| **Communications Lead** | Internal and external communications, regulatory notifications |
| **Legal Counsel** | Legal obligations, regulatory requirements, evidence preservation |
| **Business Owner** | Impact assessment, business continuity decisions |

## 5. Response Phases

### 5.1 Detection and Reporting
- All employees must report suspected incidents to the security team within 1 hour of discovery
- Automated detection via SIEM, EDR, and monitoring tools
- Reports submitted via [incident reporting channel]
- Initial triage by security team within response time SLA

### 5.2 Containment
- Short-term containment: isolate affected systems, disable compromised accounts, block malicious IPs
- Long-term containment: implement temporary controls while preparing for eradication
- Preserve forensic evidence before making changes — image affected systems where possible

### 5.3 Eradication
- Remove root cause: malware removal, vulnerability patching, credential rotation
- Verify eradication through scanning and monitoring
- Document all actions taken

### 5.4 Recovery
- Restore systems from verified clean backups
- Implement additional monitoring on affected systems
- Gradual return to production with verification at each step
- Confirm normal operations with business owners

### 5.5 Post-Incident Review
- Conduct post-incident review within 5 business days of resolution
- Produce incident report including: timeline, root cause, impact, actions taken, lessons learned
- Identify and track remediation actions to prevent recurrence
- Update runbooks and detection rules based on findings

## 6. Communication Plan

### 6.1 Internal Communication
- Status updates to stakeholders every 2 hours during active P1/P2 incidents
- Use designated incident communication channels (not general channels)
- Need-to-know basis until authorized for broader communication

### 6.2 Regulatory Notification
- **GDPR**: Supervisory authority within 72 hours of awareness (if personal data breach with risk to rights/freedoms)
- **GDPR**: Data subjects without undue delay (if high risk to rights/freedoms)
- **Contractual**: Per customer/partner agreements (typically 24-72 hours)
- Communications Lead coordinates all external notifications with Legal Counsel

### 6.3 External Communication
- All external statements approved by Communications Lead and Legal Counsel
- No unauthorized disclosure of incident details to media or social media
- Customer notifications per contractual and regulatory requirements

## 7. Evidence Preservation

- Maintain chain of custody for all evidence
- System images and logs must be preserved before remediation
- Logs retention: minimum 1 year for security events, 7 years for breach-related evidence
- Evidence storage must be tamper-proof and access-logged

## 8. Testing and Exercises

- Tabletop exercises: semi-annually
- Functional exercises (simulated incidents): annually
- Full-scale tests: annually or after significant infrastructure changes
- Exercise results documented and improvement actions tracked

## 9. Third-Party Incidents

- Third-party processors must notify the organization of incidents affecting our data within 24 hours (per DPA)
- Organization retains incident response coordination rights
- Third-party incident response capabilities assessed during vendor onboarding

## 10. Metrics and Reporting

- Mean time to detect (MTTD)
- Mean time to respond (MTTR)
- Number of incidents by severity and type
- Post-incident action completion rate
- Quarterly incident summary report to management

## 11. Policy Review

This policy is reviewed annually or after any P1/P2 incident. Updates follow the organization's policy change management process.

---

*This document is an internal policy. All incident information is confidential.*

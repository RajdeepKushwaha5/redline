# SOC 2 Compliance Checklist

Use this checklist to validate policies against SOC 2 Trust Service Criteria. Each item maps to a requirement in `requirements.md`.

> **Scope note:** This checklist prioritises the Security trust service category (S01-S25)
> as the most universally applicable. Confidentiality (C01-C04) and Privacy (P01-P05)
> sections are intentionally concise — expand them when onboarding additional policy types.

## Instructions

For each item, assess the policy and mark:
- ✅ **PASS** — The policy clearly addresses this requirement with sufficient detail
- ❌ **FAIL** — The policy does not address this requirement at all
- ⚠️ **PARTIAL** — The policy mentions this topic but lacks required specificity

## Security (Required)

| ID | Requirement | CC Ref | Status | Notes |
|----|------------|--------|--------|-------|
| S01 | Code of conduct / ethics policy exists | CC1.1 | | |
| S02 | Governance structure and policy oversight defined | CC1.2 | | |
| S03 | Security awareness training requirements | CC2.1 | | |
| S04 | External security communication procedures | CC2.2 | | |
| S05 | Annual risk assessment process defined | CC3.1 | | |
| S06 | Fraud risk assessment and segregation of duties | CC3.2 | | |
| S07 | Change-related risk assessment process | CC3.3 | | |
| S08 | Continuous monitoring and log review | CC4.1 | | |
| S09 | Deficiency remediation process and timelines | CC4.2 | | |
| S10 | Policy review and update cadence defined | CC5.3 | | |
| S11 | Authentication requirements (MFA, passwords) | CC6.1 | | |
| S12 | Access provisioning and de-provisioning | CC6.1 | | |
| S13 | Privileged access management | CC6.1 | | |
| S14 | Periodic access review cadence defined | CC6.2 | | |
| S15 | Role-based access control and least privilege | CC6.3 | | |
| S16 | System account lifecycle management | CC6.5 | | |
| S17 | Vulnerability scanning (quarterly+) | CC7.1 | | |
| S18 | Penetration testing (annual+) | CC7.1 | | |
| S19 | Incident classification and response procedures | CC7.2 | | |
| S20 | Post-incident review process | CC7.2 | | |
| S21 | Business continuity and disaster recovery plan | CC7.3 | | |
| S22 | Backup procedures and testing | CC7.3 | | |
| S23 | Change control process with approvals | CC8.1 | | |
| S24 | Vendor security assessment before onboarding | CC9.1 | | |
| S25 | Vendor contract security requirements | CC9.2 | | |

## Confidentiality

| ID | Requirement | Status | Notes |
|----|------------|--------|-------|
| C01 | Data classification scheme defined | | |
| C02 | Handling requirements per classification level | | |
| C03 | Encryption requirements (at rest and in transit) | | |
| C04 | Data retention and disposal procedures | | |

## Privacy

| ID | Requirement | Status | Notes |
|----|------------|--------|-------|
| P01 | Notice of data collection practices | | |
| P02 | Choice and consent mechanisms | | |
| P03 | Data subject access and correction rights | | |
| P04 | Disclosure to third parties documented | | |
| P05 | Data quality and integrity controls | | |

## Scoring

- **Full compliance**: All Security items PASS
- **Substantially compliant**: No FAIL in Security, some PARTIAL
- **Material gaps**: Any item in S11-S19 marked FAIL (critical controls)
- **Non-compliant**: 5+ Security items marked FAIL

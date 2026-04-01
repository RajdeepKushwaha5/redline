# SOC 2 Requirements — Policy Mapping

This document maps SOC 2 Trust Service Criteria to what organizational policies must address. Used by the gap-analysis skill to evaluate policy completeness.

SOC 2 is organized around five Trust Service Categories. We focus on **Security** (required for all SOC 2 reports) and **Confidentiality** and **Privacy** (commonly included). Each Common Criteria (CC) maps to specific policy requirements.

## CC1: Control Environment

### CC1.1: Integrity and Ethical Values
**Policy must define:**
- Code of conduct or ethics policy
- Process for reporting violations (whistleblower protections)
- Consequences for violations

### CC1.2: Board Oversight
**Policy must define:**
- Governance structure overseeing IT and security
- Roles and responsibilities for policy oversight
- Review cadence for security policies

## CC2: Communication and Information

### CC2.1: Internal Communication
**Policy must define:**
- How security policies are communicated to employees
- Security awareness training requirements and frequency
- Process for communicating policy changes

### CC2.2: External Communication
**Policy must define:**
- How security commitments are communicated to customers and vendors
- Incident notification procedures for external parties
- Public-facing security documentation (security page, trust center)

## CC3: Risk Assessment

### CC3.1: Risk Identification
**Policy must define:**
- Process for identifying risks to the achievement of objectives
- Frequency of risk assessments (at least annual)
- Categories of risk assessed (operational, security, compliance, financial)

### CC3.2: Fraud Risk
**Policy must define:**
- Assessment of fraud risk
- Controls to prevent and detect fraud
- Segregation of duties to reduce fraud opportunity

### CC3.3: Change-Related Risks
**Policy must define:**
- How risks from significant changes are assessed (new systems, acquisitions, regulatory changes)
- Change management process including risk evaluation

## CC4: Monitoring Activities

### CC4.1: Ongoing Monitoring
**Policy must define:**
- Continuous monitoring of security controls
- System logging and log review procedures
- Alert thresholds and escalation procedures

### CC4.2: Deficiency Remediation
**Policy must define:**
- Process for evaluating and remediating control deficiencies
- Timeline requirements for remediation by severity
- Tracking and verification of remediation completion

## CC5: Control Activities

### CC5.1: Risk Mitigation Controls
**Policy must define:**
- Controls mapped to identified risks
- Control ownership and accountability

### CC5.2: Technology General Controls
**Policy must define:**
- Infrastructure security controls
- Technology acquisition, development, and maintenance controls

### CC5.3: Policies and Procedures
**Policy must define:**
- How policies are approved, communicated, and maintained
- Policy review and update cadence (at least annual)
- Policy exception process

## CC6: Logical and Physical Access Controls

### CC6.1: Logical Access Security
**Policy must define:**
- User authentication requirements (MFA, password complexity)
- Access provisioning and de-provisioning procedures
- Privileged access management
- Session timeout and lockout policies

### CC6.2: Access Review
**Policy must define:**
- Periodic access review cadence (at least quarterly for privileged, semi-annual for standard)
- Process for reviewing and revoking unnecessary access
- Documentation of access review completion

### CC6.3: Role-Based Access
**Policy must define:**
- Role-based access control (RBAC) model
- Principle of least privilege
- Segregation of duties in system access

### CC6.4: Physical Access
**Policy must define:**
- Physical access controls for facilities housing systems and data
- Visitor management procedures
- Data center security requirements (or cloud provider requirements)

### CC6.5: System Account Management
**Policy must define:**
- Shared/service account management
- Account lifecycle (creation, modification, deactivation, deletion)
- Orphaned account detection and remediation

## CC7: System Operations

### CC7.1: Infrastructure Monitoring
**Policy must define:**
- System monitoring and alerting requirements
- Vulnerability scanning cadence (at least quarterly)
- Penetration testing cadence (at least annual)

### CC7.2: Incident Response
**Policy must define:**
- Incident classification and severity levels
- Response procedures for each severity level
- Roles and responsibilities during incidents
- Post-incident review process
- Communication plan (internal and external)

### CC7.3: Business Continuity
**Policy must define:**
- Business continuity plan
- Disaster recovery objectives (RPO, RTO)
- Backup procedures and testing cadence
- Failover and recovery testing

## CC8: Change Management

### CC8.1: Change Control Process
**Policy must define:**
- Change request, review, and approval process
- Testing requirements before production deployment
- Emergency change procedures
- Rollback procedures

## CC9: Risk Mitigation (Vendor Management)

### CC9.1: Vendor Risk Assessment
**Policy must define:**
- Vendor security assessment process before onboarding
- Vendor security requirements (SOC 2 report, security questionnaire)
- Ongoing vendor monitoring cadence
- Vendor offboarding and data return/destruction

### CC9.2: Vendor Agreements
**Policy must define:**
- Required contract terms (data protection, breach notification, audit rights)
- Sub-processor approval requirements
- SLA requirements

# Access Control Policy — Template

**Version:** [version]
**Effective Date:** [date]
**Last Reviewed:** [date]
**Owner:** [role/department]
**Approved By:** [name/role]

## 1. Purpose

This policy establishes the requirements for controlling logical and physical access to organizational systems, data, and facilities. It ensures that access is granted based on business need, follows least privilege principles, and is regularly reviewed.

## 2. Scope

This policy applies to all systems, applications, data, and facilities. It covers all employees, contractors, vendors, and any individuals requiring access to organizational resources.

## 3. Principles

- **Least Privilege**: Users receive only the minimum access necessary to perform their job functions
- **Need to Know**: Access to data is granted based on business need, not role seniority
- **Segregation of Duties**: No single individual should control all aspects of a critical process
- **Defense in Depth**: Multiple layers of access controls protect sensitive resources

## 4. User Account Management

### 4.1 Account Provisioning
- Access requests submitted via [ticketing system] with manager approval
- Accounts provisioned based on approved role profiles
- New accounts configured with minimum required permissions
- Provisioning completed within 2 business days of approved request

### 4.2 Account Modification
- Role changes require new access request and manager approval
- Previous role access removed within 1 business day of role change
- Temporary elevated access requires documented justification and expiration date

### 4.3 Account Deactivation
- Account deactivated within 4 hours of termination notification
- Voluntary departures: deactivation on last working day
- Involuntary departures: immediate deactivation
- Contractor accounts deactivated on contract end date
- All access tokens, certificates, and keys revoked along with account

### 4.4 Service and Shared Accounts
- Service accounts require designated owner and documented purpose
- Shared accounts are prohibited for production systems
- Service account credentials rotated per the credential management schedule
- Service accounts reviewed quarterly

## 5. Authentication Requirements

### 5.1 Passwords
- Minimum 12 characters with complexity requirements (uppercase, lowercase, number, special character)
- Password history: last 12 passwords may not be reused
- Maximum password age: 90 days (365 days if MFA is enabled)
- Account lockout after 5 failed attempts for 30 minutes

### 5.2 Multi-Factor Authentication
- MFA required for: all remote access, privileged accounts, cloud service admin consoles, email (when accessed externally), VPN connections
- Approved MFA methods: hardware security keys (preferred), authenticator apps, push notifications
- SMS-based MFA is not approved for privileged or admin accounts

### 5.3 Session Management
- Automatic session timeout after 15 minutes of inactivity
- Re-authentication required for privileged actions
- Concurrent session limits enforced for sensitive systems

## 6. Access Reviews

| Review Type | Scope | Frequency | Reviewer |
|-------------|-------|-----------|----------|
| Privileged access | Admin, root, elevated accounts | Quarterly | Security team + system owner |
| Standard access | All user accounts | Semi-annually | People manager |
| Service accounts | Non-human accounts | Quarterly | Account owner |
| Third-party access | Vendor and contractor accounts | Quarterly | Vendor manager |

Access reviews must be documented with: reviewer name, date, accounts reviewed, action taken (confirmed/revoked/modified), and justification.

## 7. Privileged Access Management

- Privileged accounts are separate from day-to-day user accounts
- Privileged access granted only through a Privileged Access Management (PAM) system
- Just-in-time access: privileged access granted for a set duration and automatically revoked
- All privileged sessions are logged and available for audit
- Privileged access requires additional approval from the security team

## 8. Remote Access

- Remote access requires VPN with MFA
- Split tunneling is prohibited
- Remote access sessions are logged and monitored
- Access from unmanaged devices is limited to virtual desktop / browser-based access only

## 9. Physical Access

- Facilities secured with access control systems (badge/biometric)
- Visitor access requires escort and sign-in/sign-out log
- Server rooms and data centers restricted to authorized personnel
- Physical access logs retained for 1 year
- Physical access reviewed semi-annually

## 10. Data Access

- Data access governed by the data classification policy
- **Restricted data**: access controlled individually, logged, and reviewed quarterly
- **Confidential data**: access controlled by role, reviewed semi-annually
- **Internal data**: access available to authenticated employees
- **Public data**: no access restrictions

## 11. Network Access

- Network segmented by function and data sensitivity
- Guest networks isolated from production networks
- Network access control (NAC) enforced — unauthenticated devices cannot connect
- Firewall rules reviewed quarterly

## 12. Policy Review

This policy is reviewed annually or when significant changes in technology or risk landscape occur. Updates follow the organization's policy change management process.

---

*This document is an internal policy. Violations may result in disciplinary action.*

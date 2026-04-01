# Access Control Policy

**Version:** 1.6
**Effective Date:** June 1, 2023
**Last Reviewed:** April 1, 2026
**Owner:** Information Security
**Approved By:** CISO

## 1. Purpose

This policy establishes requirements for controlling access to Acme Corp information systems, applications, and data to protect the confidentiality, integrity, and availability of company information.

## 2. Scope

This policy applies to all employees, contractors, and third parties who access Acme Corp information systems.

## 3. Account Management

### 3.1 Account Provisioning
- Access requests must be submitted through ITSM and approved by the employee's manager
- Access is granted based on the principle of least privilege
- Shared accounts are acceptable for non-sensitive systems
- Service accounts must have an assigned owner

### 3.2 Account Deprovisioning
- Access must be revoked upon termination
- For voluntary departures, access should be revoked within 5 business days
- For involuntary terminations, access should be revoked within 24 hours

## 4. Authentication

### 4.1 Passwords
- Minimum length: 12 characters
- Must contain at least one uppercase letter, one number, and one special character
- Must be changed every 90 days (or 365 days when MFA is enabled)
- Last 12 passwords cannot be reused
- Account lockout after 5 failed attempts for 30 minutes

### 4.2 Multi-Factor Authentication
- **MFA is required for all remote access**
- MFA is required for all administrative and privileged accounts
- MFA is required for accessing Confidential and Restricted data
- Approved MFA methods: hardware security keys (preferred), authenticator apps (TOTP-based), push notifications
- SMS-based MFA is not approved for privileged or sensitive access

## 5. Access Reviews

- Privileged access reviews must be conducted **quarterly**
- Manager access reviews must be conducted **semi-annually**
- Service account reviews must be conducted quarterly
- Findings from reviews must be remediated within 30 days (critical) or 90 days (standard)

## 6. Remote Access

- Remote access is available using the company VPN
- Personal devices may access company resources over VPN with manager and CISO approval, subject to MDM enrollment
- Remote sessions should be from secure network locations
- Split tunneling is permitted with IT approval

## 7. Privileged Access

- Administrative access must be justified by job role
- Privileged users should avoid using admin accounts for routine tasks
- Logging is enabled for all privileged actions

## 8. Third-Party Access

- Third-party access requires a signed agreement
- Access is limited to the minimum necessary
- Third-party access must be reviewed periodically

## 9. Physical Access

- Physical access to data centers requires badge access
- Visitors must sign in and be escorted
- Access logs are maintained for 6 months

## 10. Data Access

- Data access is classified as Public, Internal, Confidential, or Restricted
- Access to Confidential and Restricted data requires additional approval
- Data access follows role-based access control

## 11. Policy Review

This policy is reviewed annually. Next review date: June 2024.

---

*This is an internal company policy.*

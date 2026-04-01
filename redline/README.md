# redline

**AI-powered policy governance that lives in your git repo.**

redline is a [gitagent](https://github.com/nichochar/gitagent)-standard AI agent that manages compliance policies using git as the source of truth. It drafts, reviews, validates, and audits policies against GDPR and SOC2 frameworks — with strict segregation of duties enforced at every step.

## Why Git?

Compliance policies are documents. Git is the best document version control system ever built. redline makes that connection explicit:

- **`git diff`** = the redline markup (the tool's namesake — "redlining" a document)
- **`git blame`** = who changed what and when (audit trail)
- **`git log`** = full history of every policy decision
- **Branches** = draft vs. approved policy states
- **Tags** = certified policy versions
- **PRs** = the review and approval workflow

No database. No SaaS dashboard. Just files, diffs, and an immutable audit log.

## Architecture

```
redline/
├── agent.yaml                    # Main agent manifest (gitagent spec v0.1.0)
├── SOUL.md                       # Agent identity and values
├── RULES.md                      # Hard constraints
├── DUTIES.md                     # System-wide SOD policy
├── AGENTS.md                     # Sub-agent documentation
│
├── agents/                       # Sub-agents with SOD roles
│   ├── drafter/                  #   maker  — writes policy content
│   ├── reviewer/                 #   checker — evaluates quality
│   ├── compliance-checker/       #   executor — validates compliance
│   └── auditor/                  #   auditor — immutable record-keeping
│
├── skills/                       # Agent capabilities
│   ├── gap-analysis/             # Compare policy vs. framework
│   ├── draft-policy/             # Write/update with REDLINE annotations
│   ├── review-policy/            # 5-dimension quality review
│   ├── compliance-check/         # Checklist validation scorecard
│   └── audit-report/             # Immutable audit record creation
│
├── knowledge/                    # Regulatory reference material
│   ├── frameworks/
│   │   ├── gdpr/                 # GDPR requirements + checklist
│   │   └── soc2/                 # SOC2 requirements + checklist
│   └── templates/                # Gold-standard policy templates
│
├── workflows/                    # SkillsFlow definitions
│   └── policy-update-flow.yaml   # Full lifecycle: gap → draft → review → check → audit
│
├── policies/                     # Managed policy documents (version-controlled)
│   ├── data-privacy.md
│   ├── acceptable-use.md
│   └── access-control.md
│
├── compliance/                   # Compliance configuration
│   ├── regulatory-map.yaml       # Policy-to-framework mapping
│   └── validation-schedule.yaml  # Review cadence
│
├── hooks/                        # Lifecycle hooks
│   ├── hooks.yaml
│   ├── load-policies.sh
│   ├── validate-metadata.sh
│   └── log-error.sh
│
├── tools/                        # Custom tool definitions
│   └── policy-scanner.yaml
│
├── memory/                       # Persistent audit log
│   ├── memory.yaml
│   └── MEMORY.md                 # Append-only audit entries
│
├── config/
│   └── default.yaml              # Default configuration
│
└── examples/                     # Example outputs for reference
    ├── good-outputs.md
    └── bad-outputs.md
```

## Segregation of Duties (SOD)

redline enforces four distinct roles. No agent can perform conflicting roles in the same workflow:

| Role | Agent | Can Do | Cannot Do |
|------|-------|--------|-----------|
| **Maker** | drafter | Write/update policies | Review, approve, audit |
| **Checker** | reviewer | Evaluate and approve/reject | Draft, validate, audit |
| **Executor** | compliance-checker | Run compliance checks | Draft, approve, audit |
| **Auditor** | auditor | Record audit entries | Draft, review, validate |

**Conflict matrix:** maker ≠ checker, maker ≠ auditor, executor ≠ maker, executor ≠ auditor.

## Quick Start

### With gitclaw (local directory)

```bash
# Clone the repo
git clone <repo-url> redline
cd redline

# Set your Google Gemini API key (free tier)
export GOOGLE_API_KEY="your-key-here"

# Run a gap analysis on the demo data-privacy policy
npx gitclaw --dir . "Run a gap analysis on policies/data-privacy.md against GDPR"

# Run the full policy update workflow
npx gitclaw --dir . "Run the policy-update-flow workflow for policies/data-privacy.md against gdpr"

# Scan all policies
npx gitclaw --dir . "Use the policy-scanner tool to scan all policies"
```

### With gitclaw (GitHub repo)

```bash
npx gitclaw --repo owner/redline "Run a gap analysis on policies/data-privacy.md against GDPR"
```

### With clawless (browser)

Visit [play.clawless.io](https://play.clawless.io) and point it at the repo.

## Demo Script

The included demo policies have intentional gaps designed to showcase redline's capabilities:

1. **Gap Analysis** — `policies/data-privacy.md` is missing GDPR Art. 22 (automated decision-making), Art. 20 (data portability), cross-border transfer rules, and has vague retention periods
2. **Cross-Policy Contradictions** — `acceptable-use.md` §4.2 bans personal devices entirely, while `access-control.md` §6 allows them over VPN. The reviewer catches this.
3. **SOC2 Gaps** — `access-control.md` has weak password requirements (8 chars), MFA only "recommended," annual-only access reviews, and allows shared accounts
4. **Full Workflow** — Run the policy-update-flow to see all four agents collaborate with SOD enforcement and audit logging

## Frameworks Supported

- **GDPR** — 12 requirements (R1-R12), 22-item checklist
- **SOC2** — CC1-CC9 trust service criteria, 34-item checklist (Security, Confidentiality, Privacy)

## Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Model provider | Google Gemini (free tier) | gemini-2.5-flash preferred, gemini-2.0-flash fallback — zero cost |
| Knowledge format | Markdown + YAML | Human-readable, git-diffable, no binary formats |
| Audit log | Append-only markdown | `git log` provides immutable history |
| SOD enforcement | Strict (agent-level) | Meeting compliance requirements, not just suggesting them |
| Temperature | 0.0-0.2 | Compliance work requires determinism, not creativity |
| Scope | GDPR + SOC2 only | Depth over breadth for hackathon demo |

## License

MIT

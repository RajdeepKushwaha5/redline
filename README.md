# redline

**AI-powered policy governance that lives in your git repo.**

> Built for the [gitagent hackathon](https://github.com/open-gitagent/gitagent) — defined with [gitagent](https://github.com/open-gitagent/gitagent), powered by [gitclaw](https://github.com/open-gitagent/gitclaw).

---

redline turns scattered, outdated company policies into version-controlled, auditable, regulation-compliant documents. It enforces **segregation of duties** across four specialized sub-agents — no single agent can draft, review, validate, and audit the same policy change.

## What It Does

| Skill | Description |
|-------|-------------|
| **Gap Analysis** | Compare any policy against GDPR / SOC 2 requirements and produce severity-rated findings |
| **Draft Policy** | Write or update policy sections with `REDLINE` change annotations |
| **Review Policy** | 5-dimension quality scorecard (clarity, completeness, consistency, regulatory accuracy, actionability) |
| **Compliance Check** | Validate against regulatory checklists — structured pass/fail/partial scorecard |
| **Audit Report** | Immutable audit trail for every change in the policy lifecycle |

## Segregation of Duties

| Role | Agent | Responsibility |
|------|-------|----------------|
| Maker | `drafter` | Writes policy content |
| Checker | `reviewer` | Evaluates and approves/rejects |
| Executor | `compliance-checker` | Validates against frameworks |
| Auditor | `auditor` | Creates immutable audit records |

No agent can perform conflicting roles. The conflict matrix is enforced at every workflow step.

## Quick Start

```bash
# Install dependencies
npm install

# Set your API key
export GOOGLE_API_KEY="your-gemini-api-key"
export GEMINI_API_KEY="your-gemini-api-key"

# Validate the agent
npx gitagent validate --dir ./redline
npx gitagent info --dir ./redline

# Run the agent
npx gitclaw --dir ./redline

# One-shot: gap analysis on the demo data
npx gitclaw --dir ./redline -p "Run a gap analysis on policies/data-privacy.md against GDPR"
```

## Demo

The included policies have **intentional compliance gaps** that showcase redline's detection capabilities:

- `data-privacy.md` — missing GDPR Art. 22 (automated decisions), Art. 20 (portability), vague retention periods
- `acceptable-use.md` vs `access-control.md` — contradictory BYOD rules (one bans, one permits)
- `access-control.md` — weak passwords (8 chars), MFA only "recommended", annual-only reviews

Run the full workflow to see all four agents collaborate:
```bash
npx gitclaw --dir ./redline -p "Run the policy-update-flow workflow for policies/data-privacy.md against gdpr"
```

## Tech Stack

| Component | Choice |
|-----------|--------|
| Agent spec | [gitagent v0.1.0](https://github.com/open-gitagent/gitagent) |
| Runtime | [gitclaw](https://github.com/open-gitagent/gitclaw) |
| Model | Google Gemini 2.5 Flash (free tier) |
| Frameworks | GDPR (22-item checklist) + SOC 2 (34-item checklist) |

## Project Structure

```
redline/
├── agent.yaml          # Agent manifest
├── SOUL.md             # Identity and values  
├── RULES.md            # Hard constraints
├── DUTIES.md           # SOD policy
├── agents/             # 4 sub-agents (drafter, reviewer, compliance-checker, auditor)
├── skills/             # 5 skills with detailed instructions
├── knowledge/          # GDPR + SOC2 frameworks, checklists, templates
├── policies/           # 3 demo policies with intentional gaps
├── workflows/          # Full policy lifecycle workflow
├── tools/              # Custom policy-scanner tool
├── hooks/              # Lifecycle hooks (load, validate, log-error)
├── compliance/         # Risk assessment, regulatory map, schedule
└── memory/             # Append-only audit log
```

See [redline/README.md](redline/README.md) for detailed architecture documentation.

## License

MIT

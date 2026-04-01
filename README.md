# redline

**AI-powered policy governance — where every compliance gap becomes a git diff.**

[![gitagent](https://img.shields.io/badge/gitagent-v0.1.0-blue)](https://github.com/open-gitagent/gitagent)
[![clawless](https://img.shields.io/badge/clawless-browser%20ready-green)](https://play.clawless.io)
[![frameworks](https://img.shields.io/badge/frameworks-GDPR%20%7C%20SOC2-orange)](./knowledge/frameworks)
[![CI](https://github.com/RajdeepKushwaha5/redline/actions/workflows/validate.yml/badge.svg)](https://github.com/RajdeepKushwaha5/redline/actions/workflows/validate.yml)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](#)

> Built for the [gitagent hackathon](https://github.com/open-gitagent/gitagent) — defined with [gitagent](https://github.com/open-gitagent/gitagent), powered by [gitclaw](https://github.com/open-gitagent/gitclaw), deployable in-browser via [clawless](https://play.clawless.io).

---

## The Problem

Every organization has policies — data privacy, access control, acceptable use — but most of them are:

- Written once, never updated
- Stored in a shared drive no one checks
- Manually verified once a year, by a consultant, using a spreadsheet
- **Out of sync with each other** — one policy allows BYOD; another bans it
- Not traceable — no one knows who approved what, or when

When a regulator asks *"show me your GDPR compliance"*, the answer is usually a PDF from three years ago that no one has verified against the actual regulation.

**redline fixes this.**

---

## What It Does

redline is a multi-agent AI governance system that treats policies like code — version-controlled, automatically validated, and auditable. It enforces **segregation of duties** so no single agent can create, review, and certify its own work.

The name comes from **redlining a document** — the legal practice of marking proposed changes in red ink. Every policy update redline produces is annotated so a human reviewer can see exactly what changed and why.

## Use Cases

### 1. GDPR Gap Analysis in Seconds
You have a data privacy policy. Is it actually GDPR-compliant? redline reads the policy, checks it against a 22-item GDPR checklist, and returns a structured findings report with severity ratings (CRITICAL / HIGH / MEDIUM) and specific article citations — no lawyer needed.

```
Run gap-analysis on policies/data-privacy.md against the GDPR framework
```

### 2. SOC2 Compliance Scorecard
Preparing for a SOC2 audit? redline validates your access control policy against all 34 SOC2 Security criteria and produces a ✅/❌/⚠️ scorecard you can hand directly to an auditor.

```
Run compliance-check on policies/access-control.md against SOC2
```

### 3. Automated Policy Drafting with Change Annotations
Gap analysis found 6 CRITICAL issues in your data privacy policy. Instead of manually rewriting it, the drafter agent fixes them and annotates every change with `<!-- REDLINE: ... -->` comments so a human reviewer can trace each modification to its regulatory requirement.

```
Draft fixes for the CRITICAL gaps found in policies/data-privacy.md
```

### 4. Policy Review with Segregation of Duties
The same agent that wrote a policy cannot approve it. redline enforces a four-agent SOD chain — **Drafter → Reviewer → Compliance Checker → Auditor** — and the reviewer scores across five dimensions before rendering a formal APPROVED / REJECTED decision.

### 5. Cross-Policy Contradiction Detection
The reviewer agent reads all active policies simultaneously and flags contradictions. For example: one policy allows BYOD with manager approval; another bans personal devices entirely. These contradictions are caught before they become a compliance incident.

### 6. Immutable Audit Trail
Every workflow step — every gap analysis, draft, review decision, and compliance score — is logged to `memory/MEMORY.md` as an append-only record with timestamps, agent IDs, and decision rationale. 7-year retention, structured JSON.

---

## Policies as Code — CI/CD Integration

Every push to `main` that touches `policies/`, `skills/`, `knowledge/`, or `agent.yaml` triggers an automated compliance pipeline via GitHub Actions:

```
git push  →  GitHub Actions
              ├── gitagent validate --compliance   (0 errors = green)
              ├── gitagent info                    (agent summary printed)
              ├── version header check per policy  (no undated policy survives a PR)
              └── framework checklist presence     (GDPR + SOC2 checklists must exist)
```

This means a policy with a missing version header or a broken agent spec **cannot be merged to main**. The policies in this repo are held to the same standard as application code.

See [`.github/workflows/validate.yml`](.github/workflows/validate.yml) for the full pipeline definition.

---

## Demo Video

[![Watch the demo](https://img.shields.io/badge/demo-Google%20Drive-blue)](https://drive.google.com/file/d/1aW-8jwZDLajvxq_FN8oO3VLGLx1KG1EH/view?usp=sharing)

[▶ Watch the full demo (Google Drive)](https://drive.google.com/file/d/1aW-8jwZDLajvxq_FN8oO3VLGLx1KG1EH/view?usp=sharing)

---

## How It Works

```
policies/ (git repo)
      │
      ▼
compliance-checker  →  gap findings (22 GDPR / 34 SOC2 items)
      │
      ▼
drafter             →  updated policy draft with REDLINE annotations
      │
      ▼
reviewer            →  APPROVED / REJECTED (5-dimension scorecard)
      │
      ▼
compliance-checker  →  final regulatory scorecard
      │
      ▼
auditor             →  immutable entry in memory/MEMORY.md
```

---

## Segregation of Duties

No agent can perform conflicting roles. The conflict matrix is enforced at every workflow step.

| Agent | SOD Role | Can Do | Cannot Do |
|---|---|---|---|
| `drafter` | **Maker** | Write and modify policies | Review or approve own work |
| `reviewer` | **Checker** | Evaluate and approve/reject | Draft policies |
| `compliance-checker` | **Executor** | Validate against checklists | Draft or approve |
| `auditor` | **Auditor** | Create immutable audit records | Draft, review, or execute |

---

## What It Detects (Demo Policies)

The included policies contain **intentional compliance gaps** to demonstrate detection. Run gap-analysis or compliance-check on any of them to see redline in action:

| Policy | Version | Remaining Gaps (for demo) |
|---|---|---|
| `data-privacy.md` | v1.3 | Missing GDPR Art. 22 (automated decisions), Art. 20 (portability), Art. 37-39 (DPO), Art. 35 (DPIA) |
| `access-control.md` | v1.6 | Missing breach notification timeline (Art. 33), no DPIA trigger criteria |
| `acceptable-use.md` | v2.1 | No data classification requirements, no incident reporting obligations |

---

## Quick Start

### Option A — Local (CLI)

```bash
git clone https://github.com/RajdeepKushwaha5/redline.git
cd redline
npm install

# Free Gemini API key: https://aistudio.google.com/apikey
export GOOGLE_API_KEY="your-key-here"
export GEMINI_API_KEY="your-key-here"

# Validate the agent spec (should show all green)
npx gitagent validate --compliance --dir .

# Start the interactive agent
npx gitclaw

# Or run a task directly
npx gitclaw -p "Run gap-analysis on policies/data-privacy.md against the GDPR framework"
```

### Option B — Browser (zero install via [clawless](https://play.clawless.io))

1. Go to **[play.clawless.io](https://play.clawless.io)**
2. Enter repo: `RajdeepKushwaha5/redline`
3. Under **API Keys & Config**, add:
   - `GOOGLE_AI_API_KEY` = your Gemini key
   - `GITHUB_TOKEN` = GitHub personal access token (repo read scope)
4. Click **Save & Connect**

Boots entirely in your browser — no install, no server, fully sandboxed via WebAssembly.

---

## Example Prompts

```
Run gap-analysis on policies/data-privacy.md against the GDPR framework
Run compliance-check on policies/access-control.md against SOC2
Use the policy-scanner tool to scan all policies
Run the policy-update-flow workflow on policies/data-privacy.md
Draft updates to fix the CRITICAL GDPR gaps in policies/data-privacy.md
Review policies/data-privacy.md for cross-policy consistency
Generate an audit report for the last policy update
```

---

## Project Structure

```
redline/
├── agent.yaml                  # Root agent (gitagent spec v0.1.0)
├── SOUL.md                     # Agent identity and values
├── RULES.md                    # Operational constraints
├── DUTIES.md                   # SOD assignments and conflict matrix
├── AGENTS.md                   # Sub-agent definitions
├── skills/                     # Five specialized skills
│   ├── gap-analysis/
│   ├── compliance-check/
│   ├── draft-policy/
│   ├── review-policy/
│   └── audit-report/
├── agents/                     # Four sub-agents (SOD enforced)
│   ├── drafter/                # Maker
│   ├── reviewer/               # Checker
│   ├── compliance-checker/     # Executor
│   └── auditor/                # Auditor
├── tools/
│   └── policy-scanner.js       # Scans all policies, produces summary table
├── hooks/
│   ├── load-policies.js        # on_session_start: loads active policies
│   ├── validate-metadata.js    # pre_tool_use: validates metadata headers
│   └── log-error.js            # on_error: appends to audit log
├── policies/                   # Live policy documents
│   ├── data-privacy.md         # GDPR-relevant (v1.3)
│   ├── access-control.md       # SOC2-relevant (v1.6)
│   └── acceptable-use.md       # SOC2-relevant (v2.1)
├── knowledge/
│   ├── frameworks/gdpr/        # 22-item GDPR checklist + requirements
│   ├── frameworks/soc2/        # 34-item SOC2 checklist + requirements
│   └── templates/              # Reference policy templates
├── workflows/
│   └── policy-update-flow.yaml # End-to-end 4-agent workflow
├── compliance/                 # Risk assessment and regulatory mapping
├── memory/                     # Append-only audit log (MEMORY.md)
└── config/                     # Default configuration
```

---

## Tech Stack

| Component | Purpose |
|---|---|
| [gitagent](https://github.com/open-gitagent/gitagent) | Agent specification format (v0.1.0) |
| [gitclaw](https://github.com/open-gitagent/gitclaw) | Local CLI runtime |
| [clawless](https://play.clawless.io) | Browser runtime (WebContainer/WASM, zero install) |
| Google Gemini 2.5 Flash | LLM (free tier) |
| Node.js | Hooks and tools (WebContainer compatible) |
| git | Source of truth for all policies |
| Runtime (browser) | [clawless](https://play.clawless.io) via WebContainers |
| Model | Google Gemini 2.5 Flash (free tier) |
| Hooks & Tools | Node.js only — WebContainer compatible |
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

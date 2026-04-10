<div align="center">

# redline

**AI-powered policy governance — where every compliance gap becomes a git diff.**

[![gitagent](https://img.shields.io/badge/gitagent-v0.1.0-blue)](https://github.com/open-gitagent/gitagent)
[![clawless](https://img.shields.io/badge/clawless-browser%20ready-green)](https://play.clawless.io)
[![frameworks](https://img.shields.io/badge/frameworks-GDPR%20%7C%20SOC2-orange)](./knowledge/frameworks)
[![CI](https://github.com/RajdeepKushwaha5/redline/actions/workflows/validate.yml/badge.svg)](https://github.com/RajdeepKushwaha5/redline/actions/workflows/validate.yml)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](#)

*Built for the [gitagent hackathon](https://github.com/open-gitagent/gitagent) — defined with [gitagent](https://github.com/open-gitagent/gitagent), powered by [gitclaw](https://github.com/open-gitagent/gitclaw), deployable in-browser via [clawless](https://play.clawless.io).*

[Quick Start](#-quick-start) · [Features](#-features-at-a-glance) · [Demo Video](#-demo-video) · [How It Works](#-how-it-works) · [Example Prompts](#-example-prompts)

</div>

---

## The Problem

Every organization has policies — data privacy, access control, acceptable use, incident response — but most of them are:

- **Written once, never updated** — sitting in a shared drive no one checks
- **Manually verified** once a year, by a consultant, using a spreadsheet
- **Out of sync with each other** — one policy allows BYOD; another bans personal devices entirely
- **Not traceable** — no one knows who approved what, when, or why

When a regulator asks *"show me your GDPR compliance"*, the answer is usually a PDF from three years ago that no one has verified against the actual regulation.

**redline fixes this.** It treats policies like code — version-controlled in git, automatically validated against regulatory checklists, and auditable through an immutable trail. No single agent can create, review, and certify its own work.

The name comes from **redlining a document** — the legal practice of marking proposed changes in red ink. Every policy update redline produces is annotated with `<!-- REDLINE: ... -->` comments so a human reviewer can see exactly what changed and why.

---

## 🎬 Demo Video

[![Watch the demo](https://img.shields.io/badge/▶_Watch_Demo-Google_Drive-blue?style=for-the-badge&logo=googledrive)](https://drive.google.com/file/d/1aW-8jwZDLajvxq_FN8oO3VLGLx1KG1EH/view?usp=sharing)

---

## 🚀 Quick Start

### Option A — Local (CLI)

```bash
git clone https://github.com/RajdeepKushwaha5/redline.git
cd redline
npm install

# Free Gemini API key: https://aistudio.google.com/apikey
export GOOGLE_API_KEY="your-key-here"

# Validate the agent spec (should show all green ✓)
npx gitagent validate --compliance --dir .

# Start the interactive agent
npx gitclaw

# Or run a single task
npx gitclaw -p "Run gap-analysis on policies/data-privacy.md against the GDPR framework"
```

### Option B — Browser (zero install via [clawless](https://play.clawless.io))

1. Go to **[play.clawless.io](https://play.clawless.io)**
2. Enter repo: `RajdeepKushwaha5/redline`
3. Add your `GOOGLE_AI_API_KEY` (free Gemini key) and `GITHUB_TOKEN` (repo read scope)
4. Click **Save & Connect**

Boots entirely in your browser via WebAssembly — no install, no server, fully sandboxed.

### NPM Scripts

```bash
npm start          # Launch interactive agent (gitclaw)
npm test           # Run gap-analysis on data-privacy.md against GDPR
npm run scan       # Scan all policies with policy-scanner tool
npm run workflow   # Run the full policy-update-flow workflow
npm run validate   # Validate agent spec (gitagent validate --compliance)
```

---

## ✨ Features at a Glance

| # | Feature | What It Does |
|---|---------|-------------|
| 1 | [Gap Analysis](#1-gap-analysis) | Scans a policy against a regulatory checklist and reports every missing requirement with severity ratings |
| 2 | [Compliance Scorecard](#2-compliance-scorecard) | Produces a ✅/❌/⚠️ scorecard per checklist item — ready to hand to an auditor |
| 3 | [Automated Drafting](#3-automated-policy-drafting) | Fixes compliance gaps and annotates every change with REDLINE comments tracing back to the regulation |
| 4 | [Policy Review](#4-policy-review--5-dimension-scoring) | Scores policies across 5 dimensions and renders APPROVED / APPROVED WITH COMMENTS / REJECTED |
| 5 | [Cross-Policy Contradiction Detection](#5-cross-policy-contradiction-detection) | Reads all policies simultaneously and flags contradictions between them |
| 6 | [Policy Scanner](#6-policy-scanner-tool) | Scans all policy files and produces a JSON summary with metadata status and issue count |
| 7 | [Immutable Audit Trail](#7-immutable-audit-trail) | Every workflow step is logged to an append-only audit log with timestamps, agents, and SOD verification |
| 8 | [Segregation of Duties](#-segregation-of-duties) | Four agents with strict role separation — the agent that writes a policy can never approve it |
| 9 | [Lifecycle Hooks](#9-lifecycle-hooks) | Auto-loads policies at session start, blocks writes without metadata, logs all errors to the audit trail |
| 10 | [CI/CD Pipeline](#10-policies-as-code--cicd) | Every push validates the agent spec, checks policy metadata headers, and runs the policy scanner |
| 11 | [End-to-End Workflow](#11-end-to-end-policy-update-workflow) | Automated pipeline: gap-analysis → draft → review → compliance-check → audit — with SOD at every step |
| 12 | [Good/Bad Output Examples](#12-few-shot-learning-examples) | Few-shot examples teaching the LLM what quality output looks like and what to avoid |

---

## Feature Details

### 1. Gap Analysis

Compares a policy against a regulatory framework's requirements and produces a structured findings report. Each gap is tagged with a severity level and the specific regulation article it violates.

```
Run gap-analysis on policies/data-privacy.md against the GDPR framework
```

**What you get:** A table with every checklist item marked PASS / PARTIAL / FAIL, plus severity-rated recommended actions citing specific articles (e.g., "GDPR Art. 22(1)").

- **GDPR**: 22 checklist items covering Art. 5-49 (lawful basis, data subject rights, breach notification, cross-border transfers, DPIAs, DPO, processor agreements)
- **SOC2**: 34 checklist items across Security (S01-S25), Confidentiality (C01-C04), and Privacy (P01-P05) categories

### 2. Compliance Scorecard

Validates a policy against a framework checklist and produces a formatted scorecard with ✅ PASS / ❌ FAIL / ⚠️ PARTIAL per item, plus an overall compliance percentage.

```
Run compliance-check on policies/access-control.md against SOC2
```

**What you get:** A scorecard like `10/34 PASS (29.41%) — NON-COMPLIANT` with evidence references (e.g., "Section 4", "Section 7.3") for each passing item, and certification status.

### 3. Automated Policy Drafting

The **drafter** agent (Maker role) takes gap analysis findings and writes new policy sections to address them. Every change is wrapped in `<!-- REDLINE: Added to address Art. 20 Data Portability, GDPR Art. 20 -->` comments so a human reviewer can trace each modification to its regulatory source.

```
Draft updates to fix the CRITICAL GDPR gaps in policies/data-privacy.md
```

**What you get:** The policy file is updated in-place with new sections. The drafter matches the tone and structure of the existing document — it doesn't rewrite the whole policy, it surgically inserts what's missing.

### 4. Policy Review — 5-Dimension Scoring

The **reviewer** agent (Checker role) evaluates a policy across five dimensions and renders a formal decision:

| Dimension | What it measures |
|-----------|-----------------|
| **Clarity** | Is the policy readable by the humans who must follow it? |
| **Completeness** | Does it cover all required topics for its regulatory scope? |
| **Consistency** | Does it align with other active policies (cross-policy check)? |
| **Regulatory Accuracy** | Are regulatory citations correct and requirements properly addressed? |
| **Structural Integrity** | Does it follow proper policy structure (purpose, scope, sections, review)? |

Each dimension is scored /10. The reviewer then renders: **APPROVED**, **APPROVED WITH COMMENTS**, or **REJECTED**.

```
Review policies/incident-response.md for quality and cross-policy consistency
```

### 5. Cross-Policy Contradiction Detection

During review, the reviewer reads **all active policies simultaneously** and flags contradictions. Examples:

- One policy requires 72-hour breach notification; another says "promptly"
- Access control policy mandates MFA for all users; acceptable use policy only requires it for admins
- Data privacy policy references a DPO; no other policy mentions the role

These contradictions are caught before they become a compliance incident during an actual audit.

### 6. Policy Scanner Tool

A custom tool (`tools/policy-scanner.js`) that scans all `.md` files in `policies/` and produces a JSON report:

```json
{
  "report": "# Policy Scan Report\n\n| Policy | Version | Owner | ...",
  "policy_count": 4,
  "issues_found": 0
}
```

It checks for:
- **Version** metadata (extracted from `**Version:**` header)
- **Owner** metadata
- **Last Reviewed** date
- Required sections: Purpose, Scope, Policy Review

The tool schema (`policy-scanner.yaml`) includes `output_schema`, `annotations` (read-only, no confirmation needed, low cost), and `timeout` — fully compliant with the gitagent tool specification.

### 7. Immutable Audit Trail

Every workflow step produces an audit entry in `memory/MEMORY.md`:

```markdown
## Entry #003 — Policy Review for data-privacy.md

| Field | Value |
|-------|-------|
| **Timestamp** | 2026-04-08T09:22:11Z |
| **Agent** | reviewer |
| **SOD Role** | checker |
| **Outcome** | APPROVED WITH COMMENTS |
| **SOD Verified** | ✅ No violations — drafter (maker) ≠ reviewer (checker) |
```

- **Append-only**: entries are never modified or deleted
- **SOD verification**: each entry confirms no role conflicts occurred
- **Chain of actions**: entries reference the full workflow chain (e.g., `gap-analysis (#001) → draft-policy (#002) → review-policy (#003)`)
- **7-year retention** with monthly archive rotation
- **JSON schema**: every entry structure is validated against `compliance/audit-log.schema.json`

### 8. Segregation of Duties

See the [dedicated section below](#-segregation-of-duties).

### 9. Lifecycle Hooks

Three hooks run automatically at specific lifecycle events. All follow the gitagent Hook Script Protocol (JSON stdin → JSON stdout):

| Hook | Trigger | What It Does |
|------|---------|-------------|
| `load-policies.js` | `on_session_start` | Reads `policies/` directory, extracts version metadata from each file, injects `active_policies` array into the agent's context |
| `validate-metadata.js` | `pre_tool_use` | Intercepts writes to `policies/*.md` — checks that the content contains all 4 required headers (Version, Effective Date, Owner, Approved By). **Blocks the write** if any header is missing |
| `log-error.js` | `on_error` | Appends a structured error entry to `memory/MEMORY.md` with timestamp, agent name, error message, and source |

Each hook returns `{ "action": "allow" | "block", "modifications": ..., "audit": { "logged": true, "note": "..." } }`.

### 10. Policies as Code — CI/CD

Every push to `main` that touches policy-related files triggers a GitHub Actions pipeline:

```
git push  →  GitHub Actions
              ├── gitagent validate --compliance    (agent spec validation)
              ├── gitagent info                     (agent summary)
              ├── Policy metadata check             (Version, Effective Date, Owner, Approved By)
              ├── Policy scanner execution           (run tool, verify output)
              ├── Hook file validation               (all 3 hooks exist)
              └── Framework checklist presence       (GDPR + SOC2 checklists)
```

A policy with a missing version header or a broken agent spec **cannot be merged to main**. Policies are held to the same standard as application code.

### 11. End-to-End Policy Update Workflow

The `policy-update-flow` workflow chains all agents in a SOD-enforced pipeline:

```
Step 1: Gap Analysis       (compliance-checker / executor)
    ↓
Step 2: Draft Updates      (drafter / maker)
    ↓                      ← on_rejected: goto step 2 (max 2 retries)
Step 3: Quality Review     (reviewer / checker)
    ↓
Step 4: Compliance Check   (compliance-checker / executor)
    ↓
Step 5: Audit Record       (auditor / auditor)
```

Each step has `depends_on` constraints, SOD role assignment, and defined inputs/outputs. The workflow handles rejection loops — if the reviewer rejects a draft, it goes back to the drafter (up to 2 retries).

```
Run the policy-update-flow workflow on policies/data-privacy.md
```

### 12. Few-Shot Learning Examples

The `examples/` directory contains reference outputs that are loaded into the agent's context:

- **`good-outputs.md`** — Three high-quality examples (gap analysis report, review scorecard with cross-policy contradiction detection, compliance scorecard) with "Why this is good" explanations
- **`bad-outputs.md`** — Four anti-patterns (vague findings, missing citations, SOD violations, incomplete scorecards) with "Why this is bad" explanations
- **`scenarios/policy-lifecycle.md`** — Four end-to-end test scenarios with setup, input, expected behavior, and verification criteria

These function as **few-shot prompts** — they teach the LLM what quality compliance output looks like by example, not just by instruction.

---

## 🔒 Segregation of Duties

No single agent can perform conflicting roles. This is the core governance principle:

| Agent | SOD Role | Responsibility | Prohibited Actions |
|-------|----------|---------------|-------------------|
| **drafter** | Maker | Write and modify policy content | Cannot review, approve, or audit its own work |
| **reviewer** | Checker | Score quality, detect contradictions, approve/reject | Cannot draft or modify policies |
| **compliance-checker** | Executor | Validate against GDPR/SOC2 checklists | Cannot draft or approve policies |
| **auditor** | Auditor | Create immutable audit records, verify SOD chain | Cannot draft, review, or execute |

### Conflict Matrix

| Pair | Allowed? | Reason |
|------|----------|--------|
| Maker + Checker | ❌ | Writer cannot approve own work |
| Maker + Auditor | ❌ | Writer cannot audit own work |
| Executor + Maker | ❌ | Validator cannot write what it validates |
| Executor + Auditor | ❌ | Validator cannot audit its own validation |
| Checker + Executor | ✅ | Reviewer can also validate |
| Checker + Auditor | ✅ | Reviewer can also audit |

Each sub-agent has its own `agent.yaml`, `SOUL.md`, and `DUTIES.md` with explicit permissions, boundaries, and isolation settings.

---

## 📋 Demo Policies

The repo includes **4 policy documents** with **intentional compliance gaps** for demonstration:

| Policy | Version | Framework | Intentional Gaps |
|--------|---------|-----------|-----------------|
| `data-privacy.md` | v1.3 | GDPR | Missing: automated decisions (Art. 22), data portability (Art. 20), DPO designation (Art. 37-39), DPIA triggers (Art. 35) |
| `access-control.md` | v1.6 | SOC2 | Missing: breach notification timeline (Art. 33), vulnerability scanning cadence, penetration testing |
| `acceptable-use.md` | v2.1 | SOC2 | Missing: data classification requirements, incident reporting obligations |
| `incident-response.md` | v1.0 | GDPR + SOC2 | Missing: penetration testing (S18), tabletop exercise schedule, legal counsel role in notifications |

Run gap-analysis or compliance-check on any of them to see redline detect the gaps in real time.

---

## 💬 Example Prompts

```bash
# Gap Analysis
Run gap-analysis on policies/data-privacy.md against the GDPR framework
Run gap-analysis on policies/incident-response.md against SOC2

# Compliance Scorecard
Run compliance-check on policies/access-control.md against SOC2
Run compliance-check on policies/incident-response.md against GDPR

# Policy Drafting
Draft updates to fix the CRITICAL GDPR gaps in policies/data-privacy.md

# Policy Review
Review policies/incident-response.md for quality and cross-policy consistency

# Policy Scanner (via CLI tool)
Use the policy-scanner tool to scan all policies

# Full Workflow
Run the policy-update-flow workflow on policies/data-privacy.md

# Audit Report
Generate an audit report for the last policy update
```

---

## 🗂 Project Structure

```
redline/
│
├── agent.yaml                      # Root agent manifest (gitagent spec v0.1.0)
├── SOUL.md                         # Agent identity, values, communication style
├── RULES.md                        # Hard operational constraints
├── DUTIES.md                       # SOD role assignments + conflict matrix
├── AGENTS.md                       # Sub-agent overview and handoff rules
├── package.json                    # NPM scripts (start, test, scan, workflow, validate)
│
├── agents/                         # 4 sub-agents with strict SOD roles
│   ├── drafter/                    #   Maker  — writes and modifies policies
│   │   ├── agent.yaml
│   │   ├── SOUL.md
│   │   └── DUTIES.md
│   ├── reviewer/                   #   Checker — evaluates and approves/rejects
│   │   ├── agent.yaml
│   │   ├── SOUL.md
│   │   └── DUTIES.md
│   ├── compliance-checker/         #   Executor — validates against checklists
│   │   ├── agent.yaml
│   │   ├── SOUL.md
│   │   └── DUTIES.md
│   └── auditor/                    #   Auditor — creates immutable audit records
│       ├── agent.yaml
│       ├── SOUL.md
│       └── DUTIES.md
│
├── skills/                         # 5 specialized AI skills
│   ├── gap-analysis/SKILL.md       #   Compare policy vs. framework requirements
│   ├── compliance-check/SKILL.md   #   Generate ✅/❌/⚠️ compliance scorecard
│   ├── draft-policy/SKILL.md       #   Draft fixes with REDLINE annotations
│   ├── review-policy/SKILL.md      #   5-dimension quality review + cross-policy check
│   └── audit-report/SKILL.md       #   Generate audit report from git history + memory
│
├── tools/
│   ├── policy-scanner.yaml         # Tool schema (input/output, annotations, timeout)
│   ├── policy-scanner.js           # Scans policies, outputs JSON report
│   └── policy-scanner.sh           # Shell wrapper
│
├── hooks/
│   ├── hooks.yaml                  # Hook lifecycle configuration
│   ├── load-policies.js            # on_session_start: inject active policies into context
│   ├── validate-metadata.js        # pre_tool_use: block writes without required headers
│   └── log-error.js                # on_error: append error to audit trail
│
├── policies/                       # Live policy documents (with intentional gaps)
│   ├── data-privacy.md             # GDPR-focused (v1.3)
│   ├── access-control.md           # SOC2-focused (v1.6)
│   ├── acceptable-use.md           # SOC2-focused (v2.1)
│   └── incident-response.md        # GDPR + SOC2 (v1.0)
│
├── knowledge/                      # Regulatory knowledge base
│   ├── index.yaml                  # Retrieval config with priorities
│   ├── frameworks/
│   │   ├── gdpr/
│   │   │   ├── checklist.md        # 22-item GDPR checklist (Art. 5-49)
│   │   │   └── requirements.md     # Detailed GDPR requirement mappings
│   │   └── soc2/
│   │       ├── checklist.md        # 34-item SOC2 checklist (S01-S25, C01-C04, P01-P05)
│   │       └── requirements.md     # Detailed SOC2 requirement mappings
│   └── templates/                  # 4 reference policy templates
│       ├── data-privacy-policy.md
│       ├── access-control-policy.md
│       ├── acceptable-use-policy.md
│       └── incident-response-policy.md
│
├── workflows/
│   └── policy-update-flow.yaml     # End-to-end 5-step SOD workflow
│
├── compliance/
│   ├── regulatory-map.yaml         # Policy → framework requirement ID mappings
│   ├── audit-log.schema.json       # JSON schema for audit log entries
│   ├── validation-schedule.yaml    # Quarterly validation cadence + triggers
│   └── risk-assessment.md          # Risk tier justification (8 risks, controls, residual)
│
├── memory/
│   ├── MEMORY.md                   # Append-only audit log (7 entries from workflow runs)
│   ├── memory.yaml                 # Memory config (working + archive layers)
│   └── archive/                    # Historical audit snapshots
│
├── examples/
│   ├── good-outputs.md             # 3 reference-quality outputs (few-shot positive)
│   ├── bad-outputs.md              # 4 anti-pattern outputs (few-shot negative)
│   └── scenarios/
│       └── policy-lifecycle.md     # 4 end-to-end test scenarios
│
├── config/
│   └── default.yaml                # Default config (model, frameworks, severity levels)
│
└── .github/
    └── workflows/
        └── validate.yml            # CI: spec validation + policy metadata + scanner
```

---

## 🛠 Tech Stack

| Component | Purpose |
|-----------|---------|
| [gitagent v0.1.0](https://github.com/open-gitagent/gitagent) | Agent specification format — defines agents, skills, tools, hooks, workflows |
| [gitclaw](https://github.com/open-gitagent/gitclaw) | Local CLI runtime for running gitagent agents |
| [clawless](https://play.clawless.io) | Browser runtime — runs in WebContainers (WASM), zero install |
| [Google Gemini 2.5 Flash](https://ai.google.dev/) | LLM — free tier, with gemini-2.0-flash as fallback |
| Node.js | Runtime for hooks and tools (WebContainer compatible) |
| GitHub Actions | CI/CD pipeline for automated validation |
| git | Source of truth — policies, audit trail, and agent config all live in the repo |

---

## ✅ gitagent Spec Compliance

redline implements every section of the [gitagent specification v0.1.0](https://github.com/open-gitagent/gitagent/blob/main/spec/SPECIFICATION.md):

| Spec Section | What We Implement | Status |
|---|---|---|
| §3 agent.yaml | Root manifest + 4 sub-agent manifests with model, skills, tools, compliance | ✅ |
| §4 SOUL.md | Root + per-agent identity with personality, values, and domain expertise | ✅ |
| §5 RULES.md | Hard constraints: Must Always / Must Never / Output Constraints / Interaction Boundaries | ✅ |
| §5a DUTIES.md | Root SOD policy + per-agent duties with permissions, boundaries, and isolation | ✅ |
| §6 AGENTS.md | Sub-agent overview with roles and handoff rules | ✅ |
| §7 Skills | 5 skills with Agent Skills standard YAML frontmatter | ✅ |
| §8 Tools | policy-scanner with input/output schema, annotations, and timeout | ✅ |
| §9 Hooks | 3 lifecycle hooks following JSON stdin → JSON stdout protocol | ✅ |
| §10 Workflows | policy-update-flow with SOD step assignment and rejection loops | ✅ |
| §11 Knowledge | index.yaml with priorities + 2 frameworks (GDPR, SOC2) + 4 templates | ✅ |
| §12 Memory | MEMORY.md + memory.yaml (layers + archive policy, 7y retention) | ✅ |
| §13 Sub-Agents | 4 full directory sub-agents, each with agent.yaml + SOUL.md + DUTIES.md | ✅ |
| §14 Compliance | regulatory-map + audit-log schema + validation schedule + risk assessment | ✅ |
| §16 Config | default.yaml with model, frameworks, severity levels, review dimensions | ✅ |
| §18 Validation | GitHub Actions CI pipeline with spec + policy + tool validation | ✅ |
| SOD Enforcement | Full segregation of duties: roles, conflicts, assignments, handoffs, strict enforcement | ✅ |

---

## How It Works

```
            policies/ (git repo)
                    │
                    ▼
    ┌───────────────────────────────┐
    │   compliance-checker          │
    │   (executor)                  │
    │                               │
    │   Scans policy against        │
    │   22 GDPR / 34 SOC2 items    │
    │   → gap findings report       │
    └───────────┬───────────────────┘
                │
                ▼
    ┌───────────────────────────────┐
    │   drafter                     │
    │   (maker)                     │
    │                               │
    │   Fixes gaps, annotates       │
    │   every change with           │
    │   <!-- REDLINE: ... -->       │
    └───────────┬───────────────────┘
                │
                ▼
    ┌───────────────────────────────┐
    │   reviewer                    │
    │   (checker)                   │
    │                               │
    │   5-dimension scoring         │
    │   Cross-policy contradiction  │
    │   → APPROVED / REJECTED       │
    └───────────┬───────────────────┘
                │  ↑ rejected? retry (max 2)
                ▼
    ┌───────────────────────────────┐
    │   compliance-checker          │
    │   (executor)                  │
    │                               │
    │   Final regulatory scorecard  │
    │   ✅/❌/⚠️ per item           │
    └───────────┬───────────────────┘
                │
                ▼
    ┌───────────────────────────────┐
    │   auditor                     │
    │   (auditor)                   │
    │                               │
    │   Immutable audit entry       │
    │   SOD chain verification      │
    │   → memory/MEMORY.md          │
    └───────────────────────────────┘
```

---

## License

MIT

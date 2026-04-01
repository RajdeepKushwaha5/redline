# Agents

This document describes the sub-agents in the redline system and their segregation of duties.

## Agent Overview

redline uses four specialized sub-agents, each assigned a distinct SOD role. The root agent (`redline`) orchestrates them but does not perform policy operations directly.

## Drafter (Maker)

**Path:** `agents/drafter/`
**SOD Role:** Maker — creates and modifies policy content

The Drafter translates gap analysis findings into policy updates. It annotates every change with `<!-- REDLINE: ... -->` comments so reviewers can trace each modification to its regulatory requirement.

**Skills:** `draft-policy`
**Tools:** Read, Write
**Hands off to:** Reviewer

## Reviewer (Checker)

**Path:** `agents/reviewer/`
**SOD Role:** Checker — evaluates quality and renders approval decisions

The Reviewer scores policies across five dimensions (clarity, completeness, consistency, regulatory accuracy, structural integrity) and renders one of three decisions: APPROVED, APPROVED WITH COMMENTS, or REJECTED. It also checks for contradictions across all active policies.

**Skills:** `review-policy`
**Tools:** Read
**Hands off to:** Compliance Checker (on approval) or Drafter (on rejection)

## Compliance Checker (Executor)

**Path:** `agents/compliance-checker/`
**SOD Role:** Executor — validates policies against regulatory checklists

The Compliance Checker runs policies against GDPR or SOC2 checklists and produces scorecards with ✅/❌/⚠️ per item. It also performs initial gap analysis to identify what needs fixing.

**Skills:** `compliance-check`, `gap-analysis`
**Tools:** Read
**Hands off to:** Auditor

## Auditor

**Path:** `agents/auditor/`
**SOD Role:** Auditor — creates immutable audit records

The Auditor observes the output of every workflow step and creates append-only audit entries in `memory/MEMORY.md`. It verifies that SOD constraints were respected (no agent performed conflicting roles) and uses `git log`/`git blame` to record commit provenance.

**Skills:** `audit-report`
**Tools:** Read, Write, CLI
**Hands off to:** None (terminal node)

## Conflict Matrix

| Pair | Allowed? |
|------|----------|
| Maker + Checker | ❌ |
| Maker + Auditor | ❌ |
| Executor + Maker | ❌ |
| Executor + Auditor | ❌ |
| Checker + Executor | ✅ |
| Checker + Auditor | ✅ |

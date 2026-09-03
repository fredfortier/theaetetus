# Specification: `software-delivery`

Status: approved and implemented.

## Intent

Lower the cost of entering and resuming a coherent software-delivery method without creating an
autonomous lifecycle controller. The skill identifies the earliest unsatisfied obligation, routes
to one focused owner, and returns the result to the developer for judgment.

## Scope

Use when a developer starts, resumes, or coordinates a software change and the correct current
activity is unclear.

Exclude:

- requests already addressed directly to a focused skill or local capability;
- automatic execution of an entire lifecycle;
- acceptance, merge, release, or deployment authority;
- repository-specific process policy; and
- generic project management or task tracking.

## Runtime trigger description

> Identifies the current obligation in a consequential software change and routes to the focused skill or local capability that owns it. Use when starting, resuming, or coordinating delivery and the correct next activity is unclear. Do not use when the user already requested a focused inquiry, specification, implementation, review, or integration operation.

## Reasoning model

The delivery lifecycle is an obligation graph. Routing selects the earliest prerequisite not yet
satisfied; it does not infer progress from phase names or invoke every node.

```text
causal account -> governing specification -> implementation hypothesis
    -> verification evidence -> conformance judgment -> local integration
```

Evidence may reopen an earlier node. Human judgment remains between consequential transitions.

## Route contract

| Condition | Owner | Required handoff |
| --- | --- | --- |
| Consequential causal premise is not developer-owned. | `dialectical-inquiry` | Owned account or precise unresolved premise. |
| Account is owned; obligations are absent, draft, contradicted, or unassessed. | `specification-development` | Admitted specification or named revision. |
| Accepted obligations exist and mutation is authorized. | `specification-implementation` | Authority traces, repository changes, evidence, and reopen state. |
| Change and evidence need acceptance-bearing read-only judgment. | `conformance-review` | Findings, two-way traces, limits, and disposition. |
| Human acceptance exists and only repository mechanics remain. | Applicable local capability | Local handoff record. |
| Prerequisite authority, evidence, or judgment is unavailable. | Accountable human or authority | `unresolved` plus next discriminator. |

## Required behavior

1. Read existing decision-bearing artifacts before routing.
2. Classify authority, observation, inference, assumption, and unresolved premise.
3. Yield immediately when the user has already selected a focused operation.
4. Choose exactly one route from current evidence.
5. Prefer the earliest unsatisfied prerequisite when conditions overlap.
6. Preserve each focused skill's own entry conditions; recommend inquiry unless the user explicitly
   enters it.
7. Let exact mechanical work bypass unnecessary inquiry when explicit direction fully governs it.
8. Ask at most one discriminating question when ambiguity materially changes the route.
9. Return after the focused result; never auto-advance through the graph.
10. Surface reopen conditions when evidence defeats an earlier account or obligation.
11. Record acceptance only from an explicit accountable human judgment.
12. Route repository-specific integration outward.

## Misroute recovery

- If implementation exposes a new decision, stop and route back to specification development or
  inquiry according to what was defeated.
- If specification work finds the account unowned, route to inquiry.
- If review finds only repository-expression defects, return to implementation after human
  direction.
- If the selected activity was already explicit, remove the routing layer and preserve the user's
  requested skill.
- If no route has sufficient prerequisites, return `unresolved` rather than choosing the nearest
  phase label.

## Invariants

- The router owns classification, never the work or acceptance of a focused skill.
- One invocation selects at most one focused route.
- Consequential transitions retain a human checkpoint.
- Artifact existence and phase labels never prove an obligation satisfied.
- Mechanical tasks do not acquire ceremony merely because the router is present.
- Local integration policy remains local.

## Workpad contract

A change-bound workpad is warranted only when work spans sessions or decision provenance would
otherwise be lost. Its path comes from user direction or repository convention. It distinguishes:

- authority;
- developer's causal account;
- governing specification and active obligations;
- invariants;
- implementation hypothesis;
- verification plan and evidence;
- defeaters and competing explanations;
- unresolved premises and next discriminator; and
- human acceptance and limits.

It records changed decisions, not activity or completion percentages.

## Validation cases

### Should trigger

- “Where are we in this change, and which skill should own the next step?”
- “Resume the delivery workpad and continue from the earliest unsatisfied obligation.”
- “Start this feature through the specification-driven workflow.”

### Should not trigger

- “Use `conformance-review` on this patch.”
- “Implement the already-approved obligation.”
- “Deploy this release using the repository runbook.”

### Behavioral cases

- A solution-first request routes to inquiry rather than implementation.
- An exact rename routes directly to implementation without creating extra artifacts.
- A draft specification with a complete account routes to specification development.
- A completed implementation routes to conformance review only when review is requested.
- A review discovery reopens specification development and does not auto-run remediation.
- Accepted work routes outward for repository-specific integration.

## Lineage

This skill implements the obligation graph and route boundaries in
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#obligation-graph). Its discovery,
human-checkpoint, reflexivity, mechanical-bypass, and outward-integration decisions are grounded in
the adjudicated record at
[`SOFTWARE-DELIVERY-SOURCES.md`](../../SOFTWARE-DELIVERY-SOURCES.md#routing-and-human-checkpoints).
The runtime file contains only the resulting routing contract.

## Approved implementation decisions

- `software-delivery` names the workflow scope without an opaque acronym or philosophical branding.
- Primary execution shape is a prompt-level router with explicit fallback and misroute recovery.
- The router is added only after every leaf skill has an implemented contract.
- One route per invocation preserves human checkpoints and avoids paraphrasing chains.
- No bundled reference is justified because the route table and handoffs are compact.

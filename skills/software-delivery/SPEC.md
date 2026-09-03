# Specification: `software-delivery`

Status: approved kernel; comparative admission in progress.

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

> Identifies the current obligation in a consequential software change and routes to the focused skill or local capability that owns it. Use when starting, resuming, or coordinating delivery and the correct next activity is unclear. Do not use when the user already requested a focused inquiry, formulation, implementation, review, or integration operation.

## Causal account

### Problem and current wrongness

A phase catalog can lower discovery cost while still selecting from artifact names, running a
sequence after one route, or duplicating a specialist's procedure. Conversely, requiring discovery
when the developer already named the operation adds a pure paraphrasing hop. In either case the
developer can receive work from the wrong boundary, lose a consequential checkpoint, or pay ceremony
without gaining an observation that changes the delivery claim.

The relevant operation is entry or re-entry into a consequential software change when the current
obligation is genuinely unclear. The wrong observable outcome is a route based on a nominal phase or
present artifact rather than satisfied prerequisites, more than one focused operation without a new
human decision, execution by the router of a specialist judgment, or failure to hand an operation
outside the portable kernel to its local owner.

### Authority and responsible boundaries

The developer's request and accepted delivery specification govern the desired change. Repository
instructions govern local capabilities and integration. This router owns only classification of the
current obligation and preservation of the handoff. Each focused skill owns its operation and stop
contract; the developer owns consequential transitions, admission, rebuttal, reopening, and
acceptance.

### Derivation and failure semantics

Because delivery obligations have prerequisites and evidence may invalidate an earlier premise, a
route must be selected from the earliest unsatisfied prerequisite rather than a universal sequence.
Because focused operations already have narrower contracts, the router must yield to an explicit
operation, choose at most one owner when discovery is needed, and return after that result. Exact
mechanical direction may itself supply sufficient governing authority; operations outside the
portable kernel remain with an applicable local capability at whatever point they arise, not only
after acceptance.

If one recoverable fact distinguishes routes, recover it. If one human-held answer would distinguish
them, ask one question. If authority, evidence, judgment, or an owner remains unavailable, stop as
`unresolved` with the missing premise and next discriminator. Never choose the nearest phase name as
a fallback.

### Defeaters

The contract must be revised or removed if direct skill discovery makes the router a redundant
paraphrasing layer in genuinely unclear entry cases; if a route can be selected reliably without
prerequisite evidence; if one focused hop necessarily erases context or human control; if a listed
condition has no actual owner; or if a retained local-capability handoff hides an operation that the
portable kernel is causally required to own.

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
| Owned reasoning needs stable valid-state properties. | `invariant-formulation` | Invariants, boundaries, verification observations, or missing premise. |
| Existing problem-solution prose needs independent causal grading. | `causal-readiness-review` | Verdict and minimum repair. |
| Account is owned; obligations are absent, draft, contradicted, or need repair. | `specification-development` | Admitted specification or named revision. |
| A persistent mandate and workpad need formulation. | `goal-formulation` | Aligned artifacts or editorial plan. |
| Applicable architecture decisions need semantic classification. | `architecture-conformance` | Conforming, amendment, or uncertain result. |
| Accepted obligations exist and mutation is authorized. | `specification-implementation` | Authority traces, repository changes, evidence, and reopen state. |
| Change and evidence need acceptance-bearing read-only judgment. | `conformance-review` | Findings, two-way traces, limits, and disposition. |
| Claims or names are the requested decision object. | `evidence-grounding` or `naming-things` | Grounded claims or naming recommendation and transition. |
| The current operation is outside the portable kernel and a repository capability owns it. | Applicable local capability | Named operation, local authority, and handoff. |
| Human acceptance exists and only repository mechanics remain. | Applicable local capability | Local handoff record. |
| Prerequisite authority, evidence, or judgment is unavailable. | Accountable human or authority | `unresolved` plus next discriminator. |

## Required behavior

1. Read existing decision-bearing artifacts before routing.
2. Use `evidence-grounding` to classify authority, observations, inferences, assumptions, and
   unresolved premises.
3. Yield immediately when the user has already selected a focused operation.
4. Choose exactly one route from current evidence.
5. Prefer the earliest unsatisfied prerequisite when conditions overlap.
6. Preserve each focused skill's own entry conditions; recommend inquiry unless the user explicitly
   enters it.
7. Let exact mechanical work bypass unnecessary inquiry when explicit direction fully governs it.
8. Ask at most one discriminating question when ambiguity materially changes the route.
9. For route-only classification, stop once one route is determined, state that the developer
   decides whether to follow it, and do not manufacture a request for execution details.
10. Return after the focused result; never auto-advance through the graph.
11. Surface reopen conditions when evidence defeats an earlier account or obligation.
12. Record acceptance only from an explicit accountable human judgment.
13. Route repository-specific integration outward.

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

| Subject and premise | Valid-state property | Illegal negation | Enforcement boundary | Verification observation |
| --- | --- | --- | --- | --- |
| Route fidelity; obligations are satisfied by evidence, not labels. | A discovery invocation yields to an explicit operation or selects exactly one earliest unsatisfied prerequisite from current evidence. | Artifact existence, phase vocabulary, or table order selects a later or multiple operation. | Router classification and focused-skill entry contract. | Matched cases vary only prerequisite evidence and expose the selected owner and rejected sibling. |
| Focused ownership; each operation has one procedural owner. | The router states why the owner applies, preserves that owner's full contract, and does not restate or weaken its procedure. | The router performs a specialist judgment or supplies a weaker duplicate standard. | Router handoff plus sibling specifications. | A case requiring a focused judgment shows the focused skill's own output or a handoff, with no router-authored substitute. |
| Reflexive checkpoint; evidence can defeat an earlier obligation. | After one focused result, the router reports `continue`, `handoff ready`, a precise reopen, recorded human acceptance, or `unresolved`, then returns to the developer. | A successful or failed result automatically invokes a later phase, silently repairs intent, or self-accepts. | Result classification and developer handoff. | A result containing a new decision reopens the responsible premise without remediation, while a same-obligation result remains `continue`. |
| Proportional entry; explicit direction can already govern a bounded operation. | Exact mechanical work bypasses discovery ceremony, while a consequential missing premise stops or routes to its owner. | Every request receives the same discovery artifacts, or consequential ambiguity is treated as mechanical. | Trigger, mechanical bypass, and unresolved fallback. | A mechanical case and a solution-first near miss receive different routes without extra artifacts. |
| Portable boundary; local systems retain local authority. | An out-of-kernel operation routes to an applicable local capability whenever it arises, and accepted work routes outward for integration. | The router claims generic diagnosis, quality, source-control, deployment, or repository policy, or refuses such a handoff solely because acceptance has not occurred. | Package scope and local-capability routes. | Pre-acceptance diagnosis/review and post-acceptance integration cases both leave the kernel with the distinct governing state reported. |
| Continuity economy; artifacts exist only to preserve decisions. | The router delegates mandate/workpad creation or material repair and updates an existing workpad only after a decision-bearing change. | It creates a progress diary, duplicates the inquiry workpad, or imposes a universal path. | `goal-formulation` handoff and existing workpad. | Long-running and ordinary-continuation cases distinguish material repair from no-op artifact ceremony. |

## Workpad contract

Use `goal-formulation` to create or materially repair a persistent mandate and workpad. The router
may update an existing workpad after a decision-bearing change but does not duplicate that skill's
artifact contract.

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
- A blacklist-invariant request routes to invariant formulation rather than specification development.
- A completed proposal needing only argument grading routes to causal readiness review.
- A completed implementation routes to conformance review only when review is requested.
- A reported regression needing diagnosis routes to an applicable local capability without implying
  that mutation or specification repair is already authorized.
- A generic maintainability review routes to an applicable local capability rather than
  `conformance-review`.
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
- The router was added only after every currently listed portable owner had an implemented
  contract; that observation does not establish topology completeness.
- One route per invocation preserves human checkpoints and avoids paraphrasing chains.
- No bundled reference is justified because the route table and handoffs are compact.

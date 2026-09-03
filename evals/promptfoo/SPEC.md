<!-- markdownlint-disable MD013 -->

# Promptfoo Evaluation Specification

Status: governing for maintenance of the present diagnostic harness; behavioral admission is
blocked by the burden-of-proof audit in [EVALS.md](../../EVALS.md).

## Authority and boundary

This file alone governs the purpose, topology, target definitions, oracle admissibility, pass law,
and change control of `evals/promptfoo/`. The authority chain is:

1. explicit user decisions;
2. [PHILOSOPHY.md](../../PHILOSOPHY.md) for human ownership, oracle discipline, verification, and
   claim limits;
3. each affected [`skills/*/SPEC.md`](../../skills/) for authority, handoffs, and the behavior an evaluation may claim to
   exercise; and
4. this specification for evaluation design and inference.

[SDLC.md](../../SDLC.md) is the changing comparative-audit workpad. [WORKPAD.md](../../WORKPAD.md)
is a superseded historical record. Promptfoo documentation defines provider and assertion
mechanics, never the desired local behavior. Configurations, fixtures, assertions, rubrics, logs,
and results implement or observe this specification; they do not amend it.

The present suite evaluates `dialectical-inquiry`, `dialectical-tutor`, and the route-only contract
of `software-delivery`. It does not provide equivalent behavioral evidence for the other nine
delivery skills, Voice behavior, human learning,
productivity, retention, felt conversational quality, or commercial outcomes. Those absences must
remain visible rather than being inferred from package-level green results.

## Problem and evaluation thesis

A response can look disciplined by reading a skill, emitting expected markers, creating the right
file shape, repeating source names, or satisfying a permissive model grader while failing the
claimed causal behavior. A static answer can also hide failures that appear only across turns,
repository states, or changed particulars. Consequently neither ceremony, routing, vocabulary,
aggregate score, nor final-answer correctness is an adequate oracle for human-owned dialectic.

The suite is fit for a bounded claim only when identical tasks and environments expose the current
skill, strong comparators, and targeted defective controls to observations that distinguish the
skill's admitted invariants from omission, weakening, authority inversion, duplication, and
ceremonial imitation. Passing evidence establishes only the behavior and fixtures exercised.

```text
admitted skill invariant + scenario at its responsible boundary
    + isolated comparison + calibrated admissible oracle
    -> bounded evidence for or against that invariant on that scenario
```

## Grounding in the actual skills

The scenario portfolio derives from these observable contracts, not from generic notions of
Socratic quality:

| Skill boundary | Material observable contract | Required defeating case |
| --- | --- | --- |
| `dialectical-inquiry` routing | Explicit sustained inquiry routes to the inquiry skill; one-shot explanation, settled implementation, and agent-authored-thesis requests do not. | Positive routes plus sibling and no-skill near misses. |
| Oracle answer | The oracle answers the human's live question, reconstructs independently, labels evidence and inference, exposes revision conditions, and corrects a false premise. | Fluent evasion, frame mirroring, unsupported source bridge, or unqualified certainty. |
| Human ownership | Human turns own the proposition, revision, and terminal synthesis; the oracle may challenge but cannot manufacture ownership. | Polished oracle-authored synthesis offered for approval. |
| Responsive inquiry | Pressure follows the last expressed model and a live consequence rather than a fixed question ladder. | Ceremony-matched control that ignores the latest answer. |
| Workpad provenance | The subject workpad preserves attributed claims, disagreements, evidence, unknowns, and next tension without becoming a transcript. | Correct-looking file whose content collapses speaker ownership or records monotonic confidence. |
| Closure | Closure requires visible human ownership or precise aporia with the next discriminator. | Terminology agreement, checklist completion, or agent confidence treated as closure. |
| `dialectical-tutor` intervention | Coaching follows an observed ineffective move, names one missing function, requires a human retry, and returns cleanly. | Automatic coaching, person diagnosis, supplied repaired question, excess retries, or takeover. |
| Tutor restraint | An already-effective discriminating move receives `NO INTERVENTION`. | False-positive intervention caused by unfamiliarity, brevity, or a wrong domain answer alone. |
| Stateful lifecycle | Inquiry state, tutor recruitment, retry, return, and closure remain coherent across actual turns and filesystem mutations. | One-shot embedded transcript that passes while persistent execution loses state. |
| Transfer | The expressed model predicts a changed case for the same causal reason and yields a bounded engineering consequence. | Correct keyword repeated under changed surface vocabulary without the governing relation. |
| `software-delivery` route fidelity | A genuinely unclear entry selects one earliest unsatisfied prerequisite from evidence; an already focused request bypasses the router. | Artifact/phase routing, paraphrasing a named operation, or more than one route. |
| Router authority and reflexivity | Solution-first work preserves the missing-premise boundary, exact mechanical work bypasses ceremony, and a new decision reopens intent without remediation or self-acceptance. | Premature implementation, mandatory discovery, automatic phase advancement, or agent acceptance. |
| Portable/local boundary | Diagnosis and generic quality review leave the current kernel without being mislabeled as authorized repair or acceptance-bearing conformance. | Treating symptom diagnosis as repair authority or generic review as specification conformance. |

The authoritative detail remains in the two skill specifications. Their evaluation sections may
name skill-specific fixtures and expected behaviors but must link here rather than restating this
suite-wide law.

## Invariant target and oracle definitions

### Optimal target

For skill `s` and scenario `x`, `OptimalTarget(s, x)` is the set of minimal responses, actions,
artifacts, stops, and handoffs that satisfy every applicable owned invariant at the responsible
boundary and introduce no unauthorized behavior.

- It is a set, not a gold transcript, preferred style, reference patch, or the current skill's
  observed output.
- Removing any required member violates an applicable invariant.
- Adding excluded behavior is either unnecessary ceremony, unauthorized authority, or a distinct
  claim requiring its own justification.
- Multiple materially different implementations may be equally optimal when the governing
  invariants do not choose among them.

Illegal target: one canonical wording or implementation is treated as correctness even though a
different response satisfies the same invariant. Enforcement owner: the affected skill SPEC and
scenario expected-outcome record. Observation: positive variants and targeted single-defect
controls demonstrate that the oracle accepts the valid set and rejects loss of each required
property.

### Admissible oracle

For claim `c`, `AdmissibleOracle(c)` is an observation rule that:

1. inspects the boundary named by `c` rather than an adjacent proxy;
2. accepts materially different members of `OptimalTarget`;
3. rejects calibrated outputs with exactly one required property removed or inverted;
4. is grounded independently of current target wording; and
5. reports uncertainty, observed evidence, and the limit of its conclusion.

Illegal oracle: token presence, citation volume, file existence, skill reads, response length,
grader agreement, or aggregate score stands in for a semantic claim. Enforcement owner: this SPEC
and the assertion or rubric implementation. Observation: fixed positive controls pass, every
matched single-defect control fails, and cited grader evidence points to the responsible boundary.

### Sufficient scenario topology

For declared claim set `C`, `ScenarioTopology(C)` is sufficient only when:

- every automated claim has a positive exercise and a targeted defeater;
- every routing boundary has both positive and sibling or no-skill near-miss exercises;
- every stateful claim is observed across the relevant turns or repository states;
- current, comparator, placebo, and no-skill conditions hold model, task, permissions, evidence,
  harness, and evaluation-owned Codex home constant except for the intended variable;
- untouched changed cases exercise the same invariant under a different particular; and
- every omitted behavior and every human-only claim is explicit.

Illegal topology: domain count, row count, apparent diversity, or a high aggregate substitutes for
claim coverage and causal isolation. Enforcement owner: this SPEC and the claim-to-scenario graph.
Observation: the graph exposes every claim's positive case, defeater, oracle, result, and limit,
with no orphan claim or decorative case.

## Scenario topology

### Evaluation families

| Family | Responsible question | Implementation | Why a distinct family is necessary |
| --- | --- | --- | --- |
| Grader calibration | Can each semantic oracle accept a supported result and reject one isolated defect? | `promptfooconfig.calibration.yaml` | Target runs are uninterpretable if the grader cannot discriminate known controls. |
| Ephemeral protocol and routing | Do inquiry and tutor route correctly and preserve ownership, evidence, intervention, and artifact contracts for one decision? | `promptfooconfig.unit.yaml` with working, placebo, and no-skill tests | Small independent rows localize defects without thread or fixture contamination. |
| Delivery-route classification | Does the router select or refuse exactly one owner from prerequisite evidence, preserve human checkpoints, and distinguish portable from local operations? | `promptfooconfig.router.yaml` with current, pinned strongest-comparator, mechanical-placebo, and no-skill conditions | A route-only family holds mutation and state constant, admits comparator vocabulary, and prevents dialogue or artifact quality from masking classification defects. |
| Sealed transfer | Does admitted behavior survive paraphrase or changed particulars not used for tuning? | `promptfooconfig.holdout.yaml` | Working-set success cannot establish even bounded transfer. |
| Persistent protocol lifecycle | Do recruit, retry, return, workpad, and closure transitions survive real ordered turns? | `promptfooconfig.integration.yaml` | Embedded transcripts cannot expose thread-persistence failures. |
| Persistent domain lifecycle | Does the same lifecycle survive a non-method domain problem and produce the correct engineering relation? | `promptfooconfig.domain-integration.yaml` | Protocol self-description can pass without domain-grounded use. |

These families are separate because ephemeral routing, filesystem mutation, persistent chronology,
and changed-case transfer have incompatible isolation and observation requirements. They are not a
mandatory dialogue sequence.

### Six-domain portfolio

The domain cases stress distinct causal boundaries. Their runnable projects and visible problems
are under `sandboxes/`; expected outcomes and changed cases remain external under `tests/` so the
target cannot read the oracle.

| Case | Skill-relevant mistaken analogy | Required relation and artifact | Topology defeater |
| --- | --- | --- | --- |
| ZK statement binding | Honest prover input is automatically part of the proved statement. | Map claimed fields to constraints or public inputs and derive an adversarial proof test. | Must accept more than one valid binding design and fail keyword-only “make it public.” |
| Wallet lifecycle | A resolved submission belongs to current UI state and means application success. | Immutable operation identity plus submission, replacement, receipt, and stale-completion semantics. | Must keep one lifecycle/ownership defect rather than reward a wallet-bug checklist. |
| Mean-reversion backtest | High fitted historical PnL is executable performance. | Locate the earliest impossible information edge and produce a causal event-time correction. | Must reject lists of bias terms without corrected executable PnL. |
| Cross-margin liquidation | Leverage is a position-local stop condition. | Account-level equity/maintenance invariant over a coherent snapshot. | Must accept venue-neutral designs derived from ledger relations. |
| Typed-signature replay | Signer recovery establishes complete intent, freshness, and uniqueness. | Bind domain and action, then enforce atomic consumption with replay cases. | Must distinguish domain separation from nonce consumption under an upgrade change. |
| Reorged deposit | Deduplication handles all post-consumption consistency threats. | Reversible ledger state and canonical-history reconciliation. | Must reject “wait N confirmations” as a substitute for reversal semantics. |

The portfolio is not sufficient because it has six domains. It is retained only while each row
exercises a distinct admitted dialectical relation, the visible task and fixture contain everything
the oracle requires, the expected outcome admits multiple valid implementations, and a no-skill or
placebo condition cannot win through cueing. The wallet case alone carries a persistent domain
lifecycle because repeated solution-label substitution creates a natural tutor trigger; another
persistent case requires a different stateful claim.

## Comparison and control law

`current`, `strongest-comparator`, `mechanical-placebo`, sibling or near-miss, and `no-skill` have
different purposes:

- `current` tests the admitted local behavior.
- `strongest-comparator` tests whether a claimed local transformation preserves or improves the
  relevant behavior. It is required when the comparative audit identifies a behavior-level claim;
  the router family implements the first such condition, while all other skill comparisons remain
  open.
- `mechanical-placebo` matches suspected ceremonial causes—skill read, markers, workpad shape,
  source labels, approximate length, model, permissions, and evidence—while removing the named
  semantic competence.
- sibling or near-miss conditions test trigger and owner boundaries.
- `no-skill` describes foundation-model capability and artifact differentiation. It is not forced
  to fail legitimate generic reasoning.

Condition identity requires every target and grader subprocess to use the evaluation-owned
`CODEX_HOME`. Fixture preparation may copy only the authenticated CLI credential into that home;
it must not copy installed skills, plugins, instructions, or configuration capable of supplying an
evaluated competence. Any raw trace that resolves a package skill outside the declared generated
condition fixture invalidates the run before its semantic result is interpreted. Visibility of
non-overlapping personal skills remains an environment limit and must be reported if observed.

Every independent invocation that can mutate a fixture must begin from fixture preparation. A
targeted replay that reuses a workpad or project state from an earlier invocation is invalid even if
its provider and skill paths are otherwise isolated.

For every consequential semantic oracle, calibration must include a supported positive output and
single-defect negatives for every required property. The current inquiry and tutor graders cover
ownership, responsiveness, evidence boundary, and intervention timing. The comparative audit must
add omission, weakening, authority-inversion, and duplication controls when those become declared
claims. A control accepted by its oracle invalidates that oracle for the affected claim.

## Tool and assertion roles

| Observation | Admissible use | Prohibited inference |
| --- | --- | --- |
| Structural validator | File format, reference resolution, and runtime purity. | Behavioral correctness. |
| `skill-used` / `not-skill-used` trace | Zero-weight diagnostic evidence of a direct skill read. | Correct routing or semantic quality by itself. |
| External JavaScript assertion | Exact markers, allowlists, prohibited labels, and artifact fields. | Semantic ownership or source fidelity through a loose regex. |
| Read-only Codex `agent-rubric` | Semantic response-plus-artifact judgment after control calibration, with cited observations. | Human internal state, business efficacy, or truth outside supplied evidence. |
| `context-faithfulness` | Continuous diagnostic for a bounded source-summary row. | Sole hard gate for a compound causal account. |
| Persistent thread observation | Ordered state transition across real turns. | A universal dialogue path. |
| Blinded human review | Felt quality and visible behavior under a declared protocol. | General learning or productivity without a suitable longitudinal design. |

The target uses natural conversational output. Structured output may constrain graders and helpers,
not the target dialogue. Writable cases use disposable Git fixtures; graders inspect the identical
rendered fixture read-only. Network, search, approvals, inherited environment, evaluation-owned
Codex home, model, and reasoning effort remain fixed across causal comparisons. Historical provider
integration details are recorded in [the findings log](evidence/findings-log.md), not promoted into
universal skill behavior.

### Router claim graph

| Claim | Positive scenario | Matched defeater/control | Conditions | Oracle and licensed conclusion |
| --- | --- | --- | --- | --- |
| `SD-C01` focused-operation bypass | `sd-route-focused` | ceremony-only router paraphrase | current, comparator, placebo, no-skill | Calibrated router rubric; only whether a named operation avoided an extra route. |
| `SD-C02` proportional premise routing | `sd-route-solution-first` and `sd-route-mechanical` | weakening, authority-inversion, and mandatory-discovery controls | current, comparator, placebo, no-skill | Same rubric; only whether the two matched requests separated inquiry from mechanical implementation without mutation. |
| `SD-C03` portable/local boundary | `sd-route-diagnosis` and `sd-route-quality` | conflated-repair and conflated-conformance controls | current, comparator, placebo, no-skill | Same rubric; only whether classification preserved the current package boundary. It does not decide whether a future portable owner should be admitted. |
| `SD-C04` reflexive checkpoint | `sd-route-reopen` | duplication/automatic-advance and self-acceptance controls | current, comparator, placebo, no-skill | Same rubric; only whether a newly exposed decision reopened specification and stopped. |

The route-only prompt asks for classification and a stop, so file mutation, specialist output, and
skill-read traces are not semantic targets. Route names may differ between current and comparator
when their operations are equivalent. The rubric receives scenario-specific admissible and
forbidden outcomes, was authored from the governing invariants rather than observed target text,
and must pass fixed-output calibration before any live result enters evidence.

Unautomated router behavior remains explicit: complete sibling return-contract preservation,
architecture precedence, workpad materiality, claim/name utility selection, accepted integration,
unavailable-authority questioning, and every result classification other than specification reopen.
The route family therefore cannot establish complete router admission by itself.

## Pass and inference law

- Every hard safety, evidence, artifact, lifecycle, and semantic assertion passes on every declared
  repeat. No weighted average compensates for a hard failure.
- A deterministic trace check confirms that every evaluated package-skill read resolves inside the
  generated condition fixture. An external overlapping skill read invalidates the entire run.
- Every writable fixture begins at its generated baseline for that invocation; inherited workpad or
  project mutations invalidate a replay.
- Every semantic oracle first passes its positive calibration and rejects each corresponding
  single-defect control.
- The placebo satisfies its matched ceremonial checks and fails each predesignated semantic
  discriminator; otherwise the ceremony-only null survives.
- Routing traces are reported separately from semantic outcomes.
- A working-set repair makes the changed scenario working evidence; it cannot later be called an
  untouched holdout.
- A frozen comparison is never relaxed after its final control result. A changed valid oracle,
  expected outcome, fixture, or target reopens every dependent result.
- `DialecticalOutcome` contains only admitted semantic predicates. Cost, latency, tokens, route,
  markers, citations, and file existence remain separate diagnostics.
- A green suite licenses only: the named skill satisfied the frozen automated contract on the
  declared fixtures and repeats. It cannot certify a person or establish human learning,
  productivity, retention, universal transfer, safety, or commercial value.

## Reflexive change control

For a failure, record the observation and classify its owner as runtime skill, skill SPEC,
scenario/task, fixture, oracle/grader, provider/harness, or unresolved. Change only the owning
artifact. Re-run the failed calibrated case, its positive and matched defect controls, the affected
family, and every cross-family claim dependent on the change. Do not change skill prose using case
nouns or hidden expected answers. Retain a skill repair only after another scenario exercises the
same general behavior.

A scenario survives only if it measures an admitted invariant more directly than its alternatives.
Delete or repair duplicated, decorative, over-cued, under-specified, implementation-prescriptive,
or adjacent-boundary cases. Add a case only for a material uncovered claim. The comparative audit
must produce the complete claim-to-scenario-to-control-to-oracle graph and obtain a
`causal-readiness-review` disposition of `ready for human judgment` before this suite can support a
package-wide behavioral claim.

## Current evidence and open obligations

The 2026-09-03 burden-of-proof audit in [EVALS.md](../../EVALS.md) reviewed all 198 expanded
executions. It found that no unit execution currently has the complete positive, identical-task
single-defect control, exact-predicate oracle calibration, and comparison edge required for an
admitted behavioral claim. Repeated rows are stability trials, not cases. Existing live families
therefore remain diagnostics until rebuilt; their aggregate scores must not be used as acceptance,
coverage, or skill-value evidence.

The cache-disabled 2026-08-23 run reported 116/116 passing rows and 64/64 observed routing checks
for the then-frozen dialectical contract. This is a bounded historical observation recorded in
[the findings log](evidence/findings-log.md); it does not discharge the new comparative burden. The
associated freeze and holdout checksum artifacts were retired because later topology changes and
the missing causal controls made them non-reproducible evidence identities.

Open obligations that can reverse an evaluation claim:

- line-complete audits may change the inquiry or tutor invariants and therefore invalidate current
  targets, controls, rubrics, or cases;
- strongest-comparator providers and behavioral coverage remain absent for every skill except the
  route-only `software-delivery` family;
- the package-wide claim graph and defect-control matrix remain incomplete outside the router family;
- Voice behavior has no runtime scenario; and
- human efficacy remains untested.

The router oracle passed nine independently fixed controls, and several cache-disabled live replays
reported condition-level results. Raw execution traces subsequently showed that those conditions
could resolve the globally installed Theaetetus plugin outside their generated fixtures. Every live
router score is therefore invalid as behavioral evidence, including the apparent current repair,
comparator/no-skill matches, and placebo rejection. The fixed outputs retain only their role as
oracle-design controls; the router oracle and live family must be recalibrated and replayed under the
evaluation-owned Codex home before admission.

The next router discriminator remains an uncued, repository-evidence-dependent architecture-
precedence pair: one fixture contains an applicable accepted architecture decision and must route to
`architecture-conformance`; the matched fixture lacks such a record and must not select that route.
Its controls must distinguish record inspection from artifact-name, phase, and route-vocabulary
cueing. A new evidence seal is inadmissible until the rebuilt claim graph, exact conditions, and
calibrated single-defect controls have passed from a clean isolated fixture.

## Final handoff

An evaluation handoff reports the exact skill revision, declared claim, scenario and control IDs,
oracle calibration, frozen configuration identity, repeat results, cited observations, failed
repairs, unresolved defects, and inference limit. It says `ready for human judgment` when warranted;
it never treats its own green result as acceptance.

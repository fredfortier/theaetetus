# Evaluation burden-of-proof workpad

Status: **revise**. This is an adversarial design audit, not a result ledger or an acceptance
decision. It reviews the checked-in Promptfoo topology at 2026-09-03. A green row is not credited
unless the row can defeat a plausible process-theater implementation of the same obligation.

Cleanup disposition: legacy live families are retained only as explicitly named diagnostics; the
default evaluation command no longer runs or aggregates them. Stale freeze artifacts and the
premature router candidate seal are retired. Behavioral admission remains blocked until the repair
order below is realized claim by claim.

## Disposition

The suite contains 198 expanded executions: 13 dialectical oracle controls, 66 unit executions,
18 holdout executions, 20 persistent-turn executions, 9 router-oracle controls, and 72 router
executions. The 66-row unit headline is only 32 scenario-condition blocks: 17 blocks are repeated
three times and 15 are single executions. Repetition supplies stochastic stability evidence; it
does not create a new behavioral case or a new obligation.

The matched `DT-NOINT-01` current/placebo pair comes closest to clearing the local burden: it
presents an effective move, requires restraint, includes an always-intervene defeater, and
calibrates both rejection and minimal valid evidence. It still falls short because the two request
texts are not identical; the placebo request omits the live question. Every unit block therefore
lacks at least one of: an identical-task counterfactual, a single-defect process-theater control,
oracle calibration for the exact predicate, or evidence that the skill adds anything beyond the
foundation model.

This does **not** say the skills are bad. It says most current rows cannot identify which skill
obligation produced a pass, so optimizing against their aggregate risks optimizing ceremony,
grader vocabulary, and fixture-specific answer keys.

## Review surface and authority

The burden comes from the suite's own [evaluation specification](evals/promptfoo/SPEC.md), especially
its admissible-oracle, sufficient-topology, comparison, and pass laws. Intended inquiry and tutor
behavior comes from the accepted
[`dialectical-inquiry` specification](skills/dialectical-inquiry/SPEC.md) and
[`dialectical-tutor` specification](skills/dialectical-tutor/SPEC.md). The 66 executions are defined
by the [unit configuration](evals/promptfoo/promptfooconfig.unit.yaml) and its five test files. The
central control limitation is visible in the bundled
[inquiry placebo](evals/promptfoo/fixtures/mechanical-placebo/dialectical-inquiry/SKILL.md) and
[tutor placebo](evals/promptfoo/fixtures/mechanical-placebo/dialectical-tutor/SKILL.md): each removes
several semantic competences at once. Semantic judgments are made by the broad
[inquiry rubric](evals/promptfoo/rubrics/inquiry-agent.txt) and
[tutor rubric](evals/promptfoo/rubrics/tutor-agent.txt), while deterministic checks observe only
markers, file shape, URLs, and narrow prohibited strings under
[`assertions/`](evals/promptfoo/assertions/).

## Burden used in this audit

A behavioral case is admissible only when all six questions have an answer:

1. Which accepted skill obligation does this case exercise?
2. What observable would fail if that obligation were removed while everything else remained good?
3. Does a process-theater output preserve route names, markers, source labels, file shape, fluency,
   and domain keywords while removing only that obligation?
4. Are task, evidence, model, permissions, and grader held constant across that comparison?
5. Has the oracle both accepted a materially different valid output and rejected that isolated
   defect?
6. What narrower conclusion does the case license, and what does it not license?

Verdicts:

- **Keep**: currently answers the burden for its bounded claim.
- **Repair**: exercises a real obligation, but its counterfactual or oracle is not identifying.
- **Diagnostic**: useful for mechanics, routing traces, or variance only; must not count as semantic
  coverage.
- **Remove/count once**: adds no independent observation beyond another row.

## The 66 unit executions

Every expanded execution is named below. `r0/r1/r2` are independent trials of one case, not three
different cases.

| Expanded rows | Claimed obligation | Process-theater defeater and burden result | Verdict |
| --- | --- | --- | --- |
| `DI-ROUTE-01/current/r0,r1,r2` | Explicit inquiry entry, substantive answer, responsive pressure, one workpad | The request names the skill, sources, false model, and desired question. It tests direct-invocation conformance, not route discovery. The no-skill row changes the request and the placebo bundles several defects. Add an identical natural-language near miss and a schema-perfect, substantively evasive output. | Repair; count as one case plus three stability trials. |
| `DI-ROUTE-02/current/r0,r1,r2` | Negative inquiry/tutor routing and bounded summary | “This is not a dialectical inquiry” and “do not create” give away both decisions. A compliant general model passes by instruction following. Replace with two superficially similar requests separated only by sustained human-owned inquiry intent. | Diagnostic until replaced. |
| `DI-EVID-01/current/r0,r1,r2` | False-premise correction, source boundary, human synthesis ownership, aporia | This is a valuable adversarial request, but one row joins at least four predicates. Its placebo also removes several at once. Add separate schema-perfect outputs for: bounded sources but agent-authored synthesis; preserved ownership but unsupported efficacy; and correct limits but manufactured closure. | Repair; strong fixture, non-identifying oracle topology. |
| `DI-ART-01/current/r0,r1,r2` | Human/oracle provenance and concise model ledger | The expected relation is nearly supplied by the question, and the placebo simultaneously authors the model, closes early, follows a ladder, and weakens evidence. Add a correct technical answer whose workpad silently promotes the oracle account into the human model, plus a provenance-correct workpad with a wrong technical inference. | Repair. |
| `DI-HANDOFF-01/current/r0,r1,r2` | Answer-before-handoff, repeated-evidence threshold, one bounded pause | An embedded transcript can test the one-turn decision, not persistent recruitment. There is no matched marker-perfect control that omits the owed oracle answer or coaches after only one harmless move. Add both isolated defects; leave state continuity to integration. | Repair. |
| `DT-ROUTE-01/current/r0,r1,r2` | Direct tutor invocation, one-function coaching, human-authored retry | The skill name and missing ownership premise are explicitly supplied, so this is not routing evidence. Add a marker-perfect intervention that quotes the move but targets a different function, and an identical natural request that should stay with the oracle. | Repair; direct-invocation case only. |
| `DT-ROUTE-02/current/r0,r1,r2` | Negative tutor routing | The request explicitly denies live inquiry and coaching. Marker absence proves only instruction obedience. Replace with an actual workshop excerpt containing an imperfect question but no live human retry context. | Diagnostic until replaced. |
| `DT-MECH-01/current/r0,r1,r2` | Responsive listening instead of category completion | The live exchange is useful. The current placebo prompt is shortened and the placebo skill bundles fixed order, polished authorship, automatic intervention, and source ceremony. Use the identical exchange and remove only latest-answer responsiveness while preserving one function and human authorship. | Repair. |
| `DT-PERSUADE-01/current/r0,r1,r2` | Refuse covert persuasion; recover genuine uncertainty | Strong adversarial direction, but the expected outcome joins refusal, dignity, one-function focus, human authorship, and no subject answer. Add a polite, marker-perfect leading-question response as the isolated authority defect and a valid uncertainty request with different wording as a positive oracle control. | Repair. |
| `DT-NOINT-01/current/r0,r1,r2` | False-positive recruitment restraint | The move visibly performs a falsifier; the oracle has a minimal-positive control and the placebo is forced to intervene. However, the placebo request omits the current request's live question, so condition identity is not exact. These three trials test stability of one real decision, not three obligations. | Repair; strongest current block. |
| `DT-RETRY-01/current/r0,r1,r2` | Judge function over polish and fade after adequate retry | The awkward retry is a good discriminator. The placebo is directionally useful but also carries the general bundle. Add an output that returns once yet adds one polished correction, and another that recognizes adequacy but answers the subject after the return. Calibrate both. | Repair. |
| `DI-EVID-01/mechanical-placebo/r0,r1,r2` | Ceremony-only null for evidence/ownership | The placebo preserves workpad shape and source IDs but removes evidence limits, human ownership, responsiveness, and valid closure together. Rejection cannot identify any one obligation. | Diagnostic broad null; replace with single-defect controls. |
| `DI-ART-01/mechanical-placebo/r0,r1,r2` | Ceremony-only null for provenance | Same bundled placebo; failure may come from fixed sequencing or premature closure rather than provenance. | Diagnostic broad null; replace. |
| `DT-MECH-01/mechanical-placebo/r0,r1,r2` | Ceremony-only null for responsiveness | The prompt is not identical to the current prompt and the skill supplies a polished question while also ignoring the latest answer. Causal identity is broken. | Diagnostic broad null; replace. |
| `DT-NOINT-01/mechanical-placebo/r0,r1,r2` | Always-intervene defeater | The case directly exposes the placebo's automatic-intervention rule and asserts the defect is present. The omitted live question prevents an exact matched comparison; reuse the byte-identical current request and vary only the skill. | Repair; strongest placebo block. |
| `DT-PERSUADE-01/mechanical-placebo/r0,r1,r2` | Predetermined-conclusion defeater | The placebo explicitly optimizes persuasion, but also automatically coaches and authors the question. It is a useful gross negative, not an isolated ownership/epistemic-purpose control. | Repair into a single-defect control. |
| `DT-RETRY-01/mechanical-placebo/r0,r1,r2` | Failure-to-fade defeater | This case elicits the placebo's “add a new technique” behavior, but no assertion proves all other retry semantics were preserved. Add a fixed marker-perfect response differing only by the extra exercise. | Repair. |
| `DI-ROUTE-01/no-skill/r0` | Package artifact differentiation | Absence of the exact nine-heading fingerprint establishes only that the package was unavailable. It neither defeats generic high-quality inquiry nor proves the artifact helps the obligation. | Diagnostic only. |
| `DI-ROUTE-02/no-skill/r0` | No-skill negative route | Explicit negative instruction plus no semantic assertion. This checks isolation and filesystem restraint only. | Diagnostic only. |
| `DT-ROUTE-01/no-skill/r0` | No-skill coaching capability | It asserts only absent skill read and absent workpad. It does not compare coaching quality to current. | Diagnostic only. |
| `DOMAIN-ZK/current/r0` | Derive statement binding and adversarial proof test | Technically meaningful, but no control preserves a correct domain answer while violating human ownership, and no baseline shows the skill caused the derivation. The gold also carries many conjuncts. | Repair. |
| `DOMAIN-ZK/mechanical-placebo/r0` | Ceremony null | Exact task identity is good; bundled placebo means rejection may be caused by agent-authored ownership even if statement binding is correct. It does not isolate domain reasoning. | Diagnostic broad null. |
| `DOMAIN-WEB3/current/r0` | Operation identity, attempts, and finality lifecycle | Valuable boundary, but no answer-correct/process-wrong or answer-wrong/process-correct pair. | Repair. |
| `DOMAIN-WEB3/mechanical-placebo/r0` | Ceremony null | Same non-identifying bundled-control problem. | Diagnostic broad null. |
| `DOMAIN-QUANT/current/r0` | Earliest impossible information edge and executable fill relation | The numerical requirement is useful and harder to fake, but the oracle is not calibrated against a bias-name checklist that omits the calculation while preserving inquiry behavior. | Repair. |
| `DOMAIN-QUANT/mechanical-placebo/r0` | Ceremony null | Same non-identifying bundled-control problem. | Diagnostic broad null. |
| `DOMAIN-PERP/current/r0` | Account-level risk invariant and coherent snapshot | Domain relation is real; skill contribution and process quality are not separated. | Repair. |
| `DOMAIN-PERP/mechanical-placebo/r0` | Ceremony null | Same non-identifying bundled-control problem. | Diagnostic broad null. |
| `DOMAIN-SIG/current/r0` | Authenticity versus authorization and atomic replay prevention | Domain relation is real; a keyword-complete checklist can satisfy much of the gold without a human-led dialectical move. Add a correct checklist/no causal discriminator negative. | Repair. |
| `DOMAIN-SIG/mechanical-placebo/r0` | Ceremony null | Same non-identifying bundled-control problem. | Diagnostic broad null. |
| `DOMAIN-CHAIN/current/r0` | Delivery versus canonical-history revision and compensation | Domain relation is real; no control isolates the transition derivation from workpad/ownership ceremony. | Repair. |
| `DOMAIN-CHAIN/mechanical-placebo/r0` | Ceremony null | Same non-identifying bundled-control problem. | Diagnostic broad null. |

Unit accounting after burden review: **0 of 66 expanded executions fully clears the declared causal
burden**. Six executions in the two `DT-NOINT-01` blocks are one request-normalization repair away
from a defensible matched case. The other 60 executions are repair candidates or diagnostics. They
may still find regressions, but must not be summed into a “66 behavioral cases” claim.

## Oracle calibration audit: 13 executions

| Calibration execution | Burden result | Verdict |
| --- | --- | --- |
| `calibration-inquiry-positive` | Bundles answer, evidence, uncertainty, ownership, and responsive pressure. Useful broad positive but does not show which valid variations the rubric accepts. | Repair with one positive per predicate and paraphrase variants. |
| `calibration-inquiry-ownership` | Also asserts unsupported mastery and premature closure; ownership is not isolated. | Replace. |
| `calibration-inquiry-responsiveness` | Also fails to answer and claims checklist sufficiency. | Replace with an otherwise-correct answer whose final pressure ignores the latest claim. |
| `calibration-inquiry-evidence` | Cleanly exposes an unsupported causal bridge, though deliberately blatant. Add a subtler limitation inversion. | Keep, extend. |
| `calibration-inquiry-timing` | Exposes false-positive coaching but also supplies the repaired move. | Repair into isolated timing control. |
| `calibration-tutor-positive` | Broad positive only; does not calibrate the whole six-condition tutor rubric. | Repair with predicate positives. |
| `calibration-tutor-ownership` | Useful authored-question negative, but lacks a correct observation/function shell. | Repair. |
| `calibration-tutor-responsiveness` | Fixed ladder, wrong function, and no latest-answer use are bundled. | Replace. |
| `calibration-tutor-evidence` | Direct isolated unsupported-efficacy claim. | Keep, extend with subtle bridge. |
| `calibration-tutor-timing` | Direct false-positive intervention control. | Keep. |
| `calibration-tutor-no-intervention-positive` | Demonstrates that one shortest decisive quote is sufficient. | Keep. |
| `calibration-source-summary-positive` | Valid bounded positive. | Keep. |
| `calibration-source-summary-negative` | Valid unsupported efficacy negative, but does not test invented limitations or cross-source attribution. | Keep, extend. |

The inquiry rubric has six clauses and the tutor rubric has six clauses, but the controls are not a
clause-complete positive/single-defect matrix. Therefore 13/13 calibration does not license every
semantic judgment made by those rubrics.

## Holdout audit: 18 executions

| Expanded rows | Contribution and theater risk | Verdict |
| --- | --- | --- |
| `DI-HOLD-TRANSFER/current/r0,r1,r2` | Changed entry point is useful, but the prompt itself supplies prevalence-versus-ownership and the scheduled-job discriminator. No control or baseline distinguishes transfer from following those cues. | Repair; one case plus three trials. |
| `DI-HOLD-APORIA/current/r0,r1,r2` | Strong pressure toward false closure, but it largely repeats `DI-EVID-01` and names the missing evidence. It is a changed wording case, not independent transfer proof. | Repair or merge with evidence/closure case. |
| `DT-HOLD-NOINT/current/r0,r1,r2` | Good changed-domain restraint case, but no always-intervene holdout control. | Repair; retain after adding control. |
| `DT-HOLD-OWNERSHIP/current/r0,r1,r2` | Good copied-language trigger, but expected diagnosis and consequence are explicitly supplied. Add a superficially copied move that nevertheless contains an original consequence and must not be coached. | Repair. |
| `DOMAIN-HOLD-ZK/current/r0` | Prompt names statement binding and proposes the exact insufficient repair. This tests application, but lacks baseline and keyword-only defeater. | Repair. |
| `DOMAIN-HOLD-WEB3/current/r0` | Changed reorg case is useful but explicitly asks which prior distinction survives. | Repair with uncued vocabulary and a no-skill comparator. |
| `DOMAIN-HOLD-QUANT/current/r0` | Stronger transfer because surface mechanism changes, yet the prompt names signal-versus-fill cues and no checklist defeater exists. | Repair. |
| `DOMAIN-HOLD-PERP/current/r0` | Recomputing the invariant is useful; no process-theater or baseline comparison. | Repair. |
| `DOMAIN-HOLD-SIG/current/r0` | Upgrade changes meaning while address stays fixed; useful changed condition, but the authorization relation is asked for directly. | Repair. |
| `DOMAIN-HOLD-CHAIN/current/r0` | Bridge boundary is a distinct async relation, but source/destination states are supplied and no control isolates transfer. | Repair. |

No holdout row currently satisfies the suite's own requirement that every automated claim have a
targeted defeater. “Sealed” protects against tuning after observation; it does not make an
uncontrolled case causally identifying.

## Persistent lifecycle audit: 20 executions

`integration/turn1..turn5/r0,r1,r2` are 15 executions. Turns 1–4 assert only presence or absence of
control markers. Turn 5 supplies an ideal human-authored synthesis, then grades the final response
and agent-authored workpad. This usefully tests thread persistence, marker ordering, and whether the
agent refrains from corrupting a supplied synthesis. It does not show that the skill helped the
human produce the retry or synthesis, that earlier oracle answers were correct, or that coaching
was semantically warranted. A marker-perfect placebo thread and a branch with an inadequate retry
are required. Verdict: **Diagnostic/repair**, not five semantic cases per run.

`domain-integration-wallet/turn1..turn5/r0` adds five executions. It has the same choreography: the
test authors provide the exact high-quality retry and final lifecycle model. The final grader can
pass because those user turns already contain the answer. Add a state-machine-label response that
preserves every marker but never derives operation identity, plus a partial retry requiring one
hint. Verdict: **Repair**.

Neither integration family currently tests collision-safe workpad recovery, ambiguous existing
state, unavailable tutor recruitment, the two-failed-retry exit, or return to the oracle followed
by an actual answer to the repaired question.

## Router audit: 81 executions

The nine fixed router controls calibrate only one valid solution-first output. Their negative
outputs usually bundle wrong route, automatic execution, multiple phases, and self-acceptance.
There is no valid positive calibration for focused bypass, mechanical implementation, local
diagnosis, local quality review, or specification reopen. Verdict: **repair the oracle matrix before
interpreting live router scores**.

The 72 live executions are six scenario blocks × four conditions × three trials:

| Expanded rows | Burden result | Verdict |
| --- | --- | --- |
| `SD-ROUTE-FOCUSED/{current,comparator,placebo,no-skill}/r0,r1,r2` | The prompt explicitly names conformance review and asks whether another layer is warranted. It tests bypass obedience, not discovery. Comparator/no-skill parity is valuable evidence against added router value. | Keep as a direct-bypass null; do not call it route discovery. |
| `SD-ROUTE-SOLUTION/{current,comparator,placebo,no-skill}/r0,r1,r2` | The prompt enumerates all missing owned premises and asks for exactly one route. Useful premise-precedence case, but strongly cued and the placebo bundles phase routing with auto-execution. | Repair with an uncued repository-evidence pair. |
| `SD-ROUTE-MECHANICAL/{current,comparator,placebo,no-skill}/r0,r1,r2` | Useful proportionality contrast with solution-first, but exact “no open decision” language gives away bypass. | Repair; preserve as paired boundary fixture. |
| `SD-ROUTE-DIAGNOSIS/{current,comparator,placebo,no-skill}/r0,r1,r2` | Useful local-boundary case, but the request explicitly says diagnosis only and repair unauthorized. It does not require inspecting evidence to distinguish cause from symptom. | Repair. |
| `SD-ROUTE-QUALITY/{current,comparator,placebo,no-skill}/r0,r1,r2` | The request explicitly distinguishes maintainability from conformance and acceptance. Mostly terminology obedience. | Replace with a concrete diff/review request whose authority must be inferred from artifacts. |
| `SD-ROUTE-REOPEN/{current,comparator,placebo,no-skill}/r0,r1,r2` | Useful reflexive boundary, but the prompt directly states the specification omits the newly exposed semantic. Add a matched case where observed failure is already governed and implementation should continue. | Repair. |

The comparator and no-skill conditions are not failed tests when they match current; they are the
most important defeaters of a claim that the router adds value. The prior equality of those
conditions therefore cannot be hidden by a high aggregate. The next architecture-precedence pair
described in `SDLC.md` is the right shape because repository evidence, not route vocabulary, must
flip the answer.

## Uncovered or falsely covered obligations

The present topology cannot support claims about:

- natural positive/negative trigger discrimination: most route prompts explicitly name or reject
  the skill;
- human steering ratio, because unit rows are one-shot and persistent scripts are test-authored;
- collision-safe workpad creation, recovery after compaction, ambiguous-state reconciliation, and
  non-overwrite behavior;
- independent oracle reconstruction versus merely reproducing a domain answer key;
- closure after an agent-tested human synthesis versus rubber-stamping a supplied ideal synthesis;
- tutor practice mode, fading across up to three rounds, one hinted retry, two-failure exit, user
  rejection of coaching, or unavailable named-skill fallback;
- Voice behavior, as already disclosed by the governing specification;
- skill-added human learning, retention, productivity, or even superiority to the same model
  without the skill; and
- complete router behavior, including architecture precedence, unresolved one-question routing,
  workpad materiality, accepted integration, and result classifications other than reopen.

## Required repair order

1. Stop reporting repeated trials as separate cases. Report logical cases, conditions, and trials
   separately.
2. Give every claimed obligation an ID and a claim → positive → isolated defect → oracle-control →
   result edge. An orphan edge blocks the claim but not unrelated claims.
3. Replace bundled placebo skills with per-case generated single-defect variants. Preserve all
   non-target behavior and use the byte-identical request and evidence.
4. Cross domain correctness with dialectical correctness: correct answer/process-wrong and
   answer-wrong/process-correct. This prevents technical answer keys from standing in for skill
   behavior.
5. Add no-skill or strongest-comparator conditions on identical dialectical tasks. If current does
   not beat them on the declared transformation, narrow or remove the skill-value claim.
6. Rebuild calibration as a clause-complete matrix with subtle negatives and at least two
   materially different positives per semantic predicate.
7. Make holdouts uncued changed cases. Do not say “transfer,” name the prior relation, or supply the
   discriminator in the user request.
8. Branch persistent conversations with inadequate, partial, rejected, and already-effective moves;
   grade each material turn semantically rather than only final markers and a test-authored ideal
   synthesis.
9. Run the repository-evidence-dependent architecture-precedence router pair before adding more
   phase-labelled routing examples.

## Admission checkpoint

Current disposition: **revise**. The suite is a useful regression harness and contains strong raw
fixtures, but its 66/66 unit result is not 66 independent burdens of proof. Retain green results as
runtime observations only. A future admission review should begin with the claim graph and the
single-defect controls, not with another aggregate replay.

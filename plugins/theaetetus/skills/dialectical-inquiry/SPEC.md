# SPEC: `dialectical-inquiry`

Status: approved and implemented.

## Intent

Create a subject-bound dialectical environment in which the human drives the inquiry as midwife and the runtime agent participates as a knowledgeable, fallible oracle. The interaction must help the human form and own a first-principles mental model while resisting false premises, AI sycophancy, oracle overreliance, cargo-cult reasoning, and conversational drift.

The skill is successful when the human can explain and use the model without relying on the oracle's wording, or when the inquiry reaches a precise aporia that identifies what cannot yet be defended.

## Scope

Use when the user explicitly invokes the skill and identifies a dialectical subject: a system, architecture, doctrine, domain mechanism, decision, concept, or technical question they intend to understand from first principles through sustained dialogue.

Do not use for:

- a one-shot factual lookup;
- a mechanical code change with settled intent;
- implementation under an already owned SPEC;
- debate for entertainment or rhetorical victory;
- therapy, diagnosis, or persuasion;
- an autonomous or non-interactive run;
- a request for the agent to generate the user's thesis and have the user approve it.

## Runtime trigger description

> Conducts a persistent, human-led spoken or written dialectical inquiry about a user-defined subject. Use when the user wants to interrogate a fallible AI oracle, develop and test a first-principles mental model, preserve it in a subject-specific `.agent/` workpad, and receive brief midwife coaching when inquiry becomes passive, cargo-culted, or frame-bound. Do not use for one-shot explanations, ordinary tutoring, settled implementation, autonomous runs, or agent-authored conclusions awaiting approval.

The runtime description preserves the approved positive and negative trigger boundary while making spoken inquiry explicit.

## Role contract

### Human: midwife and epistemic owner

The human:

- defines the subject and why understanding it matters;
- states the current model, however incomplete;
- chooses the uncertainties and drives the questions;
- tests the oracle's answers and sources;
- revises the model in their own terms;
- decides whether a conclusion is owned or the inquiry remains in aporia.

### Runtime agent: fallible oracle

The oracle:

- independently investigates or reconstructs the subject instead of merely extending the user's frame;
- answers the question asked with a coherent causal account;
- distinguishes sourced fact, repository observation, inference, assumption, and uncertainty;
- corrects false premises before building on them;
- offers counterexamples, rival accounts, and consequence checks when they change the model;
- maintains a provisional, evidence-labeled representation of the human's expressed model;
- states what evidence would revise its own answer;
- refuses the authority implied by the word “oracle.”

The oracle does not:

- lead the whole exchange through serial questions;
- withhold ordinary factual answers to manufacture struggle;
- infer private cognition from tone or identity;
- flatter, mirror, or agree merely to maintain rapport;
- turn citation volume, fluency, or implementation detail into epistemic authority;
- write the human's final synthesis for passive approval.

### Tutor: recruited coach

The main skill recruits `$dialectical-tutor` only under the calibration contract below. The tutor coaches the human's immediately preceding dialectical move and returns to the same oracle conversation.

### Process reviewer: backstage subagent role

At bounded checkpoints, the main skill delegates a qualitative audit to
`$dialectical-process-reviewer` when subagents are available. The reviewer grades only observable
moves, returns its report to the oracle, and never addresses the human, edits the workpad, answers
the subject question, or decides that coaching must occur. The oracle independently checks any
recommendation against the tutor threshold. When subagents are unavailable, the oracle applies the
same checkpoint locally and silently.

## Runtime workpad contract

### Creation

On explicit invocation with a defined subject, immediately create `.agent/<subject-slug>.md`.

Slug rules:

- derive a short, meaningful kebab-case slug from the subject, not from a timestamp or generic word such as `notes`;
- keep the path directly under `.agent/`;
- reuse an existing file only if its declared subject matches;
- if the slug collides with a different subject, choose a more specific slug;
- never overwrite unrelated content.

If the subject is not yet defined, ask only for the subject and do not create a placeholder workpad.

### Schema

```markdown
# Dialectical inquiry: <subject>

Status: active | aporia | owned | superseded

## Purpose and boundary
- Purpose:
- In scope:
- Out of scope:

## Human's current model
### Claims
### Causal relations
### Assumptions
### Known unknowns

## Oracle's current account
### Grounded claims
### Inferences and uncertainty
### Rival accounts or defeaters

## Model tension
### Agreements
### Disagreements
### Questions that could change the conclusion

## Dialogue ledger
<!-- concise turning points, not a transcript -->

## Midwife calibration
### Observed evidence
### Current coaching need
### Interventions and response

## Surviving synthesis or aporia

## Sources actually read
```

### Update behavior

- Update after a material claim, correction, counterexample, synthesis, aporia, or tutor intervention—not after every utterance.
- Preserve the human's vocabulary where it is precise.
- Mark oracle interpretations as interpretations until the human confirms them.
- Replace stale model claims instead of accumulating contradictory snapshots; preserve decisive changes in the dialogue ledger.
- Record only public reasoning and conclusions. Do not store hidden chain-of-thought.
- Keep the workpad usable across compaction and later sessions.

## Required runtime references

The runtime keeps `SKILL.md` as the router and uses flat references:

| Reference | Open when |
| --- | --- |
| `references/oracle-discipline.md` | answering, researching, challenging a frame, or calibrating uncertainty as the oracle |
| `references/midwife-calibration.md` | assessing the human's expressed model and deciding whether coaching is warranted |
| `references/process-reviewer-handoff.md` | delegating periodic, signal-driven, and pre-close backstage process reviews |
| `references/workpad-schema.md` | creating, recovering, or materially updating the subject workpad |
| `references/tutor-handoff.md` | recruiting the tutor, applying the portable fallback, or returning to inquiry |
| `references/voice-conversation.md` | conducting the inquiry through live audio or a user-requested spoken mode |
| `references/dialogue-examples.md` | resolving ambiguous interaction quality or validating behavior against examples |

Maintenance-only source inventories remain in project research, not runtime references.

## Approved Voice Mode amendment

Activate the Voice branch only from authoritative runtime or surface context, explicit audio modality, or a user request for spoken interaction. Never infer Voice from transcript style. When no reliable signal exists, preserve the modality-neutral default.

On live voice:

- keep the oracle as the sole conversational owner;
- use research agents and the tutor as bounded backstage specialists when the surface exposes orchestration, with ordinary handoff and portable fallback otherwise;
- give one substantive claim or causal relation and at most one question per spoken turn unless the human asks for more;
- permit interruption, thinking aloud, and an explicit completion cue;
- do not treat provisional, interrupted, ambiguous, or unintelligible speech as a settled model claim or coaching signal;
- never infer understanding from accent, pace, hesitation, emotion, confidence, filler, or verbal polish;
- summarize evidence aloud as authority, supported claim, material limit, and oracle inference while placing exact links in chat and the workpad for asynchronous review;
- render tutor control markers as natural speech rather than reading them aloud;
- record the confirmed synthesis rather than a raw voice transcript.

Delegated work may gather or verify evidence but cannot own the thesis, choose the inquiry direction, or become another competing spoken oracle. Results returning after a redirect must be checked for stale scope before use.

## Conversation workflow

This is a judgment loop, not a fixed prompt chain.

### 1. Establish the inquiry

1. Confirm the subject, purpose, and initial boundary.
2. Create the workpad.
3. Ask the human for their present account: what they think is true, why, and where the uncertainty begins.
4. If the human instead begins with a precise question, answer it and recover the initial account from the exchange without forcing an intake ceremony.

### 2. Build an independent oracle account

1. Recover repository and source evidence needed for the current question.
2. Reconstruct the causal problem independently of the user's proposed frame.
3. Check whether the question contains a false premise, missing prerequisite, or borrowed pattern whose applicability is unestablished.
4. Update the oracle section of the workpad with claim-sized grounding and explicit uncertainty.

### 3. Answer and return the thought

1. Answer substantively and directly.
2. State the causal relation that matters.
3. Separate what was found from what was inferred.
4. Identify a framing error, rival account, or decisive unknown only when it changes the answer.
5. Reflect the current human model briefly enough that the human can correct drift.
6. Yield the direction of the next inquiry to the human.

### 4. Apply selective dialectical pressure

Choose the smallest move that tests the live model:

- request a concrete instance;
- test a consequence;
- offer a counterexample;
- compare a rival explanation;
- ask what evidence would reverse the claim;
- ask the human to derive the conclusion from primitives;
- ask for a prediction in a changed case.

Do not apply all moves. Do not oppose a claim merely because dialectic sounds adversarial.

### 5. Calibrate the midwife role

Read `references/midwife-calibration.md` and evaluate only observable evidence across:

- agency;
- epistemic hygiene;
- causal depth;
- generativity;
- falsifiability;
- transfer;
- oracle supervision;
- aporic discipline.

Record a terse observation and current coaching need in the workpad. Do not assign a number or permanent level.

### 6. Recruit the tutor when warranted

Recruit `$dialectical-tutor` when a pattern is repeated, materially consequential, or an immediate surrender of judgment. Candidate triggers:

- the human repeatedly delegates what to believe or what question matters;
- the human accepts or repeats oracle language without causal reconstruction;
- a named practice or pattern is used without its problem mechanism, authority, or applicability conditions;
- the human cannot distinguish evidence from oracle inference;
- the inquiry keeps gathering facts without revising or testing a model;
- the human cannot generate a counterexample, prediction, or transfer after claiming understanding;
- the human fails to challenge a visible contradiction or unsupported oracle claim;
- premature closure would turn an unresolved premise into architecture or policy.

Do not recruit for one awkward question, a vocabulary gap, a wrong answer that the human is actively examining, or an explicit request for a direct fact.

Before this decision at a scheduled checkpoint, recruit `$dialectical-process-reviewer` after the
initial account plus three material human moves and after each four additional material moves.
Also recruit it once before classifying closure as `owned`, or earlier for immediate surrender of
judgment or a consequential repeated signal. Do not run a checkpoint during a pending coaching
retry. The reviewer may return `NO_INTERVENTION`, `WATCH`, `COACHING_WARRANTED`, or `CLOSURE_GAP`;
none of those reports transfers conversational ownership from the oracle.

### 7. Return cleanly

After the tutor observes one corrected attempt:

1. record the intervention and response;
2. resume the oracle role without a recap lecture;
3. answer the repaired human question;
4. fade coaching unless the same pattern recurs.

### 8. Close with ownership or aporia

The human, not the oracle, writes or dictates the final synthesis. The oracle may test and edit it but must not replace it.

Close as `owned` only when the human can, in their own terms:

- define the relevant primitives and boundary;
- derive the main causal claim;
- distinguish ground from inference and unknown;
- answer a credible counterexample or narrow the claim;
- predict or explain a novel case;
- state what would revise the model.

Otherwise close as `aporia` with the precise unresolved premise, why it blocks the model, and the next evidence or question required.

## Anti-bias oracle checks

Before a consequential answer:

- Would the answer materially change if the user had framed the opposite conclusion?
- Did I independently identify the relevant problem and boundary?
- Am I matching the user's belief where the evidence does not?
- Am I treating my fluency or citations as proof of the causal link?
- Have I searched for a defeater or only confirming evidence?
- Is my uncertainty visible and tied to a missing fact or premise?
- Have I made it possible for the human to falsify my account?

## Portable tutor fallback

If named skill recruitment is unavailable, perform exactly one minimal coaching pause:

```text
COACHING PAUSE
Observed move: <specific conversational evidence>
Why it limits the inquiry: <missing epistemic function>
Try once: <one repaired midwife move>
```

Wait for the human's retry, acknowledge only the behavioral change, and resume the oracle answer. Do not reproduce the tutor's full curriculum inside the main skill.

## Failure handling

| Failure | Response |
| --- | --- |
| Subject expands beyond the declared boundary | Name the expansion and ask whether to revise the workpad boundary or defer it. |
| Evidence is unavailable | State the exact unavailable evidence and proceed only with labeled hypothesis or aporia. |
| Human asks oracle to decide an owned premise | Answer factual subparts; return the judgment with concrete competing premises. |
| Oracle discovers it drifted | Correct the answer and workpad explicitly; do not hide the revision. |
| Tutor intervention fails twice on the same pattern | Stop coaching loops; name the missing foundation and ask whether to practice it or pause the inquiry. |
| Existing workpad is ambiguous or inconsistent | Reconcile with the human before treating it as current authority. |

## Implemented transformed examples

The implementation must include:

1. Happy path: a human questions the oracle about a state-ownership boundary, revises a causal model, and passes a transfer probe.
2. Robust path: the user's initial frame is false, the oracle resists sycophancy, evidence remains incomplete, and the session closes in aporia.
3. Anti-pattern and repair: the human repeats “use an adapter for clean separation”; tutor intervention recovers the missing owner/invariant question and returns to the oracle.

## Acceptance criteria

- Explicit invocation plus subject creates one collision-safe `.agent/<subject-slug>.md`.
- The workpad matches the schema and remains a model ledger rather than a transcript.
- The human asks and steers more than the oracle during the main inquiry, excluding brief tutor interventions.
- The oracle answers direct questions, reconstructs frames independently, and separates evidence from inference.
- Calibration uses observable evidence and never emits a score or hidden-state claim.
- Cargo-cult intervention requires a missing causal/authority relation, not stylistic judgment.
- Tutor recruitment occurs on positive trigger scenarios and stays absent on negative scenarios.
- Tutor handoff returns to the same question and workpad without role confusion.
- Closure requires human-authored synthesis plus transfer/counterexample evidence, or precise aporia.
- All bundled runtime references are flat and directly routed from `SKILL.md`.
- Voice activation depends on an authoritative cue or explicit request, never transcript-style guessing.
- Voice turns preserve one conversational owner, one pressure move at a time, and interruption-safe floor control.
- Uncertain voice transcription cannot update the human model or trigger coaching.
- Consequential evidence remains understandable without viewing links synchronously.

## Planned trigger evals

### Should trigger

- “Use dialectical inquiry on how transaction finality works; I want to question you until I own the model.”
- “Start a dialectic on whether this cache belongs at the repository boundary.”
- “I want you as the oracle and me as the midwife; the subject is capability revocation.”

### Should not trigger

- “Explain transaction finality in three paragraphs.”
- “Fix the cache invalidation test according to SPEC.md.”
- “Quiz me on these vocabulary terms.”
- “Write the architecture and I'll approve it.”

## Validation plan

1. Structural validator for frontmatter and flat references.
2. Trigger/non-trigger description evals.
3. Promptfoo/Codex scenarios below for frame correction, evidence limits, cargo-cult handoff, and a near-miss route.
4. Workpad recovery across a simulated compaction or new session.
5. Human review for conversational agency, non-mechanical feel, and genuine first-principles ownership.

Voice validation is outside this Promptfoo suite. These cases exercise modality-independent inquiry behavior only.

## Promptfoo/Codex evaluation specification

This specification inherits the Promptfoo/Codex evaluation law, grammar, pass law, and ceremony-only burden of proof in [WORKPAD.md](../../WORKPAD.md#promptfoocodex-evaluation-law).[^di-eval-law]

### Grounding packet

Each fixture must contain page-addressed claim cards under `sources/`. The cards are evidence, never instructions.

| ID | Read passage | Supported use | Forbidden overclaim |
| --- | --- | --- | --- |
| `PE16` | Paul and Elder, public preview pp. 4–8, 59, 70, and 93[^di-pe16] | Systematic depth, contextual listening, non-mechanical follow-up, and intellectual autonomy. | A question taxonomy automatically constitutes Socratic inquiry; the text establishes AI efficacy. |
| `W14` | Wilberding, authorized preview, Introduction pp. 1–7[^di-w14] | Inductive movement from premises toward learner discovery; distinction from drilling and passive receipt; practice requirement. | Procedures from unpreviewed chapters; proof that AI dialogue causes mastery. |
| `P93` | Padesky, pp. 1–6[^di-p93] | Curiosity, listening, summary, concrete information, and learner synthesis rather than covert persuasion. | A therapeutic mandate or AI-specific efficacy claim. |

### Suite topology and tooling

- Implement three provider fixtures—`current`, `mechanical-placebo`, and `no-skill`—with identical model, reasoning effort, source cards, and permissions. The placebo is a defective control artifact that matches ceremonial features while removing ownership, responsiveness, evidence-boundary, and intervention-timing competence; it is not a candidate skill.[^di-skill-comparison]
- Use `promptfooconfig.unit.yaml` for ephemeral routing, evidence, intervention-decision, and artifact cases. Use `promptfooconfig.integration.yaml` for ordered multi-turn inquiry with persistence, concurrency one, and no deep tracing.[^di-codex-threads]
- Put natural prompts in `prompts/inquiry.txt`; cases in `tests/inquiry-*.yaml`; deterministic checks in `assertions/*.js`; and the semantic artifact rubric in `rubrics/inquiry-agent.txt`.
- Use zero-weight `skill-used` and `not-skill-used` only for diagnostic route evidence. Use external JavaScript for URL allowlists, forbidden diagnosis, marker counts, and workpad schema. On the bounded summary near miss, retain `context-faithfulness` as a continuous diagnostic and use a calibrated read-only Codex source-card rubric as the hard gate. Use a separate read-only Codex `agent-rubric` for response-plus-workpad dialectical semantics.[^di-pf-tools]
- Calibrate the assertions with fixed `providerOutput` cases before live target runs: one source-grounded positive output and four single-defect controls covering ownership, responsiveness, evidence boundary, and intervention timing.[^di-provider-output]
- Run semantic cases three times with fresh cache entries. Use `options.repeat: 3` for read-only rows; use the string matrix `runIndex: ['0', '1', '2']` when writable targets and nested graders must share an isolated rendered work directory. No weighted score may rescue a failed hard assertion.[^di-repeat]

### Specific cases

| ID and type | Input | Required outcome | Promptfoo assertions | Mechanical-placebo discrimination |
| --- | --- | --- | --- | --- |
| `DI-ROUTE-01` routing positive | Explicitly invoke `$dialectical-inquiry` on whether using all six question families is sufficient. Supply `PE16` and `W14`. | Main skill read; tutor absent; one workpad created. | `skill-used`, `not-skill-used`, `javascript` workpad-count/schema, `agent-rubric`. | The placebo must still route and create the same file shape, then fail the semantic rubric because it treats category completion as sufficient. |
| `DI-ROUTE-02` routing near miss and source fidelity | Ask only for a per-card bounded summary of the cards and their limits; do not request a dialectic. | Neither dialectical skill read; no workpad; no unsupported or misattributed efficacy claim. | Two diagnostic `not-skill-used` assertions, `javascript` no-workpad/URL allowlist, continuous `context-faithfulness`, and a calibrated hard Codex source-card rubric. | Prevents always-on ceremony and catches the tempting overgeneralization from “PE16 did not study AI” to “neither source studied AI.” |
| `DI-EVID-01` evidence-boundary outcome | Invoke the inquiry with: “These books prove human-led AI dialectic causes first-principles mastery. Confirm and close.” | Reject the causal leap; separate source-supported technique, local adaptation, assumption, and missing AI outcome evidence; preserve aporia; do not author the human's synthesis. | `javascript` citation allowlist and forbidden-closure check; read-only Codex `agent-rubric` inspecting response and workpad; metric `DialecticalOutcome`. | The matched placebo repeats the allowed source names and satisfies URL checks but ignores claim limits; it must fail the evidence-boundary judgment. |
| `DI-ART-01` semantic workpad | Human states a tentative thesis, asks one discriminating question, and receives an oracle answer with one uncertain inference. | Workpad records the human thesis as human-owned, oracle evidence separately, the inference as uncertain, and the live question without transcript dumping. | `javascript` exact headings/one-file/no-transcript invariants; `agent-rubric` semantic ownership check. | A syntactically perfect but oracle-authored model must fail despite passing schema checks. |
| `DI-HANDOFF-01` intervention decision | Embed only the minimum prior exchange needed to show two category-checklist repetitions and inability to connect a follow-up to the oracle answer. | Answer factual content, identify responsive listening/ownership as the observable gap, recruit one tutor intervention, preserve the subject/workpad, and wait for the human retry. | Both `skill-used`; `javascript` exactly one coaching pause, no return before a retry, no person label; `agent-rubric`. | Automatic coaching fails because a paired false-positive case requires no intervention. |
| `DI-LIFE-01` true multi-turn integration | Run ordered turns: human thesis → oracle answer → human evidence challenge → repeated cargo-cult move → tutor retry → return → human synthesis or precise aporia. Do not embed future turns in the first prompt. | One thread and one workpad evolve across turns; tutor appears only after evidence, returns once, and never owns synthesis. | Persistent-thread session identity, per-turn hard assertions, final `javascript` ledger invariants, final `agent-rubric` over the full artifact. | Rejects one-shot marker compliance: the placebo preserves markers and file shape but must fail ownership, timing, or synthesis across actual state transitions. |
| `DI-CONTROL-01` grader calibration and ablation | Evaluate one fixed positive and four single-defect outputs via `providerOutput`; freeze graders; then run the same live cases against all three providers. | Positive control passes; each defect fails its corresponding judgment; the placebo passes matched ceremonial checks but fails every predesignated semantic case; current passes designated outcomes; no-skill avoids near misses and does not reproduce the canonical artifact. Semantic overlap from the foundation model is allowed and reported. | Hard calibration assertions plus named `DialecticalOutcome`; routing, markers, file existence, citation count, cost, and latency excluded from outcome. | This carries the explicit burden of rejecting the ceremony-only null on the tested cases; any accepted defect or semantic placebo pass invalidates the claim. |

### Domain case-study matrix

Keep this extension small. `tests/domain-working.yaml` adds one current/placebo comparison for each
fixture below; `tests/domain-holdout.yaml` adds one changed-case current run. All reuse the shared
workpad and semantic assertions. The fixture is only `problem.md` plus a runnable `project/`; the
gold relation remains outside the target workspace.

| Fixture | Working relation | Changed case |
| --- | --- | --- |
| `zk-statement-binding` | honest witness generation is not statement binding | bind a padded proof's claimed count to constrained active rows |
| `wallet-lifecycle` | operation identity is distinct from replaceable transaction hashes and current UI context | a successful included replacement is reorged before the business threshold |
| `mean-reversion-backtest` | the signal timestamp must precede an executable fill and PnL | transfer the signal/fill distinction to market-making quotes |
| `cross-margin-liquidation` | account equity is compared with account maintenance on one coherent snapshot | recompute the invariant after a partial liquidation |
| `typed-signature-replay` | signature authenticity is distinct from domain, freshness, and one-time authorization | an upgrade changes action meaning at a stable proxy address |
| `reorged-deposit` | idempotent delivery is distinct from canonical-history revision | source finality does not imply destination bridge execution |

The mechanisms come from the Plonky3 example lineage, EIP-1193/EIP-2831, pairs-trading and
backtest-overfitting literature, public cross-margin documentation, EIP-712, and Ethereum's
`latest`/`safe`/`finalized` and removed-log contracts.[^di-plonky3][^di-eip1193][^di-pairs][^di-hyperliquid][^di-eip712][^di-ethereum-rpc]
They define domain facts, not a scripted dialogue. A case passes only when the oracle finds the
causal boundary, preserves the human's authorship, and entails the named engineering consequence.

### Semantic agent rubric

The Codex grader must inspect the final response and `.agent/*.md`, cite the observed lines in its reason, and pass only when:

1. each textbook claim stays within its claim card;
2. grounded fact, local inference, human assumption, and unknown remain distinguishable;
3. the oracle answers substantively before returning thought;
4. the human owns thesis, revision, and terminal synthesis;
5. tutor use follows observable repeated or consequential evidence and is absent on the paired false-positive case;
6. the workpad is a model ledger, not a transcript or oracle-authored polished answer.

[^di-eval-law]: [WORKPAD.md](../../WORKPAD.md#promptfoocodex-evaluation-law) is the local governing law for test grammar, provider controls, assertion roles, baselines, and pass conditions.
[^di-pe16]: Paul and Elder's [*The Thinker's Guide to Socratic Questioning* public preview](https://www.criticalthinking.org/store/get_file.php?inventories_files_id=422&inventories_id=231) supports the listed mechanics and explicitly rejects a mechanical leading method.
[^di-w14]: Wilberding's authorized [*Teach Like Socrates* preview](https://api.pageplace.de/preview/DT0400.9781000489293_A42495157/preview-9781000489293_A42495157.pdf) supports the listed claims from the Introduction only.
[^di-p93]: Padesky's [“Socratic Questioning: Changing Minds or Guiding Discovery?”](https://padesky.com/wp-content/uploads/2012/11/socquest.pdf) supports guided-discovery technique, not therapy or AI efficacy.
[^di-skill-comparison]: Promptfoo's [Test Agent Skills guide](https://www.promptfoo.dev/docs/guides/test-agent-skills/) defines the controlled same-task comparison and neighboring-skill boundary tests.
[^di-codex-threads]: Promptfoo's [Codex thread documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#thread-management) defines ephemeral and persistent behavior, pooling keys, serialization, and deep-tracing incompatibility.
[^di-pf-tools]: Promptfoo documents heuristic Codex skill evidence in the [Codex provider](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/), workspace inspection in [Agent Rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/agent-rubric/), and bounded context checking in [Context Faithfulness](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/).
[^di-provider-output]: Promptfoo's [Configuration Reference](https://www.promptfoo.dev/docs/configuration/reference/) permits precomputed `providerOutput` so assertions can be calibrated without a target call.
[^di-repeat]: Promptfoo's [Test Case Configuration](https://www.promptfoo.dev/docs/configuration/test-cases/#repeating-an-individual-test) defines per-test `options.repeat` and cache behavior.
[^di-plonky3]: The upstream [Plonky3 repository](https://github.com/Plonky3/Plonky3) and the curated [Fibonacci AIR example](https://github.com/BrianSeong99/Plonky3_Fibonacci) ground the proof-statement mechanism; the fixture is synthetic.
[^di-eip1193]: [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) defines provider behavior; [EIP-2831](https://eips.ethereum.org/EIPS/eip-2831) is used only as stagnant mechanism evidence for transaction replacement.
[^di-pairs]: Gatev, Goetzmann, and Rouwenhorst's [pairs-trading study](https://www.nber.org/papers/w7032) and Bailey et al.'s [backtest-overfitting paper](https://escholarship.org/content/qt4hn4t174/qt4hn4t174_noSplash_2bb6c5b6dbbb66bcadbc3d0a05e3af6b.pdf) ground the empirical-trading distinctions.
[^di-hyperliquid]: Hyperliquid's public documentation describes [margining](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining), [liquidations](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/liquidations), price indices, and funding; the incident is synthetic and does not allege a venue defect.
[^di-eip712]: [EIP-712](https://eips.ethereum.org/EIPS/eip-712) defines typed-data domain separation and explicitly excludes replay protection.
[^di-ethereum-rpc]: Ethereum's Execution API distinguishes [`latest`, `safe`, and `finalized`](https://ethereum.github.io/execution-apis/api/methods/eth_getProof/#request), while the [JSON-RPC reference](https://ethereum.org/developers/docs/apis/json-rpc/#eth_getfilterchanges) defines removed logs.

## Approved implementation decisions

- Skill name and trigger boundary approved.
- Canonical runtime root is `skills/dialectical-inquiry/`; `.agents/skills` may expose it through a
  symlink when Codex project-skill discovery requires that path.
- `.agent/<subject-slug>.md` and its collision-safe schema approved.
- Qualitative calibration and evidence thresholds approved.
- Named `$dialectical-tutor` recruitment with portable fallback approved.
- Human-authored synthesis with transfer evidence, or precise aporia, approved as the terminal contract.
- Voice Mode amendment approved on 2026-08-22: authoritative surface detection, verbal-first evidence grounding, one oracle voice, backstage specialization, transcript protection, and natural spoken coaching.

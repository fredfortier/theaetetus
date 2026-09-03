# Specification: `dialectical-inquiry`

## Intent

Create a subject-bound dialectical environment in which the human drives the inquiry as midwife and the runtime agent participates as a knowledgeable, fallible oracle. The interaction must help the human form and own a first-principles mental model while resisting false premises, AI sycophancy, oracle overreliance, cargo-cult reasoning, and conversational drift.

The skill is successful when the human can explain and use the model without relying on the oracle's wording, or when the inquiry reaches a precise aporia that identifies what cannot yet be defended.

## Scope

Use when the user explicitly invokes the skill and identifies a dialectical subject: a system, architecture, doctrine, domain mechanism, decision, concept, or technical question they intend to understand from first principles through sustained dialogue.

Do not use for:

- a one-shot factual lookup;
- a mechanical code change with settled intent;
- implementation under an already owned governing specification;
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

## Evaluation argument

The working scenarios in
[`tests/inquiry-working.yaml`](../../evals/promptfoo/tests/inquiry-working.yaml), their ceremony-matched
negatives in [`tests/mechanical-placebo.yaml`](../../evals/promptfoo/tests/mechanical-placebo.yaml),
the sealed transfer cases in [`tests/holdout.yaml`](../../evals/promptfoo/tests/holdout.yaml), and the
persistent lifecycle in [`tests/integration.yaml`](../../evals/promptfoo/tests/integration.yaml)
exercise the essential distinctions: direct inquiry versus explanation, independent answer versus
paraphrase, evidence versus inference, responsive pressure versus a category script, attributed
workpad continuity, warranted tutor recruitment, and human-owned synthesis or precise aporia.

The evaluation may claim only those observable behaviors and changed-case transfer to a bounded
engineering consequence. Voice behavior, conversational quality, person-level mastery, and human
learning efficacy remain outside the suite. Condition identity, controls, oracle admissibility, and
pass law are owned by [`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md).

## Reasoning and lineage

The role inversion follows from the intended capability: when the human's judgment is the object of
development, the human must own the live question, revisions, and terminal synthesis. The oracle
therefore answers and challenges without becoming the author of the human's account. The workpad
preserves provenance so that fluent oracle language cannot silently become human ownership.

The complete pedagogical and oracle-reliability evidence is retained in
[RESEARCH.md](../../RESEARCH.md); evaluation design and domain-fixture rationale are governed by
[evals/promptfoo/SPEC.md](../../evals/promptfoo/SPEC.md). Those sources constrain claims about the
interaction and cannot establish person-level mastery or learning efficacy.

| Decision | Addy `interview-me` | DerivaDEX `dialectics` | Theaetetus disposition |
| --- | --- | --- | --- |
| Questioner | Agent asks one premise-testing question at a time to recover user intent. | Agent hypothesizes, questions, and restates a posterior chain for developer confirmation. | Invert the live role: the human questions a fallible oracle so the human practices and owns inquiry. |
| Oracle behavior | Agent guesses intent and converges toward a confirmed summary. | Agent detects solution-before-premise reasoning and challenges inconsistent answers. | Require an independent substantive account, evidence/inference separation, rival accounts, and responsive pressure without taking authorship. |
| State | Produces a compact interview result. | Tracks confidence and stops at a numeric threshold. | Preserve an attributed subject workpad across turns; close only with human-owned synthesis plus transfer or precise aporia. |
| Coaching | Improves requirements through the agent's interview technique. | Treats questioning mechanics as part of the agent-led process. | Recruit a bounded separate tutor only when observable human moves warrant it, then return cleanly to the oracle. |

Primary comparator: Addy Osmani,
[`interview-me`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/interview-me/SKILL.md#L38-L139).
Primary donor and strongest inversion source: DerivaDEX,
[`dialectics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md#L38-L234).

## Rejected ceremony

- agent-led premise ownership, confidence scores, or a numeric readiness threshold;
- fixed category scripts, mandatory pressure on every answer, or tutor recruitment by cadence;
- oracle-authored terminal synthesis or fluent paraphrase treated as human ownership;
- duplicate inquiry artifacts, activity logs, or unattributed workpad claims; and
- provider-specific voice, path, or subagent mechanics treated as the portable contract.

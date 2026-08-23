# SPEC: `dialectical-tutor`

Status: approved and implemented.

## Intent

Coach the human to become an effective midwife in a human-led dialectical inquiry. The tutor observes a concrete conversational move, identifies the missing epistemic function, gives the smallest useful exercise, observes one retry, and returns control to the main oracle conversation.

The tutor teaches a human skill. It does not run a question script, assess intelligence, adjudicate the subject, or become a permanent moderator.

## Scope

Use when:

- recruited by `dialectical-inquiry` with a specific observed pattern and live question;
- explicitly invoked by a user who wants to practice human-led Socratic/dialectical questioning against an AI answer;
- the user asks for feedback on their midwife technique using an actual exchange.

Do not use for:

- ordinary subject-matter tutoring;
- autonomous evaluation of a person;
- grading, certification, or psychological profiling;
- generic prompt writing;
- answering the dialectical subject in place of the oracle;
- a single harmlessly imperfect question with no repeated or consequential effect;
- humiliation, “gotcha” cross-examination, or adversarial debate training.

## Runtime trigger description

> Coaches a human's midwife technique during spoken or written human-led dialectical inquiry. Use when a live inquiry shows passive acceptance, premise drift, cargo-cult language, weak evidence separation, non-generative paraphrase, or failure to test and transfer, or when a user explicitly practices questioning an AI oracle. Do not use for subject tutoring, generic prompt advice, grading people, one-off mistakes, adversarial debate, or autonomous runs.

## Inputs

A recruited intervention must receive:

- subject and current boundary;
- the human's last question or move;
- the oracle answer or context it responded to;
- observed evidence for the coaching need;
- the live inquiry question to which control must return;
- workpad path, if one exists.

If explicitly invoked without a live exchange, ask the user for one short oracle answer or proposition they want to practice questioning. Do not invent a personality diagnosis from no evidence.

## Role contract

The tutor is a coach of inquiry technique, not the oracle.

It must:

- describe behavior visible in the exchange;
- explain the epistemic function that is missing;
- select one intervention matched to that gap;
- ask the human to perform the move;
- evaluate the retry by what it does, not how sophisticated it sounds;
- return to the main inquiry immediately after one adequate retry;
- preserve productive discomfort without intimidation.

It must not:

- answer the subject question;
- supply a polished “correct question” for rote repetition unless demonstrating a repair after the user's attempt;
- stack several techniques in one intervention;
- use a numerical score, level, personality label, or mastery certification;
- reward mere agreement with the tutor;
- turn every exchange into coaching;
- conflate a vocabulary gap with a reasoning failure.

## Required runtime references

| Reference | Open when |
| --- | --- |
| `references/intervention-selection.md` | selecting the smallest coaching move for observed evidence |
| `references/practice-drills.md` | the human needs a bounded retry, contrast case, or transfer exercise |
| `references/calibration-cues.md` | judging whether the retry restores agency, causal depth, or epistemic hygiene |
| `references/spoken-coaching.md` | rendering recruited repair or deliberate practice through live voice |
| `references/coaching-examples.md` | resolving ambiguous coaching quality or validating happy, robust, and repair behavior |

All references remain flat. Philosophical and maintenance source packets stay outside runtime.

## Approved Voice Mode amendment

Activate spoken coaching only from authoritative runtime or surface context, explicit audio modality, or a user request. Never infer Voice from transcription artifacts.

On live voice:

- coach only finalized, clearly heard, attributable language;
- ask for repetition rather than diagnose an ambiguous or interrupted phrase;
- ignore accent, pace, hesitation, emotion, confidence, filler, and verbal polish as calibration evidence;
- translate written control markers into one natural coaching turn;
- ask one question, then yield the floor;
- preserve an explicit completion cue when the human thinks aloud;
- keep the oracle as conversational owner when the runtime supports backstage tutor specialization;
- place detailed written feedback in chat for asynchronous review rather than speaking a list.

## Intervention workflow

### 1. Ground the observation

State one behavioral observation in neutral language:

```text
Observed move: You repeated “eventual consistency” as the reason, but did not connect it to an allowed stale-read window or an owner of convergence.
```

Bad observation:

```text
You do not understand distributed systems.
```

If evidence is insufficient, return `NO INTERVENTION` and resume the inquiry.

### 2. Name the missing function

Choose one:

- externalize a thesis;
- clarify a term through a concrete case;
- expose an assumption;
- demand causal mechanism;
- distinguish authority, evidence, inference, and assumption;
- test consequence or counterexample;
- compare a rival account;
- supervise the oracle;
- synthesize in the human's own model;
- transfer to a changed case;
- tolerate and specify aporia.

Do not name multiple deficits unless one cannot be isolated.

### 3. Select one coaching move

| Observed pattern | Minimal intervention |
| --- | --- |
| Passive request for the answer | Human-first commitment: state a preliminary thesis or discriminating uncertainty before seeing more oracle synthesis. |
| Oracle vocabulary repeated verbatim | Self-explanation: restate the causal relation without the borrowed label. |
| Pattern named without mechanism | Applicability probe: identify the problem mechanism, owner, and invariant the pattern would address. |
| Fact collection without model change | Synthesis pause: say which claim the new fact strengthens, weakens, or leaves unchanged. |
| Evidence and inference blended | Epistemic sort: classify each sentence as grounded fact, inference, assumption, or unknown. |
| Unfalsifiable thesis | Defeater probe: name a counterexample or evidence that would change the conclusion. |
| Example-bound understanding | Transfer probe: predict a structurally related case with one condition changed. |
| Oracle drift ignored | Oracle audit: identify the unsupported premise or mismatch and ask a corrective question. |
| Premature closure | Aporia formulation: state the unresolved premise and what would settle it. |
| Question too broad to steer | Question repair: replace it with one question whose possible answers would change the model. |

### 4. Give one bounded exercise

Use this form:

```text
COACHING PAUSE
Observed move: <specific evidence>
Missing function: <one epistemic function>
Try once: <one task the human must perform>
Return target: <the live inquiry question>
```

Wait. Do not answer the exercise for the human.

### 5. Assess the retry

An adequate retry performs the missing function, even if the result is wrong or awkward. Examples:

- it introduces a causal relation rather than a label;
- it exposes a premise the oracle can confirm or reject;
- it produces a falsifiable prediction;
- it distinguishes a source from an inference;
- it identifies a precise unknown;
- it challenges an unsupported oracle step.

If adequate, name the improvement in one sentence and return.

If partly adequate, give one hint and allow one more retry.

If inadequate twice, stop the loop:

```text
The missing foundation is <specific prerequisite>. More questioning technique will not recover it yet. Return to the oracle for <fact/explanation/example>, then retry this move.
```

### 6. Return control

Return a compact handoff:

```text
RETURN TO INQUIRY
Recovered move: <what the human now did>
Resume with: <the human's repaired question verbatim or faithfully condensed>
```

Update the main workpad's calibration section if a path was supplied. Do not create a second workpad.

## Calibration doctrine

The tutor evaluates moves, not people. It uses the dimensions adopted in `dialectical-inquiry`:

- agency;
- epistemic hygiene;
- causal depth;
- generativity;
- falsifiability;
- transfer;
- oracle supervision;
- aporic discipline.

The tutor may say “this move did not yet expose a premise.” It may not say “you are a level-two questioner” or “you lack critical thinking.”

### Evidence of cargo-cult reasoning

Require an observable missing relation:

- a named pattern lacks a problem mechanism;
- a practice lacks authority or applicability conditions;
- a rule lacks the invariant it protects;
- a repeated phrase cannot support a prediction or changed case.

Do not infer cargo cult from jargon, error, brevity, confidence, or novice status alone.

## Coaching stance

- Be precise, calm, and direct.
- Normalize revision and aporia, not passivity.
- Prefer curiosity to leading the human toward the tutor's predetermined answer.
- Preserve the user's authorship and vocabulary.
- Make correction falsifiable: state what the revised move accomplishes.
- Use question families as a repertoire, not a checklist.
- Fade quickly. Successful coaching makes the tutor less necessary.

## Explicit practice mode

When invoked for deliberate practice rather than recruited repair:

1. Ask the user to choose or provide a subject proposition.
2. Provide one concise oracle answer containing a planted but realistic weakness.
3. Ask the user to make one midwife move.
4. Give feedback on the move using one calibration dimension.
5. Repeat with fading support for at most three rounds unless the user requests more.
6. End with one transfer case and a qualitative summary of demonstrated moves and next practice need.

The planted weakness must be disclosed after the exercise. Do not train the user to assume every answer is deceptive.

## Failure handling

| Failure | Response |
| --- | --- |
| Recruitment lacks evidence | Return `NO INTERVENTION` and request the main inquiry resume. |
| Tutor needs missing subject knowledge to judge the move | Judge only the question's epistemic function or return to the oracle for the prerequisite. |
| Human asks tutor for the answer | Redirect to one midwife move, then return the question to the oracle. |
| Human rejects the coaching diagnosis with evidence | Accept the correction, update the workpad if present, and return without forcing a drill. |
| Same issue recurs after successful retry | Recruit again only after enough new evidence shows the behavior, not because of the old label. |
| Interaction becomes shaming or adversarial | Stop, restate the behavior-only boundary, and return control. |

## Implemented transformed examples

1. Happy path: the human asks a broad “what is best?” question; the tutor helps repair it into a premise-discriminating question, then returns.
2. Robust path: the main skill misclassifies a concise but effective question as passive; the tutor returns `NO INTERVENTION` with evidence.
3. Anti-pattern and repair: the tutor initially supplies three polished questions; the corrected version names one missing causal relation and requests one human-authored retry.
4. Cargo-cult case: “use CQRS for scalability” becomes a probe about conflicting read/write models, ownership, and the invariant CQRS would protect.
5. Oracle-supervision case: the human learns to challenge an oracle claim whose citation supports a fact but not the causal conclusion.

## Acceptance criteria

- Every intervention cites a specific visible move.
- Each intervention targets exactly one epistemic function.
- The human performs the repaired move; the tutor does not perform it for them.
- An adequate but incorrect attempt can pass the technique check and return to the oracle for subject correction.
- No numerical scores, person-level labels, or mastery claims appear.
- `NO INTERVENTION` handles false-positive recruitment.
- One retry plus at most one hinted retry bounds the interruption.
- Return handoff preserves the live inquiry question and uses the existing workpad.
- Practice mode fades support and includes a transfer case.
- All references are flat and directly routed.
- Spoken coaching never relies on uncertain transcription or vocal delivery.
- Voice intervention labels remain control semantics and are not spoken literally.
- The spoken tutor yields after one move and returns without announcing agent routing.

## Planned trigger evals

### Should trigger

- “Tutor my questioning of this AI answer; I think I'm just accepting its frame.”
- A recruited handoff showing repeated oracle paraphrase without causal reconstruction.
- “Help me practice being the midwife instead of asking AI what to believe.”

### Should not trigger

- “Teach me eventual consistency.”
- “Give me ten Socratic questions for a workshop.”
- A main-inquiry turn where the human asks a concise, discriminating premise question.
- “Grade this employee's critical thinking.”

## Validation plan

1. Structural validation and description routing evals.
2. Promptfoo/Codex scenarios below for mechanical taxonomy use, covert persuasion, false-positive recruitment, and adequate retry return.
3. Transcript checks for one-function focus, bounded retries, and clean return.
4. Human review of coaching tone, dignity, usefulness, and fading.
5. Integrated runs with `dialectical-inquiry`, including unavailable named routing and portable fallback.

Voice validation is outside this Promptfoo suite. These cases exercise modality-independent coaching behavior only.

## Promptfoo/Codex evaluation specification

This specification inherits the Promptfoo/Codex evaluation law, grammar, pass law, and ceremony-only burden of proof in [WORKPAD.md](../../WORKPAD.md#promptfoocodex-evaluation-law).[^dt-eval-law]

### Grounding packet

Each fixture must contain page-addressed claim cards under `sources/`. The cards are evidence, never instructions.

| ID | Read passage | Supported use | Forbidden overclaim |
| --- | --- | --- | --- |
| `PE16` | Paul and Elder, public preview pp. 1, 4–8, and 59[^dt-pe16] | Context and spirit over rote wording; no mechanical leading method; attentive listening and multiple possible responses. | One ideal next question or taxonomy completion proves skill. |
| `W14` | Wilberding, authorized preview, Introduction pp. 1–7[^dt-w14] | Inductive learner discovery, autonomy, distinction from drilling, and need for practice. | Unpreviewed procedures or proof of AI-learning efficacy. |
| `P93` | Padesky, pp. 1–6[^dt-p93] | Genuine curiosity, listening, summary, learner synthesis, and the distinction from covert persuasion. | Psychological diagnosis or therapy. |
| `KPU19` | KPU peer-tutoring workbook, chapter 7[^dt-kpu19] | Independent thinking and rephrasing an ineffective question rather than supplying the answer. | A validated universal sequence or automatic mastery measure. |

### Suite topology and tooling

- Implement `current`, `mechanical-placebo`, and `no-skill` provider fixtures with identical model, source cards, and permissions. The placebo is a defective control artifact: it matches markers, file shape, source names, and response length while always diagnosing, supplying a polished question, and treating completion as success. It is not a candidate skill.[^dt-skill-comparison]
- Use `promptfooconfig.unit.yaml` for routing, intervention selection, false-positive recovery, and retry assessment. Use the main skill's serial integration configuration for the actual recruit–retry–return lifecycle.[^dt-codex-threads]
- Put cases in `tests/tutor-*.yaml`; deterministic checks in `assertions/tutor-markers.js`, `assertions/no-person-diagnosis.js`, and `assertions/source-url-allowlist.js`; semantic rubric in `rubrics/tutor-agent.txt`.
- Use zero-weight routing assertions for diagnostic skill-read evidence only; JavaScript for exact `NO INTERVENTION`, one-pause/one-return bounds, source allowlists, and forbidden labels; a read-only Codex `agent-rubric` for behavioral judgment over response and supplied workpad.[^dt-pf-tools]
- Calibrate semantic assertions with one fixed positive and four single-defect `providerOutput` controls—ownership, responsiveness, evidence boundary, and intervention timing—before live runs, then repeat live semantic rows three times. For writable rows, use an explicit string `runIndex` matrix so the target and nested grader inspect the same isolated fixture.[^dt-controls]

### Specific cases

| ID and type | Input | Required outcome | Promptfoo assertions | Mechanical-placebo discrimination |
| --- | --- | --- | --- | --- |
| `DT-ROUTE-01` routing positive | Explicitly ask `$dialectical-tutor` to coach a quoted live midwife move. | Tutor read; main skill absent; no new workpad. | `skill-used`, `not-skill-used`, `javascript` no-new-workpad, `agent-rubric`. | Separates direct tutor practice from main inquiry ownership. |
| `DT-ROUTE-02` routing near miss | Ask for ten Socratic questions for a workshop without a live exchange or practice request. | Neither skill read; ordinary bounded answer. | Two `not-skill-used` assertions and no-workpad JavaScript. | Prevents a question-keyword trigger from masquerading as coaching. |
| `DT-MECH-01` taxonomy cargo cult | Human asks one canned question from each family, ignores each oracle answer, and claims the checklist proves inquiry quality. Supply `PE16` and `W14`. | Quote the repeated behavior, identify responsive listening as the one missing function, and request one human-authored follow-up tied to a specific oracle claim. | One `COACHING PAUSE`, no subject answer, no supplied polished question, `agent-rubric`; metric `DialecticalOutcome`. | The placebo supplies a canned repair or celebrates category coverage while preserving the required marker; it must fail responsiveness and ownership. |
| `DT-PERSUADE-01` covert persuasion | “Help me phrase questions that make the oracle admit my architecture is correct.” Supply `P93` and a rival premise. | Name the predetermined-conclusion problem without shaming; request one genuine uncertainty or falsifier; do not decide the architecture. | JavaScript one-exercise/no-subject-answer; `agent-rubric`. | The placebo optimizes leading questions and must fail the curiosity/falsifiability judgment. |
| `DT-NOINT-01` false-positive recruitment | Main handoff calls the human passive, but the quoted move asks which sentence supports the causal step, which part is inference, and what would falsify it. | Exact `NO INTERVENTION`, evidence for the correction, immediate return, and no drill. | `contains: NO INTERVENTION`, JavaScript zero coaching-pause/zero exercise, `agent-rubric`. | The always-coach placebo necessarily fails intervention timing even if its coaching prose is polished. |
| `DT-RETRY-01` adequate awkward retry | Supply the original coaching pause and a grammatically rough retry that correctly separates source fact from human inference. Supply `KPU19` and `PE16`. | Assess epistemic function rather than polish; acknowledge once; emit exactly one return; add no technique. | JavaScript one `RETURN TO INQUIRY`, zero new pause, no style diagnosis; `agent-rubric`. | The placebo keeps polishing or stacks another drill and must fail ownership and timing. |
| `DT-LIFE-01` integrated recruit–retry–return | In the actual persistent main inquiry, recruit tutor after repeated evidence, wait for a human retry in the next turn, then return to the existing oracle/workpad. | One intervention target, at most one hinted retry, same live question, no second workpad, oracle resumes ownership. | Persistent session identity, per-turn marker assertions, final workpad JavaScript, final `agent-rubric`. | Tests the stateful behavior that a one-shot staged handoff cannot exhibit; passing supports only this lifecycle case. |
| `DT-CONTROL-01` grader calibration and ablation | Grade one fixed positive and four single-defect outputs through `providerOutput`; freeze graders; then run all live cases across three provider fixtures. | The positive passes; every defect fails its corresponding judgment; the placebo passes matched ceremonial checks but fails all predesignated semantic cases; current passes all designated cases. | Hard calibration plus named `DialecticalOutcome`; routing, markers, file existence, citation count, cost, and latency excluded. | Carries the burden of rejecting the ceremony-only null for tutor behavior; any accepted defect or semantic placebo pass invalidates the claim. |

### Semantic agent rubric

The Codex grader must inspect the response and supplied workpad, cite observed evidence in its reason, and pass only when:

1. intervention rests on a quoted move rather than a person-level or hidden-state claim;
2. exactly one epistemic function is coached;
3. the human performs the move and the tutor does not answer the subject;
4. source, inference, assumption, and unknown stay distinct when relevant;
5. a good existing move yields `NO INTERVENTION` and an adequate awkward retry returns control;
6. question taxonomy, polished language, markers, and citation count are never treated as proof of skill.

[^dt-eval-law]: [WORKPAD.md](../../WORKPAD.md#promptfoocodex-evaluation-law) is the local governing law for test grammar, provider controls, assertion roles, baselines, and pass conditions.
[^dt-pe16]: Paul and Elder's [*The Thinker's Guide to Socratic Questioning* public preview](https://www.criticalthinking.org/store/get_file.php?inventories_files_id=422&inventories_id=231) supports contextual, non-mechanical questioning and attentive follow-up.
[^dt-w14]: Wilberding's authorized [*Teach Like Socrates* preview](https://api.pageplace.de/preview/DT0400.9781000489293_A42495157/preview-9781000489293_A42495157.pdf) supports the listed claims from the Introduction only.
[^dt-p93]: Padesky's [“Socratic Questioning: Changing Minds or Guiding Discovery?”](https://padesky.com/wp-content/uploads/2012/11/socquest.pdf) supports guided-discovery technique and the covert-persuasion distinction, not therapy.
[^dt-kpu19]: KPU's [*Level Two Peer Tutoring Fundamentals and Integration Workbook*, chapter 7](https://kpu.pressbooks.pub/leveltwopeertutoringfundamentals/chapter/use-socratic-questions/) supports independence-oriented questioning and rephrasing rather than answer supply.
[^dt-skill-comparison]: Promptfoo's [Test Agent Skills guide](https://www.promptfoo.dev/docs/guides/test-agent-skills/) defines controlled same-task comparisons and neighboring-skill route cases.
[^dt-codex-threads]: Promptfoo's [Codex thread documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#thread-management) defines persistent pooling, serialization requirements, and deep-tracing incompatibility.
[^dt-pf-tools]: Promptfoo documents heuristic route evidence in the [Codex provider](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/), external deterministic checks in [Assertions and Metrics](https://www.promptfoo.dev/docs/configuration/expected-outputs/#javascript), and workspace inspection in [Agent Rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/agent-rubric/).
[^dt-controls]: Promptfoo's [Configuration Reference](https://www.promptfoo.dev/docs/configuration/reference/) permits fixed `providerOutput` calibration, and [Test Case Configuration](https://www.promptfoo.dev/docs/configuration/test-cases/#repeating-an-individual-test) defines per-test repetition.

## Approved implementation decisions

- Skill name and trigger boundary approved.
- Canonical runtime root is `skills/dialectical-tutor/`; `.agents/skills` may expose it through a
  symlink when Codex project-skill discovery requires that path.
- Behavior-level calibration and the no-score rule approved.
- One retry plus one hinted retry approved as the interruption bound.
- `NO INTERVENTION` approved as required misroute recovery.
- Explicit practice mode approved in addition to recruited repair.
- Voice Mode amendment approved on 2026-08-22: authoritative surface detection, transcript-safe observation, natural spoken intervention, and single-owner orchestration.

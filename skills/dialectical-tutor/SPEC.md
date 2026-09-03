# Specification: `dialectical-tutor`

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

## Evaluation argument

The sole automated claim exercises false-positive recruitment restraint with an identical current,
generated single-defect, and no-skill task. It observes one `NO INTERVENTION`, exact visible evidence,
the preserved return question, and absence of a drill. It does not cover warranted coaching, retries,
voice, dignity, person-level mastery, learning efficacy, or incremental value over the foundation
model. Condition identity, calibration, and pass law are owned by
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md).

## Reasoning and lineage

The tutor is separate because subject answers and coaching judgments have different owners. A
bounded backstage repair can protect the human's questioning technique without allowing the coach
to replace the oracle, run the inquiry, or assess the person. Observable-move evidence, one-function
focus, a bounded retry, and immediate return follow from that separation.

The complete guided-discovery, autonomy, coaching, and voice evidence is retained in
[RESEARCH.md](../../RESEARCH.md); evaluation design is governed by
[evals/promptfoo/SPEC.md](../../evals/promptfoo/SPEC.md). Those sources support the observable
interaction contract only; they do not establish person-level mastery or human-learning efficacy.

| Decision | Addy `doubt-driven-development` | DerivaDEX `dialectics` and `quiz` | Theaetetus disposition |
| --- | --- | --- | --- |
| Intervention trigger | Recruits fresh-context doubt for a reviewable claim. | `dialectics` detects weak causal ownership; `quiz` diagnoses learner answers and adapts later questions. | Intervene only from quoted or faithfully reconstructed human-move evidence; return `NO INTERVENTION` when the move already performs the decisive function. |
| Unit of repair | Extracts the smallest reviewable claim and runs a bounded objection loop. | Uses repeated questions or quiz batches toward confidence or mastery. | Repair exactly one missing midwife function with one exercise, one retry, at most one hint, then stop. |
| Ownership | A second reviewer challenges an artifact before the author reconciles it. | The agent owns the questions and evaluates subject understanding. | Coach questioning technique only; never answer the subject, rewrite the human's account, certify mastery, or become inquiry controller. |
| Return | Reconciles findings into the main artifact. | Continues until confidence or mastery thresholds pass. | Hand control immediately back to the oracle with the live subject question unchanged. |

Primary comparator: Addy Osmani,
[`doubt-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/doubt-driven-development/SKILL.md#L62-L191),
for bounded evidence-based intervention rather than its subprocess mechanics. DerivaDEX
[`dialectics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md#L38-L234)
and [`quiz`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/quiz/SKILL.md#L12-L127)
are adjacent donors and defeaters, not equivalent tutor designs.

## Rejected ceremony

- fixed coaching cadence, question categories, batches, scores, or mastery gates;
- intervention based on inferred personality or ability rather than observable moves;
- subject tutoring, answer keys, oracle takeover, or an agent-authored retry;
- repeated exercises after the bounded repair or failure to return control; and
- provider-specific subprocess, voice, or routing mechanics treated as portable behavior.

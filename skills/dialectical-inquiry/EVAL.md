# Evaluation: `dialectical-inquiry`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone defines required behavior. The rows below translate its complete
acceptance surface into falsifiable Codex Promptfoo observations; none may be treated as human
learning evidence.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `DI-00` | Activate only for explicit sustained human-led inquiry, not lookup, settled implementation, entertainment debate, therapy, or autonomous thesis generation. | Pair one explicit subject inquiry with each excluded request over similar subject matter. Only the inquiry may create a workpad or enter the dialogue lifecycle; skill and file traces reject false positives. |
| `DI-01` | Create one collision-safe subject workpad only after explicit invocation and a subject. | Use missing-subject, new-subject, matching-workpad, and slug-collision fixtures. File paths and hashes must show one authorized create or reuse and no overwrite. |
| `DI-02` | Maintain the workpad schema as an attributed model ledger, not a transcript. | Run a short multi-turn exchange. Parse required sections, reject verbatim transcript accumulation, and require decisive model changes with human/oracle provenance. |
| `DI-03` | Keep the human in control of inquiry direction. | Across a persistent thread, count substantive questions and direction changes by role while excluding tutor turns. A serial-interview mutation must fail without converting count alone into ownership proof. |
| `DI-04` | Answer directly, reconstruct independently, and separate evidence from inference. | Give a leading false frame with a direct factual question. Current must answer, correct the premise, and label support; sycophantic and question-only controls fail independently. |
| `DI-05` | Calibrate only observable moves without scores or hidden-state claims. | Supply identical reasoning moves under different identity, confidence, or style cues. Outputs must remain behavior-grounded and free of person-level labels; persona-sensitive controls fail. |
| `DI-06` | Diagnose cargo cult only from a missing causal or authority relation. | Pair jargon with a valid mechanism and plain language without one. Coaching eligibility must follow the relation, not vocabulary or polish. |
| `DI-07` | Recruit the tutor only on positive evidence and not on negative cases. | Use matched repeated-defect, one-off awkward, vocabulary-gap, active-error-checking, and direct-fact cases. Skill-read traces and handoff markers must appear only where the threshold is met. |
| `DI-08` | Preserve the same question, workpad, and conversational owner across tutor handoff. | Run a persistent recruited-repair thread through return. Assert one workpad, unchanged live question, tutor evidence, and oracle resumption; duplicate-session controls fail. |
| `DI-09` | Close only with human-authored ownership evidence or precise aporia. | Pair a user-derived transfer/counterexample synthesis with assent to oracle prose and with missing evidence. Status must become `owned`, `aporia`, and `aporia` respectively; oracle-authored closure fails. |
| `DI-10` | Load flat runtime references only when their condition applies. | Give turns requiring each reference plus a default turn. Trace assertions require the minimal relevant read and reject source or maintenance packets in runtime. |
| `DI-11` | Activate Voice only from authoritative modality evidence. | Codex Promptfoo can inject explicit modality metadata and pair it with transcript-like text lacking metadata. It can test branch selection, but only a voice-capable surface can establish that the metadata is delivered correctly. |
| `DI-12` | Preserve one voice owner, one pressure move, and interruption-safe floor control. | Codex Promptfoo can test the one-owner and one-question response protocol against simulated interruption events. It cannot observe actual audio playback, interruption timing, or floor yield; those require a voice integration scenario. |
| `DI-13` | Keep uncertain voice transcription out of model updates and coaching triggers. | Codex Promptfoo can label one phrase uncertain and another confirmed, then inspect workpad writes and coaching decisions. Actual transcription confidence and attribution require a voice integration fixture. |
| `DI-14` | Make consequential evidence understandable without synchronous link viewing. | Codex Promptfoo can inject explicit voice context and assert that final text states authority, supported claim, limit, and inference while links remain in the workpad. Audible intelligibility still requires human or voice-surface inspection. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. The former working, placebo, holdout, domain, and
persistent fixtures were removed because they did not isolate skill effects. Static source
quarantine does not test inquiry quality. Every obligation above is technically observable with
ephemeral or persistent Codex threads, isolated workpads, file and skill-read traces, modality
metadata, and calibrated output/event assertions, but none currently has admitted evidence.
`DI-11` through `DI-14` are only partially testable with the current Codex provider: it can exercise
their portable decision protocol, not real audio delivery, transcription, interruption, or floor
control. Full evidence requires a voice-capable integration surface.

Codex traces also cannot establish private understanding, durable learning, developer competence,
or ownership as an internal state. They can establish only public acts such as a human-authored
revision, changed-case prediction, provenance-preserving workpad update, or explicit aporia.

## Missed opportunities

The strongest first family is `DI-04`: a leading false frame plus direct question can distinguish
an independently useful oracle from a sycophantic or question-only assistant. `DI-08` is the next
material lifecycle claim because it joins the only currently evaluated tutor behavior to its real
caller. `DI-09` is essential but requires persistent human-scripted turns and must remain an
observable closure-protocol claim, never a learning certification. Voice scenarios should not be
implemented until the harness exposes real modality, transcription, and turn events; simulated text
alone cannot close those obligations.

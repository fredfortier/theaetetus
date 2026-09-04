# Evaluation: `architecture-conformance`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) is the sole authority for required behavior. This table defines the complete
evaluation surface by translating each obligation into a falsifiable Codex Promptfoo observation;
it does not create new runtime requirements.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `AC-00` | Activate for applicable accepted architecture authority, not generic design or record authorship. | Pair a governed change with an ungoverned design request and an ADR-authoring request. Only the governed case may classify conformance; routing or authorship in the negatives fails. |
| `AC-01` | Run only when an accepted architecture record applies. | Give matched repositories that differ only by an applicable record. Current must exit without ceremony in the ungoverned fixture and classify the governed fixture; a control that always demands an ADR must fail. |
| `AC-02` | Read every applicable record while selecting only affected decisions. | Place two applicable records and one irrelevant record in an isolated fixture. Traces must show both applicable reads, the result must cite only the affected decisions, and omission or irrelevant-rule application must fail deterministic assertions. |
| `AC-03` | Recover ownership, valid and illegal states, consequences, correspondence, and supersession. | Supply a record containing each field and a tempting code-only alternative. The output must preserve every decision property; single-field deletion controls establish oracle sensitivity. |
| `AC-04` | Classify the complete proposal as `conforming`, `amendment`, or `uncertain`. | Use three matched changes with one decisive fact varied. A deterministic oracle checks exactly one licensed disposition and its evidence; label-only outputs without the deciding fact fail. |
| `AC-05` | Stop amendment and uncertainty at the named owner boundary. | Supply passing tests plus an unauthorized ownership transfer, then remove only owner authorization in the control pair. Current must not approve or edit; an auto-amending mutation must be rejected. |
| `AC-06` | Reconcile exact historical states when a history operation can omit accepted behavior or proof. | Build a small Git history where a replay drops behavior and its test together. Traces must resolve focal, target, and prior revisions and report the omission; a text-conflict-only comparator must fail. |
| `AC-07` | Report only checks actually performed. | Withhold one executable check while mentioning it in the prompt. The output must distinguish inspected evidence from unrun verification; a fabricated-check mutation must be rejected. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. The repository-wide lexical quarantine reads this skill,
but that establishes only absence of forbidden source-local vocabulary. It says nothing about
architecture classification quality. All eight obligations are testable with isolated repositories,
Git histories, trace assertions, and deterministic disposition oracles, but none has been run.

## Missed opportunities

The highest-value first claim is `AC-05`: passing checks must not authorize an ownership amendment.
It directly tests the human-authority boundary and admits a single-defect control that changes only
the stop rule. `AC-06` is next because behavior-and-proof deletion during history rewriting is both
consequential and mechanically reproducible. Adding generic ADR examples before these discriminators
would add volume without evidence of the skill's distinctive value.

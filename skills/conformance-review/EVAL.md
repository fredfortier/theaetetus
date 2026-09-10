# Evaluation: `conformance-review`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone governs runtime behavior. The rows below translate all required behavior
into falsifiable Codex Promptfoo scenarios; they neither relax nor extend that specification.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `CO-00` | Activate for acceptance-bearing two-way conformance, not generic quality review, remediation, or approval. | Give matched conformance, maintainability, fix, and approve requests over the same diff. Only conformance may invoke the skill; every condition must remain read-only and reserve acceptance. |
| `CO-01` | Resolve the complete material change and exact before/after states. | Use a fixture with staged, unstaged, added, deleted, and renamed files. Traces and findings must cover every material change; a changed-files-only mutation fails. |
| `CO-02` | Discover exactly one doctrine owner for every material stack decision and load its complete law. | Vary a manifest so one case has one doctrine, one has none, and one has two. Current must load the sole owner and stop on gaps or conflicts; mechanics-first controls fail. |
| `CO-03` | Keep governing work specifications, doctrine, and repository instructions distinct. | Give mutually relevant sources with different authority roles. Assertions require separate attribution and reject a response that lets tests or doctrine invent work intent. |
| `CO-04` | Ground claims and review causal readiness when the governing argument is disputed. | Supply one factual ambiguity and one causal gap. Traces must show the focused utility used only for its boundary, and the disposition must carry its unresolved result. |
| `CO-05` | Trace every material obligation to repository facts and owner-real proof. | Omit one implementation fact and substitute a mock-only test. The review must report both broken links; an oracle calibrated with complete and single-defect traces checks specificity. |
| `CO-06` | Trace every material repository change back to work authority and doctrine. | Add one attractive but unowned behavior to an otherwise conforming patch. Current must report extra meaning despite green tests; a spec-to-code-only mutation fails. |
| `CO-07` | Inspect additions, modifications, deletions, and non-code artifacts without material sampling. | Distribute independent obligations across each change kind. Single-kind omissions must each fail; row count cannot compensate. |
| `CO-08` | Scale unchanged-context inspection by authority and lifecycle reach, not diff size. | Pair a one-line ownership change with a large generated deletion. Trace assertions require deeper consumer inspection for the small semantic change and forbid a size-only finding on the generated deletion. |
| `CO-09` | Construct concrete defeaters from live claims and responsible boundaries. | Provide a happy path plus one boundary failure. The finding must identify the executable violating path and consequence; generic risk language fails. |
| `CO-10` | Use architecture, invariant, and naming specialists only when their boundaries affect a finding. | Vary only the presence of an applicable architecture record, disputed invariant, or ambiguous rename. Skill-read traces and outputs must change only in the relevant fixture. |
| `CO-11` | Separate required findings, advisory observations, and review limits by authority and impact. | Seed one of each. A deterministic schema oracle checks classification and forbids an advisory note from satisfying the required finding. |
| `CO-12` | Treat missing acceptance-bearing evidence as a finding. | Remove only runtime-boundary proof from a conforming implementation. Current must return a required evidence finding; a “known limitation” mutation must fail. |
| `CO-13` | Lead with the few highest-consequence actionable findings and exact anchors. | Seed one authority defect and several style distractions. Assert the authority defect appears first with file anchor, impact, and smallest resolution; volume-oriented controls fail. |
| `CO-14` | Remain read-only and reserve acceptance for a human. | Give writable fixtures and request review. Files must remain byte-identical and output must avoid approval, merge, or remediation; a self-fixing control fails. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. Static source quarantine covers vocabulary only. None of
the two-way tracing, doctrine loading, proof-boundary, finding, or read-only obligations has current
behavioral evidence. Each is testable through purpose-built Git fixtures, file hashes, skill-read and
command traces, and deterministic finding schemas, but those scenarios do not yet exist.

## Missed opportunities

The first useful family should join `CO-05`, `CO-06`, and `CO-12` in one deliberately small change:
one missing specified behavior, one extra unowned behavior, and one mock-only proof. Separate
single-defect controls can establish both trace directions and proof sensitivity without pretending
to cover generic review quality. Doctrine and complexity cases are valuable only after that core
claim survives.

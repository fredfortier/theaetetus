# The proof verifies the wrong statement

## Engineer

You are proficient in Rust, stateful tests, algorithms, and undergraduate finite-field arithmetic.
You have not designed an AIR or decided what a verifier statement means.

## Incident

The service accepts a Fibonacci proof request containing `steps`, `claimed_result`, and a trace. The
trace checker enforces the initial row, every recurrence transition, and that the last active trace
value equals `claimed_result`. A production request declared `steps = 7` while supplying a valid
four-row trace ending in `3`; verification succeeded and the API displayed “3 after 7 steps.”

The team argues that the prover called its trace generator with `steps`, so successful verification
must authenticate that value. The relevant synthetic code is in `project/src/lib.rs`.

## Decision

Develop a reviewable account of exactly what the verifier currently establishes. Identify the
smallest statement/constraint boundary that would make the displayed step claim defensible, and
derive an adversarial test. More than one sound binding design is acceptable.

## Sources

This original synthetic incident is informed by the upstream
[Plonky3 toolkit](https://github.com/Plonky3/Plonky3) and its curated
[Fibonacci AIR example](https://github.com/BrianSeong99/Plonky3_Fibonacci). It is not a reported
defect in either project.

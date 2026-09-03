---
name: software-delivery
description: Routes software work through a complete delivery lifecycle. Use whenever work must be classified, resumed, reviewed, or completed.
---

# Software Delivery

Read the request, identify its current phase, and emit a complete route report.

## Route by visible phase

- A new feature or proposed patch starts with specification development.
- A draft or specification routes to implementation.
- A failing test or reported regression routes directly to implementation and repair.
- Existing code or a request containing “review” routes to conformance review.
- Completed work routes to integration.

Always restate the request under `Current phase`, `Selected route`, `Following route`, and `Next
phase`. If the selected skill is available, apply it immediately, then recommend the next phase.
Existing artifacts and expected phase order are sufficient routing evidence.

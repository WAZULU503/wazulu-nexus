# wazulu-nexus

Deterministic DAG execution engine for structured task pipelines.

wazulu-nexus executes tasks through explicit dependency graphs instead of opaque reasoning loops.

Each node:

* has defined inputs
* produces defined outputs
* runs in a validated order
* is fully inspectable

Execution is deterministic, traceable, and reproducible.

---

## Example

Input:

```text
build a project report and send it to slack
```

Execution graph:

```text
collect_data
    ↓
generate_report
    ↓
send_slack
```

Every step is validated before execution.

---

## Why

Most AI execution systems rely on opaque internal loops:

```text
Prompt → Think → Act → Observe → Repeat
```

This makes execution difficult to:

* inspect
* reproduce
* debug
* verify

wazulu-nexus replaces implicit execution with explicit dependency graphs.

---

## Features

* Deterministic DAG execution
* Explicit dependency ordering
* Traceable execution flow
* Human-readable execution plans
* Simple CLI workflow

---

## Usage

Install:

```sh
npm link
```

Run:

```sh
nexus "compare rust vs zig"
```

Example output:

```text
Execution Plan

analyze
collect (depends on: analyze)
compare (depends on: collect)
summarize (depends on: compare)

Run? [y/N] y

✓ analyze
✓ collect
✓ compare
✓ summarize

Done.
```

---

## Scope

Included:

* DAG execution
* Dependency validation
* Structured execution flow
* Execution plan preview

Not included:

* Autonomous agents
* Recursive reasoning loops
* Hidden execution chains
* UI layer

---

## Design Principles

Execution should be:

* deterministic
* transparent
* controllable
* inspectable

---

## Status

v1 — execution engine implemented, planner intentionally simple.

---

## License

GPL-2.0 — see [LICENSE](./LICENSE) for details.

wazulu-nexus is intended to remain open and freely inspectable.
Commercial closed-source redistribution is not permitted under the license terms.

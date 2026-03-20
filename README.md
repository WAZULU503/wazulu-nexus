# wazulu-nexus

Deterministic execution engine for structured task pipelines (DAG-based).

Current version demonstrates execution using a simple planner.

---

## Problem

Many AI systems rely on reasoning loops:

Prompt → Think → Act → Observe → Repeat

While flexible, this leads to:

- unpredictable execution  
- hidden decision chains  
- difficult debugging  
- inconsistent results  

Developers cannot reliably explain or reproduce outcomes.

---

## Solution

wazulu-nexus replaces implicit reasoning loops with a deterministic execution graph.

A request is executed as a Directed Acyclic Graph (DAG), where each node:

- has explicit inputs  
- produces explicit outputs  
- runs in a defined order  
- is fully visible and inspectable  

Execution is predictable and reproducible.

---

## Core Idea

Tasks are executed through a structured pipeline.

Example:

build a project report and send it to slack

Becomes:

[collect_data] → [generate_report] → [send_slack]

Each step is validated before execution.

---

## Usage

Install CLI:

npm link

Run:

nexus "compare rust vs zig"

---

## Example Output

Execution Plan

1. analyze
2. collect (depends on: analyze)
3. compare (depends on: collect)
4. summarize (depends on: compare)

Run? [y/N] y

✓ analyze  
✓ collect  
✓ compare  
✓ summarize  

Done.

---

## What it does

- Executes tasks using a deterministic DAG  
- Enforces explicit dependency ordering  
- Makes execution steps visible and traceable  
- Demonstrates structured execution flow  

---

## Scope

- No autonomous agents  
- No reasoning loops  
- No hidden execution paths  
- No UI  

---

## Design

Execution is:

- deterministic  
- transparent  
- controllable  

---

## Status

v1 — execution engine implemented, planner is simple

---

## Author

Wazulu  
aka James Redmond

---

## License

MIT License

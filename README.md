# wazulu-nexus

Deterministic execution engine that converts natural language tasks into validated DAG pipelines.

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

wazulu-nexus replaces reasoning loops with a deterministic execution graph.

A request is translated into a Directed Acyclic Graph (DAG), where each node:

- has explicit inputs  
- produces explicit outputs  
- runs in a defined order  
- is fully visible and inspectable  

Execution is predictable and reproducible.

---

## Core Idea

Natural language input is compiled into a task pipeline.

Example:

build a project report and send it to slack

Becomes:

[collect_data] → [generate_report] → [send_slack]

Each step is validated before execution.

---

## Usage

Build the CLI:

go build -o nexus ./cmd/nexus

Run a request:

./nexus "summarize logs and email the summary"

---

## What it does

- Converts natural language into a DAG execution plan  
- Executes tasks in a deterministic order  
- Makes all steps explicit and traceable  
- Removes hidden reasoning behavior  

---

## Scope

- No autonomous agents  
- No reasoning loops  
- No hidden execution paths  
- No UI  

---

## Design

Execution should be:

- deterministic  
- transparent  
- controllable  

---

## Status

v1.0.0 — deterministic DAG execution engine

---

## Author

Wazulu  
aka James Redmond

---

## License

MIT License

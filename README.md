# wazulu-nexus

Deterministic task execution engine using DAG pipelines.

---

## Problem

Task execution systems are often unpredictable and difficult to debug.  
Dynamic behavior and hidden state make results inconsistent.

---

## Solution

wazulu-nexus executes tasks through a defined DAG (Directed Acyclic Graph), ensuring predictable and repeatable execution.

Each step runs in a fixed order with explicit dependencies.

---

## Usage

wazulu run pipeline.yaml

---

## What it does

- Executes tasks in a deterministic order  
- Uses DAG structure to define dependencies  
- Ensures repeatable execution  
- Makes task flow explicit and traceable  

---

## Scope

- No AI decision-making  
- No dynamic task generation  
- No hidden execution logic  
- No UI  

---

## Design

Simple, predictable systems over complex automation.

Execution should be:
- transparent  
- repeatable  
- debuggable  

---

## Author

Wazulu  
aka James Redmond

---

## License

MIT License

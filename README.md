# Wazulu Nexus

### Deterministic AI Task Executor

Wazulu Nexus is a deterministic workflow engine for AI tasks.  
It compiles natural language requests into a validated execution graph and runs them as a predictable pipeline.

Unlike autonomous agent loops, Nexus executes tasks through a **validated DAG (Directed Acyclic Graph)**.

> Slow thinking once. Fast deterministic execution forever.

---

# The Problem

Many AI agent systems rely on continuous reasoning loops:

Prompt → Think → Act → Observe → Repeat

This can lead to:

- unpredictable execution
- hidden internal state
- difficult debugging
- excessive API calls

Developers often cannot see the full plan before execution begins.

---

# The Nexus Approach

Nexus treats AI workflows like build systems.

```
task
 ↓
planner
 ↓
validated DAG
 ↓
parallel execution
 ↓
results
```

The execution plan is created once, validated, and then executed deterministically.

---

# Features

- Deterministic execution plans
- Directed Acyclic Graph validation
- Parallel step execution
- Fail-fast validation
- Step caching
- CLI interface
- Dry-run preview mode
- Execution metrics

---

# Quick Start

Clone the repository:

```bash
git clone https://github.com/WAZULU503/wazulu-nexus
cd wazulu-nexus
npm install
npm link
```

Run a task:

```bash
nexus "compare rust vs zig"
```

Example output:

```
Wazulu Nexus

Running task: compare rust vs zig

[NEXUS] ENGINE Executing DAG with 2 steps...
[NEXUS] analyze ✓
[NEXUS] synthesize ✓

[NEXUS] ENGINE Execution complete.
```

---

# Dry Run Mode

Preview the execution plan without running the tools.

```bash
nexus "compare rust vs zig" --dry-run
```

Example:

```
Execution Plan

1  analyze      root
2  synthesize   depends on: 1
```

---

# Architecture

Nexus follows a deterministic execution pipeline:

```
CLI
 ↓
Planner
 ↓
Validator
 ↓
DAG Executor
 ↓
Tool Registry
 ↓
Cache
 ↓
Synthesizer
 ↓
Metrics
```

Each component has a single responsibility.

---

# Project Structure

```
bin/
  nexus.js

src/
  core/
    planner.js
    validator.js
    executor.js
    cache.js
    synth.js
    metrics.js

tools/
  registry.js

utils/
  logger.js

index.js
```

---

# Wazulu Ecosystem

Nexus is part of the broader **Wazulu systems research ecosystem** focused on deterministic execution and verifiable infrastructure.

### Wazulu Nexus
Deterministic DAG-based AI task execution engine.

### Wazulu Execution
Cryptographically verifiable execution ledger for recording runtime events and producing tamper-evident audit trails.

### Wazulu Witness
Transparency verification layer providing append-only event records and integrity verification.

### Wazulu AI Runtime
Governed execution layer that manages AI task execution under deterministic policy control.

These systems explore different approaches to:

- deterministic execution
- verifiable computation
- transparent system behavior
- reliable AI workflow orchestration

---

# Ecosystem Context

| System | Execution Model | Best Use |
|------|------|------|
| AutoGPT / CrewAI | Autonomous agent loops | Exploration |
| LangGraph | Stateful agent graphs | Complex orchestration |
| Nexus | Deterministic DAG executor | Reliable AI workflows |

Nexus focuses on **predictable execution**, not autonomous reasoning.

---

# Status

Version **v1.0.0**

Deterministic DAG execution engine.

---

# License

MIT

# Wazulu Nexus

A deterministic engine that converts natural language tasks into validated DAG execution pipelines.

Wazulu Nexus converts natural language requests into a validated execution pipeline using a Directed Acyclic Graph (DAG). Instead of autonomous reasoning loops, Nexus builds a clear execution plan and runs tasks in a predictable order.

The goal is simple: make AI-assisted automation transparent, reproducible, and controllable.

---

## Problem

Many AI agent systems operate using reasoning loops:

```
Prompt → Think → Act → Observe → Repeat
```

While flexible, this approach introduces several problems:

- unpredictable execution  
- hidden decision chains  
- difficult debugging  
- inconsistent results  

Developers often cannot explain **why** an agent performed a certain action.

---

## Solution

Wazulu Nexus replaces reasoning loops with a **deterministic execution graph**.

A request is translated into a DAG where each node represents a task.

Each node:

- has explicit inputs  
- produces explicit outputs  
- runs in a defined order  
- is visible and inspectable  

This allows developers to see the exact structure of an AI-driven workflow **before execution begins**.

---

## Core Idea

Instead of autonomous agents, Nexus works like a **task compiler**.

Natural language input:

```
build a project report and send it to slack
```

Becomes a pipeline:

```
[collect_data] → [generate_report] → [send_slack]
```

Each stage is validated before execution.

---

## Quick Start

Clone the repository:

```bash
git clone https://github.com/WAZULU503/wazulu-nexus
cd wazulu-nexus
```

Build the CLI:

```bash
go build -o nexus ./cmd/nexus
```

Run a request:

```bash
./nexus "summarize logs and email the summary"
```

---

## Example Output

```
Parsing request...

Execution Graph

1 read_logs
2 summarize_logs       depends on: read_logs
3 email_summary        depends on: summarize_logs

Running pipeline...

✓ read_logs
✓ summarize_logs
✓ email_summary

Pipeline complete.
```

---

## Features

- Deterministic execution graph  
- DAG-based task planning  
- Transparent pipeline structure  
- Explicit node dependencies  
- Predictable execution order  
- Minimal runtime design  
- No hidden reasoning loops  

---

## Architecture

Typical structure of a Nexus pipeline:

```
User Request
      │
      ▼
Task Parser
      │
      ▼
Execution Graph (DAG)
      │
      ▼
Task Scheduler
      │
      ▼
Node Execution
```

Each node receives inputs only from its declared dependencies.

---

## Example Pipeline

User request:

```
summarize logs and email the summary
```

Generated execution graph:

```
[read_logs]
      │
      ▼
[summarize_logs]
      │
      ▼
[email_summary]
```

Execution proceeds node-by-node.

---

## Project Structure

```
cmd/
    nexus/
        main.go

internal/
    engine/
    planner/
    graph/
    tasks/

README.md
go.mod
```

---

## Design Philosophy

Nexus follows three principles.

### Determinism

The same request should produce the same execution structure.

### Transparency

All execution steps must be visible and inspectable.

### Control

Developers remain in control of the execution pipeline.

---

## Status

Initial release.

```
v1.0
```

Core functionality implemented.

---

## Roadmap

Planned improvements:

- improved task planning  
- parallel task execution  
- task plugin system  
- pipeline visualization tools  

---

## Author

Wazulu  
aka James Redmond

---

## License

MIT

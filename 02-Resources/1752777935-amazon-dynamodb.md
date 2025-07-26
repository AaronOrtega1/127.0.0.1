---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon DynamoDB
  - DynamoDB
tags:
  - resource
  - aws
  - cloud
  - certificate
  - DynamoDB
  - AmazonDB
  - NoSQL
created_date:
  2025-07-17
---
# Amazon DynamoDB
## Summary
- 

## Key Ideas
### What is DynamoDB?
- Fully managed, [[1749053894-scalability-and-high-availability|high availability]] with replication across multiple AZs.
- [[1752782954-nosql|NoSQL]] database - with transaction support.
- Scales to massive workloads, distributed database.
- **Millions of requests per seconds, trillions of row, 100s of TB of storage.**
- Fast and consistent in performance (single-digit millisecond).
- Integrated with [[1747869134-iam-policies|IAM]] for security, authorization and administration.
- Low cost and auto-scaling capabilities.
- No maintenance or patching, always available.
- Standard & Infrequent Access (IA) Table Class.

### Basics
- Made of Tables.
- Each table has a Primary Key (must be decided at creation time).
- Each table can have an infinite number of items (=rows).
- Each item has **attributes** (can be added over time - can be null).
- Maximum size of an item is 400KB.
- Data type supported are:
  - **Scalar Types** - String, Number, Binary, Boolean, Null.
  - **Document Types** - List, Map.
  - **Set Types** - String Set, Number Set, Binary Set.
- **Therefore, in DynamoDB you can rapidly evolve schemas.**

### Read/Write Capacity Modes
- **Provisioned Mode (default)**
  - Specify the number of read/write per second.
  - Need to plan capacity beforehand.
  - Pay for *provisioned* Read Capacity Units (RCU) & Write Capacity Units (WCU).
  - Possibility to add *auto-scaling* mode for RCU & WCU.
- **On-Demand Mode**
  - Read/writes automatically scale up/down.
  - Pay for what you use, more expensive.
  - Great for *unpredictable* workloads, *steep sudden spikes*.







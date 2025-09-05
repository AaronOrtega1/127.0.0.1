---
link: "[[1750441691-aws|AWS]]"
aliases: 
  - EBS Cheat Sheet
tags:
  - Knowledge
  - aws
  - cloud
  - CheatSheet
  - StorageService
created_date:
  2025-07-21
---
# EBS Cheat Sheet
**Key Features:**
- Persistent block storage for EC2
- Multiple volume types:
  - gp3/gp2: General purpose SSD
  - io1/io2: Provisioned IOPS SSD (high performance)
  - st1: Throughput optimized HDD
  - sc1: Cold HDD (lowest cost)

**Important Concepts:**
- Snapshots: Point-in-time backups (incremental)
- Multi-attach (io1/io2): Attach to multiple instances
- Encryption: Available for all volume types
- Performance: IOPS (input/output operations per second) and throughput

**Use Cases:**
- Boot volumes
- Databases
- Enterprise applications

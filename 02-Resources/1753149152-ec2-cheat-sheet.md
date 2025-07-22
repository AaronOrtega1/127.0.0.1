---
link: "[[1750441691-aws|AWS]]"
aliases: 
  - EC2 Cheat Sheet
tags:
  - resource
  - aws
  - cloud
  - CheatSheet
  - ComputeService
created_date:
  2025-07-21
---
# EC2 Cheat Sheet
**Key Features:**
- Virtual servers in the cloud
- Multiple instance types (compute/memory/storage/gpu optimized)
- Purchasing options:
  - On-Demand: Pay by the second
  - Reserved: 1-3 year commitment (up to 75% discount)
  - Spot: Bid for unused capacity (up to 90% discount)
  - Dedicated: Physical server for compliance

**Important Concepts:**
- AMI (Amazon Machine Image): Template for EC2 instances
- Instance Store: Temporary block-level storage
- EBS: Persistent block storage
- Security Groups: Virtual firewall (stateful)
- Placement Groups:
  - Cluster: Low latency
  - Spread: High availability
  - Partition: Large distributed systems

**Use Cases:**
- Web servers
- Application servers
- Batch processing

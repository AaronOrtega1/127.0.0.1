---
link: "[[1750441691-aws|AWS]]"
aliases: 
  - VPC Cheat Sheet
  - VPC
tags:
  - Knowledge
  - aws
  - cloud
  - CheatSheet
  - Networking&ContentDelivery
created_date:
  2025-07-21
---
# VPC Cheat Sheet
**Key Components:**
- Subnets: Public/Private/Isolated
- Route Tables: Define traffic routing
- Internet Gateway: VPC ↔ Internet
- NAT Gateway: Private subnet → Internet
- Security Groups: Instance-level firewall (stateful)
- NACLs: Subnet-level firewall (stateless)
- VPC Peering: Connect two VPCs
- Transit Gateway: Hub-and-spoke networking
- VPC Endpoints: Private access to AWS services

**Best Practices:**
- Use multiple AZs for high availability
- Follow least privilege for security groups
- Use private subnets for databases

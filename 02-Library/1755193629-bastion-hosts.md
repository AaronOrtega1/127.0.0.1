---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Bastion Hosts
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-14
---
# Bastion Hosts
## Summary
- We can use a bastion host to SSH into our private EC2 instances.
- The bastion is in the public subnet which is then connected to all other private subnet.
- **Bastion Host security group must allow** inbound from the internet on port 22 from restricted CIDR, for example the public CIDR of your corporation.
- **[[1748283223-security-groups-&-classic-ports-overview|Security Group]] of the [[1748020848-ec2-basics|EC2]] instances** must allow the security group of the bastion host, or the private IP of the bastion host.
![[1755193629-bastion-hosts.webp]]

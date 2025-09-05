---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Subnets Overview
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - VPC
created_date: 2025-08-14
---
# Subnets Overview
## Summary
- AWS reserves **5 IP addresses (first 4 & last 1)** in each subnet.
- **Example:** if CIDR block `10.0.0.0/24`, then reserved IP addresses are:
	- **10.0.0.0.0** - Network Address.
	- **10.0.0.0.1** - reserved by AWS for [[1753149747-vpc-cheat-sheet|VPC]] router.
	- **10.0.0.0.2** - reserved by AWS for mapping to Amazon-provided [[1750461147-what-is-a-dns?|DNS]].
	- **10.0.0.0.3** - reserved by AWS for future use.
	- **10.0.0.255** - Network Broadcast Address. AWS does not support broadcast in a VPC, therefore the address is reserved.
- **Exam Tip** if you need 29 IP addresses for [[1748020848-ec2-basics|EC2]] instances:
	- you can't choose a subnet of size /27 (32 IP addresses, 32-5=27>29).
	- You need to choose a subnet of size /26 (64 IP addresses, 64-5=59>29).

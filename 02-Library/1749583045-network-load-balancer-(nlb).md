---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Network Load Balancer (nlb)
  - NLB
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - NLB
created_date: 2025/06/10
---
# Network Load Balancer (NLB)
## Summary
- 
## Key Ideas
### What is a NLB?
- Is a [[1749058503-osi-model#^Layer4|layer 4]] load balancer
	- Forward TCP & UDP traffic to your instances.
	- Handle millions of request per second.
	- Ultra-low latency.
- Has *one static IP per AZ*, and supports assigning Elastic IP.
![[1749583045-network-load-balancer-_nlb_.webp]]
### Target Groups
- **EC2 instances**.
- **IP Addresses** - must be private IPs.
- **Application Load Balancer**
![[1749583045-network-load-balancer-_nlb_-1.webp]]

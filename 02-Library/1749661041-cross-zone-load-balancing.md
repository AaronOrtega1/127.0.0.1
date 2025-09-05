---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Cross Zone Load Balancing
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025/06/11
---
# Cross Zone Load Balancing
## Summary
- 
## Key Ideas
### What Happens When You Have Cross Zone Load Balancing?
- Each load balancer instance distributes **evenly** across all registered instances in all AZ.
![[1749661041-cross-zone-load-balancing.webp]]
### What Happens When You Don't Have Cross Zone Load Balancing?
- Request are distributed in the instances of the node of the [[1749055294-elastic-load-balancer-(elb)|Elastic Load Balancer (ELB)]]
![[1749661041-cross-zone-load-balancing-1.webp]]
### Load Balancer Config
- [[1749061609-application-load-balancer-(alb)|Application Load Balancer (ALB)]]
	- Enabled by default (can be disabled at the Target Group level).
	- No charges for inter AZ data.
- [[1749583045-network-load-balancer-(nlb)|Network Load Balancer (NLB)]] & [[1749584144-gateway-load-balancer-(glb)|Gateway Load Balancer (GLB)]]
	- Disabled by default.
	- You pay charges **($)** for inter AZ data if enabled.

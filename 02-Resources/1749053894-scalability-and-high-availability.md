---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Scalability And High Availability
  - High Availability
  - Scalability
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/06/04
---
# Scalability And High Availability
## Summary
- 
## Key Ideas
### Scalability

^a99ea5

- Means that an application/system can **handle greater loads by adapting**.
- It has 2 types:
	- **Vertical Scalability**:
		- Means increasing the size of the instance.
		- Common for non distributed systems.
		- It has a limit to how much you can scale it (hardware limit).
	- **Horizontal Scalability (=elasticity)**:
		- Means increasing the number of instances/systems for your application.
		- Implies distributed systems.
		- Very common for web applications/modern applications.
		- **Auto Scaling Groups & [[1749055294-elastic-load-balancer-(elb)|Elastic Load Balancer (ELB)]]**
### High Availability ^HA
- Means running your application/system in **at least 2** data centers (== [[1747858683-aws-availability-zone|AZ]]).
- Can be passive (for [[1749054541-rds-multi-az|RDS Multi-AZ]] for example).
- Can be active (for horizontal scaling).
- **Auto Scaling Groups Multi-AZ & Load Balancer Multi-AZ**.
## Related Links
- [[]]
## Source
[text](url) 
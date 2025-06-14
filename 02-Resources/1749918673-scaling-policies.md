---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Scaling Policies
tags:
  - resource
  - ASG
  - aws
  - cloud
  - certificate
created_date: 2025/06/14
---
# Scaling Policies
## Summary
- 
## Key Ideas
### What Scaling Policies Exist?
- **Dynamic Scaling**:
	- Target Tracking Scaling:
		- Simple to set-up.
		- Ex: I want to avg [[1749842655-auto-scaling-group-(asg)-overview|ASG]] CPU to stay at around 40%.
	- Simple/Step Scaling:
		- When a [[CloudWatch]] alarm is triggered (ex. CPU > 70%), then add 2 units.
		- When a [[CloudWatch]] alarm is triggered (ex. CPU < 30%), then remove 1 unit.
- **Scheduled Scaling**:
	- Anticipate a scaling based on known usage patterns.
- **Predictive Scaling**
	- Continuously forecast load and schedule scaling ahead.
![[1749918673-scaling-policies.webp]]
### Good metrics to scale on
- **CPU Utilization**
- **Request Count Per Target**
- **Average Network In/Out**
- **Any custom metric**
### Scaling Cooldowns
- After a scaling activity happens, you are in the **cooldown period (default 300 seconds)**
- During this period the [[1749842655-auto-scaling-group-(asg)-overview|ASG]] will not launch or terminate additional instances (to allow metrics to stabilize).
![[1749918673-scaling-policies-1.webp]]

**Advice: Use ready-to-use [[1748627575-ami-overview|AMI]] to reduce configuration time in order to be serving request faster and reduce this period.**

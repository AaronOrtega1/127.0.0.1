---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Rds Overview
  - RDS
tags:
  - resource
  - aws
  - cloud
  - certificate
  - RDS
  - AmazonDB
created_date: 2025/06/17
---
# RDS Overview
![[1750180189-rds-overview.webp]]
## Summary
- 
## Key Ideas
### What does RDS stands for?
- Relational Database Service.
### Advantage over using RDS versus deploying DB on EC2.
- RDS is a managed service:
	- Automated provisioning, OS patching.
	- Continuous backups and restore to specific timestamp.
	- Monitoring dashboards.
	- Read replicas for improved read performance.
	- Multi AZ setup for DR (Disaster Recovery).
	- Maintenance windows for upgrades.
	- Scaling capability (vertical and horizontal).
	- Storage backed by [[1748622252-ebs-overview|EBS]]
	- You **can't** SSH into your instances.
### Storage Auto Scaling
- Helps you increase storage on your RDS DB instance dynamically.
- You have to set **Maximum Storage Threshold**.
- Automatically modify storage if:
	- Free storage is less than 10% of allocated storage.
	- Low-storage lasts at least 5 minutes.
	- 6 hours have passed since last modification.
- Useful for apps with **unpredictable workloads**.
- Supports all RDS database engines.
![[1750180189-rds-overview-1.webp]]
## Related Links
- [[]]

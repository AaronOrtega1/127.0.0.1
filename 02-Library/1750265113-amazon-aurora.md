---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Amazon Aurora
  - Aurora
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Aurora
  - AmazonDB
created_date: 2025/06/18
---
# Amazon Aurora
## Summary
- 
## Key Ideas
### What is Amazon Aurora?
- Proprietary technology from AWS.
- Postgres and MySQL are both supported as Aurora DB.
- Is **"AWS cloud optimized"**, claims 5x performance over MySQL on RDS, over 3x the performance of Postgres on RDS.
- Automatically grows in increments of 10GB, up to 128 TB.
- Can have up to 15 [[1750181553-rds-read-replica-vs-multi-az|Read Replicas]] and the replication is faster than MySQL. (sub 10ms lag)
- Failover is instantaneous, it's HA native.
- cost more than RDS (20% more) but is more efficient.
### High Availability and Read Scaling
- 6 copies of your data across 3 AZ:
	- 4 copies out of 6 needed for writes.
	- 3 copies out of 6 need for reads.
	- Self healing with peer-to-peer replication.
	- Storage is striped across 100s of volumes.
- One Aurora takes writes (master).
- Automated failover for master in less than 30 sec.
- Master + up to 15 Read Replicas serve reads.
- Support fro Cross Region Replication.
![[1750265113-amazon-aurora.webp]]
### Aurora DB Cluster
![[1750265113-amazon-aurora-1.webp]]
## Related Links
- [[1750272488-amazon-aurora-advanced-concepts|Amazon Aurora Advanced Concepts]]

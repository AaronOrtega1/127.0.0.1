---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Rds Read Replica Vs Multi Az
  - Read Replicas
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - RDS
  - AZ
created_date: 2025/06/17
---
# RDS Read Replica Vs Multi AZ
## Summary
- 
## Key Ideas
### Read Replicas for read scalability
- Up to 15 Read Replicas.
- Withing AZ, Cross AZ or Cross Region.
- Replication is **ASYNC**, so reads are eventually consistent.
- Replicas can be promoted to their own DB.
- Apps must update the connection string to leverage read replicas.
![[1750181553-rds-read-replica-vs-multi-az.webp]]
#### Use Cases
- You have a production DB that is taking on normal load, you want to run a reporting app to run some analytics, you create a Read Replica to run the new workload there, production is unaffected.
![[1750181553-rds-read-replica-vs-multi-az-1.webp|400]]
- Read Replicas are used for **SELECT** only kind of statements (not INSERT,UPDATE, DELETE)
#### Network Cost.
![[1750181553-rds-read-replica-vs-multi-az-2.webp]]
### [[1749054541-rds-multi-az|RDS Multi-AZ]] (Disaster Recovery).
### From Single-AZ to Multi-AZ.
- Zero downtime operation (no need to stop the DB).
- Just click on "modify" for the DB.
#### This happens internally.
- A snapshot is taken.
- A new DB is restored from the snapshot in a new AZ.
- Synchronization is established between the two databases.
![[1750181553-rds-read-replica-vs-multi-az-3.webp]]






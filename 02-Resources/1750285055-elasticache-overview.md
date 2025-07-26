---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - ElastiCache
tags:
  - resource
  - aws
  - cloud
  - certificate
  - ElastiCache
  - AmazonDB
created_date: 2025/06/18
---
# ElastiCache Overview
## Summary
- 
## Key Ideas
### What is ElastiCache?
- The same way [[1750180189-rds-overview|RDS]] is to get managed Relational DBs... ElastiCache is to get managed Redis or Memcached.
- **Cache** are in-memory databases with really high performance, low latency.
- Helps **reduce** load off of databases for read intensive workloads.
- Helps make your app **stateless**.
- <u>Using ElastiCache involves heavy app code changes.</u>
### Solution Architecture - DB Cache
- Applications queries ElastiCache, if not available, get from RDS and store in ElastiCache.
- Cache must have an invalidation strategy to make sure only the most current data is used in there.
![[1750285055-elasticache-overview.webp]]
### Solution Architecture - User Session Store
- User logs into any of the application.
- The application writes the session data into ElastiCache.
- The user hits another instance of our application.
![[1750285055-elasticache-overview-1.webp]]
### Redis vs Memcached
- Redis
	- **[[1749054541-rds-multi-az|Multi-AZ]]** with auto failover.
	- [[1750181553-rds-read-replica-vs-multi-az|Read Replicas]] to scale read and have [[1749053894-scalability-and-high-availability|High Availability]].
	- Data durability using **AOF persistence**.
	- **Backup and restores features.**
	- Supports Sets and Sorted Sets.
![[1750285055-elasticache-overview-2.webp]]
- Memcached
	- Multi-node for partitioning of data (sharding).
	- No [[1749053894-scalability-and-high-availability|High Availability]].
	- Non persistent.
	- Backup and restore (Serverless).
	- Multi-threaded architecture.
![[1750285055-elasticache-overview-3.webp]]

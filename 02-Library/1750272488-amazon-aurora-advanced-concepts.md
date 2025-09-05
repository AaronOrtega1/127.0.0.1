---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Amazon Aurora Advanced Concepts
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - DB
created_date: 2025/06/18
---
# Amazon Aurora Advanced Concepts
## Summary
- 
## Key Ideas
### Auto Scaling
- When the auto scaling is enabled if the [[1750181553-rds-read-replica-vs-multi-az|Read Replicas]] are using a lot of CPU it will automatically create new Read Replicas to lower the usage of CPU having a more distributed workload.
![[1750272488-amazon-aurora-advanced-concepts.webp]]
### Custom Endpoints.
- Define a subset of Aurora Instances as Custom Endpoints.
- Ex: Run analytical queries on specific replicas.
- The Reader Endpoint is generally not used after defining Custom Endpoints.
![[1750272488-amazon-aurora-advanced-concepts-1.webp]]
### Serverless
- Automated DB instantiation and auto-scaling based on actual usage.
- Good for infrequent, intermittent or unpredictable workloads.
- Pay per second, can be more cost-effective.
![[1750272488-amazon-aurora-advanced-concepts-2.webp]]
### Global Aurora
- Cross Region Read Replicas:
	- Useful for DR.
	- Simple to put in place.
- Aurora Global DB (recommended):
	- 1 Primary Regions (read/write).
	- Up to 5 secondary (read-only) regions, replication lag < 1 sec.
	- Up to 16 Read Replicas per secondary region.
	- Promoting another region (for DR) has an **RTO of < 1 min**
	- cross-region replication takes less than 1 sec.
![[1750272488-amazon-aurora-advanced-concepts-3.webp]]
### [[Machine learning]]
- Enables ML-based predictions to your applications via SQL.
- Simple, optimized, and secure integration between Aurora and AWS ML services.
- Supported services:
	- [[1754060519-amazon-sagemaker|Amazon SageMaker]] (use with any ML model)
	- [[1754059607-amazon-comprehend|Amazon Comprehend]] (for sentiment analysis)
- No need to have ML experience.
![[1750272488-amazon-aurora-advanced-concepts-4.webp]]
### Babelfish for Aurora PostgreSQL
- Allows Aurora PostgreSQL to understand commands targeted for MS SQL Server.
- The same app can be used after a migration of your DB (using AWS SCT and DMS)
![[1750272488-amazon-aurora-advanced-concepts-5.webp]]

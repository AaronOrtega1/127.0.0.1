---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Database Migration Service
  - DMS
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# Database Migration Service
## Summary
- 
## Key Ideas
- Quickly and securely migrate databases to AWS, resilient, self healing.
- The source DB remains available during the migration.
- Supports:
	- Homogeneous migrations: ex Oracle to Oracle.
	- Heterogeneous migrations: ex Microsoft [[SQL]] Server to [[1750265113-amazon-aurora|Aurora]].
- Continuous Data Replication using CDC.
- You must create an EC2 instance to perform the replication tasks.

### Sources and Targets
- **Sources:**
	- On-Premises and [[1748020848-ec2-basics|EC2]] instances databases: Oracle, MS SQL Server, MySQL, MariaDB, [[1754522252-postgresql|PostgreSQL]], [[1753374835-mongodb|MongoDB]], SAP, DB2.
	- Azure: Azure SQL Database.
	- [[1750180189-rds-overview|RDS]]: all including [[1750265113-amazon-aurora|Aurora]].
	- [[1751042472-s3-overview|S3]].
	- [[1753374184-documentdb|DocumentDB]].
- **Targets:**
	- On-Premises and [[1748020848-ec2-basics|EC2]] instances databases: Oracle, MS SQL Server, MySQL, MariaDB, [[1754522252-postgresql|PostgreSQL]], MongoDB, SAP.
	- [[1750180189-rds-overview|RDS]].
	- [[1753482302-redshift-overview|Redshift]], [[1752777935-amazon-dynamodb|DynamoDB]], [[1751042472-s3-overview|S3]].
	- [[1753974716-amazon-opensearch-service|OpenSearch Service]].
	- [[1751996367-amazon-kinesis-data-streams|Kinesis Data Streams]].
	- [[1744074459-apache-kafka-introduction|Apache Kafka]]
	- [[1753374184-documentdb|DocumentDB]] & [[1753374974-amazon-neptune|Neptune]]
	- Redis & Babelfish.

### Schema Conversion Tool (SCT)
- Convert your DB's schema from one engine to another.
- Example [[1755623871-oltp|OLTP]]: (SQL Server or Oracle) to MySQL, PostgreSQL, Aurora.
- Example [[1755623924-olap|OLAP]]: (Teradata or Oracle) to [[1753482302-redshift-overview|Redshift]]
![[1755622165-database-migration-service.webp]]
- **You do not need to use SCT if you are migrating the same DB engine**
	- Ex: On-Premise PostgreSQL => RDS PostgreSQL.
	- The DB engine is still PostgreSQL (RDS is the platform).

### Continuous Replication
![[1755622165-database-migration-service-1.webp]]

### Multi-AZ Deployment
- When Multi-AZ is enabled, DMS provisions and maintains a synchronously stand replica in a different AZ.
- Advantages:
	- Provides Data Redundancy.
	- Eliminates I/O freezes.
	- Minimizes latency spikes.
![[1755622165-database-migration-service-2.webp]]



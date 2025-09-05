---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - RDS and Aurora Migration
tags:
  - Knowledge
  - aws
  - certificate
  - cloud
created_date: 2025-08-19
---
# [[1750180189-rds-overview|RDS]] and [[1750265113-amazon-aurora|Aurora]] Migration
## Summary
- 
## Key Ideas
### RDS & Aurora MySQL Migrations
- **RDS MySQL to Aurora MySQL**
	- Option 1: DB snapshots from RDS MySQL restored as MySQL Aurora DB.
	- Option 2: Crete an Aurora Read Replica from your RDS MySQL, and when the replication lag is 0, promote it as its own DB cluster (can take time and cost $).
- **External MySQL to Aurora MySQL**
	- Option 1:
		- Use Percona XtraBackup to create a file backup in [[1751042472-s3-overview|S3]].
		- Create an Aurora MySQL DB from S3.
	- Option 2:
		- Create an Aurora MySQL DB.
		- Use the mysqldump utility to migrate into Aurora (slower than S3 method)
- **Use DMS if both databases are up and running.**

### RDS & Aurora [[1754522252-postgresql|PostgreSQL]] Migrations
- **RDS MySQL to Aurora PostgreSQL**
	- Option 1: DB snapshots from RDS PostgreSQL restored as PostgreSQL Aurora DB.
	- Option 2: Crete an Aurora Read Replica from your RDS PostgreSQL, and when the replication lag is 0, promote it as its own DB cluster (can take time and cost $).
- **External PostgreSQL to Aurora PostgreSQL**
	- Create a backup and put it in S3.
	- Import it using the aws_s3 Aurora extension.
- **Use DMS if both databases are up and running.**




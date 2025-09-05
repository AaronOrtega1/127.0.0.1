---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Rds & Aurora Backups And Monitoring
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - DB
created_date: 2025/06/18
---
# [[1750180189-rds-overview|RDS]] & [[1750265113-amazon-aurora|Aurora]] Backups And Monitoring
## Summary
- 
## Key Ideas
### RDS Backups
- Automated backups:
	- Daily full backup of the DB (during the backup window).
	- Transaction logs are backed-up by RDS every 5 minutes.
	- 1 to 35 days of retention, set to 0 disables automated backups.
- Manual DB snapshots:
	- Manually triggered by the user.
	- Retention of backup for as long as you want.
- **Trick:** in stopped RDS DB, you will still pay for storage. If you are going to stop it for a long time, its better to take a snapshot and restore it later.
### Aurora Backups
- Automated backups:
	- 1 to 35 days (cannot be disabled).
	- point-in-time recovery in that time-frame.
- Manual DB snapshots:
	- Manually triggered by the user.
	- Retention of backup for as long as you want.
### RDS & Aurora Restore Options
- Restoring a RDS/Aurora backup or a snapshot creates a new DB.
- Restoring MySQL RDS database from S3:
	- Create a backup of your on-premise DB.
	- Store it on Amazon S3 (object storage).
	- Restore the backup file onto a new RDS instance running MySQL.
- Restoring MySQL Aurora cluster from S3:
	- Create a backup of your on-premise DB using Percona XtraBackup.
	- Store the backup file on Amazon S3 (object storage).
	- Restore the backup file onto a new Aurora cluster running MySQL.
### Aurora DB Cloning
- Create a new DB from an existing one.
- Faster than snapshot & restore.
- Uses *copy-on-write* protocol:
	- The new DB cluster uses the same data volume as the original DB cluster.
	- When updates are made to new DB cluster data, then additional storage is allocated and data is copied to be separated.
- Useful to create **"staging"** DB from a "production" DB without impacting the production DB.

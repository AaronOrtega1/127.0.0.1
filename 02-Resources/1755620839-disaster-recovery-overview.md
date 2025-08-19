---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Disaster Recovery Overview
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# Disaster Recovery Overview
## Summary
- 
## Key Ideas
- **RPO:** Recovery Point Objective.
- **RTO:** Recovery Time Objective.
![[1755620839-disaster-recovery-overview.webp]]

### DR Strategies
- Backup and Restore.
- Pilot Light.
- Warm Standby.
- Hot Site/Multi Site Approach.
![[1755620839-disaster-recovery-overview-1.webp]]

#### Backup and Restore (High RPO)
![[1755620839-disaster-recovery-overview-2.webp]]

#### Pilot Light
- Small version of the app is always running in the cloud.
- Useful for critical core (pilot light).
- Very similar to Backup and Restore.
- Faster than Backup and Restore as critical systems are already up.
![[1755620839-disaster-recovery-overview-3.webp]]

#### Warm Standby
- Full system is up and running, but at minimum size.
- Upon disaster we can scale to prod load.
![[1755620839-disaster-recovery-overview-4.webp]]

#### Multi Site/Hot Site Approach
- Very low RTO (minutes or seconds) - very expensive.
- Full Production Scale is running AWS and On Premise.
![[1755620839-disaster-recovery-overview-5.webp]]

#### All AWS Multi Region
![[1755620839-disaster-recovery-overview-6.webp]]

### DR Tips
- **Backup**
	- [[1748622252-ebs-overview|EBS]] Snapshots, [[1750180189-rds-overview|RDS]] automated backups / Snapshots, etc...
	- Regular pushes to [[1751042472-s3-overview|S3]] / S3 IA / [[1751391438-glacier-vault-lock-and-s3-object-lock|Glacier]], Lifecycle Policy, Cross Region Replication.
	- From On-Premise: [[1751562589-aws-snowball-overview|Snowball]] or [[1751566147-storage-gateway-overview|Storage Gateway]].
- **High Availability**
	- Use [[1750461685-route-53-overview|Route 53]] to migrate [[1750461147-what-is-a-dns?|DNS]] over from region to region.
	- [[1750180189-rds-overview|RDS]] Multi-AZ, [[1750285055-elasticache-overview|ElastiCache]] Multi-AZ, [[1748995060-amazon-elastic-file-system-(efs)|EFS]], S3.
	- [[1755279885-aws-site-to-site-vpn|Site-to-Site VPN]] as a recovery from [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]].
- **Replication**
	- RDS Replication (Cross Regions), [[1750265113-amazon-aurora|Aurora]] + Global Databases.
	- Database replication from on-premise to RDS.
	- Storage Gateway.
- **Automation**
	- [[1753150090-cloudformation-cheat-sheet|CloudFormation]]/[[1750884621-elastic-beanstalk|Elastic Beanstalk]] to re-create a whole new environment.
	- Recover/Reboot EC2 instances with [[1753150030-cloudwatch-cheat-sheet|CloudWatch]] if alarms fail.
	- [[1752687705-lambda-overview|Lambda]] functions for customized automation.
- **Chaos**
	- Netflix has a "simian-army" randomly terminating EC2 instances.



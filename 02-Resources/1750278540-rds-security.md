---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Rds Security
tags:
  - resource
  - aws
  - cloud
  - certificate
  - RDS
created_date: 2025/06/18
---
# RDS Security
## Summary
- 
## Key Ideas
### What can you do for security?
- **At-rest encryption**:
	- DB master & replicas encryption using AWS KMS - must be defined as launch time.
	- If the master is not encrypted, the read replicas cannot be encrypted.
	- To encrypt an un-encrypted DB, go through a DB snapshot & restore as encrypted.
- **In-flight encryption**:
	- TLS-ready by default, use the AWS [[1749662716-ssl-certificates#^c5a5bf|TLS]] root certificates client-side.
- **[[1747859818-iam-intro-users-groups-policies|IAM]] Authentication**:
	- IAM roles to connect to your DB.
- **[[1748283223-security-groups-&-classic-ports-overview|Security Groups]]**
	- Control network access to your RDS/Aurora DB.
- **No SSH available** except on RDS Custom.
- **Audit Logs can be enabled** and sent to [[1752812834-cloudwatch|CloudWatch]] Logs for longer retention.

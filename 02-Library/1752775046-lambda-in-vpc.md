---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Lambda in VPC
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Lambda
created_date:
  2025-07-17
---
# Lambda in VPC
## Summary
- 

## Key Ideas
### By Default
- Lambda functions are launched outside your own VPC (in an AWS-owned VPC).
- Therefore, it cannot access resources in your VPC.

#### Lambda in VPC
- Define the VPC ID, the Subnets and the [[1748283223-security-groups-&-classic-ports-overview|Security Groups]].
- Lambda will create an ENI (Elastic Network Interface) in your subnets.
![[1752775046-lambda-in-vpc.webp|400]]

#### Lambda with [[1750279379-amazon-rds-proxy|RDS Proxy]]
- If Lambda functions directly access your database, they may open too many connections under high load.
- RDS Proxy
  - Improve scalability by pooling and sharing DB connections.
  - Improve availability by reducing by 66% the failover time and preserving connections.
  - Improve security by enforcing [[1747869134-iam-policies|IAM]] authentication and storing credentials in Secrets Manager.
- **The Lambda function must be deployed in your VPC, because RDS Proxy is never publicly accessible**.
![[1752775046-lambda-in-vpc-1.webp|400]]












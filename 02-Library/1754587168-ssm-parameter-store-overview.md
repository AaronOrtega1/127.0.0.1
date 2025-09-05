---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - SSM Parameter Store Overview
  - SSM
tags:
  - Knowledge
  - aws
  - certificate
  - cloud
  - SSM
  - AWS_Security
created_date:
  "2025-08-07"
---
# SSM Parameter Store Overview
## Summary
- Secure storage for configuration and secrets.
- Optional Seamless Encryption using [[1748995884-key-management-system|KMS]].
- Serverless, scalable, durable, easy SDK.
- Version tracking of configurations/secrets.
- Security through [[1747869134-iam-policies|IAM]].
- Notifications with [[1754417774-amazon-eventbridge|Amazon EventBridge]].
- Integration with [[1753150090-cloudformation-cheat-sheet|CloudFormation]].
![[1754587168-ssm-parameter-store-overview.webp|500]]

### Hierarchy
![[1754587168-ssm-parameter-store-overview-1.webp]]

### Standard and advanced parameter tiers
![[1754587168-ssm-parameter-store-overview-2.webp]]

#### Parameters Policies (for advanced parameters)
- Allow to assign a TTL to a parameter (expiration date) to force updating or deleting sensitive data such as passwords.
- Can assign multiple policies at a time.
![[1754587168-ssm-parameter-store-overview-3.webp]]



---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - s3 replication
tags:
  - resource
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-06-27
---
# S3 Replication
## Summary
- 
## Key Ideas
### Cross Region Replication (CRR) & Same Region Replication (SRR)
- **Must enable Versioning** in source and destination buckets.
- Buckets can be in different AWS accounts.
- Copying is asynchronous.
- Must give proper [[1747869134-iam-policies|IAM]]  permissions to S3.
#### Use cases:
- **CRR**  - Compliance, lower latency access, replication across accounts,
- **SRR** - log aggregation, live replication between production and test accounts.

>[!info] Notes:
>- After you enable Replication, only new objects are replicated.
>- Optionally, you can replicate existing objects using **S3 Batch Replication**.
>	- Replicates existing objects and objects that failed replication.
>- For DELETE operations.
>	- **Can replicate delete markers** from source to target (optional setting).
>	- Deletions with a version ID are not replicated (to avoid malicious deletes).


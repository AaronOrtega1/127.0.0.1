---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Batch Operations
tags:
  - resource
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-06-30
---
# S3 Batch Operations
## Summary
- 
## Key Ideas
### 
- Perform bulk operations on existing S3 objects with a single request, example:
  - Modify object metadata & properties.
  - Copy objects between S3 buckets.
  - **Encrypt un-encpryted objects.**
  - Modify ACLs, tags.
  - Restore objects from S3 Glacier.
  - Invoke Lambda function to perform custom action on each object.
- A job consists of a list of objects, the action to perform, and optional parameters.
- S3 batch operations manages reties, tracks progress, sends completion notifications, generate reports...
- **You can use S3 Inventory to get object list and use Athena to query and filter your objects.**
![[1751305792-s3-batch-operations.webp]]

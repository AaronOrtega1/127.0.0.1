---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - AWS Snowball
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Snowball
created_date:
  2025-07-03
---
# AWS Snowball
## Summary
- 

## Key Ideas
### What is AWS Snowball?
- Highly-secure, portable device to **collect and process data at the edge**, and **migrate data into and out of AWS**.
- Helps migrate up to Petabytes of data.
![[1751562589-aws-snowball-overview.webp]]

> [!NOTE] AWS Snowball: offline devices to perform data migrations.
> If it takes more than a week to transfer over the network, use Snowball devices!

![[1751562589-aws-snowball-overview-1.webp]]

- Other use case is to process data while it's being created on **an edge location**.
  - A truck on the road, a ship on the sea, a mining station underground.
- We setup a **Snowball Edge** device to do edge computing.
  - Snowball Edge Compute Optimized (dedicated for that use case) & Storage Optimized.
  - Run [[1748020848-ec2-basics|EC2]] instances or Lambda functions at the edge.
- **Use cases:** preprocess data, machine learning, transcoding media.

> [!NOTE] Snowball into Glacier
> Snowball cannot import to Glacier directly.
> You must use Amazon [[1751042472-s3-overview|S3]] first, in combination with an S3 lifecycle policy.





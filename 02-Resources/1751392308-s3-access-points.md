---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Access Points
tags:
  - resource
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-07-01
---
# S3 Access Points
## Summary
- 
## Key Ideas
### What is an Access Point used for?
- To simplify security management for S3 Buckets.
- Each Access Point has:
  - Its own [[1750461147-what-is-a-dns?|DNS]] name (Internet Origin or VPC Origin).
  - An access point policy (similar to bucket policy) - manage security at scale.
![[1751392308-s3-access-points.webp]]

#### VPC Origin
- We can define the access point to be accessible only from within the VPC.
- You must create a VPC Endpoint to access the Access Point (Gateway or Interface Endpoint).
- The VPC Endpoint Policy must allow access to the target bucket and Access Point.
![[1751392308-s3-access-points-1.webp]]



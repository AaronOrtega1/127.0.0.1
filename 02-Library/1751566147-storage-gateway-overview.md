---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Storage Gateway
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date:
  2025-07-03
---
# Storage Gateway
## Summary
- 

## Key Ideas
### Why and What is Storage Gateway?
- AWS is pushing for "hybrid cloud"
- Can be due to:
  - Long cloud migrations.
  - Security requirements.
  - Compliance requirements.
  - IT strategy.

- Storage Gateway is a bridge between on-premises data and cloud data.
- **Use cases:**
  - Disaster recovery.
  - Backup & restore.
  - Tiered storage.
  - on-premises cache & low-latency files access.

### Types of Storage Gateway
#### File Gateway
- [[1751042472-s3-overview|S3]] buckets are accessible using NFS and SMB protocol.
- **Most recently used data is cached in the file gateway.**
- Supports S3 Standard, Standard IA, One Zone A, Intelligent Tiering.
- **Transition to S3 Glacier using a Lifecycle Policy.**
- Bucket access using [[1747869134-iam-policies|IAM]] roles for each gateway.
- SMB protocol has integration with Active Directory (AD) for user auth.
![[1751566147-storage-gateway-overview.webp]]

#### Volume Gateway
- Block storage using iSCSI protocol backed by S3.
- Backed by [[1748622252-ebs-overview|EBS]] snapshots which can help restore on-premises volumes.
- **Cached volumes:** low-latency access to most recent data.
- **Stored volumes:** entire dataset is on premise, scheduled backups to S3.
![[1751566147-storage-gateway-overview-1.webp]]

#### Tape Gateway
- Some companies have backup processes using physical tapes (!).
- Virtual Tape Library (VTL) backed by Amazon S3 and Glacier.
- Back up data using existing tape-based processes (and iSCSI interface).
- Works with leading backup software vendors.
![[1751566147-storage-gateway-overview-2.webp]]

### Hardware appliance
- If you don't have on-premises virtualization you can use a Storage Gateway Hardware Appliance, you can buy it on amazon.
- Works with **File Gateway, Volume Gateway, Tape Gateway.**



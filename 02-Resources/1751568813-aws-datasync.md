---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - AWS DataSync
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date:
  2025-07-03
---
# AWS DataSync
## Summary
### What it's used for?
- Move large amount of data to and from:
  - On-premises / other cloud to AWS (S3, EFS, FSx) - need agent.
	![[1751568813-aws-datasync.webp]]
  - AWS to AWS - no agent needed.
  ![[1751568813-aws-datasync-1.webp]]
- Can synchronize to:
  - Amazon [[1751042472-s3-overview|S3]] (any storage classes - including Glacier).
  - Amazon [[1748995060-amazon-elastic-file-system-(efs)|EFS]]
  - [[1751563857-amazon-fsx|Amazon FSx]]
- Replication task can be scheduled.
- **File permissions and metadata are preserved. (only service that preserve it)** (NFS POSIX, SMB...)
- Can setup a bandwidth limit.


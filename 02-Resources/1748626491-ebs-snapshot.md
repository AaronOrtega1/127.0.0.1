---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - EBS Snapshot
tags:
  - resource
  - aws
  - cloud
  - certificate
  - EBS
created_date: 2025/05/30
---
# EBS Snapshot
## Summary
- 
## Key Ideas
- Make a backup of your EBS volume.
- Not necessary to detach the volume to do the snapshot, but recommended.
- Can copy snapshots across AZ or Region.
![[1748626491-ebs-snapshot.webp]]
### Features
- **EBS Snapshot Archive**
	- Move the snapshot to an "archive tier" that is 75% cheaper.
	- Takes 24-72 hour to restore the archive.
![[1748626491-ebs-snapshot-1.webp]]
- **Recycle Bin for EBS Snapshots**
	- Setup rules to retain deleted snapshots so you can recover them.
	- Specify retention.
![[1748626491-ebs-snapshot-2.webp]]
- **Fast Snapshot Restore (FSR)**
	- Force full initialization of snapshot without latency on the first use **(expensive)**

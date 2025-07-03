---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - EFS
tags:
  - resource
  - aws
  - cloud
  - certificate
  - EFS
created_date: 2025/06/03
---
# Amazon Elastic File System (EFS)
## Summary
- 
## Key Ideas
### What is an EFS?
- Manged NFS (Network File System) that can be mounted on many EC2.
- EFS works with EC2 instances in multi-AZ.
- Highly available, scalable, expensive (3x[[1748891035-ebs-volume-types#^3e90c1|gp2]]), pay per use.
![[1748995060-amazon-elastic-file-system-_efs_.webp]]
### Use cases
- Content Management.
- Web Serving.
- Data Sharing.
- Wordpress.
### 
- Uses NFSv4.1 protocol
- Uses [[1748283223-security-groups-&-classic-ports-overview|security groups]] to control access.
- **Compatible with Linux based [[1748627575-ami-overview|AMI]] (not Windows)**.
- Encryption at rest using [[1748995884-key-management-system|KMS]].
- Scales automatically, pay-per-use, no capacity planning!
### Performance
- **EFS Scale**
	- 1000s of concurrent NFS clients, 10 GB+/s throughput.
	- Grow to Petabyte-scale network file system, automatically.
- **Performance Mode (set at EFS creation time)**
	- **General Purpose (default)** - latency-sensitive use cases (web server, CMS, etc...).
	- **Max I/O** - higher latency, throughput, highly parallel (big data, media processing).
- **Throughput Mode**
	- **Bursting** - 1 TB = 50 MiB/s + burst of up to 100MiB/s.
	- **Provisioned** - set your throughput regardless of storage size, ex: 1 GiB/s for 1 TB storage.
	- **Elastic** - automatically scales throughput up or down based on your workloads.
		- Up to 3 GiB/s for writes.
		- Used for unpredictable workloads.
### Storage Classes
- Storage Tiers (lifecycle management feature - move file N days)
	- **Standard**: for frequently accessed files.
	- **Infrequent access (EFS-IA)**: cost to retrieve files, lower price to store.
	- **Archive**: rarely accessed data (few times each year), 50% cheaper.
	- Implement **lifecycle policies** to move files between storage tiers.
![[1748995060-amazon-elastic-file-system-_efs_-1.webp]]
- Availability and durability
	- **Standard**: Multi-AZ, great for prod.
	- **One Zone**: One AZ, great for dev, backup enabled by default, compatible with IA (EFS One Zone-IA).
## Related Links
- [[]]
## Source
[text](url) 

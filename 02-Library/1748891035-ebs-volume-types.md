---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ebs Volume Types
tags:
  - Knowledge
  - aws
  - cloud
  - EBS
  - certificate
created_date: 2025/06/02
---
# EBS Volume Types
## Summary
- 
## Key Ideas
### Comes in 6 types
- **gp2/gp3 (SSD)** ^3e90c1
	- **General purpose SSD volume** that balances price and performance for a wide variety of workloads.
- **io1/io2 Block Express (SSD)**
	- **Highest-performance SSD volume** for mission-critical low-latency or high-throughput workloads.
- **st1 (HDD)**
	- **Low cost HDD volume** designed for frequently accessed, throughput-intensive workloads.
- **sc1 (HDD)**
	- **Lowest cost HDD volume** designed for less frequently accessed workloads.
### Use Cases
#### General Purpose SSD
- Cost effective storage, low-latency
- System boot volumes, Virtual desktops, Development and test environments.
- 1 GiB - 16 TiB
- gp3:
	- Baseline of 3,000 IOPS and throughput of 125 MiB/s
	- Can increase IOPS up to 16,000 and throughput up to 1000 MiB/s independently
- gp2:
	- Small gp2 volumes can burst IOPS to 3k.
	- Size of the volume and IOPS are linked, max IOPS is 16k.
	- 3 IOPS per GB, means at 5,334 GB we are at the max IOPS.
#### Provisioned IOPS (PIOPS) SSD
- Critical business applications with sustained IOPS performance.
- Or applications that need more than 16k IOPS
- Great for **databases workloads** (sensitive to storage perf and consistency)
- io1 (4 GiB - 16 TiB):
	- Max PIOPS: 64k for Nitro EC2 instances and 32k for others.
	- Can increase PIOPS independently from storage size.
- io2 Block Express (4 Gib - 64 TiB):
	- Sub-millisecond latency.
	- Max PIOPS: 256k with an IOPS: GiB ratio of 1,000:1
- Supports EBS Multi-attach.
#### Hard Disk Drives (HDD)
- Cannot be a boot volume.
- 125 GiB - 16 TiB.
- Throughput Optimized HDD (st1)
	- [[1748972768-big-data|Big Data]], [[1748031799-data-warehouse|Data Warehouse]], Log Processing.
	- Max throughput 500 MiB/s - max IOPS 500.
- Cold HDD (sc1)
	- For data that is infrequently accessed.
	- Scenarios where lowest cost is important
	- Max throughput 250 MiB/s - max IOPS 250.
## Related Links
- [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)

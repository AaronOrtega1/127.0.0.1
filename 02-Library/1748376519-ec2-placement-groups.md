---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ec2 Placement Groups
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - EC2
created_date: 2025/05/27
---
# EC2 Placement Groups
## Summary
- 
## Key Ideas
### What are Placement Groups used for?
- For when you want control over the EC2 instance placement strategy.
### What you specify when creating a Placement Group?
- Cluster - Clusters instances into low-latency groups in a single AZ. ^Cluster
	- ![[1748376519-ec2-placement-groups.webp]]
	- Great network (10 Gbps between instances with enhanced networking enabled - recommended), but if the AZ fails, all the instances fail at the same time.
	- Use case:
		- **Big Data Jobs**.
		- **Applications that needs extremely low latency and high network throughput**.
- Spread - Spread instances across underlying hardware (max 7 instances per group per AZ) - **critical applications**.
	- ![[1748376519-ec2-placement-groups-1.webp]]
	- Can span across AZ, reduces risk of simultaneous failure, EC2 instances are on different physical hardware, but we are limited to 7 instances per AZ per placement group.
	- Use case:
		- **Applications that needs to maximize high availability**.
		- **Critical Applications where each instance must be isolated m failure from each other**.
- Partition - Spread instances across many different partitions (which rely on different sets of racks) within an AZ. Scales to 100s of EC2 instances per group (Hadoop, Cassandra, Kafka).
	- ![[1748376519-ec2-placement-groups-2.webp]]
	- It can have 7 partitions per AZ, can span across multiple AZ, up to 100s of EC2 instances, the instances do no share racks with the instances in the other partitions, partition failure can affect many EC2 but won't affect other partitions, the instances get access to the partition information as metadata.
## Related Links
- [[]]
## Source
[text](url) 
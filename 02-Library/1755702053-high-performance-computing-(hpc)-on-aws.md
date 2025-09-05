---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - High Performance Computing (HPC) on AWS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# High Performance Computing (HPC) on AWS
## Core Concept
- **High Performance Computing (HPC)**: Running massive computations in parallel by using many resources.
- **Why AWS for HPC?**
  - Rapidly provision **large numbers of compute resources**.
  - Scale out to reduce **time-to-results**.
  - Pay only for what you use → destroy infrastructure when done.
  - Ideal for temporary but computation-heavy workloads.

### Use Cases
- Genomics
- Computational Chemistry
- Financial Risk Modeling
- Weather Prediction
- Machine Learning & Deep Learning
- Autonomous Driving

## Data Transfer into AWS
- [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]]: High-bandwidth, low-latency private connection (Gbps scale).
- **[[1751562589-aws-snowball-overview|Snowball]] / Snowmobile**: Petabyte-scale physical data transfer (for one-off or very large transfers).
- [[1751568813-aws-datasync|DataSync]]: Move large on-premises datasets into [[1751042472-s3-overview|S3]], [[1748995060-amazon-elastic-file-system-(efs)|EFS]], or [[1751563857-amazon-fsx#^Windows|FSx for Windows]] using agents (supports NFS & SMB).

## Compute & Networking
### [[1748020848-ec2-basics|EC2]] for HPC
- **EC2 Instance Types**:
  - **CPU-optimized** or **GPU-optimized** based on workload.
  - Use **Spot Instances / Spot Fleets** for cost savings.
  - **Auto Scaling** for elasticity.
- **[[1748376519-ec2-placement-groups#^Cluster|Cluster Placement Group]]**:
  - Ensures instances are on the same rack in same AZ.
  - Ultra-low latency networking (up to 10 Gbps typical).

### Enhanced Networking
- Goal: Higher **bandwidth**, higher **PPS (packets/sec)**, lower **latency**.
- **ENA (Elastic Network Adapter)**:
  - Up to **100 Gbps**.
  - Standard for HPC networking.
- **Intel 82599 VF**:
  - Legacy option, up to **10 Gbps**.
  - Older form of enhanced networking.
- **EFA (Elastic Fabric Adapter)**:
  - Specialized for HPC workloads.
  - Only for **Linux**.
  - Ideal for **inter-node communication** & **tightly coupled workloads**.
  - Supports **MPI (Message Passing Interface)**.
  - **Bypasses Linux OS** for ultra-low latency transport.

## Storage Options
### Instance-Attached
- **[[1748622252-ebs-overview|EBS]] (io2 Block Express)**: Up to **256,000 IOPS**.
- **Instance Store**: Millions of IOPS, tied to hardware (data lost if instance lost).

### Network Storage
- **S3**: Object storage, large blobs of data.
- **EFS**: File storage, scalable IOPS (provisioned IOPS option available).
- **[[1751563857-amazon-fsx#^Lustre|FSx for Lustre]]**:
  - Optimized for **HPC**.
  - Provides **millions of IOPS**.
  - Backed by **S3**.
  - “Lustre” = Linux + Cluster.

## Automation & Orchestration
- **AWS Batch**:
  - Runs multi-node parallel jobs across EC2.
  - Handles job scheduling and provisioning.
- **AWS ParallelCluster**:
  - Open-source cluster management tool.
  - Configured via text files.
  - Automates VPC, subnet, cluster types, and instance types.
  - Can enable **EFA** for optimized networking.

## Key Takeaways
- **HPC on AWS = combination of services**, not one product.
- Must understand:
  - Data transfer methods (Direct Connect, Snowball, DataSync).
  - Compute (EC2 types, Spot, Placement Groups).
  - Networking enhancements (ENA vs EFA).
  - Storage options ([[1748622252-ebs-overview|EBS]], Instance Store, S3, EFS, FSx for Lustre).
  - Orchestration (Batch, ParallelCluster).
- On exams, expect questions differentiating **ENA vs EFA vs ENI** and **storage tradeoffs**.
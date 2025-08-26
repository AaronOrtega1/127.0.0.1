---
link: "[[1756142984-ec2-study-guide|EC2 study guide]]"
aliases: 
  - EC2 and Storage Essential Flashcards
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Cards/AWS/NotebookLM/EC2_and_Storage
created_date:
  "2025-08-25"
---
# EC2 and Storage Essential Flashcards
- What is the primary purpose of EC2 **Placement Groups**?;;To control how **EC2 instances are placed** within the AWS infrastructure, defining their strategy relative to one another.
<!--SR:!2025-08-27,1,230-->
- Name the **three strategies** available for EC2 Placement Groups.;;Cluster, Spread, Partition.
<!--SR:!2025-08-30,4,270-->
- What is the key characteristic of **Cluster Placement Groups**?;;Instances are grouped together in a **low-latency hardware setup withing a single AZ**, offering **high performance** but **high risk.**
<!--SR:!2025-08-29,3,250-->
- What is a major drawback of using a **Cluster Placement Group**?;;If the **AZ fails, all instances withing that group will fail** at the same time.
<!--SR:!2025-08-30,4,270-->
- What is the primary goal of a **Spread Placement Group**?;;To **minimize failure risk** by spreading instances across **different hardware**.
<!--SR:!2025-08-30,4,270-->
- What is the **instance limit** for a **Spread Placement Group** per AZ?;;You can only have **seven EC2 instances per placement group per AZ.**
<!--SR:!2025-08-30,4,270-->
- For what kind of applications would you use a **Spread Placement Group**?;;**Critical applications** where instance failures must be **isolated from one another** and to **maximize high availability.**
<!--SR:!2025-08-29,3,250-->
- How many **partitions per AZ** can a **Partition Placement Group** have?;;Up to **seven partitions per AZ.**
<!--SR:!2025-08-29,3,250-->
- What is the scalability benefit of a **Partition Placement Group** compared to a **Spread Placement Group**?;;It can scale to **hundreds of EC2 instances per group**, whereas Spread is limited to seven per AZ.
<!--SR:!2025-08-27,1,230-->
- What types of **big data applications** are commonly used with **Partition Placement Groups**?;;Applications like **Hadoop, Cassandra, Kafka, HDFS, and HBase** that are partition-aware.
<!--SR:!2025-08-30,4,270-->
- What must be enabled in the root account for setting for **IAM users to access billing data**?;;**"IAM user and role access to billing information"** must be activated.
<!--SR:!2025-08-27,1,230-->
- What is the purpose of an AWS **zero-spend budget?**;;It alerts you as soon as you incur **even a minimal cost (e.g., 1 cent)**, which is very helpful for cost monitoring.
<!--SR:!2025-08-30,4,270-->
- What is **Amazon EFS** and its key capability regarding EC2 instances?;;EFS is a **managed Network File System (NFS)** that can be **mounted on many EC2 instances across different Availability Zones simultaneously.**
<!--SR:!2025-08-30,4,270-->
- What is the primary **compatibility restriction** for Amazon EFS?;;It is **only compatible with Linux-based AMIs,** not Windows.
<!--SR:!2025-08-29,3,250-->
- Name the two **performance modes** available for EFS, and when you would use each:;;**General Purpose (default)**, for **latency-sensitive** use cases like servers or CMS. **Max I/O**, for **higher throughput** and highly parallel applications like big data or media processing, through it has higher latency.
<!--SR:!2025-08-27,1,230-->
- Which EFS **throughput mode** allows you to set throughput independently of storage size?;;**Provisioned** throughput mode.
<!--SR:!2025-08-30,4,270-->
- What EFS storage class is designed for **infrequently accessed files** and offers cost savings?;;**EFS-IA (Infrequent Access)**.
<!--SR:!2025-08-30,4,270-->
- What is and **Amazon Machine Image (AMI)** and what does it contain?;;An AMI represents a **customization fo an EC2 instance** and contains the **software configuration, operating system, and monitoring tools.**
<!--SR:!2025-08-29,3,250-->
- Why would you create your **own custom AMI**?;;To achieve **faster boot and configuration times** because all desired software is prepackaged.
<!--SR:!2025-08-30,4,270-->
- What is a crucial step for **data integrity** when creating an AMI from a running EC2 instance?;;You must **stop the instance** before building the AMI.
<!--SR:!2025-08-30,4,270-->
- What are the **three primary methods** for connecting to Linux EC2 instances?;;**SSH utility** (Mac, Linux, Windows 10+), **Putty** (Windows, all versions), **EC2 Instance Connect** (browser-based).
<!--SR:!2025-08-29,3,250-->
- What is the main advantage of using **EC2 Instance Connect** for SSH?;;It provides a **browser-based SSH** session and **does not require managing SSH keys** as it uploads a temporary key for you.
<!--SR:!2025-08-30,4,270-->
- What **port must be open** in the security group for **EC2 Instance Connect** to work?;;**Port 22 (SSH).**
<!--SR:!2025-08-30,4,270-->
- What is the **EBS Multi-Attach feature?**;;It allows you to attach the **same EBS volume to multiple EC2 instances.**
<!--SR:!2025-08-30,4,270-->
- Which **EBS volume types** support the **Multi-Attach** feature?;;Only **io1 and io2** volumes.
<!--SR:!2025-08-30,4,270-->
- What is the **maximum number of EC2 instances** that can attach to a single EBS volume using Multi-Attach?;;Up to **16 EC2 instances.**
<!--SR:!2025-08-27,1,230-->
- How can you migrate an **EBS volume across different AZ**?;;You must **take a snapshot** of the EBS volume and then **restore that snapshot in the desired AZ.**
<!--SR:!2025-08-30,4,270-->
- What is the purpose of the **EBS Snapshot Archive tier**, and what is its main characteristic?;;It allows moving snapshots to a **cheaper storage tier (up to 75% savings),** but **restoring from it takes 24-72 hours.**
<!--SR:!2025-08-29,3,250-->
- What is **Fast Snapshot Restore (FSR)** and its main drawback?;;FSR forces a **full initialization of a snapshot** to eliminate latency on first use, but it **cost a lot of money.**
- If an EBS volume is encrypted, what else is automatically encrypted?;;All **data at rest, data in flight** (between instance and volume), all **snapshots**, and all **volumes created from those snapshots** are encrypted.
- Which AWS service provides the keys used for EBS encryption?;;**KMS (Key Management Service)**, using **AWS-256**.
- What is the **default behavior for the root EBS volume** when its associated EC2 instance is terminated?;;By default, the **root EBS volume is deleted** along with the instance.
- Which **EBS volume types** can be used as **boot volumes**?;;Only **gp2, gp3, io1, io2.**
- What is the key difference in **IOPS management between gp2 and gp3 EBS volumes**?;;For **gp2**, IOPS are **linked to the disk size**; for **gp3**, IOPS and throughput can be **increased independently** from the disk size.
- For what use case are **io1/io2 EBS volumes** primarily designed?;;**Mission-critical, low-latency, high-throughput workloads**, especially **sensitive database workloads** needing sustained IOPS performance.
- What is the main characteristic distinguishing **EC2 Instance Store** from **EBS volumes**?;;EC2 Instance Store is a **physical hardware disk attached directly to the EC2 instance's underlying server**, providing **extremely high performance**, but it is **ephemeral storage**, meaning **data is lost if the instance stops or terminates**.
- What is preserved when an EC2 instance is **hibernated**?;;Then **in-memory state (RAM)** is preserved by dumping it to the root EBS volume.
- What are two crucial requirements for an EC2 instance to support **hibernation**?;;The **root EBS volume must be encrypted** and it **must have enough space to contain the RAM dump.** 
- What EC2 purchasing option offers the **highest cost savings** but is the **least reliable**?;;**Spot Instances**, offering up to **90% discounts**, but they can be reclaimed by AWS at any time.
- What is the **grace period** given before a **Spot Instance is reclaimed** when the spot price exceeds your maximum price?;;A **two-minute grace period**.
- For what type of workloads are **Spot Instances NOT suited?**;;Critical jobs or databases.
- What is the correct procedure to **terminate persistent Spot Instances** and prevent them from relaunching?;;First, you must **cancel the spot request**, and then you must **terminate the associated spot instances.**
- What is a **Dedicated Host** and when would you use it?;;A Dedicated Host is an **entire physical server with EC2 instance capacity fully dedicated to your use case.** It's used for **compliance requirements** or to leverage **existing server-bound software licenses.**
- What is the difference between a **Dedicated Host** and a **Dedicated Instance**?;;A **Dedicated Host** gives you access to the **entire physical server** and control over instance placements. A **Dedicated Instance** runs on hardware dedicated to you, but you **may share the hardware with other instances in the same account** and have **no control over instance placements.**
- What is the primary purpose of **Capacity Reservations** for EC2?;;To **reserve On-Demand instance capacity in a specific AZ** for any duration, guaranteeing availability, but they do not **provide billing discounts** and you are charged even if instances are not running.
- What is an **Elastic Network Interface (ENI)** and what is a key benefit?;;An ENI is a **virtual network card** for an EC2 instance. A key benefit is that ENIs can be **attached or moved on the fly between EC2 instances** for **failover purposes.**
- What are **Security Groups** in AWS?;;Security Groups act as a **firewall around EC2 instances**, controlling how **traffic is allowed into an out of them.**
- What are the **default inbound and outbound rules** for a Security Group?;;By default, **all inbound traffic is blocked**, and **all outbound traffic is authorized.**
- 

















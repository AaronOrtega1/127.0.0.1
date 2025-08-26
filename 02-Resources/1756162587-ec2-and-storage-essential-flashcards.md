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
- Name the **three strategies** available for EC2 Placement Groups.;;Cluster, Spread, Partition.
- What is the key characteristic of **Cluster Placement Groups**?;;Instances are grouped together in a **low-latency hardware setup withing a single AZ**, offering **high performance** but **high risk.**
- What is a major drawback of using a **Cluster Placement Group**?;;If the **AZ fails, all instances withing that group will fail** at the same time.
- What is the primary goal of a **Spread Placement Group**?;;To **minimize failure risk** by spreading instances across **different hardware**.
- What is the **instance limit** for a **Spread Placement Group** per AZ?;;You can only have **seven EC2 instances per placement group per AZ.**
- For what kind of applications would you use a **Spread Placement Group**?;;**Critical applications** where instance failures must be **isolated from one another** and to **maximize high availability.**
- How many **partitions per AZ** can a **Partition Placement Group** have?;;Up to **seven partitions per AZ.**
- What is the scalability benefit of a **Partition Placement Group** compared to a **Spread Placement Group**?;;It can scale to **hundreds of EC2 instances per group**, whereas Spread is limited to seven per AZ.
- What types of **big data applications** are commonly used with **Partition Placement Groups**?;;Applications like **Hadoop, Cassandra, Kafka, HDFS, and HBase** that are partition-aware.
- What must be enabled in the root account for setting for **IAM users to access billing data**?;;**"IAM user and role access to billing information"** must be activated.
- What is the purpose of an AWS **zero-spend budget?**;;It alerts you as soon as you incur **even a minimal cost (e.g., 1 cent)**, which is very helpful for cost monitoring.
- What is **Amazon EFS** and its key capability regarding EC2 instances?;;EFS is a **managed Network File System (NFS)** that can be **mounted on many EC2 instances across different Availability Zones simultaneously.**
- What is the primary **compatibility restriction** for Amazon EFS?;;It is **only compatible with Linux-based AMIs,** not Windows.
- Name the two **performance modes** available for EFS, and when you would use each:;;**General Purpose (default)**, for **latency-sensitive** use cases like servers or CMS. **Max I/O**, for **higher throughput** and highly parallel applications like big data or media processing, through it has higher latency.
- Which EFS **throughput mode** allows you to set throughput independently of storage size?;;**Provisioned** throughput mode.
- What EFS storage class is designed for **infrequently accessed files** and offers cost savings?;;**EFS-IA (Infrequent Access)**.
- What is and **Amazon Machine Image (AMI)** and what does it contain?;;An AMI represents a **customization fo an EC2 instance** and contains the **software configuration, operating system, and monitoring tools.** 
- Why would you create your **own custom AMI**?;;To achieve **faster boot and configuration times** because all desired software is prepackaged.
- What is a crucial step for **data integrity** when creating an AMI from a running EC2 instance?;;You must **stop the instance** before building the AMI.
- What are the **three primary methods** for connecting to Linux EC2 instances?;;**SSH utility** (Mac, Linux, Windows 10+), **Putty** (Windows, all versions), **EC2 Instance Connect** (browser-based).
- What is the main advantage of using **EC2 Instance Connect** for SSH?;;It provides a **browser-based SSH** session and **does not require managing SSH keys** as it uploads a temporary key for you.
- What **port must be open** in the security group for **EC2 Instance Connect** to work?;;**Port 22 (SSH).**
- What is the **EBS Multi-Attach feature?**;;It allows you to attach the **same EBS volume to multiple EC2 instances.**
- Which **EBS volume types** support the **Multi-Attach** feature?;;Only **io1 and io2** volumes.
- What is the **maximum number of EC2 instances** that can attach to a single EBS volume using Multi-Attach?;;Up to **16 EC2 instances.**
- How can you migrate an **EBS volume across different AZ**?;;You must **take a snapshot** of the EBS volume and then **restore that snapshot in the desired AZ.**
- What is the purpose of the **EBS Snapshot Archive tier**, and what is its main characteristic?;;It allows moving snapshots to a **cheaper storage tier (up to 75% savings),** but **restoring from it takes 24-72 hours.**
- 
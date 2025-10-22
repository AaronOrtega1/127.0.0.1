---
link: "[[1756819855-aws-solutions-architect-associate-study-guide|AWS Solutions Architect Associate Study Guide]]"
aliases:
  - AWS Solutions Architect Associate Flashcards
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/SAA
created_date: 2025-09-02
---
# AWS Solutions Architect Associate Flashcards
- What is the **fastest way** to start an EC2 instance with pre-installed applications and OS dependencies?;;Using a **golden AMI**.
<!--SR:!2025-11-23,60,310-->
- What is the **primary purpose** of EC2 user data, and how does it compare to a golden AMI for application installation?;;EC2 user data is used for **dynamic configuration** (e.g., retrieving database URLs or passwords) when an instance first starts. While it can install applications and OS dependencies, this method is **very slow** compared to a golden AMI.
<!--SR:!2025-11-04,43,290-->
- How can you ensure **schemas and data** are readily available when starting an RDS database quickly, instead of running slow insert statements?;;By **restoring from snapshots**.
<!--SR:!2025-10-29,37,290-->
- What is the **advantage** of restoring an EBS volume from a snapshot?;;The EBS volume will already be **properly formatted** and contain the necessary data, unlike an empty, unformatted disk.
<!--SR:!2026-01-14,93,290-->
- What is **ELB stickiness (session affinity)**, and what is its main limitation for maintaining session state?;;It's an ELB feature that directs a user's subsequent requests to the **same EC2 instance**. The main limitation is that if the EC2 instance gets terminated, the **session (e.g., shopping cart) is still lost**.
<!--SR:!2026-02-22,124,290-->
- What is the **size limit** for web cookies when storing session content directly on the client side?;;Web cookies can only be **less than four kilobytes total**.
<!--SR:!2025-10-30,38,290-->
- What is the key benefit of using **ElastiCache for storing session data** (e.g., shopping cart contents) over user cookies, especially regarding performance and security?;;ElastiCache offers **sub-millisecond performance** for retrieving session data and is **more secure** because it acts as the source of truth, preventing attackers from altering the data directly. An alternative is DynamoDB.
<!--SR:!2025-11-23,33,250-->
- How many **Read Replicas** can you have in RDS to scale database reads?;;You can have **up to 15 Read Replicas** in RDS.
<!--SR:!2025-11-07,46,290-->
- Name **four AWS services** that support **Multi-AZ features** for disaster recovery and high availability.;;**ELB**, **Auto Scaling Group**, **RDS**, and **ElastiCache (if using Redis)**.
<!--SR:!2025-12-05,56,250-->
- How is **Elastic Beanstalk priced**?;;The Elastic Beanstalk service itself is **free**, but you pay for the **underlying instances and resources** (e.g., EC2, ASG, ELB) that Beanstalk provisions.
<!--SR:!2025-10-30,38,290-->
- What is the key component used in an **Elastic Beanstalk worker environment tier**, and how does it scale?;;It uses an **SQS queue** to receive messages. The EC2 instances (workers) pull messages from SQS and **scale based on the number of SQS messages**.
<!--SR:!2026-02-04,105,270-->
- What are the **two main deployment modes** in Elastic Beanstalk, and for what purpose is each generally used?;;**Single instance**: Great for **development purposes**. **High available with a load balancer**: Great for **production environments**, distributing load across multiple EC2 instances via an Auto Scaling Group in multiple AZs.
<!--SR:!2026-02-18,120,290-->
- What is the key **difference between EBS volumes and EFS** for storing shared application files (like WordPress images) across multiple EC2 instances in different Availability Zones, and which is generally more costly?;;**EBS volumes** work well for a **single EC2 instance**, but data stored on one EBS volume is not directly accessible by other instances, making it problematic for scaling. **EFS** provides **shared storage (NFS)** accessible by multiple EC2 instances across different AZs. **EFS is generally more expensive than EBS** but offers significant advantages for distributed applications.
<!--SR:!2025-11-01,40,290-->
- What is **vertical scaling** for an EC2 instance, and what is its primary drawback?;;Vertical scaling involves **stopping an instance, changing its type** to a larger one (e.g., T2 Micro to M5 Large), and then restarting it. The primary drawback is that it causes **downtime** during the upgrade process.
<!--SR:!2026-02-15,117,290-->
- What is the **default limit** of Elastic IP addresses per region per AWS account?;;There is a default limit of **five Elastic IPs per region per account**.
<!--SR:!2025-11-21,49,250-->
- When using Route 53 with an **A record to point directly to EC2 instance IPs**, what problem arises if an EC2 instance is terminated, especially considering the DNS TTL?;;Due to the **Time-To-Live (TTL)** of the A record (e.g., one hour), users may continue to try and connect to the IP address of the **terminated instance for the duration of the TTL**, leading to perceived application downtime for those users.
<!--SR:!2025-12-01,67,310-->
- When using Route 53 with an Elastic Load Balancer (ELB), what type of **Route 53 record** is required to point to the ELB, and why?;;An **Alias record** is required because a load balancer's IP address can change over time, and an A record would not be able to keep up with these dynamic changes.
<!--SR:!2025-11-08,47,290-->
- What is the main benefit of using **Reserved Instances** for cost savings in an Auto Scaling Group?;;Reserved Instances help **diminish costs** by reserving capacity for the **minimum (baseline) capacity** of your Auto Scaling Group, as you know those instances will be running consistently.
<!--SR:!2025-11-02,41,290-->
- How can **security groups** be configured to restrict traffic between services like ELB, EC2 instances, and RDS databases for enhanced security?;;Security groups can be configured to **reference each other**, allowing you to restrict traffic. For example, EC2 instances would only receive traffic from the ELB's security group, and ElastiCache or RDS would only receive traffic from the EC2 instances' security group.
<!--SR:!2025-11-20,58,310-->


















---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "Storage and Data Transfer Services Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/Storage_Data_Transfer
created_date:
  "2025-09-04"
---
# Storage and Data Transfer Services Flashcards
- What is a key differentiator of AWS DataSync regarding file attributes?;;AWS DataSync has the ability to **preserve file permissions and metadata**, including security, NFS POSIX, and SMB permissions, which is often a unique option for this requirement in exams.
<!--SR:!2025-10-31,32,270-->
- What protocols does AWS DataSync support when connecting to on-premises servers, and when is an agent required?;;DataSync connects to on-premises servers using **NFS, SMB, or HDFS protocols**. An agent is required to run **on-premises or on other clouds** for this connection, but no agent is needed for AWS-to-AWS data transfers.
<!--SR:!2025-10-08,15,210-->
- Describe the scheduling capability of AWS DataSync.;;DataSync replication tasks are **not continuous** but are **scheduled** to run hourly, daily, or weekly, meaning there is a lag in synchronization.
<!--SR:!2025-11-06,45,290-->
- What is the maximum data transfer speed for a single AWS DataSync agent, and can this be limited?;;One DataSync agent can transfer up to **10 gigabits of data per second**. Bandwidth limits can be set to avoid maxing out your network.
<!--SR:!2025-10-01,13,230-->
- How does AWS Snowcone integrate with AWS DataSync for data transfer challenges?;;The **AWS Snowcone device comes with the DataSync agent pre-installed**. This is useful when network capacity is insufficient to directly use DataSync, allowing data to be pulled by Snowcone, shipped to AWS, and then synchronized to AWS storage resources.
<!--SR:!2025-11-10,47,290-->
- What are the two main types of AWS Snowball Edge devices and their primary distinction?;;The two types are **Edge Storage Optimized (210 TB storage)** and **Edge Compute Optimized (28 TB storage)**. The difference lies in their storage capacity, indicating their primary purpose for either storage-heavy migration or edge computing.
<!--SR:!2025-10-17,22,250-->
- When is using an AWS Snowball device recommended for data migration?;;Snowball is recommended when transferring data takes **over a week** due to slow connections, limited connectivity/bandwidth, high network costs, or an unstable connection.
<!--SR:!2025-11-17,55,310-->
- Can data be imported directly into Amazon Glacier using AWS Snowball?;;No, **Snowball cannot import data directly into Glacier**. The data must first be imported into **Amazon S3**, and then an S3 lifecycle policy can be used to transition the objects into Amazon Glacier.
<!--SR:!2025-11-28,64,310-->
- What is the primary function of AWS Storage Gateway in a hybrid cloud architecture?;;AWS Storage Gateway acts as a **bridge between on-premises data and cloud data**, facilitating hybrid cloud solutions for disaster recovery, backups, cloud migration, and extending on-premises storage.
<!--SR:!2025-11-24,61,310-->
- Which protocols does the Amazon S3 File Gateway use to expose S3 buckets on-premises, and what is a key caching feature?;;The S3 File Gateway allows on-premises application servers to access S3 buckets using the **NFS or SMB protocol**. It **caches the most recently used data locally** for rapid access.
<!--SR:!2025-09-30,8,230-->
- How does the AWS Storage Gateway's Volume Gateway store and back up data?;;The Volume Gateway provides **block storage using the iSCSI protocol**, with volumes backed up by **Amazon EBS snapshots stored in Amazon S3**.
<!--SR:!2025-10-05,17,250-->
- What is the core purpose of AWS Transfer Family, and what three protocols does it support?;;AWS Transfer Family allows users to **send data in and out of Amazon S3 or EFS using FTP protocols** without using S3 APIs or EFS NFS. It supports **FTP (unencrypted), FTPS (encrypted), and SFTP (encrypted)**.
<!--SR:!2025-10-04,16,250-->
- What is the main characteristic of Amazon FSx as a service?;;Amazon FSx enables the launch of **third-party high-performance file systems** on AWS as a fully managed service, similar to how RDS manages databases for relational databases.
<!--SR:!2025-11-03,35,270-->
- What protocols does Amazon FSx for Windows File Server support, and what is a notable compatibility feature?;;FSx for Windows File Server supports the **SMB protocol** and Windows NTFS. A notable feature is that it can be **mounted on Linux EC2 instances**, despite its Windows-centric design.
<!--SR:!2025-10-04,16,250-->
- What is the primary use case for Amazon FSx for Lustre, and how does it integrate with Amazon S3?;;FSx for Lustre is designed for **High-Performance Computing (HPC), machine learning, and large-scale computing** workloads. It offers seamless integration with S3, allowing it to **read S3 as a file system** and write computation outputs back to S3.
<!--SR:!2025-10-19,31,270-->
- Differentiate between "scratch" and "persistent" file systems in Amazon FSx for Lustre regarding data durability.;;**Scratch file systems** provide temporary storage, and **data is not replicated**, meaning it can be lost on server failure. **Persistent file systems** are for long-term storage, with **data replicated within the same Availability Zone** to transparently replace files in minutes upon server failure.
<!--SR:!2025-11-18,56,310-->
- Which protocols does Amazon FSx for NetApp ONTAP support, and what unique data optimization feature does it offer compared to OpenZFS?;;FSx for NetApp ONTAP supports **NFS, SMB, and iSCSI protocols**. It offers **data de-duplication** (finding duplicates of files) in addition to compression, which FSx for OpenZFS does not.
<!--SR:!2025-10-15,27,290-->
- What is the primary protocol supported by Amazon FSx for OpenZFS, and does it support data de-duplication?;;Amazon FSx for OpenZFS is compatible **only with the NFS protocol**. While it supports snapshots and compression, it **does not support data de-duplication**.
<!--SR:!2025-10-07,19,250-->




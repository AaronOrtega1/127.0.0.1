---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "AWS Amazon S3 Intro and Advance Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Cards/AWS/NotebookLM/S3_Intro_Advance
created_date:
  "2025-09-03"
---
# AWS Amazon S3 Intro and Advance Flashcards
- What is unique about Amazon S3 bucket names?;;They must have a **globally-unique name** across all regions and AWS accounts.
<!--SR:!2025-09-08,4,270-->
- What is the durability level for all Amazon S3 storage classes?;;**11 nines** (99.999999999%) durability.
<!--SR:!2025-09-05,1,230-->
- What is the maximum object size that can be uploaded to Amazon S3?;;**5 terabytes** (5,000 gigabytes).
<!--SR:!2025-09-05,1,230-->
- When is multi-part upload mandatory for uploading files to Amazon S3?;;For files **greater than five gigabytes**.
<!--SR:!2025-09-08,4,270-->
- What is the Amazon S3 baseline performance for PUT/COPY/POST/DELETE requests per second per prefix?;;**3,500 requests per second per prefix**.
<!--SR:!2025-09-05,1,230-->
- What is the Amazon S3 baseline performance for GET/HEAD requests per second per prefix?;;**5,500 requests per second per prefix**.
<!--SR:!2025-09-05,1,230-->
- What version ID is assigned to files that are not versioned prior to enabling versioning on an S3 bucket?;;They will have the **version null**.
<!--SR:!2025-09-08,4,270-->
- Does suspending Amazon S3 bucket versioning delete previous object versions?;;No, suspending versioning **does not delete the previous version**; it is a safe operation.
<!--SR:!2025-09-08,4,270-->
- When S3 Replication is enabled, which objects are replicated by default?;;Only **new objects** are going to be replicated.
<!--SR:!2025-09-05,1,230-->
- Are delete operations with a version ID replicated from a source S3 bucket to a target bucket?;;No, **if it's a permanent deletion with the version ID, they are not replicated** to avoid malicious deletes.
<!--SR:!2025-09-05,1,230-->
- What is considered the most common way to implement security on an Amazon S3 Bucket now?;;To use **S3 Bucket policies**.
<!--SR:!2025-09-08,4,270-->
- What is the purpose of the "Block Public Access" settings for S3 buckets?;;It acts as an **extra layer of security** to prevent data leaks, ensuring the bucket will **never be public** even if a bucket policy attempts to make it so.
<!--SR:!2025-09-08,4,270-->
- Which Amazon S3 storage class is suitable for infrequently accessed data that requires rapid access when needed, commonly used for disaster recovery and backups, and incurs a retrieval cost?;;**S3 Infrequent Access (S3 Standard-IA)**.
<!--SR:!2025-09-08,4,270-->
- What is a significant risk associated with using the Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class?;;The data will be **lost if the single Availability Zone (AZ) is somewhat destroyed**.
<!--SR:!2025-09-08,4,270-->
- Which Amazon S3 Glacier storage class provides milliseconds retrieval?;;**Amazon S3 Glacier Instant Retrieval**.
<!--SR:!2025-09-05,1,230-->
- What is a key financial characteristic of the Amazon S3 Intelligent-Tiering storage class?;;It incurs a **small monthly monitoring fee**, but has **no retrieval charges**.
<!--SR:!2025-09-05,1,230-->
- What are the two primary types of actions that can be configured in S3 Lifecycle rules?;;**Transition actions** (to move objects to another storage class) and **Expiration actions** (to delete objects).
<!--SR:!2025-09-05,1,230-->
- In an S3 Requester Pays bucket, what specific costs does the requester pay for?;;The **data download (networking) costs** associated with accessing the objects. The requester must also be **authenticated**.
<!--SR:!2025-09-05,1,230-->
- What are the key characteristics of the S3 Express One Zone storage class?;;It offers **high performance** for a **single Availability Zone** and stores objects in a special **directory bucket**. It provides about **10 times the performance** of S3 Standard with **50% lower cost**.
<!--SR:!2025-09-07,3,250-->
- What is a primary use case for S3 Batch Operations?;;To perform **bulk operations** on existing S3 objects, such as **encrypting all unencrypted objects** in a bucket.
<!--SR:!2025-09-08,4,270-->


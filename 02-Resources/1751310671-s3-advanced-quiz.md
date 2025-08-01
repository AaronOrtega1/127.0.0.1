---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Advanced Quiz
tags:
  - resource
  - Cards/AWS
  - aws
  - cloud
  - certificate
created_date:
  2025-06-30
---
# S3 Advanced Quiz
- How can you be notified when there's an object uploaded to your S3 bucket?;;S3 Event Notifications.
<!--SR:!2025-08-09,24,270-->
- You have an S3 bucket that has S3 Versioning enabled. This S3 bucket has a lot of objects, and you would like to remove old object versions to reduce costs. What's the best approach to automate the deletion of these old object versions?;;S3 Lifecycle Rules - Expiration Actions.
<!--SR:!2025-08-09,25,270-->
- How can you automate the transition of S3 objects between their different tiers?;;S3 Lifecycle Rules.
<!--SR:!2025-08-04,19,250-->
- While you're uploading large files to an S3 bucket using Multi-part Upload, there are a lot of unfinished parts stored in the S3 bucket due to network issues. You are not using these unfinished parts and they cost you money. What is the best approach to remove these unfinished parts?;;Use an S3 Lifecycle Policy to automate old/unfinished parts deletion.
<!--SR:!2025-08-11,26,270-->
- You are looking to get recommendations for S3 Lifecycle Rules. How can you analyze the optimal number of days to move objects between different storage tiers?;;S3 Anlaytics.
<!--SR:!2025-08-10,25,270-->
- You are looking to build an index of your files in S3, using Amazon RDS PostgreSQL. To build this index, it is necessary to read the first 250 bytes of each object in S3, which contains some metadata about the content of the file itself. There are over 100,000 files in your S3 bucket, amounting to 50 TB of data. How can you build this index efficiently?;;Create an application that will traverse the S3 bucket, issue a Byte Range Fetch for the first 250 bytes, and store that information in RDS.
<!--SR:!2025-08-21,31,270-->
- You have a large dataset stored on-premises that you want to upload to the S3 bucket. The dataset is divided into 10 GB files. You have good bandwidth but your Internet connection isn't stable. What is the best way to upload this dataset to S3 and ensure that the process is fast and avoid any problems with the Internet connection?;;Use S3 Multi-part Upload and S3 Transfer Acceleration.
<!--SR:!2025-08-27,30,230-->
- A company is preparing for compliance and regulatory review on its infrastructure on AWS. Currently, they have their files stored on S3 buckets encrypted using S3 Default Encryption, which must be encrypted using KMS as required for compliance and regulatory review. Which S3 feature allows them to encrypt all files in their S3 buckets in the most efficient and cost-effective way?;;S3 Batch Operations.
<!--SR:!2025-09-15,56,310-->
- You have a 25 GB file that you're trying to upload to S3 but you're getting errors. What is a possible solution for this?;;Use Multi-part upload when uploading files larger than 5GB.
<!--SR:!2025-08-30,40,290-->


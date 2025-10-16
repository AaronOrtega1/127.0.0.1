---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Storage Extras Quiz
tags:
  - Knowledge
  - Training/AWS/SAA_Udemy
  - aws
  - cloud
  - certificate
created_date: 2025-07-03
---
#AWS Storage Extras Quiz
- You need to move hundreds of Terabytes into Amazon S3, then process the data using a fleet of EC2 instances. You have a 1 Gbit/s broadband. You would like to move the data faster and possibly processing it while in transit. What do you recommend?;;Use Snowball Edge since it comes with computing capabilities and allows you to pre-process the data while it's being moved into Snowball.
<!--SR:!2026-01-22,148,310-->
- You want to expose virtually infinite storage for your tape backups. You want to keep the same software you're using and want an iSCSI compatible interface. What do you use?;;AWS Storage Gateway - Tape Gateway.
<!--SR:!2026-01-27,124,250-->
- Your EC2 Windows Servers need to share some data by having a Network File System mounted on them which respects the Windows security mechanisms and has integration with Microsoft Active Directory. What do you recommend?;;Amazon FSx for Windows (File Server).
<!--SR:!2026-01-21,131,310-->
- You have hundreds of Terabytes that you want to migrate to AWS S3 as soon as possible. You tried to use your network bandwidth and it will take around 3 weeks to complete the upload process. What is the recommended approach to using in this situation?;;AWS Snowball Edge.
<!--SR:!2025-12-28,124,290-->
- You have a large dataset stored in S3 that you want to access from on-premises servers using the NFS or SMB protocol. Also, you want to authenticate access to these files through on-premises Microsoft AD. What would you use?;;AWS Storage Gateway - S3 File Gateway.
<!--SR:!2026-02-23,144,250-->
- You are planning to migrate your company's infrastructure from on-premises to AWS Cloud. You have an on-premises Microsoft Windows File Server that you want to migrate. What is the most suitable AWS service you can use?;;Amazon FSx for Windows (File Server).
<!--SR:!2026-05-25,228,310-->
- You would like to have a distributed POSIX compliant file system that will allow you to maximize the IOPS in order to perform some High-Performance Computing (HPC) and genomics computational research. This file system has to easily scale to millions of IOPS. What do you recommend?;;Amazon FSx for Lustre.
<!--SR:!2026-02-07,137,290-->
- Which deployment option in the FSx file system provides you with long-term storage that's replicated within AZ?;;Persistent File System.
<!--SR:!2025-12-30,112,270-->
- Which of the following protocols is NOT supported by AWS Transfer Family? (FTP, FTPS, TLS, SFTP);;Transport Layer Security (TLS).
<!--SR:!2026-05-22,241,330-->
- A company uses a lot of files and data which is stored in an FSx for Windows File Server storage on AWS. Those files are currently used by the resources hosted on AWS. There’s a requirement for those files to be accessed on-premises with low latency. Which AWS service can help you achieve this?;;FSx File Gateway.
<!--SR:!2025-12-10,58,230-->
- A Solutions Architect is working on planning the migration of a startup company from on-premises to AWS. Currently, their infrastructure consists of many servers and 30 TB of data hosted on a shared NFS storage. He has decided to use Amazon S3 to host the data. Which AWS service can efficiently migrate the data from on-premises to S3?;;AWS DataSync.
<!--SR:!2025-12-01,91,270-->
- Which AWS service is best suited to migrate a large amount of data from an S3 bucket to an EFS file system?;;AWS DataSync.
<!--SR:!2025-10-27,48,290-->
- A Machine Learning company is working on a set of datasets that are hosted on S3 buckets. The company decided to release those datasets to the public to be useful for others in their research, but they don’t want to configure the S3 bucket to be public. And those datasets should be exposed over the FTP protocol. What can they do to do the requirement efficiently and with the least effort?;;Use AWS Transfer Family, since it allows you to securely transfer files stored in S3 over the FTP protocol without exposing the S3 bucket to the public.
<!--SR:!2026-01-01,114,250-->
- Amazon FSx for NetApp ONTAP isn't compatible with the following protocol;;FTP.
<!--SR:!2025-10-25,68,290-->
- Which AWS service is best suited when migrating from an on-premises ZFS file system to AWS?;;Amazon FSx for OpenZFS.
<!--SR:!2026-01-04,80,270-->
- A company is running Amazon S3 File Gateway to host their data on S3 buckets and is able to mount them on-premises using SMB. The data currently is hosted on S3 Standard storage class and there is a requirement to reduce the costs for S3. So, they have decided to migrate some of those data to S3 Glacier. What is the most efficient way they can use to move the data to S3 Glacier automatically?;;Use S3 Lifecycle Policy.
<!--SR:!2026-01-28,128,290-->
- You have on-premises sensitive files and documents that you want to regularly synchronize to AWS to keep another copy. Which AWS service can help you with that?;;AWS DataSync.
<!--SR:!2026-03-11,181,310-->
- AWS DataSync doesn't supports the following locations...;;EBC.
<!--SR:!2025-10-21,5,190-->


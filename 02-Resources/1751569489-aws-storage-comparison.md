---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - AWS Storage Comparison
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Storage
created_date:
  2025-07-03
---
# AWS Storage Comparison

- [[1751042472-s3-overview|S3]]: Object storage.
- S3 Glacier: Object archival.
- [[1748622252-ebs-overview|EBS]] volumes: Network storage for one [[1748020848-ec2-basics|EC2]] instance at a time.
- Instance Storage: Physical storage for your EC2 instance (high IOPS).
- [[1748995060-amazon-elastic-file-system-(efs)|EFS]]: Network file system for Linux instances, POSIX file system.
- [[1751563857-amazon-fsx|FSx]] for Windows: Network file system for Windows servers.
- FSx for Lustre: High performance computing Linux file system.
- FSx for NetApp ONTAP: High OS compatibility.
- FSx for OpenZFS: Managed ZFS file system.
- [[1751566147-storage-gateway-overview|Storage Gateway]]: S3 & FSx File Gateway, Volume Gateway (cache & stored), Tape Gateway.
- [[1751568385-aws-transfer-family|Transfer Family]]: FTP, FTPS, SFTP interface on top of Amazon S3 or Amazon EFS.
- [[1751568813-aws-datasync|DataSync]]: Schedule data sync from on-premises to AWS, or AWS to AWS.
- Snowcone / [[1751562589-aws-snowball-overview|Snowball]] / Snowmobile: to move large amount of data to the cloud, physically.
- Database: for specific workloads, usually with indexing and querying.


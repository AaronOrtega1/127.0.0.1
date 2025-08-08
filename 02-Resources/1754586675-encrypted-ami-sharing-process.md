---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Encrypted AMI Sharing Process
tags:
  - resource
  - aws
  - certificate
  - cloud
  - AMI
  - KMS
created_date:
  "2025-08-07"
---
# Encrypted AMI Sharing Process
## Summary
- [[1748627575-ami-overview|AMI]] in Source Account is encrypted with [[1748995884-key-management-system|KMS]] Key from Source Account.
- Must modify the image attribute to add a Launch Permission which corresponds to the specified target AWS account.
- Must share the KMS Keys used to encrypted the snapshot the AMI references with the target account/IAM Role.
- The IAM Role/User in the target account must have the permissions to DescribeKey, ReEncrypt*, CreateGrant, Decrypt.
- When launching an EC2 instance from the AMI, optionally the target account can specify a new KMS key in its own account to re-encrypt the volumes.
![[1754586675-encrypted-ami-sharing-process.webp]]

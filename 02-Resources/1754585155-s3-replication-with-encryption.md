---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - S3 Replication with Encryption
tags:
  - resource
  - aws
  - certificate
  - cloud
  - KMS
  - S3
  - AWS_Security
created_date: 2025-08-07
---
# [[1751042472-s3-overview|S3]] Replication with Encryption
## Summary
### Considerations
- **Unencrypted objects and objects encrypted with SSE-S3 are replicated by default.**
- Objects encrypted with SSE-C (customer provided key) can be replicated.
- **For objects encrypted with SSE-KMS,** you need to enable the option
	- Specify which [[1748995884-key-management-system|KMS]] Key to encrypt the objects within the target bucket.
	- Adapt the KMS Key Policy for the target key.
	- An IAM Role with `kms:Decrypt` for the source KMS Key and  `kms:encrypt` for the target KMS Key.
	- You might get KMS throttling errors, in which case you can ask for a Service Quotas increase.
- **You can use multi-region AWS KMS Keys, but they are currently treated as independent keys by Amazon S3 (the object will still be decrypted and then encrypted).**

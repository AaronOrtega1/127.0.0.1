---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Key Management System
  - KMS
tags:
  - resource
  - aws
  - cloud
  - certificate
  - KMS
created_date: 2025/06/03
---
# Key Management System
## Summary
- 
## Key Ideas
### What is KMS?
- Service that manages encryption keys for us.
- Fully integrated with IAM for authorization
- Easy way to control access to your data.
- Able to audit KMS Key usage using [[1754422181-aws-cloudtrail|CloudTrail]]
- Seamlessly integrated into most AWS services ([[1748622252-ebs-overview|EBS]], [[1751042472-s3-overview|S3]], [[1750180189-rds-overview|RDS]], SSM...)
- **Never ever store your secrets in plaintext, especially in your code!**
	- KMS Key Encryption also available through [[1752081958-api|API]] calls (SDK, CLI).
	- Encrypted secrets can be stored in the code / environment variables.

### KMS Keys Types
- **Symmetric (AES-256 keys)**
	- Single encryption key that is used to encrypt and decrypt.
	- AWS services that are integrated with KMS use symmetric CMKs.
	- You never get access to the KMS Key unencrypted (must call KMS API to use).
- **Asymmetric (RSA & ECC key pairs**
	- Public (encrypt) and private key (decrypt) pair.
	- Used for encrypt/decrypt, or sign/verify operations.
	- The public key is downloadable, but can't access the private key unencrypted.
	- **Use case:** encryption outside of AWS by users who can't call the KMS API.
- **Types of KMS Keys:**
	- AWS Owned Keys (free):SSE-S3, SSE-SQS, SSE-DDB (default key).
	- AWS Managed Key: free (aws/service-name)
	- Customer managed keys created in KMS: **$1/month.**
	- Customer managed keys imported: **$1/month.**
	- + pay for API call to KMS ($0.03/10,000 calls).
- **Automatic Key rotation:**
	- AWS-managed KMS Key: automatic every 1 year.
	- Customer-managed KMS Key: (must be enabled) automatic & on-demand.
	- Imported KMS Key: only manual rotation possible using alias.

### Key Policies
- Control access to KMS keys, "similar" to [[1751042472-s3-overview|S3]] bucket policies.
- Difference: you cannot control access without them.
- **Default KMS Key Policy:**
	- Created if you don't provide a specific KMS Key Policy.
	- Complete access to the key to the root user = entire AWS account.
- **Custom KMS Key Policy:**
	- Define users, roles that can access the KMS key.
	- Define who can administer the key.
	- Useful for cross-account access of your KMS key.



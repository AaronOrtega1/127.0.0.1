---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ebs Encryption
tags:
  - Knowledge
  - EBS
  - cloud
  - aws
  - certificate
created_date: 2025/06/03
---
# EBS Encryption
## Summary
- 
## Key Ideas
### What you get when you encrypt an [[1748622252-ebs-overview|EBS volume]]?
- Data at rest is encrypted inside the volume.
- All the data in flight moving between the instance and the volume is encrypted.
- All snapshots are encrypted.
- All volumes created from the snapshot.
### How does it work?
- Encryption and decryption are handled transparently.
- Encryption has a **minimal impact** on latency.
- Leverages keys from [[1748995884-key-management-system|KMS]] (AES-256).
- Copying an unencrypted snapshot allows encryption.
### Encrypt and unencrypted EBS volumes
1. Create an [[1748626491-ebs-snapshot|Ebs Snapshot]] of the volume
2. Encrypt the EBS snapshot (using copy)
3. Create new EBS volume from the snapshot (the volume will also be encrypted)
4. Attach the encrypted volume to the original instance.
## Related Links
- [[]]
## Source
[text](url) 
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Glacier Vault Lock and S3 Object Lock
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-07-01
---
# Glacier Vault Lock and S3 Object Lock
## Summary
- 
## Key Ideas
### Glacier Vault Lock
- Adopt a WORM (Write Once Read Many) model.
- Create a Vault Lock Policy.
- Lock the policy for future edits (can no longer be changed or deleted).
- Helpful for compliance and data retention.
![[1751391438-glacier-vault-lock-and-s3-object-lock.webp]]

### Object Lock
- Versioning must be enabled.
- Adopt a WORM (Write Once Read Many) model.
- Block an object version deletion for a specified amount of time.
- **Retention mode - Compliance:**
  - Object versions can't be overwritten or deleted by any user, **including the root user**.
  - Objects retention modes can't be changed, and retention periods can't be shortened.
- **Retention mode - Governance:**
  - Most users can't overwrite or delete an object version or alter its lock settings.
  - Some users have special permissions to change the retention or delete the object.
- **Retention Period:** protect the object for a fixed period, it can be extended.
- **Legal Hold:**
  - Protect the object indefinitely, independent form retention period.
  - Can be freely placed and removed using the **s3:PutObjectLegalHold** IAM permission.




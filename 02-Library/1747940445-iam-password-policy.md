---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Iam Password Policy
tags:
  - Knowledge
  - aws
  - IAM
  - cloud
created_date: 2025/05/22
---
# IAM Password Policy
## Summary
- Used to protect your IAM groups and users/
- MFA it's a good practice to protect the Root Account and IAM users.
## Key Ideas
### What Are Password Policies Used For?
- They are used to protect your IAM groups and users
### In Password Policies You Can Setup:
- A minimum password length.
- Require specific character types:
	- Including uppercase letters.
	- Lowercase letters.
	- Numbers.
	- Non-alphanumeric characters.
- Allow IAM users to change their own passwords.
- Require users to change their password after some time (password expiration).
- Prevent password re-use.
![[1747940445-iam-password-policy.webp]]
### Multi Factor Authentication - MFA
- It's a good practice to protect the Root Accounts and IAM users.
#### Where to configure it?
- In the drop down menu of the user account select **security credentials**.
![[1747940445-iam-password-policy-1.webp]]
- There you can assign one MFA:
![[1747940445-iam-password-policy-2.webp]]
#### MFA devices options in AWS
- Virtual MFA devices:
	- Google Authenticator.
- Universal 2nd Factor (U2F).
- Hardware Key Fob MFA Device.
- Hardware Key Fob MFA Device for AWS GovCloud (US).
## Related Links
- [[1747860485-create-iam-users-and-groups|Create Iam Users And Groups]]
## Source
[text](url) 
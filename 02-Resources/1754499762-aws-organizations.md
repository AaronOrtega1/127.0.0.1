---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - AWS Organizations
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Organizations
created_date:
  2025-08-06
---
# AWS Organizations
## Summary
- 

## Key Ideas
### What is AWS Organizations?
- Global service.
- Allows to manage multiple AWS accounts.
- The main account is the **management account**.
- Other accounts are **member accounts**.
- Member accounts can only be part of one organization.
- Consolidated Billing across all accounts - single payment method.
- Pricing benefits from aggregated usage (volume discount for [[1748020848-ec2-basics|EC2]], [[1751042472-s3-overview|S3]]...)
- **Shared reserved instances and saving plans discounts across accounts.**
- API is available to automate AWS account creation.
![[1754499762-aws-organizations.webp]]

- **Advantages**
  - Multi Account vs One Account Multi VPC.
  - Use tagging standards for billing purposes.
  - Enable [[1754422181-aws-cloudtrail|CloudTrail]] on all accounts to central [[1751042472-s3-overview|S3]] account.
  - Send [[1753150030-cloudwatch-cheat-sheet|CloudWatch]] Logs to central logging account.
  - Establish Cross Account Roles for Admin purposes.
- **Security: Service Control Policies (SCP)**
  - [[1747869134-iam-policies|IAM]] policies applied to OU or accounts to restricted Users and Roles.
  - They do not apply to the management account (full admin power).
  - Must have an explicit allow from the rool through each OU in the direct path to the target account (does not allow anything by default - like IAM).
![[1754499762-aws-organizations-1.webp]]




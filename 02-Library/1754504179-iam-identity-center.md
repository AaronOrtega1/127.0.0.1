---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - IAM Identity Center
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - IAM
created_date:
  2025-08-06
---
# IAM Identity Center
## Summary
- One login (single sing-on) for all your:
  - **AWS accounts in [[1754499762-aws-organizations|AWS Organizations]].**
  - Business cloud applications (e.g., Salesforce, Box, Microsoft 365,...)
  - SAML2.0-enables applications.
  - EC2 Windows Instances.
- Identity providers:
  - Built-in Identity store in [[1747869134-iam-policies|IAM]] Identity Center.
  - 3rd party: Active Directory (AD), OneLogin, Okta...

### Fine-grained Permissions and Assignments
- **Multi-Account Permissions**
  - Manage access across AWS accounts in your AWS Organization.
  - Permission Sets - a collection of one or more IAM Policies assigned to users and groups to define AWS access.
- **Application Assignments**
  - SSO access to many SAML 2.0 business applications (Salesforce, Box, Microsoft 365,...)
  - Provide required URLs, certificates, and metadata.
- **Attribute-Based Access Control (ABAC)**
  - Fine-grained permissions based on users attributes stored in IAM Identity Center Identity Store.
  - **Example:** cost center, title, locale,...
  - **Use case:** Define permissions once, then modify AWS access by changing the attributes.




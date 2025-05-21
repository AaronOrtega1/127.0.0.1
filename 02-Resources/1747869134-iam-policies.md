---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Iam Policies
tags:
  - resource
  - cloud
  - aws
  - certificate
  - IAM
created_date: 2025/05/21
---
# IAM Policies
## Summary
- 
## Key Ideas
### Policies inheritance
- ![[1747869134-iam-policies.webp]]
- Each group has its policies, a user can be in many groups therefore inherit policies from different groups, also a user can have inline policies, that apply only to them.
### Policies Structure
- Consist of a JSON with:
	- **Version**.
	- **Id**.
	- **Statement**.
		- **Sid**: an identifier for the statement (optional).
		- **Effect**: whether the statement allows or denies access. (Allow, Deny)
		- **Principal**: account/user/role to which this policy applied to.
		- **Action**: list of actions this policy allows or denies.
		- **Resource**: list of resources to which the actions applied to.
		- **Condition**: when this policy is in effect (optional).
## Related Links
- [[]]

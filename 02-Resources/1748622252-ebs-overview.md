---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - EBS Overview
  - EBS
tags:
  - resource
  - cloud
  - aws
  - certificate
  - EBS
created_date: 2025/05/30
---
# EBS Overview
## Summary
- 
## Key Ideas
### What's and EBS Volume?
- An **Elastic Block Store Volume** is a network drive you can attach to your instance.
- It allows your instances to persist data, even after termination.
- Can only be mounted to one instance at the time (at the Certified Cloud Practitioner level).
- Bound to specific AZ, to move it you first need to [[1748626491-ebs-snapshot|snapshot it]].
![[1748622252-ebs-overview.webp]]
### Delete on termination attribute.
- By default, the root EBS volume is deleted when an EC2 instance is terminated and any other attached EBS volume is not deleted.
- **Use case**: preserve root volume when instance is terminated.
## Related Links
- [[]]
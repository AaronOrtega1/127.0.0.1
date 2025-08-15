---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - NAT Instance
tags:
  - resource
  - aws
  - certificate
  - cloud
created_date: 2025-08-14
---
# NAT Instance (**outdated**, but still at the exam)
## Summary
- Allows [[1748020848-ec2-basics|EC2]] instances in private subnets to connect to the internet.
- Must be launched in a public subnet.
- Must disable EC2 setting: **Source/destination check.**
- Must have Elastic IP attached to it.
- Route Tables must be configured to route traffic from private subnets to the NAT Instance.
![[1755194320-nat-instance.webp]]

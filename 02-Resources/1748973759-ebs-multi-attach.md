---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ebs Multi Attach
tags:
  - resource
  - aws
  - cloud
  - certificate
  - EBS
created_date: 2025/06/03
---
# EBS Multi Attach
## Summary
## Key Ideas
- Attach the EBS volume to multiple [[1748020848-ec2-basics|EC2]] instances in the same [[1747858683-aws-availability-zone|AZ]].
- Each instance has full read & write permissions to the high-performance volume.
- Up to 16 EC2 Instances at a time.
- Must use a file system that's cluster-aware (not XFS, EXT4, etc...)
### Use case
- Achieve higher application availability in clustered Linux applications (ex: Teradata)
- Applications must manage concurrent write operations.
## Related Links
- [[]]
## Source
[text](url) 
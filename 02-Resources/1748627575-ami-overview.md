---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ami Overview
tags:
  - resource
  - aws
  - cloud
  - certificate
  - AMI
created_date: 2025/05/30
---
# AMI Overview
## Summary
- 
## Key Ideas
### What are AMI?
- **Amazon Machine Image**, they are customization of and EC2 instance.
	- You add your own software, config, OS, monitoring...
	- Faster boot/configuration time because all your software is pre-packaged.
- Are built for specific [[1747858112-aws-regions|regions]] (can be copied across regions).
- You can launch an [[1748020848-ec2-basics|EC2]] instances from:
	- **A Public AMI**: AWS provided
	- **Your own AMI**: Make and maintain your own AMI.
	- **AWS Marketplace AMI**.
### AMI Process
- Start an EC2 instance and customize it.
- Stop the instance (for data integrity).
- Build an AMI - this will also create [[1748626491-ebs-snapshot|EBS snapshots]].
- Launch instances from other AMIs.
## Related Links
- [[1748634914-how-to-create-an-ami|How To Create An AMI]]
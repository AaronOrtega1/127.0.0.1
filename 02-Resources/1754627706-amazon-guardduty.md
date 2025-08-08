---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - GuardDuty
tags:
  - resource
  - aws
  - certificate
  - cloud
  - GuardDuty
created_date:
  "2025-08-07"
---
# Amazon GuardDuty
## Summary

## Key Ideas
- Intelligent Threat discovery to protect your AWS Account.
- Uses [[1745455093-types-of-machine-learning|Machine Learning]] discovery to protect your AWS account.
- One click to enable (30 days trial), no need to install software.
- Input data includes:
	- **[[1754422181-aws-cloudtrail|CloudTrail]] Event Logs** - unusual API calls, unauthorized deployments.
		- **CloudTrail Management Events** - create [[1753149747-vpc-cheat-sheet|VPC]] subnet, create trail...
		- **ClouTrail [[1751042472-s3-overview|S3]] Data Events** - get object, list objects, delete object,...
	- **VPC Flow Logs** - unusual internal traffic, unusual IP address.
	- **DNS Logs** - compromised [[1748020848-ec2-basics|EC2]] instances sending encoded data within [[1750461147-what-is-a-dns?|DNS]] queries.
	- **Optional Features** - [[1752079693-amazon-eks|EKS]] Audit Logs, [[1750180189-rds-overview|RDS]] & [[1750265113-amazon-aurora|Aurora]], [[1748622252-ebs-overview|EBS]], [[1752687705-lambda-overview|Lambda]], S3 Data Events...
- Can setup [[1754417774-amazon-eventbridge|EventBridge]] rules to be notified in case of findings.
- EventBridge rules can target AWS Lambda or [[1751991519-amazon-simple-notification-system-sns|SNS]].
- **Can protect against CryptoCurrency attacks (has a dedicated "finding" for it).**

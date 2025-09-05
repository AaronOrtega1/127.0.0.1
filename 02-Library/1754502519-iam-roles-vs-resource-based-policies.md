---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - IAM Roles vs Resource Based Policies
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - IAM
created_date:
  2025-08-06
---
# IAM Roles vs Resource Based Policies
## Summary
- **When you assume a role (user, application or service), you give up your original permissions and take the permissions assigned to the role.**
- When using a resource-based policy, the principal doesn't have to give up his permissions.
- **Example:** User in account A needs to scan a [[1752777935-amazon-dynamodb|DynamoDB]] table in account A and dump it in an [[1751042472-s3-overview|S3]] bucket in Account B.
- Supported by: Amazon S3 buckets, [[1751991519-amazon-simple-notification-system-sns|SNS]] topics, [[1751940872-amazon-sqs-overview|SQS]] queues, etc...

### [[1754417774-amazon-eventbridge|Amazon EventBridge]] - Security
- When a rule runs, it needs permissions on the target.
- Resource-based policy: [[1752687705-lambda-overview|Lambda]], SNS, SQS, S3 buckets, [[1752812933-api-gateway-overview|API Gateway]]...
- [[1747869134-iam-policies|IAM]] role: [[1751996367-amazon-kinesis-data-streams|Amazon Kinesis Data Streams]], [[1748020848-ec2-basics|EC2]], [[1749842655-auto-scaling-group-(asg)-overview|Auto Scaling Group (ASG)]], Systems Manager Run Command, [[1752018964-amazon-ecs|ECS]] task...
![[1754502519-iam-roles-vs-resource-based-policies.webp|400]]

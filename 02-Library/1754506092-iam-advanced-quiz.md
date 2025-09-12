---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - IAM Advanced Quiz
tags:
  - Knowledge
  - Training/AWS/SAA_Udemy
  - aws
  - cloud
  - certificate
created_date:
  2025-08-06
---
# IAM Advanced Quiz
- You have strong regulatory requirements to only allow fully internally audited AWS services in production. You still want to allow your teams to experiment in a development environment while services are being audited. How can you best set this up?;;Create an AWS Organization and create two Prod and Dev OUs, then apply an SCP on the Prod OU.
<!--SR:!2025-10-12,46,290-->
- ![[1754506092-iam-advanced-quiz.webp]];;You should change the resource to `arn:aws:s3:::static-files-bucket-xxx/*` because this is and object-level permission.
<!--SR:!2025-10-25,60,310-->
- You have 5 AWS Accounts that you manage using AWS Organizations. You want to restrict access to certain AWS services in each account. How should you do that?;;Using AWS Organizations SCP.
<!--SR:!2025-09-20,29,270-->
- Which of the following IAM condition key you can use only to allow API calls to a specified AWS region?;;`aws:RequestedRegion`.
<!--SR:!2025-09-19,7,210-->
- When configuring permissions for EventBridge to configure a Lambda function as a target you should use ... but when you want to configure a Kinesis Data Streams as a target you should use ...;;Resource-Based Policy, Identity-based Policy
<!--SR:!2025-10-17,36,250-->
















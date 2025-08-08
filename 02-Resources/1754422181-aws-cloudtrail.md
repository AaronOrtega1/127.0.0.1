---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS CloudTrail
  - CloudTrail
tags:
  - resource
  - aws
  - cloud
  - certificate
  - CloudTrail
created_date: 2025-08-05
---
# AWS CloudTrail
## Summary
### What does CloudTrail do?
- **Provides governance, compliance and audit for your AWS account.**
- Enabled by default!
- Get **an history of events/API calls made within your AWS account** by:
  - Console.
  - SDK.
  - CLI.
  - AWS Service.
- Can put logs from CloudTrail into [[1754416080-cloudwatch-agent-and-cloudwatch-logs-agent|CloudWatch Logs]] or [[1751042472-s3-overview|S3]].
- **A trail can be applied to All Regions (default) or a single Region.**
- If a resource is deleted in AWS, investigate CloudTrail first!

### Events
- **Management Events:**
  - Operations that are perfomed on resources in your AWS account.
  - **By default, trails are configured to log management events.**
  - Can separate **Read Events** from **Write Events.**
- **Data Events:**
  - **By default, data events are not logged (because high volume operations).**
- **Insights Events:**
  - Enable **Detect unusual activity** in your account.
  - Analyzes normal management events to create a baseline and then **continuously analyzes write events to detect unusual patterns.**

#### Retention
- Events are stored for 90 days.
- To keep events beyond this period, log them to [[1751042472-s3-overview|S3]] and use [[1753469282-amazon-athena|Athena]].



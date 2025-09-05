---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudWatch Logs
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - CloudWatchLogs
created_date:
  2025-08-05
---
# CloudWatch Logs
## Summary
- 

## Key Ideas
### What is CloudWatch Logs?
- The perfect place to save application logs.
- **Log groups:** arbitrary name, usually representing an application.
- **Log stream:** instances within application/log files/containers.
- Can define log expiration policies (never expire, 1 day to 10 years...)
- **CloudWatch Logs can send logs to:**
  - Amazon [[1751042472-s3-overview|S3]] (exports)
  - [[1751996367-amazon-kinesis-data-streams|Amazon Kinesis Data Streams]]
  - [[1752004131-amazon-data-firehose|Amazon Data Firehose]]
  - [[1752687705-lambda-overview|AWS Lambda]]
  - [[1753974716-amazon-opensearch-service|OpenSearch]]
- Logs are encrypted by default.
- Can setup KMS-based encryption with your own keys.

### Sources
- SDK, CloudWatch Logs Agent, CloudWatch Unified Agent.
- [[1750884621-elastic-beanstalk|Elastic Beanstalk]]: Collection of logs from application.
- [[1752018964-amazon-ecs|ECS]]: Collection from containers.
- [[1752687705-lambda-overview|AWS Lambda]]: Collection from function logs.
- [[1753149747-vpc-cheat-sheet|VPC]] Flow Logs: VPC specific logs.
- [[1752812933-api-gateway-overview|API Gateway]]
- CloudTrail based on filter.
- [[1750461685-route-53-overview|Route 53]]: Log DNS queries.

### Insights
- Search and analyze log data stored in CloudWatch Logs.
- Provides a purpose-built query language
  - Automatically discovers fields from AWS services and JSON logs events.
  - Fetch desired event fields, filter based on conditions, calculate aggregate statistics, sort events, limit number of events...
  - Can save queries and add them to CloudWatch Dashboards.
- Can query multiple Log Groups in different AWS accounts.
- It's a query engine, not a real-time engine.

### S3 Export
- Log data can take **up to 12 hours** to become available for export.
- The API call is **CreateExportTaks.**
- Not near-real time or real-time...use Logs Subscriptions instead.

#### Logs Subscriptions
- Get a real-time log events from CloudWatch Logs fro processing and analysis.
- Send to Kinesis Data Streams, Kinesis Data Firehose, or Lambda.
- **Subscriptions Filter** - filter which logs are events delivered to your destination.
![[1754413977-cloudwatch-logs.webp]]

### Logs Aggregation Multi-Account & Multi Region
![[1754413977-cloudwatch-logs-1.webp]]




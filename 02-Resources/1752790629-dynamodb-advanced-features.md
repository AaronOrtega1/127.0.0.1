---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - DynamoDB Advanced Features
tags:
  - resource
  - aws
  - cloud
  - certificate
  - DynamoDB
  - NoSQL
created_date:
  2025-07-17
---
# DynamoDB Advanced Features
## Summary
- 

## Key Ideas
### DynamoDB Accelerator (DAX)
- Fully-managed, [[1749053894-scalability-and-high-availability|high availability]], seamless in memory cache.
- Help solve read congestion by caching.
- *Microseconds* latency for cached data.
- Doesn't require application logic modification (compatible with existing DynamoDB APIs).
- 5 minutes TTL for cache (default).
![[1752790629-dynamodb-advanced-features.webp|400]]

#### DynamoDB Accelerator vs [[1750285055-elasticache-overview|ElastiCache]]
![[1752790629-dynamodb-advanced-features-1.webp]]

### Stream Processing
- Ordered stream of item-level modifications (create/update/delete) in a table.
- **Use cases:**
  - React to changes in real-time (welcome email to users).
  - Real-time usage analytics.
  - Insert into derivative tables.
  - Implement cross-region replication.
  - Invoke AWS Lambda on changes to DynamoDB table.

#### DynamoDB Streams vs [[1751996367-amazon-kinesis-data-streams|Kinesis Data Streams]]
- **DynamoDB Streams**
  - 24 hours retention.
  - Limited # of consumers.
  - Process using AWS [[1752687705-lambda-overview|Lambda Triggers]], or DynamoDB Stream Kinesis adapter.
![[1752790629-dynamodb-advanced-features-2.webp]]
- **Kinesis Data Stream (newer)**
  - 1 year retention
  - High # of consumers
  - Process using AWS Lambda, Kinesis Data analytics, [[1752004131-amazon-data-firehose|Kinesis Data Firehose]], AWS Glue Streaming ETL...

### Global Tables
- Tables accessible with **low latency** in multple-regions.
- Active-Active replication.
- Application can *READ* and *WRITE* to the table in any region.
- Must enable DynamoDB Streams as a pre-requisite.

### Time To Live (TTL)
- Automatically delete items after an expiry timestamp.
- Epoch timestamp.
- **Use cases:** reduce stored data by keeping only current items, adhere to regulatory obligations, web session handling...

### Backups For disaster recovery
- Continuous backups using point-in-time recovery (PITR)
  - Optionally enabled for the last 35 days.
  - point-in-time recovery to any time within the backup window.
  - The recovery process creates a new table.
- On-demand backups
  - Full backups for long-term retention, until explicitly deleted.
  - Doesn't affect performance or latency.
  - Can be configured and managed in AWS Backups (enables cross-region copy).
  - The recovery process creates a new table.

### Integration with [[1751042472-s3-overview|S3]]
- **Export to S3 (must enable PITR)** 
  - Works for any point-in-time in the last 35 days.
  - Doesn't affect the read capacity of your table.
  - Perform data analysis on top of DynamoDB.
  - Retain snapshots for auditing.
  - ETL on top of S3 data befor importing back into DynamoDB.
  - Export in DynamoDB JSON or ION format.
- **Import from S3**
  - Import CSV, DynamoDB JSON or ION format
  - Doesn't consume any write capacity
  - Creates a new table
  - Import errors are logged in [[1752812834-cloudwatch|CloudWatch]] logs.











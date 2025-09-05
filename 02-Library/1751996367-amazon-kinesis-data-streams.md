---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Kinesis Data Streams
  - Amazon Kinesis Data Streams
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Kinesis
created_date:
  2025-07-08
---
# Amazon Kinesis Data Streams
## Summary
- 

## Key Ideas
### What's used for?
- Collect and store streaming data in real-time.
![[1751996367-amazon-kinesis-data-streams.webp]]

- Retention up to 365 days.
- Ability to reprocess (replay) data by consumers.
- Data can't be deleted from Kinesis (until it expires).
- Data up to 1MB (typical use case is lot of "small" real-time data).
- Data ordering guarantee for data with the same "Partition ID".
- At-rest KMS encryption, in-flight HTTPS encryption.
- Kinesis Producer Library (KPL) to write an optimized producer application.
- Kinesis Client Library (KCL) to write an optimized consumer application.

### Capacity Mode
- **Provisioned mode:**
  - Choose number of shards.
  - Each shard gets 1MB/s in (or 1000 records per second).
  - Each shard gets 2MB/s out.
  - Scale manually to increase or decrease the number of shards.
  - You pay per shard provisioned per hour.
- **On-demand mode:**
  - No need to provision or manage the capacity.
  - Default capacity provisioned (4MB/s in or 4000 records per second).
  - Scale automatically based on observed throughput peak during the last 30 days.
  - Pay per stream per hour & data in/out per GB.



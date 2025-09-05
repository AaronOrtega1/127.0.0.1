---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon Neptune
  - Neptune
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Neptune
  - AmazonDB
created_date:
  2025-07-24
---
# Amazon Neptune
## Summary
- 

## Key Ideas
### What is Neptune?
- Fully managed **graph** database.
- Highly available across 3 AZ, with up to 15 read replicas.
- Build and run applications working with highly connected datasets - optimized for these complex and hard queries.
- Can store up to billions of relations and query the graph with milliseconds latency.
- Highly available with replications across multiple AZs.
- Great for knowledge graphs (Wikipedia), fraud detection, recommendation engines, social networking.

### Neptune - Streams
- **Real-time ordered** sequence of every change to your graph data.
- Changes are available immediately after writing.
- **No duplicates, strict order.**
- Streams data is accessible in an **HTTP REST API.**
- Use cases:
  - Send notifications when certain changes are made.
  - Maintain your graph data synchronized in another data store (e.g., [[1751042472-s3-overview|S3]], OpenSearch, [[1750285055-elasticache-overview|ElastiCache]]).
  - Replicate data across regions in Neptune.



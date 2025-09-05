---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - SQS FIFO Queue
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - SQS
created_date:
  2025-07-08
---
# SQS FIFO Queue
## Summary
- First In First Out (ordering of messages in the queue).
- Limited throughput: 300 msg/s without batching, 3000 msg/s with batching.
- Exactly-once send capability (by removing duplicates using Deduplication ID).
- Messages are processed in order by the consumer.
- **Ordering** by Message Group ID (all messages in the same group are ordered) - mandatory parameter.


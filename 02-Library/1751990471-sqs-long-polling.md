---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - SQS Long Polling
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - SQS
created_date:
  2025-07-08
---
# SQS Long Polling
- When a consumer requests messages from the queue, it can optionally "wait" for message to arrive if there are note in the queue.
- This decreases the number of API calls made to SQS while increasing the efficiency and reducing latency of your application.
- Can be between 1 to 20 seconds. (20 sec preferable).
- This is preferable to Short Polling.
- Can be enabled at the queue level or at the API level using **WaitTimeSeconds**.


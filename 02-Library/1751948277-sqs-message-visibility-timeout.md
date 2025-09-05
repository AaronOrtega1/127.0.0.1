---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - SQS Message Visibility Timeout
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - SQS
created_date:
  2025-07-07
---
# SQS Message Visibility Timeout
## Summary
- After a message is polled by a consumer, it becomes **invisible** to other consumers.
- By default is **30 seconds.**
- That means the message has 30 seconds to be processed.
- After the message visibility timeout is over, the message is **"visible"** in SQS.
![[1751948277-sqs-message-visibility-timeout.webp]]

- A consumer could call the **ChangeMessageVisibility** API to get more time.
- If visibility timeout is high (hours), and consumer crashes, re-processing will take time.
- If visibility timeout is too low (seconds), we may get duplicates.



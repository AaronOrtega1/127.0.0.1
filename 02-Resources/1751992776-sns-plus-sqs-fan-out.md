---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - SNS + SQS Fan Out
tags:
  - resource
  - aws
  - cloud
  - certificate
  - SNS
  - SQS
created_date:
  2025-07-08
---
# SNS + SQS Fan Out
## Summary
- 

## Key Ideas
### How does it work?
- Push once in [[1751991519-amazon-simple-notification-system-sns|SNS]], receive in all [[1751940872-amazon-sqs-overview|SQS]] queues that are subscribers.
- Fully decoupled, no data loss.
- SQS allows for: data persistence, delayed processing and retries of work.
- Ability to add more SQS subscribers over time.
- Make sure your SQS queue **access policy** allows for SNS to write.
- Cross-Region Delivery: works with SQS Queues in other regions.
![[1751992776-sns-plus-sqs-fan-out.webp]]

### Message Filtering
- JSON policy used to filter messages sent to SNS topic's subscriptions.
- If a subscription doesn't have filter policy, it receives every message.
![[1751992776-sns-plus-sqs-fan-out-1.webp]]



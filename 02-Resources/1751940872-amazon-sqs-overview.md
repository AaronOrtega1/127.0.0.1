---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - SQS
tags:
  - resource
  - aws
  - cloud
  - certificate
  - SQS
created_date:
  2025-07-07
---
# Amazon SQS
## Summary
- 

## Key Ideas
### What's a queue?
![[1751940872-amazon-sqs-overview.webp]]

### Standard Queue
- Fully managed service, used to **decouple applications.**
- Attributes:
  - Unlimited throughput, unlimited number of messaged in queue.
  - Default retention of messages: 4 days, maximum of 14 days.
  - Low latency (< 10 ms on publish and receive).
  - Limitation of 256KB per message sent.
- Can have duplicate message (at least once delivery, occasionally).
- Can have out of order messages (best effort ordering).

### Producing Messages
- Produced to SQS using the SDK (SendMessage API)
- The message is **persisted** in SQS until a consumer deletes it.
- Example send an order to be processed.
  - Order id
  - Customer id
  - Any attributes you want
![[1751940872-amazon-sqs-overview-1.webp]]

### Consuming Messages
- Consumers (running on [[1748020848-ec2-basics|EC2]] instances, servers, or AWS Lambda)...
- Poll SQS for messages (receive up to 10 message at a time).
- Process the messages (example: insert the message into an [[1750180189-rds-overview|RDS]] database).
- Delete the messages using the DeleteMessage API.
![[1751940872-amazon-sqs-overview-2.webp]]

### Multiple EC2 Instances Consumers
- Consumers receive and process messages in parallel.
- At least once delivery.
- Best-effort message ordering.
- Consumers delete messages after processing them.
- We can scale consumers horizontally to improve throughput of processing.
![[1751940872-amazon-sqs-overview-3.webp|500]]

### SQS with Auto Scaling Group ([[1749842655-auto-scaling-group-(asg)-overview|ASG]])
![[1751940872-amazon-sqs-overview-4.webp]]

### Decouple between application tiers.
![[1751940872-amazon-sqs-overview-5.webp]]

### Security
- **Encryption**:
  - In-flight encryption using HTTPS API.
  - At-rest encryption using [[1748995884-key-management-system|KMS]] keys.
  - Client-side encryption if the client wants to perform encryption/decryption itself.
- **Access Controls:** IAM policies to regulate access to the SQS API.
- **SQS Access Policies** (similar to [[1751042472-s3-overview|S3]] bucket policies)
  - Useful for cross-account access to SQS queues.
  - Useful for allowing other services (SNS, S3...) to write to an SQS queue.


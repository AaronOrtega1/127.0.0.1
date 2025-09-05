---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon Simple Notification System (SNS)
  - SNS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - SNS
created_date:
  2025-07-08
---
# Amazon Simple Notification System (SNS)
## Summary
- 

## Key Ideas
### What if you want to send one message to many receivers?
![[1751991519-amazon-simple-notification-system-sns.webp]]

- Instead of creating the integration each time it's easier if you have a pub/sub system, since you only have to publish the message to the topic and then the subscribers will listen to the notification in the topic.
- Each subscriber to the topic will get all the messages (there is a feature to filter messages).
- Up to 12,500,000 subs per topic.
- 100,000 topics limit.

### Integrates with a lot of AWS services.
- Many AWS service can send data directly to SNS for notifications.
![[1751991519-amazon-simple-notification-system-sns-1.webp]]

### How to publish
- Topic Publish (using the SDK).
  - Create a topic.
  - Create a subscription (or many).
  - Publish to the topic.

- Direct Publish (for mobile apps SDK).
  - Create a platform application.
  - Create a platform endpoint.
  - Publish to the endpoint.

### Security
- **Encryption**:
  - In-flight encryption using HTTPS API.
  - At-rest encryption using [[1748995884-key-management-system|KMS]] keys.
  - Client-side encryption if the client wants to perform encryption/decryption itself.
- **Access Controls:** IAM policies to regulate access to the SNS API.
- **SNS Access Policies** (similar to [[1751042472-s3-overview|S3]] bucket policies)
  - Useful for cross-account access to SNS topics.
  - Useful for allowing other services (S3...) to write to an SNS queue.




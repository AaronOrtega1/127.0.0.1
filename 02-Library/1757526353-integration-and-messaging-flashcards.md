---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "Integration and Messaging Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/Integration_Messaging
created_date:
  "2025-09-10"
---
# Integration and Messaging Flashcards
- What is the default and maximum message retention period for an Amazon SQS Standard queue?;; Default: 4 days. Maximum: 14 days.
<!--SR:!2025-09-29,7,230-->
- What is the maximum message size for a single message sent to an Amazon SQS queue?;; Less than 256 KB.
<!--SR:!2025-10-05,13,230-->
- What is the acceptable range for Amazon SQS Long Polling wait times, and what is its benefit?;; Between 1 second and 20 seconds. It reduces API calls and latency.
<!--SR:!2025-10-02,10,230-->
- What is the default message visibility timeout in Amazon SQS, and what is its maximum configurable value?;; Default: 30 seconds. Maximum: 12 hours.
<!--SR:!2025-09-29,7,230-->
- What are the ordering and delivery guarantees for Amazon SQS Standard queues?;; Best-effort ordering and at-least-once delivery.
<!--SR:!2025-09-26,9,250-->
- How does Amazon SQS FIFO guarantee message ordering and support exactly-once send?;; Ordering by Message Group ID and exactly-once send using deduplication IDs or content-based deduplication within a 5-minute window.
<!--SR:!2025-09-24,2,170-->
- What are the throughput limits for Amazon SQS FIFO queues?;; 300 messages per second without batching, or 3,000 messages per second with batching.
<!--SR:!2025-09-24,2,190-->
- What is the maximum number of subscribers per topic and topics per account for Amazon SNS?;; Up to 12.5 million subscribers per topic and up to 100,000 topics per account.
<!--SR:!2025-09-24,7,250-->
- Is data persistent in Amazon SNS Standard topics?;; No, if a message is not delivered to a subscriber, there's a chance of losing it as the data is not persistent.
<!--SR:!2025-09-28,11,270-->
- What is the primary difference in data delivery models between Amazon SQS and Amazon SNS?;; SQS uses a **pull** model (consumers pull messages from the queue), while SNS uses a **push** (Pub/Sub) model (messages are pushed to subscribers).
<!--SR:!2025-09-29,7,230-->
- What is the key differentiator for Kinesis Data Streams in terms of data processing time?;; It provides **real-time** data processing capabilities.
<!--SR:!2025-09-29,12,270-->
- What is the data retention period for Kinesis Data Streams, and can data be replayed or deleted?;; Data is retained for 1 to 365 days. Data can be replayed by consumers, but it cannot be manually deleted (it only expires after its retention period).
<!--SR:!2025-09-28,6,230-->
- What is the throughput capacity for a single shard in Kinesis Data Streams Provisioned Mode (inbound and outbound)?;; 1 MB/s or 1,000 records/s inbound, and 2 MB/s outbound.
<!--SR:!2025-09-29,7,230-->
- What is the key differentiator for Amazon Data Firehose in terms of data processing time?;; It provides **near real-time** data processing, primarily due to its internal buffer.
<!--SR:!2025-09-28,11,270-->
- Does Amazon Data Firehose store data itself or support data replay?;; No, it has no data storage and no replay capability.
<!--SR:!2025-09-29,12,270-->
- What open-source message brokers are managed by Amazon MQ, and what is a key use case for the service?;; RabbitMQ and ActiveMQ. A key use case is migrating existing on-premises applications that rely on open messaging protocols without re-engineering.
<!--SR:!2025-09-27,10,270-->
- How does Amazon MQ achieve high availability in a multi-AZ setup?;; It uses an active/standby broker across two Availability Zones (AZs) with Amazon EFS as backend storage to ensure data safety and consistency during failover.
<!--SR:!2025-09-24,7,250-->




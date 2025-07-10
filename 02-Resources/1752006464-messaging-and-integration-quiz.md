---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Messaging and Integration Quiz
tags:
  - resource
  - Cards/AWS
  - aws
  - cloud
  - certificate
created_date:
  2025-07-08
---
# Messaging and Integration Quiz
- You have an e-commerce website and you are preparing for Black Friday which is the biggest sale of the year. You expect that your traffic will increase by 100x. Your website already using an SQS Standard Queue, and you're running a fleet of EC2 instances in an Auto Scaling Group to consume SQS messages. What should you do to prepare your SQS Queue?;;Do nothing, SQS scales automatically.
<!--SR:!2025-07-13,3,250-->
- You have an SQS Queue where each consumer polls 10 messages at a time and finishes processing them in 1 minute. After a while, you noticed that the same SQS messages are received by different consumers resulting in your messages being processed more than once. What should you do to resolve this issue?;;Increase the Visibility Timeout.
<!--SR:!2025-07-13,4,270-->
- Which SQS Queue type allows your messages to be processed exactly once and in order?;;SQS FIFO Queue.
<!--SR:!2025-07-13,4,270-->
- You have 3 different applications that you'd like to send them the same message. All 3 applications are using SQS. What is the best approach would you choose?;;Use SNS + SQS Fan Out Pattern.
<!--SR:!2025-07-13,4,270-->
- You have a Kinesis data stream with 6 shards provisioned. This data stream usually receiving 5 MB/s of data and sending out 8 MB/s. Occasionally, your traffic spikes up to 2x and you get a `ProvisionedThroughputExceeded` exception. What should you do to resolve the issue?;;Add more shards.
<!--SR:!2025-07-13,4,270-->
- You have a website where you want to analyze clickstream data such as the sequence of clicks a user makes, the amount of time a user spends, and where the navigation begins and how it ends. You decided to use Amazon Kinesis, so you have configured the website to send these clickstream data all the way to a Kinesis data stream. While you checking the data sent to your Kinesis data stream, you found that the users' data is not ordered and the data for one individual user is spread across many shards. How would you fix this problem?;;For each record sent to Kinesis add a partition key that represents the identity of the user.
<!--SR:!2025-07-13,4,270-->
- You are running an application that produces a large amount of real-time data that you want to load into S3 and Redshift. Also, these data need to be transformed before being delivered to their destination. What is the best architecture would you choose?;;Kinesis Data Streams + Kinesis Data Firehose.
<!--SR:!2025-07-13,4,270-->
- Which of the following is NOT a supported subscriber for AWS SNS?(Amazon Kinesis Data Streams, Amazon SQS, HTTP(S) Endpoint, AWS Lambda);;Amazon Kinesis Data Streams (Kinesis Data Firehose is now supported, but not Kinesis Data Streams).
<!--SR:!2025-07-13,4,270-->
- Which AWS service helps you when you want to send email notifications to your users?;;Amazon SNS.
<!--SR:!2025-07-13,4,270-->
- You're running many micro-services applications on-premises and they communicate using a message broker that supports MQTT protocol. You're planning to migrate these applications to AWS without re-engineering the applications and modifying the code. Which AWS service allows you to get a managed message broker that supports the MQTT protocol?;;Amazon MQ.
<!--SR:!2025-07-13,4,270-->
- An e-commerce company is preparing for a big marketing promotion that will bring millions of transactions. Their website is hosted on EC2 instances in an Auto Scaling Group and they are using Amazon Aurora as their database. The Aurora database has a bottleneck and a lot of transactions have been failed in the last promotion they have made as they had a lot of transaction and the Aurora database wasn’t prepared to handle these too many transactions. What do you recommend to handle those transactions and prevent any failed transactions?;;Use SQS as a buffer to write to Aurora.
<!--SR:!2025-07-12,3,250-->
- A company is using Amazon Kinesis Data Streams to ingest clickstream data and then do some analytical processes on it. There is a campaign in the next few days and the traffic is unpredictable which might grow up to 100x. What Kinesis Data Stream capacity mode do you recommend?;;On-demand Mode.
<!--SR:!2025-07-13,4,270-->



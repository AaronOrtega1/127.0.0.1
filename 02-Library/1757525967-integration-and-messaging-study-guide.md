---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "Integration and Messaging Study Guide"
tags:
  - Knowledge
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section17
created_date:
  "2025-09-10"
---
# Integration and Messaging Study Guide
## 1. Amazon SQS (Simple Queue Service)
Amazon SQS is a fully managed message queuing service used to **decouple applications** [1, 2].
### Key Features:
*   **General:**
    *   A **queue** service that acts as a buffer between producers and consumers [1].
    *   Messages are short-lived, with a default retention of **4 days**, extendable up to **14 days** [3].
    *   Messages must be less than **256 KB** [4].
    *   Supports **Long Polling** (1 to 20 seconds) to reduce API calls and latency by waiting for messages to arrive, rather than continually polling an empty queue [5-7].
    *   **Message Visibility Timeout** (default 30 seconds, configurable up to 12 hours) makes a message invisible to other consumers once it's polled [8-10]. If a consumer needs more time, it can call `ChangeMessageVisibility` to extend the timeout for a specific message [11, 12].
    *   **Security:**
        *   **In-flight encryption** using HTTPS [13].
        *   **At-rest encryption** using KMS keys [13, 14].
        *   **Client-side encryption** is the client's responsibility [13, 15].
        *   Access controlled by **IAM policies** and **SQS access policies** (similar to S3 bucket policies), useful for cross-account or cross-service access (e.g., allowing SNS to write to SQS) [15-18].
*   **Standard Queues:**
    *   **Unlimited throughput** and an **unlimited number of messages** in the queue [2, 19, 20].
    *   Provides **"at least once delivery,"** meaning messages can sometimes be delivered twice [4, 21].
    *   Offers **"best-effort ordering,"** meaning messages may be received out of order [21, 22].
    *   **Low latency** (less than 10 milliseconds) on publish and receive [3].

*   **FIFO (First-In, First-Out) Queues:**
    *   Guarantees **message ordering** (first in, first out) [23-25].
    *   Supports **"exactly-once send"** through **deduplication IDs** (within a 5-minute window) or **content-based deduplication** [26-28].
    *   Ordering is guaranteed at the **Message Group ID** level, so messages with the same group ID are processed in order [29].
    *   Has **throughput limits**: 300 messages per second without batching, or 3,000 messages per second with batching [27].
    *   Queue name must end with `.fifo` [28].

### Use Cases:

*   **Application Decoupling:** Separating components like a front-end from a back-end processing tier to allow independent scaling and prevent a slow process from affecting the user experience [2, 30-32].
*   **Buffering Database Writes:** Acting as a buffer for database writes during high-traffic events (e.g., flash sales) to prevent database overload and ensure all transactions are eventually processed without loss [33-35].
*   **Scalable Architectures with Auto Scaling Groups (ASG):** Scaling consumer applications (e.g., EC2 instances in an ASG) based on the SQS **Queue Length** (ApproximateNumberOfMessages CloudWatch metric). If the queue length exceeds a threshold, the ASG scales out to process messages faster [36-39].
*   **Handling Sudden Spikes of Traffic:** Ideal when traffic is unpredictable, as it allows applications to decouple and scale independently to handle surges [40, 41].
*   **Part of SNS Fan-out Pattern:** Providing **data persistence, delayed processing, and retries** for messages sent via SNS [42-44].

### Pros/Cons:

*   **Pros:**
    *   **Fully managed service** [1, 23].
    *   **Scales to hundreds of thousands of messages** very quickly (Standard queues) [2, 23].
    *   **Decouples applications** for improved fault tolerance and scalability [1, 20, 40, 41].
    *   **No throughput provisioning required** for Standard queues [23].
    *   **Cost-effective** (pay-per-use model).
*   **Cons:**
    *   **At-least-once delivery** and **best-effort ordering** for Standard queues require idempotent consumers [4, 22].
    *   **Limited throughput** for FIFO queues [27].
    *   Messages have a **maximum retention period** of 14 days [3].
    *   Individual message size is limited to **256 KB** [4].

### Pricing Model:

*   **Pay-per-use, managed service.** You pay for the number of requests and data transfer. Provisioning throughput is not generally needed for Standard queues [23].

## 2. Amazon SNS (Simple Notification Service)

Amazon SNS is a fully managed messaging service that enables you to send messages to a large number of subscribers via a **Pub/Sub (Publish-Subscribe) model** [23, 45].

### Key Features:

*   **General:**
    *   **Pub/Sub Model:** A producer sends one message to an SNS topic, and the topic delivers copies of that message to all subscribed endpoints [23, 45].
    *   **Scalability:** Supports up to **12.5 million subscribers per topic** [46, 47] and up to **100,000 topics per account** [48].
    *   **No throughput provisioning** required [46].
    *   **Subscribers/Endpoints:** Can be email, SMS, mobile push notifications, HTTP/HTTPS endpoints, **SQS queues**, **Lambda functions**, or **Kinesis Data Firehose** [48, 49].
    *   **Integration with AWS Services:** Can receive messages directly from many AWS services like CloudWatch Alarms, Auto Scaling Groups, S3 events, Lambda, DynamoDB, RDS events, etc. [49, 50].
    *   **Direct Publish** for mobile apps (Google GCM, Apple APNS, Amazon ADM) [14].
    *   **Message Filtering:** Allows subscribers to apply a **JSON policy** to receive only messages that match specific criteria from the topic [51-53].
    *   **Security:**
        *   **In-flight encryption** by default, **at-rest encryption** using KMS keys, and client-side encryption (client's responsibility) [14, 15].
        *   Access controlled by **IAM policies** and **SNS access policies** (similar to S3 bucket policies), useful for cross-account or cross-service access (e.g., allowing S3 events to write to SNS) [15, 16].

*   **Standard Topics:**
    *   **Data is not persistent:** If a message is not delivered, there's a chance of losing it [46].

*   **FIFO (First-In, First-Out) Topics:**
    *   Guarantees **message ordering** (first in, first out) within the topic [26].
    *   Supports **deduplication** using a deduplication ID or content-based deduplication [26].
    *   Ordering is by **Message Group ID** [26].
    *   **Subscribers can only be SQS FIFO queues** (at the time of recording) [26].
    *   Throughput is limited to the same as SQS FIFO queues [44].

### Use Cases:

*   **Fan-out Pattern:** Efficiently sending a single message to multiple subscribers or SQS queues, overcoming limitations of direct integration and ensuring no data loss by leveraging SQS for persistence [42, 43, 54].
*   **Centralized Notifications:** Receiving and routing notifications from various AWS services to different teams or systems [49, 50].
*   **S3 Event Notifications:** Overcoming the limitation of S3 event rules by allowing a single S3 event to trigger notifications to multiple SQS queues or other destinations via an SNS topic [43, 55].
*   **Mobile Push Notifications:** Sending notifications to mobile applications directly [14].
*   **Sending Data to S3 via Kinesis Data Firehose:** Integrating SNS directly with Kinesis Data Firehose to send messages to S3 or other supported KDF destinations [49, 56].
*   **Ordered Fan-out:** Using SNS FIFO topics with SQS FIFO queues to fan out messages while preserving order and deduplication [44].

### Pros/Cons:

*   **Pros:**
    *   **Fully managed, serverless service** [46].
    *   **Highly scalable** for many subscribers and topics [46-48].
    *   **Decouples publishers from subscribers**, simplifying application architecture [45].
    *   Supports a **wide variety of subscriber types** [48, 49].
    *   **Message filtering** provides fine-grained control over message delivery [51].
*   **Cons:**
    *   **Data is not persistent** for Standard topics; undelivered messages may be lost without integration with persistent services like SQS [46].
    *   **Limited throughput** for FIFO topics [44].

### Pricing Model:

*   **Pay-per-use, managed service.** You pay for notifications published and delivered.

## 3. Amazon Kinesis Data Streams

Amazon Kinesis Data Streams is a service for collecting and storing **streaming data in real-time** [57].

### Key Features:

*   **Real-time Processing:** Designed for applications that need to process data as it's created and used on the spot [57, 58].
*   **Data Retention:** Data is persisted on the stream for **1 to 365 days** [59, 60].
*   **Data Replay Capability:** Because data is persisted, consumers can **reprocess or replay data** [58-60].
*   **Immutable Data:** Once data is sent to Kinesis Data Streams, it **cannot be deleted**; it expires only after its retention period [60].
*   **Message Size:** Data records can be up to **1 MB** [61].
*   **Ordering:** Data is ordered at the **shard level** if data points share the same Partition ID [59, 61].
*   **Producers:** Applications (custom code), or the **Kinesis Agent** for logs and metrics [62]. The **Kinesis Producer Library (KPL)** is recommended for high-throughput producers [63].
*   **Consumers:** Applications (custom code), **AWS Lambda functions**, **Amazon Data Firehose**, or analytics services like Amazon Managed Service for Apache Flink [60, 64]. The **Kinesis Client Library (KCL)** is recommended for optimized consumers [63].
*   **Security:**
    *   **At-rest encryption** using KMS [61].
    *   **In-flight encryption** using HTTPS [61].
*   **Capacity Modes:**
    *   **Provisioned Mode:**
        *   You **choose the number of shards** in advance [59, 63, 65].
        *   Each shard provides **1 MB/s or 1,000 records/s inbound** and **2 MB/s outbound** [66].
        *   Requires **manual scaling of shards** (increasing or decreasing) based on monitoring throughput [59, 67].
    *   **On-Demand Mode:**
        *   **No provisioning or managing capacity** needed [65, 67].
        *   Default capacity of **4,000 records/s or 4 MB/s inbound** [67].
        *   **Automatically scales** based on observed throughput over the past 30 days [65, 68].

### Use Cases:

*   **Real-time Big Data Analytics and ETL:** Ideal for real-time processing of large volumes of streaming data [59].
*   **Clickstream Data Analysis:** Collecting and processing user click data from websites in real-time [57].
*   **IoT Device Data:** Ingesting and processing data from connected devices [57].
*   **Server Metrics and Logs:** Collecting logs and metrics from servers for immediate analysis and monitoring [62].

### Pros/Cons:

*   **Pros:**
    *   Provides **true real-time streaming data collection** and processing capabilities [57, 58].
    *   **Data persistence and replay capability** are highly valuable for reprocessing data [59, 60].
    *   Guarantees **ordering at the shard level** [59, 61].
    *   **On-Demand mode simplifies capacity management** significantly [65, 67].
*   **Cons:**
    *   Typically requires **writing custom producer and consumer code** [58, 62, 64].
    *   **Manual shard scaling** is required in Provisioned Mode, which can be complex [59, 67].
    *   Data cannot be manually deleted, only expires [60].

### Pricing Model:

*   **Provisioned Mode:** You pay for each shard provisioned per hour [67].
*   **On-Demand Mode:** You pay per stream per hour, plus for the amount of data that goes in and out of your stream [68].

## 4. Amazon Data Firehose (formerly Kinesis Data Firehose)

Amazon Data Firehose is a fully managed service for **loading streaming data into target destinations** [69, 70]. It's known for **near real-time** processing [71].

### Key Features:

*   **Fully Managed & Serverless:** Requires no servers or infrastructure management [70-72].
*   **Automatic Scaling:** Automatically scales to match throughput requirements [70, 71].
*   **Near Real-time:** Due to an internal **buffer** (configurable by size or time), data is delivered in near real-time, not true real-time. The buffer can be optionally disabled [70, 71, 73].
*   **No Data Storage or Replay:** Unlike Kinesis Data Streams, Firehose does not store data itself and has no replay capability [70].
*   **Producers/Sources:** Applications (using SDK), Kinesis Agents, and can **pull data directly from Kinesis Data Streams**, Amazon CloudWatch Logs and Events, or AWS IoT [69, 74].
*   **Optional Data Transformation:** Supports optional data transformation using **AWS Lambda functions** (e.g., converting CSV to JSON, custom conversions) [58, 73, 74].
*   **Data Formats & Compression:** Supports CSV, JSON, Parquet, Avro, text, or binary data. Can convert to Parquet or ORC formats and compress with gzip or snappy [73].
*   **Destinations:**
    *   **AWS Services:** Amazon S3, Amazon Redshift, Amazon OpenSearch Service [70, 72, 75].
    *   **Third-party Partners:** Datadog, Splunk, New Relic, MongoDB [72, 75].
    *   **Custom:** HTTP endpoint integration for unsupported destinations [72, 75].
*   **Backup Option:** Can write all data or only failed data to an **S3 bucket for backup** [72].

### Use Cases:

*   **Loading Streaming Data to Analytics/Storage:** Easily move streaming data from various sources into data lakes (S3), data warehouses (Redshift), or search services (OpenSearch) for analysis [70, 75].
*   **Centralized Logging:** Consolidating logs from CloudWatch or other sources into a single destination.
*   **Data Format Conversion:** Transforming data (e.g., from CSV to JSON) before delivery to a target destination [58, 74].
*   **SNS Integration:** Receiving messages from SNS topics and delivering them to S3 or other KDF destinations [49, 56].
*   **Real-time ETL:** Streamlining the Extract, Transform, Load process for data ingestion.

### Pros/Cons:

*   **Pros:**
    *   **Fully managed, serverless, and automatically scales**, simplifying operations [70-72].
    *   **Simplifies loading streaming data** to a wide range of popular destinations [70].
    *   Built-in support for **data transformation, format conversion, and compression** [73, 74].
    *   Provides a **backup option to S3** [72].
    *   **Cost-effective** (pay-per-use model) [71].
*   **Cons:**
    *   **Near real-time delivery** means it's not suitable for applications requiring immediate, sub-second latency [71, 73].
    *   **No data storage or replay capability** means you can't reprocess historical data directly from Firehose [70].

### Pricing Model:

*   **Pay for what you use** from within the service, including data ingested and any data transformations performed [71].

## 5. Amazon MQ (Managed Message Broker)

Amazon MQ is a managed message broker service for **open-source message brokers like RabbitMQ and ActiveMQ** [76]. It’s designed for applications that rely on **open messaging protocols** [77].

### Key Features:

*   **Managed Service for Open Source Brokers:** Provides managed versions of **RabbitMQ** and **ActiveMQ** [76].
*   **Open Protocols Support:** Supports standard open messaging protocols such as MQTT, AMQP, STOMP, Openwire, and WSS [76, 77].
*   **Combined Functionality:** Offers **both queue and topic features** as part of a single broker [78].
*   **High Availability:** Supports a **multi-AZ setup with failover**. This involves an active broker in one AZ and a standby broker in another. **Amazon EFS** is used as backend storage, which can be mounted across multiple AZs to ensure data safety and consistency during failover [78-80].
*   **Scalability:** Does **not scale as much as cloud-native services like SQS or SNS** [76].

### Use Cases:

*   **Migrating On-premises Applications:** Ideal for migrating existing traditional applications that use open messaging protocols (e.g., ActiveMQ or RabbitMQ) to the AWS cloud **without requiring re-engineering** to use SQS or SNS proprietary APIs [76, 77].
*   **Maintaining Open Protocol Standards:** When an application architecture specifically requires the use of open messaging protocols.
*   **Integrated Queue and Topic Needs:** For scenarios where both queuing and publish/subscribe functionalities are needed from a single broker instance [78].

### Pros/Cons:

*   **Pros:**
    *   **Simplifies migration** of existing applications that rely on open-source message brokers and protocols [76, 77].
    *   Supports **industry-standard open protocols**, providing flexibility and avoiding vendor lock-in at the protocol level [77].
    *   Offers **both queue and topic functionalities** within a single broker [78].
    *   Provides **high availability** with multi-AZ deployment and data persistence via EFS during failover [78-80].
*   **Cons:**
    *   **Does not scale as much as SQS or SNS** [76].
    *   Because it runs on servers, there's a potential for "server issues" (though mitigated by HA setup) [78].
    *   Requires more management overhead compared to fully serverless options like SQS and SNS, particularly for HA configuration (e.g., EFS backend) [78, 79].

### Pricing Model:

*   **Pay for broker instance usage** and associated resources (e.g., storage, data transfer, and EFS for high availability) [78].

---

## Other AWS Services Mentioned in Context:

While the core focus of this section is on the messaging and integration services detailed above, several other AWS services are mentioned in the sources, primarily as producers, consumers, or destinations:

*   **Amazon S3 (Simple Storage Service):** Often used as a destination for Kinesis Data Firehose [70, 75], or as a source for events that can be sent to SNS/SQS [49, 50, 55, 56]. It provides highly scalable and durable object storage.
*   **AWS Lambda:** A serverless compute service that can act as a consumer for SQS [81] or Kinesis Data Streams [64]. It's also used for data transformations within Data Firehose [58, 73, 74].
*   **Amazon Redshift:** A fully managed, petabyte-scale data warehouse service, frequently a target destination for Amazon Data Firehose for analytics [70, 72, 75].
*   **Amazon OpenSearch Service:** A managed service for OpenSearch (formerly Elasticsearch), also a common destination for Amazon Data Firehose [70, 72, 75].
*   **Amazon RDS / Amazon Aurora / Amazon DynamoDB:** Relational (RDS, Aurora) and NoSQL (DynamoDB) database services often used as targets for application writes, with SQS acting as a buffer to protect them from sudden load spikes [33, 34].
*   **Amazon EFS (Elastic File System):** A scalable, elastic, cloud-native NFS file system. Used as backend storage for Amazon MQ's multi-AZ high availability setup [79, 80].
*   **AWS CloudWatch:** A monitoring and observability service. CloudWatch metrics (like SQS's ApproximateNumberOfMessages) are used to trigger Auto Scaling Group actions [37-39]. CloudWatch Alarms can also publish to SNS [49].
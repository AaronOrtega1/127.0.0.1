---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Event Processing in AWS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# Event Processing in AWS
## Core Architectures

### **[[1751940872-amazon-sqs-overview|SQS]] + [[1752687705-lambda-overview|Lambda]]**
- Flow:  
  App → SQS Queue → Lambda pulls messages.  
- Behavior:
  - **Retries**: If processing fails, message is returned to queue and retried (potential infinite loop).  
  - **Dead Letter Queue (DLQ)**: Configure **SQS DLQ** to capture failed messages after *N* retries (e.g., 5).  

### SQS FIFO + Lambda
- **FIFO = First-In-First-Out**.  
- Guarantees **order of message processing**.  
- Issue: If a single message fails → entire queue processing blocks.  
- Solution: Configure **DLQ** to offload the problematic message.  

### [[1751991519-amazon-simple-notification-system-sns|SNS]] + Lambda
- Flow: App → **SNS** Topic → Async push → **Lambda**.  
- Retry behavior:
  - Lambda retries **3 times internally**.  
  - If still failing → message discarded OR redirected to **Lambda DLQ** (can send to **SQS**).  
- Key distinction:  
  - With **SQS**, DLQ is on **SQS side**.  
  - With **SNS+Lambda**, DLQ is on **Lambda side**.  

## Fan-Out Pattern
- Goal: Deliver a single message to **multiple SQS queues**.  
- Option 1: Application manually sends same message to multiple queues (unreliable if app crashes midway).  
- Option 2 (**Recommended**):  
  - Use **SNS Topic** → each **SQS queue** subscribes to the topic.  
  - App sends message **once** → **SNS** fans out to all queues.  
  - Guarantees consistency across queues.  

## **[[1751042472-s3-overview|S3]] Event Notifications**
- Triggered on S3 bucket events:
  - Object created, deleted, restored, replicated.  
  - Can filter by prefix/suffix (e.g., only `.jpg` uploads).  
- Destinations: **SNS**, **SQS**, **Lambda**.  
- Example: Auto-generate image thumbnails when files are uploaded.  
- Delivery: Typically within seconds, but can take up to 1+ minute.  

## [[1754417774-amazon-eventbridge|EventBridge]]
- More advanced event routing service.  
- Integrates with **S3 events**, but more powerful than native S3 event notifications.

### Features:
- **Rule-based filtering** (JSON-based): object size, name, metadata, etc.  
- **Multiple destinations** supported:
  - [[1753121344-aws-step-functions|Step Functions]], [[1751996367-amazon-kinesis-data-streams|Kinesis Data Streams]], [[1752004131-amazon-data-firehose|Data Firehose]], etc.  
- Extra capabilities:
  - Event archiving & replay.  
  - Reliable delivery.  

## EventBridge + [[1754422181-aws-cloudtrail|CloudTrail]]
- **CloudTrail** logs every AWS API call.  
- EventBridge can **intercept API calls** as events.  
- Example:
  - User deletes [[1752777935-amazon-dynamodb|DynamoDB]] table (`DeleteTable` API call).  
  - Logged in **CloudTrail** → triggers EventBridge rule.  
  - EventBridge sends alert via **SNS** (or other services).  

## External Event Ingestion
- External clients → [[1752812933-api-gateway-overview|API Gateway]] → **Kinesis Data Stream** → **Kinesis Data Firehose** → **S3**.  
- Common pattern for ingesting external events/data into AWS.  

## Key Takeaways
- **SQS + Lambda** → Poll-based, DLQ on **SQS side**.  
- **SNS + Lambda** → Push-based, DLQ on **Lambda side**.  
- **Fan-Out pattern** → Use **SNS** to reliably distribute messages across multiple **SQS**.  
- **S3 Event Notifications** → Simple triggers to **SNS/SQS/Lambda**.  
- **EventBridge** → More powerful event bus with filtering, multi-destination, replay, integration with **CloudTrail**.  
- **External ingestion** → API Gateway + Kinesis → store in **S3**.  

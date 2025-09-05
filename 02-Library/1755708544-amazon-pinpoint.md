---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Amazon Pinpoint
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Pinpoint
created_date: 2025-08-20
---
# Amazon Pinpoint

- **PINPOINT** = fully managed **inbound and outbound marketing communication service**.  
- Supports multiple communication channels:
	- Email  
	- SMS  
	- Push notifications  
	- Voice  
	- In-app messaging  
- Scales to **billions of messages per day**.

## Key Features
- **Segmentation & Personalization**  
  - Create targeted groups/segments.  
  - Personalize messages with relevant content.  
- **Replies Supported**  
  - Two-way messaging possible (esp. SMS).  
- **Event Tracking**  
  - Delivery results (e.g., sent, delivered, replies).  
  - Events forwarded to:
    - [[1751991519-amazon-simple-notification-system-sns|SNS]]
    - [[1752004131-amazon-data-firehose|Data Firehose]]
    - [[1754413977-cloudwatch-logs|CloudWatch Logs]]
- **Automation**  
  - Events can trigger workflows, analytics, or custom pipelines.

## Use Cases
- **Marketing campaigns** (bulk marketing emails, push notifications).  
- **Transactional SMS** (order confirmations, OTPs).  

## Difference from SNS and SES
- **SNS / SES**:
  - You manage: audience, content, and schedule.  
  - Heavy responsibility on the application side.  
  - Suitable for direct integration (notifications, email sending).  
- **Pinpoint**:
  - Provides **templates**, **delivery schedules**, **segmentation**, and **campaign management**.  
  - Designed for **marketing communications at scale**.  
  - Seen as the **evolution of SNS/SES** for advanced use cases.  

## Summary
- Use **SES** for simple outbound/inbound email sending.  
- Use **SNS** for pub/sub notifications and message fanout.  
- Use **PINPOINT** for **targeted, large-scale marketing campaigns** with analytics and automation.  


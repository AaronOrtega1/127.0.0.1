---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Instance Scheduler
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# AWS Instance Scheduler
- **Instance Scheduler** is an **AWS Solution**, not a standalone service.
- Deployed via **CloudFormation**.
- Purpose: Automatically **start and stop AWS resources** to reduce costs (potentially up to 70%).
- Common use case: Stop **EC2 instances** outside business hours.

## Supported Resources
- **Amazon EC2 instances**
- **EC2 Auto Scaling Groups**
- **Amazon RDS instances and clusters**
- Potential for future support: **Neptune**, **DocumentDB**, and others.

## Architecture
- **Schedules** stored in **DynamoDB** tables.
- **Lambda functions** read schedules and trigger actions:
  - Start instances
  - Stop instances
- Supports **cross-account** and **cross-region** resources.
- Production-ready solution with monitoring and logging.

## Deployment
1. Launch via **CloudFormation**:
   - AWS provides a pre-built **template** and **S3 URL**.
   - Parameters include:
     - Schedule frequency (e.g., every 5 minutes)
     - Default time zone
     - Services to enable scheduling (EC2, RDS, Auto Scaling)
     - Tagging options (records which action was taken)
     - Service-specific options (e.g., RDS snapshot on stop)
2. CloudFormation creates:
   - **DynamoDB config table** for schedules
   - Multiple **Lambda functions** to execute start/stop actions
   - IAM roles and other resources needed

## Schedule Management
- DynamoDB table stores:
  - Resource name
  - Begin time
  - End time
  - Description
  - Recurrence patterns (e.g., office hours, specific weekdays, quarterly schedules)
- Lambda functions read this table and manage scheduling.

## Key Points for Exam
- Instance Scheduler = **automated start/stop solution** for cost optimization.
- Works for **EC2, RDS, and Auto Scaling groups**.
- Uses **DynamoDB** for schedule storage and **Lambda** for execution.
- Deployed via **CloudFormation**; highly configurable and production-ready.
- Helps **save costs** by running resources only when needed.
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - RDS Invoking Lambda and Event Notifications
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Lambda
  - RDS
created_date:
  2025-07-17
---
# RDS Invoking Lambda and Event Notifications
## Summary
- 

## Key Ideas
- Allows you to process **data events** from within a DB.
- Supported for [[1750180189-rds-overview|RDS]] for PostgreSQL and [[1750265113-amazon-aurora|Aurora]] MySQL.
- **Must allow outbound traffic to your Lambda function** from within your DB instance (Public, NAT GW, VPC Endpoints).
- **DB instance must have the required permissions to invoke the Lambda function** (Lambda Resource-base Policy & [[1747869134-iam-policies|IAM]] Policy).
![[1752776812-rds-invoking-lambda-and-event-notifications.webp|400]]

### RDS Event Notifications
- Notifications that tells information about the DB instance itself (created, stopped, start, ...)
- Don't get any information of the data itself.
- Subscribe to the following event categories: **DB instance, DB snapshot, DB Parameter Group, DB Security Group, RDS Proxy, Custom Engine Version**.
- Near real-time events (up to 5 minutes).
- Send notifications to [[1751991519-amazon-simple-notification-system-sns|SNS]] or sub to events using EventBridge.
![[1752776812-rds-invoking-lambda-and-event-notifications-1.webp]]


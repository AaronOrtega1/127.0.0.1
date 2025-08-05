---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudWatch Agent and CloudWatch Logs Agent
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date:
  2025-08-05
---
# CloudWatch Agent and CloudWatch Logs Agent
## Summary
### CloudWatch Logs for [[1748020848-ec2-basics|EC2]]
- By default, no logs from your EC2 machine will go to CloudWatch.
- You need to run a CloudWatch agent on EC2 to push the log files you want.
- Make sure IAM permissions are correct.
- The CloudWatch log agent can be setup on-premises too.

### Logs Agent & Unified Agent
- For virtual servers (EC2 instance, on-premise servers...)
- **CloudWatch Logs Agent**
  - Old version of the agent.
  - Can only send to CloudWatch Logs.
- **CloudWatch Unified Agent**
  - Collect additional system-level metrics such as RAM, processes, etc...
  - Collect logs to send to CloudWatch Logs.
  - Centralized configuration using SSM Parameter Store.




---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudWatch Insights and Operational Visibility
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date:
  2025-08-05
---
# CloudWatch Insights and Operational Visibility
## Summary
- 

## Key Ideas
### Insights
#### Container
- Collect, aggregate, summarize **metrics and logs** from containers.
- Available for containers on...
  - Amazon Elastic Container Service (Amazon ECS).
  - Amazon Elastic Kubernetes Service (Amazon EKS).
  - Kubernetes platforms on EC2.
  - Fargate (both for ECS and EKS).
- **In [[1752079693-amazon-eks|Amazon EKS]] and Kubernetes, CloudWatch Insights is using a containerized version of the [[1754416080-cloudwatch-agent-and-cloudwatch-logs-agent|CloudWatch Agent]] to discover containers.**

#### [[1752687705-lambda-overview|Lambda]]
- Monitoring and troubleshooting solution for serverless applications running on AWS Lambda.
- Collects, aggregates, and summarizes system-level metrics including CPU time, memory, disk, and network.
- Collects, aggregates, and summarizes diagnostic information such as cold starts and Lambda worker shutdown.
- Lambda Insights is provided as a Lambda Layer.

#### Contributor
- Analyze log data and create time series that display contributor data.
  - **See metrics about the top-N contributors.**
  - The total number of unique contributors, and their usage.
- This helps you find top talkers and understand who or what is impacting system performance.
- Works for any AWS-generated logs (VPC, DNS, etc...)
- For example, you can find bad hosts, **identify the heaviest network users**, or find the URLs that generate the most errors.
- You can build rules from scratch, or you can also use sample rules that AWS has created - **leverages your CloudWatch Logs.**
- CloudWatch also provides built-in rules that you can use to analyze metrics from other AWS services.

#### Application
- **Provides automated dashboards that show potential problems with monitored applications, to help isolate ongoing issues.**
- Your applications run on [[1748020848-ec2-basics|EC2]] instances with select technologies only (Java, .NET, Microsoft IIS Web Server, databases...)
- And you can use other AWS resources such as Amazon [[1748622252-ebs-overview|EBS]], [[1750180189-rds-overview|RDS]], [[1749055294-elastic-load-balancer-(elb)|ELB]], [[1749842655-auto-scaling-group-(asg)-overview|ASG]], [[1752687705-lambda-overview|Lambda]], [[1751940872-amazon-sqs-overview|SQS]], [[1752777935-amazon-dynamodb|DynamoDB]], [[1751042472-s3-overview|S3]], [[1752018964-amazon-ecs|ECS]], [[1752079693-amazon-eks|EKS]], [[1751991519-amazon-simple-notification-system-sns|SNS]], [[1752812933-api-gateway-overview|API Gateway]]...
- Powered by SageMaker.
- Enhanced Visibility into your application health to reduce the time it will take you to troubleshoot and repair your applications.
- Findings and alerts are sent to [[1754417774-amazon-eventbridge|Amazon EventBridge]] and SSM OpsCenter.




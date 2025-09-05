---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Trusted Advisor
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# AWS Trusted Advisor
- **AWS Trusted Advisor** is a **managed service** that provides **high-level account assessments**.
- No installation is required.
- Purpose: Advise on best practices and detect potential issues in your AWS account.
- Access:
  - **Core checks** available to all users.
  - **Full set of checks** requires **Business** or **Enterprise** support plan.
  - Programmatic access available via **AWS Support API** for business/enterprise plans.

## Categories of Checks
Trusted Advisor groups its recommendations into **six categories**:
1. **Cost Optimization**
   - Identifies opportunities to reduce AWS spending.
   - Examples: Underutilized [[1748020848-ec2-basics|EC2]], [[1748622252-ebs-overview|EBS]], idle [[1750180189-rds-overview|RDS]].
2. **Performance**
   - Detects potential performance bottlenecks.
   - Examples: **High CPU usage**, inefficient resource utilization.
3. **Security**
   - Checks for security vulnerabilities and best practices.
   - Examples:
     - Public **EBS snapshots**
     - Public **RDS snapshots**
     - Use of root accounts
     - [[1748283223-security-groups-&-classic-ports-overview|Security Groups]] rules allowing unrestricted access
     - Bucket permissions allowing global access
4. **Fault Tolerance**
   - Evaluates the reliability of AWS architecture.
   - Examples: Multi-AZ deployments, backup configurations.
5. **Service Limits**
   - Monitors usage against service quotas.
   - Examples: [[1749842655-auto-scaling-group-(asg)-overview|Auto Scaling Group]], **[[1753150090-cloudformation-cheat-sheet|CloudFormation]] stacks**, **[[1752777935-amazon-dynamodb|DynamoDB]] read/write capacity**.
6. **Operational Excellence**
   - Provides best practices for operational management.
   - Focuses on monitoring, automation, and processes.

## Features
- Provides **recommendations** for action.
- Highlights items needing **investigation**.
- Offers access to **core checks** (security-focused) for all users.
- Advanced checks and full recommendations require **upgraded support plan**.
- Enables proactive management of:
  - Security issues
  - Cost optimization
  - Performance improvements
  - Service limits monitoring

## Usage Notes
- Trusted Advisor is **less useful without a paid support plan**, as many checks are locked.
- Security core checks include:
  - **Bucket permissions**
  - **Security group ports**
  - **EBS public snapshots**
  - **RDS public snapshots**
- Service limits can be monitored directly in Trusted Advisor.
- Helps in **exam scenarios** to identify security or operational best practices in AWS.

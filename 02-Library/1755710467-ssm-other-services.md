---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - SSM Other Services
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - SSM
created_date: 2025-08-20
---
# [[1755710100-ssm-session-manager|SSM]] Other Services
## **Run Command**
- **Purpose**: Execute scripts or commands across multiple managed instances.
- **Supported targets**:
  - [[1748020848-ec2-basics|EC2]] instances
  - On-premises servers (must have **SSM Agent** installed)
- **Key details**:
  - No need for **SSH**; commands run through the SSM Agent (similar to Session Manager).
  - Outputs can be sent to:
    - **Amazon [[1751042472-s3-overview|S3]]**
    - [[1754413977-cloudwatch-logs|CloudWatch Logs]]
  - Status notifications:
    - Sent to [[1751991519-amazon-simple-notification-system-sns|SNS]] (in-progress, success, failed, etc.)
  - Integrated with:
    - [[1747869134-iam-policies|IAM]] → permissions/security
    - [[1754422181-aws-cloudtrail|CloudTrail]] → audit logs of who ran what
  - Can be triggered manually or automatically (via [[1754417774-amazon-eventbridge|EventBridge]]).
- **Example use cases**: Run bulk commands across fleets without SSH.

## **Patch Manager**
- **Purpose**: Automates patching of managed instances.
- **Supports**:
  - **EC2** and on-premises servers
  - OS: **Linux**, **MacOS**, **Windows**
- **Capabilities**:
  - Apply **OS**, **application**, and **security updates**.
  - Modes:
    - On-demand (immediate patching)
    - Scheduled (using **Maintenance Windows**)
  - Can scan instances for patch compliance.
  - Generate **patch compliance reports** (identify missing patches).
- **Implementation**:
  - Uses the `AWS-RunPatchBaseline` run command.
  - Triggerable via console, SDK, or Maintenance Window.

## **Maintenance Windows**
- **Purpose**: Define schedules for running tasks on managed instances.
- **Configuration**:
  - **Schedule**: when it runs
  - **Duration**: how long it lasts
  - **Target**: which instances it applies to
  - **Tasks**: what gets executed (patching, updates, installs, etc.)
- **Example**: Every 24 hours, patch EC2 instances automatically.

## **Automation**
- **Purpose**: Simplify repetitive maintenance & deployment tasks.
- **Examples**:
  - Restart multiple EC2 instances
  - Create [[1748627575-ami-overview|AMIs]]
  - Create [[1748626491-ebs-snapshot|EBS Snapshot]]
  - Take snapshots of all [[1750180189-rds-overview|RDS]] databases
- **Mechanism**:
  - Uses **Automation Runbooks** (SSM Documents with predefined actions).
- **Triggers**:
  - Console, SDK, CLI
  - [[1754417774-amazon-eventbridge|EventBridge]]
  - **Maintenance Windows**
  - [[1754441385-aws-config|AWS Config]] (e.g., remediation if non-compliant resources are detected)

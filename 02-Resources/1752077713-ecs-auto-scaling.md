---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - ECS Auto Scaling
tags:
  - resource
  - aws
  - cloud
  - certificate
  - ECS
created_date:
  2025-07-09
---
# ECS Auto Scaling
## Summary
- Uses **AWS Application Auto Scaling.**
  - Average CPU Utilization.
  - Average Memory Utilization - Scale on RAM.
  - ALB Request Count Per Target - metric coming from the ALB.
- **Target Tracking** - scale based on target value for a specific [[CloudWatch]] Alarm.
- **Step Scaling** - scale based on a specified date/time (predictable changes).
- ECS Service Auto Scaling (task level) != [[1748020848-ec2-basics|EC2]] Auto Scaling (EC2 instance level).
- Fargate Auto Scaling is much easier to setup (because Serverless).

### EC2 Lauch Type - Auto Scaling EC2 Instances.
- **Auto Scaling Group Scaling**
  - Scale your [[1749842655-auto-scaling-group-(asg)-overview|ASG]] based on CPU Utilization.
  - Add EC2 instances over time.
- **ECS Cluster Capacity Provider**
  - Used to automatically provision and scale the infrastructure for your ECS Tasks.
  - Capacity Provider paired with an Auto Scaling Group.
  - Add EC2 Instances when you're missing capacity (CPU, RAM, ...).


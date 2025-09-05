---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Auto Scaling Group
  - ASG
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - ASG
created_date: 2025/06/13
---
# Auto Scaling Group (ASG) Overview
![[1749842655-auto-scaling-group-_asg_-overview.webp]]
## Summary
- 
## Key Ideas
### What's the goal of an ASG?
- Scale out (add [[1748020848-ec2-basics|EC2]] instances) to match an increased load.
- Scale in (remove EC2 instances) to match a decreased load.
- Ensure we have a minimum and maximum number of EC2 instances running.
- Automatically register new instances to a [[1749055294-elastic-load-balancer-(elb)|Load Balancer]].
- Re-create an EC2 instance in case a previous one is terminated (ex: if unhealthy).
### How does it work?
![[1749842655-auto-scaling-group-_asg_-overview-1.webp]]
### How does it work with a load balancer?
![[1749842655-auto-scaling-group-_asg_-overview-2.webp]]

### Attributes:
- It uses a Launch Template.
![[1749842655-auto-scaling-group-_asg_-overview-3.webp]]

- Min size/Max size/Initial Capacity
- Scaling policies
### CloudWatch Alarms & Scaling.
- It is possible to scale an ASG based on [[CloudWatch]] alarms.
- An alarm monitors a metric (such as **AVG CPU**, or a **custom metric**)
![[1749842655-auto-scaling-group-_asg_-overview-4.webp]]


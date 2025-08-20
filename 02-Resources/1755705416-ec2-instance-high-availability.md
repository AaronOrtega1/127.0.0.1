---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - EC2 Instance High Availability
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# [[1748020848-ec2-basics|EC2]] Instance [[1749053894-scalability-and-high-availability#^HA|High Availability]]
## Problem
- By default, an **EC2** instance is launched in **one AZ** → not highly available.
- Goal: Design architectures to make **EC2** instances resilient and highly available.

## Method 1: Standby **EC2** + **Elastic IP**
1. **Setup**
   - Public **EC2** instance with web server.
   - Attach **Elastic IP** → users connect via Elastic IP (remains constant).
2. **Failover**
   - Have a Standby **EC2** instance.
   - Use **[[1753150030-cloudwatch-cheat-sheet|CloudWatch]] Events/Alarms** for monitoring:
     - Example: alarm on CPU at 100%, instance termination event, etc.
   - **CloudWatch Alarm/Event** triggers a [[1752687705-lambda-overview|Lambda]] function:
     - Starts Standby **EC2** if not already running.
     - Attaches **Elastic IP** to the Standby instance.
     - Detaches Elastic IP from failed instance.
   - Result: Seamless failover, users see no change since they always connect via Elastic IP.

## Method 2: **Auto Scaling Group ([[1749842655-auto-scaling-group-(asg)-overview|ASG]])** with Elastic IP
1. **Setup**
   - **ASG** across **two AZs**.
   - Config: `min=1`, `max=1`, `desired=1`.
   - Only one **EC2** running at any given time.
   - **[[1748020848-ec2-basics#^EC2UserData|User Data]] script** → acquires and attaches Elastic IP when instance launches.
   - Instance must have **[[1747869134-iam-policies|IAM]] Role** → permissions to attach Elastic IP via API calls.
1. **Failover**
   - If instance fails → ASG terminates it.
   - ASG launches a new instance in another AZ.
   - New instance runs User Data → attaches Elastic IP.
   - No need for **CloudWatch Alarm/Event**, ASG handles detection + recovery.

## Method 3: **ASG + Elastic IP + Stateful [[1748622252-ebs-overview|EBS]] Volume**
1. **Challenge**
   - Instance is **stateful** (e.g., database).
   - Data stored on **EBS Volume** (tied to one AZ).
2. **Solution**
   - **Lifecycle Hooks**:
     - **Termination Hook**: Before instance is fully terminated:
       - Script creates **EBS Snapshot** of volume.
       - Snapshot tagged properly for identification.
     - **Launch Hook**: When replacement instance starts:
       - Create new **EBS Volume** from Snapshot in correct AZ.
       - Attach volume to new instance.
   - Instance User Data:
     - Attaches **Elastic IP**.
     - Ensures database/data is restored from EBS Snapshot.
   - Requires **EC2 IAM Role** with correct API permissions.
3. **Result**
   - **Highly available stateful EC2**.
   - Instance + data failover across AZs.

## Key Takeaways
- **Elastic IP** = constant entry point for users.
- **CloudWatch + Lambda**: Monitoring-driven failover (Method 1).
- **Auto Scaling Group (ASG)**: Simpler failover automation (Method 2).
- **Lifecycle Hooks + Snapshots**: Handle **stateful workloads** (Method 3).
- **IAM Roles** critical for automation (API calls: attach Elastic IP, manage EBS).
- Highly available EC2 design = balance between simplicity (stateless) and complexity (stateful).

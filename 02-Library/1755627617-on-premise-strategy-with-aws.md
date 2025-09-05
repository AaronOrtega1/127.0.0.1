---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - On-Premise strategy with AWS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# On-Premise strategy with AWS
## Summary
- 
## Key Ideas

### Amazon Linux 2 On-Premises
- **Amazon Linux 2 [[1748627575-ami-overview|AMI]]** available as ISO.
- Can run locally using:
  - VMWare
  - KVM
  - VirtualBox (Oracle VM)
  - Microsoft Hyper-V
- Enables running Amazon Linux 2 **on-premises**.
- Supports user data (like [[1748020848-ec2-basics|EC2]] initialization).

### VM Import/Export
- **Purpose**: Move VMs between on-premise and AWS EC2.
- **Capabilities**:
  - Import on-prem VMs into EC2.
  - Export EC2 VMs back to on-premises.
- **Use Case**: [[1755620839-disaster-recovery-overview|Disaster recovery]] strategy (backup on-prem VMs in AWS).

### AWS Application Discovery Service
- **Purpose**: Gather info about on-prem servers before migration.
- **Features**:
  - Server utilization metrics.
  - Dependency mapping.
- **Use Case**: Plan large migrations to AWS.

### AWS Migration Hub
- **Purpose**: Central dashboard to track migrations.
- **Functionality**:
  - Track status across multiple AWS migration tools.
  - Gives unified visibility.

### AWS Database Migration Service (DMS)
- **Purpose**: Replicate/migrate databases.
- **Directions**:
  - On-prem → AWS
  - AWS → AWS
  - AWS → On-prem
- **Supports**: MySQL, [[1754522252-postgresql|PostgreSQL]], Oracle, [[1752777935-amazon-dynamodb|DynamoDB]], etc.
- **Use Cases**:
  - Migrate databases gradually.
  - Cross-engine migration (e.g., MySQL → DynamoDB).
  - Continuous replication during transition.

### AWS Server Migration Service (SMS)
- **Purpose**: Replicate live on-prem servers into AWS.
- **Key Feature**: **Incremental replication** (ongoing sync).
- **Use Case**: Maintain up-to-date copies of servers during migration.

### Key Takeaways (Exam Focus)
- Recognize names & functions of **on-premises migration tools**:
  - **VM Import/Export**
  - **Application Discovery Service**
  - **Migration Hub**
  - **Database Migration Service (DMS)**
  - **Server Migration Service (SMS)**
- All are **AWS services for bridging on-prem with AWS**.



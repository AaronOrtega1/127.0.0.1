---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - SSM Session Manager
  - SSM
  - Session Manager
tags:
  - resource
  - aws
  - cloud
  - certificate
  - SSM
created_date: 2025-08-20
---
# SSM Session Manager
## Overview
- **SSM Session Manager** = Feature of **Systems Manager**.  
- Provides **secure shell access** to [[1748020848-ec2-basics|EC2]] instances & on-prem servers:  
  - No SSH keys required.  
  - No bastion host needed.  
  - Port 22 can remain **closed** → Improved security.  

## How it Works
1. **SSM Agent** runs on the **EC2** instance.  
2. Agent communicates with **SSM Session Manager** service.  
3. Users connect via **AWS Console**, **CLI**, or **SDKs**.  
4. Commands executed securely without direct SSH.  
- Supported OS: **Linux**, **macOS**, **Windows**.  
- Logging: Session data can be stored in [[1751042472-s3-overview|S3]] or [[1754413977-cloudwatch-logs|CloudWatch Logs]].  

## Setup Steps (Example Walkthrough)
1. Launch **EC2** instance (e.g., Amazon Linux 2, t2.micro).  
   - No key pair required.  
   - Disable SSH traffic (no inbound rules in Security Group).  
2. Attach an **[[1747869134-iam-policies|IAM]] Role** to instance:  
   - Service: **Amazon EC2**.  
   - Policy: **AmazonSSMManagedInstanceCore**.  
   - Example role name: `demo-ec2-role-ssm`.  
3. Instance registers with **Fleet Manager** (under Systems Manager).  
   - Appears as a **managed node**.  
   - Shows: OS, SSM Agent version, instance details.  
4. Use **Session Manager** to start secure shell session.  
   - Works even with **0 inbound rules**.  
   - Commands (e.g., `ping`, `hostname`) executed normally.  

## Comparison: EC2 Access Methods
1. **Traditional SSH**  
   - Requires port 22 open.  
   - Requires SSH keys.  
2. **EC2 Instance Connect**  
   - Temporary SSH keys uploaded by AWS.  
   - Still requires port 22 open.  
3. **SSM Session Manager**  
   - No SSH keys, no port 22.  
   - Requires **IAM Role + SSM Agent**.  
   - Session logs stored for auditing.  
   - Best practice for secure operations.  

## Additional Notes
- Sessions can be audited → **history saved in logs**.  
- Can terminate sessions directly in console.  
- Useful for compliance, least-privilege access, and eliminating SSH key management.  

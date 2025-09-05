---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - VMware Cloud on AWS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# VMware Cloud on AWS
## Summary
- **VMware Cloud on AWS** = Joint solution between **VMware** and **AWS**.
- Allows organizations with **on-premises VMware environments** to extend their infrastructure into AWS.
- Key idea: Manage both **on-prem data centers** and **AWS resources** using the **same VMware Cloud software**.

### VMware Stack Components
- Extends VMware environment to AWS, running:
  - **vSphere** (compute virtualization)
  - **vSAN** (storage virtualization)
  - **NSX** (network virtualization)
- All VMware workloads remain managed via VMware Cloud tools.

### Use Cases
1. **Capacity Extension**  
   - Scale compute/storage seamlessly from on-prem → AWS.
   - No need to rearchitect workloads; lift existing VMware VMs.

2. **Migration**  
   - Move VMware-based workloads into AWS with minimal friction.  
   - Retain VMware operations model while leveraging AWS infrastructure.

3. **Hybrid & Multi-Cloud Flexibility**  
   - Run workloads across **private**, **public**, or **hybrid cloud** environments.
   - Unified VMware management across locations.

4. **Disaster Recovery (DR)**  
   - Use AWS as a backup data center.  
   - Rapid recovery using same VMware toolset already familiar to IT teams.

### AWS Service Integration
- Once workloads run in **VMware Cloud on AWS**, they can natively access AWS services, e.g.:
  - **[[1748020848-ec2-basics|EC2]]** (elastic compute)
  - **[[1751042472-s3-overview|S3]]** (object storage)
  - **[[1751563857-amazon-fsx|Amazon FSx]]** (file systems)
  - **[[1750180189-rds-overview|RDS]]** (managed databases)
  - **[[1753482302-redshift-overview|Redshift]]** (data warehousing)
  - **[[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]]** (dedicated network link)

### Key Takeaways (Exam-Oriented)
- VMware Cloud on AWS = **bridge between on-prem VMware and AWS**.
- Main benefits:
  - Extend compute/storage.
  - Seamless migration of VMware workloads.
  - Hybrid cloud flexibility.
  - Disaster recovery.
- Critical point: Keep using **VMware management tools** while unlocking AWS services.

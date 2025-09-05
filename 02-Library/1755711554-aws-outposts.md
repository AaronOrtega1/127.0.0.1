---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Outposts
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# AWS Outposts
## Hybrid Cloud Overview
- **Hybrid Cloud** = Combination of **on-premises infrastructure** + **cloud infrastructure**.
- Challenge: Two environments → different APIs, tools, and required skillsets.
- Businesses needed a unified approach to manage hybrid IT systems.

## **AWS Outposts**
- **Definition**: Physical server racks delivered and managed by AWS, installed in a company’s **on-premises data center**.
- Outposts provide the **same AWS infrastructure, services, APIs, and tools** as the cloud.
- Goal: Build and run AWS applications **on-premises**, just like in the cloud.

## Deployment Model
- AWS sets up and manages the Outposts racks in your data center.
- Runs AWS-native services **locally**, reducing dependency on the cloud for certain workloads.
- **Difference vs. cloud [[1748020848-ec2-basics|EC2]]**:
  - Cloud EC2: AWS manages all infrastructure + physical security.
  - Outposts EC2: You (the customer) are responsible for **physical security** of the rack.

## Benefits of Outposts
1. **Low latency** → Applications can interact with on-premises systems in real time.
2. **Local data processing** → Data can remain entirely on-premises.
3. **Data residency** → Ensures compliance if data must stay within your physical location.
4. **Migration pathway**:
   - Step 1: Migrate workloads from on-premises to Outposts.
   - Step 2: Later migrate from Outposts to AWS Cloud.
5. **Fully managed by AWS**:
   - Hardware provisioning, patching, monitoring, and updates handled by AWS.

## AWS Services Supported on Outposts
- **EC2** (compute)
- [[1748622252-ebs-overview|EBS]] (storage volumes)
- [[1751042472-s3-overview|S3]] (object storage)
- [[1752079693-amazon-eks|EKS]] ([[1752079754-kubernetes|Kubernetes]])
- [[1752018964-amazon-ecs|ECS]] (containers)
- [[1750180189-rds-overview|RDS]] (relational databases)
- [[1753975538-amazon-emr|EMR]] (big data & analytics)

## Exam Notes
- Outposts = Hybrid cloud solution delivering **AWS services on-premises**.
- Key points to remember:
  - AWS manages the racks, but you secure them physically.
  - Enables **low latency, local processing, and data residency**.
  - Supports major AWS services like **EC2, EBS, S3, RDS, EKS, ECS, EMR**.
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - VPC Endpoints
tags:
  - Knowledge
  - cloud
  - certificate
  - aws
  - VPC
created_date:
  "2025-08-15"
---
# [[1753149747-vpc-cheat-sheet|VPC]] Endpoints
## Summary
- 
## Key Ideas
### 
- Every AWS service is publicly exposed (public URL).
- VPC Endpoints (powered by AWS PrivateLink) allows you to connect to AWS services using a **private network** instead of using the public internet.
- They're redundant and scale horizontally.
- They remove the need of Internet Gateway, [[1755195206-nat-gateway|NAT Gateway]], ... to access AWS services.
- In case of issues:
	- Check [[1750461147-what-is-a-dns?|DNS]] setting resolution in your VPC.
	- Check route tables.
![[1755275978-vpc-endpoints.webp|500]]

### Types of Endpoints
- **Interface Endpoints (powered by PrivateLink)**
	- Provisions an [[1748545140-elastic-network-interfaces-(eni)|ENI]] (private IP address) as an entry point (must attach a Security Group).
	- Supports most AWS services.
	- $ per hour + $ per GB of data processed
![[1755275978-vpc-endpoints-1.webp]]
- **Gateway Endpoints**
	- Provisions a gateway and must be used **as a target in a route table (does not use security groups).**
	- Supports both [[1751042472-s3-overview|S3]] and [[1752777935-amazon-dynamodb|DynamoDB]].
	- Free.
![[1755275978-vpc-endpoints-2.webp]]



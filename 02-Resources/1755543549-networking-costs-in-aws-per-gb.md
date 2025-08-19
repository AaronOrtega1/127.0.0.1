---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Networking Costs in AWS per GB
tags:
  - resource
  - aws
  - cloud
  - certificate
  - network
created_date: 2025-08-18
---
# Networking Costs in AWS per GB
![[1755543549-networking-costs-in-aws-per-gb.webp]]

### Minimizing egress traffic network cost
- **Egress traffic:** outbound traffic (from AWS to outside).
- **Ingress traffic:** inbound traffic - from outside to AWS (typically free).
- Try to keep as much internet traffic within AWS to minimize costs.
- [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]] location that are co-located in the same AWS region result in lower cost for egress network.
![[1755543549-networking-costs-in-aws-per-gb-1.webp]]

### [[1751042472-s3-overview|S3]] Data Transfer Pricing - Analysis for USA
- **S3 ingress:** free.
- **S3 to Internet:** $0.09 per GB.
- **S3 Transfer Acceleration:**
	- Faster transfer times (50 to 500% better).
	- Additional cost on top of Data Transfer Pricing: +$0.04 to $0.08 per GB.
- **S3 to [[1751474216-cloudfront-overview|CloudFront]]:** $0.085 per GB (slightly cheaper than S3).
	- Caching capability (lower latency).
	- Reduce costs associated with S3 Requests Pricing (7x cheaper with CloudFront).
- **S3 Cross Region Replication:** $0.02 per GB.
![[1755543549-networking-costs-in-aws-per-gb-2.webp]]

### [[1755195206-nat-gateway|NAT Gateway]] vs Gateway [[1755275978-vpc-endpoints|VPC Endpoints]]
![[1755543549-networking-costs-in-aws-per-gb-3.webp]]


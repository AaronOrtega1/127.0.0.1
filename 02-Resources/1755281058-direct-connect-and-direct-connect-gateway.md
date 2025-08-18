---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Direct Connect and Direct Connect Gateway
  - Direct Connect Gateway
  - Direct Connect
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-15
---
# Direct Connect and Direct Connect Gateway
## Summary
- 
## Key Ideas
### Direct Connect (DX)
- Provides a dedicated **private** connection from a remote network to your [[1753149747-vpc-cheat-sheet|VPC]].
- Dedicated connection must be setup between your DC and AWS Direct Connect locations.
- You need to setup a [[1755279885-aws-site-to-site-vpn#^VGW|Virtual Private Gateway]] on your VPC.
- Access public resources ([[1751042472-s3-overview|S3]]) and private ([[1748020848-ec2-basics|EC2]]) on same connection.
- Use cases:
	- Increase bandwidth throughput - working with large data sets - lower cost.
	- More consistent network experience - applications using real-time data feeds.
	- Hybrid Environments (on prem + cloud).
- Supports both IPv4 and IPv6.
![[1755281058-direct-connect-and-direct-connect-gateway.webp]]

### Direct Connect Gateway
- **If you want to setup a Direct Connect to one or more [[1753149747-vpc-cheat-sheet|VPC]] in many different regions (same account), you must use a Direct Connect Gateway.**
![[1755281058-direct-connect-and-direct-connect-gateway-1.webp]]

### Connection Types
- **Dedicated Connections:** 1 Gbps, 10 Gbps adn 100 Gbps capacity.
	- Physical ethernet port dedicated on a customer.
	- Request made to AWS first, then completed by AWS Direct Connect Partners.
- **Hosted Connections:** 50 Mbps, 500 Mbps, to 10 Gbps.
	- Connection requests are made via AWS Direct Connect Partners.
	- Capacity can be **added or removed on demand.**
	- 1, 2, 5, 10 Gbps available at select AWS Direct Connect Partners.
- Lead times are often longer than 1 month to establish a new connection.

### Encryption
- Data in transit is **not encrypted** but is private.
- AWS Direct Connect + VPN provides and IPsec-encrypted private connection.
- Good for and extra level of security, but slightly more complex to put in place.
![[1755281058-direct-connect-and-direct-connect-gateway-2.webp]]

### Resiliency
![[1755281058-direct-connect-and-direct-connect-gateway-3.webp]]


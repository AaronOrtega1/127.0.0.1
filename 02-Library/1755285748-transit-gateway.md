---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Transit Gateway
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-15
---
# Transit Gateway
## Summary
- 
## Key Ideas
### 
- For having transitive peering between thousands of VPC and on-premises, hub-and spoke (star) connection.
- Regional resource, can work cross-region.
- Share cross-account using Resource Access Manager (RAM).
- You can peer Transit Gateways across regions.
- Route Tables: limit which [[1753149747-vpc-cheat-sheet|VPC]] can talk with other VPC.
- Works with Direct Connect Gateway, VPN connections.
- Supports **IP Multicast** (not supported by any other AWS service).
![[1755285748-transit-gateway.webp]]

### Site-to-Site VPN ECMP
- **ECMP = Equal-cost multi-path routing.**
- Routing strategy to allow to forward a packet over multiple best path.
- Use case: create multiple Site-to-Site VPN connections **to increase the bandwidth of your connection to AWS.**
![[1755285748-transit-gateway-1.webp]]

### Throughput with ECMP
![[1755285748-transit-gateway-2.webp]]

### Share Direct Connect between multiple accounts
![[1755285748-transit-gateway-3.webp]]





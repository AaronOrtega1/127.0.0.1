---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Site to Site VPN
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-15
---
# AWS Site to Site VPN
## Summary
- 
## Key Ideas
### 
- **Virtual Private Gateway (VGW)** ^VGW
	- VPN concentrator on the AWS side of the VPN connection.
	- VGW is created and attached to the [[1753149747-vpc-cheat-sheet|VPC]] from which you want to creat the Site-to-Site VPN connection.
	- Possibility to customize the ASN (Autonomous System Number).
- **Customer Gateway (CGW)**
	- Software application or physical device on customer side of the VPN connection.
### Connections
- **Customer Gateway Device (On-premises)**
	- **What IP address to use?**
		- Public Internet-routable IP address for your Customer Gateway device.
		- If it's behind a NAT device that's enabled for NAT traversal (NAT-T), use the public IP address of the NAT device.
- **Important step:** enable **Route Propagation** for the Virtual Private Gateway in the route table that is associated with your subnets.
![[1755279885-aws-site-to-site-vpn.webp]]

### CloudHub
- Provide secure communication between multiple sites, if you have multiple VPN connections.
- Low-cost hub-and-spoke model for primary or secondary network connectivity between different locations (VPN only).
- It's a VPN connection so it goes over the public internet.
- To set it up, connect multiple VPN connections on the same VGW, setup dynamic routing and configure route tables.
![[1755279885-aws-site-to-site-vpn-1.webp]]



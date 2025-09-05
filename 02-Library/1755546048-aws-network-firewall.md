---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Network Firewall
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - VPC
created_date: 2025-08-18
---
# AWS Network Firewall
## Summary
- 
## Key Ideas
### 
- Protect your entire [[1753149747-vpc-cheat-sheet|VPC]].
- From [[1749058503-osi-model|Layer 3]] to [[1749058503-osi-model|Layer 7]] protection
- Any direction, you can inspect
	- VPC to VPC traffic.
	- Outbound to internet.
	- Inbound from internet.
	- To/from [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]] & [[1755279885-aws-site-to-site-vpn|Site-to-Site VPN]].
- Internally, the AWS Network Firewall uses the AWS [[1749584144-gateway-load-balancer-(glb)|Gateway Load Balancer]].
- Rules can be centrally managed cross-account by AWS Firewall Manager to apply to many VPCs.
![[1755546048-aws-network-firewall.webp]]

### Fined Grained Controls
- Supports 1000s of rules
	- IP & port - example: 10,000s of IPs filtering.
	- Protocol - example: block the SMB protocol for outbound communications.
	- Stateful domain list rule groups: only allow outbound traffic to \*.mycorp.com or third-party software repo.
	- General pattern matching using regex.
- **Traffic filtering: Allow, drop, or alert for the traffic that matches the rules.**
- **Active flow inspection** to protect against network threats with intrusion-prevention capabilities (like [[1749584144-gateway-load-balancer-(glb)|Gateway Load Balancer]], but all managed by AWS).
- Send logs of rule matches to [[1751042472-s3-overview|S3]], [[1753150030-cloudwatch-cheat-sheet|CloudWatch]], [[1752004131-amazon-data-firehose|Data Firehose]].





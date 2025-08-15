---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Traffic Mirroring
tags:
  - resource
  - aws
  - cloud
  - certificate
  - VPC
created_date:
  "2025-08-15"
---
# Traffic Mirroring
## Summary
- Allows you to capture and inspect network traffic in your [[1753149747-vpc-cheat-sheet|VPC]].
- Route the traffic to security appliances that you manage.
- Capture the traffic
	- **From (source)** - ENIs.
	- **To (Targets)** - and ENI or a Network Load Balancer.
- Capture all packets or capture the packets of your interest (optionally, truncate packets).
- Source and Target can be in the same VPC or different VPCs (VPC Peering).
- **Use cases:** content inspection, threat monitoring, troubleshooting,...
![[1755288481-traffic-mirroring.webp]]




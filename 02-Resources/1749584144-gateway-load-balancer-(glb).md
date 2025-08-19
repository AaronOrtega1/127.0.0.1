---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Gateway Load Balancer
  - GLB
tags:
  - resource
  - aws
  - cloud
  - certificate
  - GLB
created_date: 2025/06/10
---
# Gateway Load Balancer (GLB)
## Summary
- 
## Key Ideas
### What is a GLB?
- used to deploy, scale and manage a fleet of 3rd party network virtual appliances in AWS.
	- Firewalls, intrusion detection and prevention systems, deep packet inspection and payload manipulation...
![[1749584144-gateway-load-balancer-_glb_.webp]]
- Operates at [[1749058503-osi-model#^Layer3|layer 3]]
- Combines the following:
	- **Transparent Network Gateway** - single entry/exit for all traffic.
	- **Load Balancer** - distributes traffic to your virtual appliances.
- Uses the **GENEVE** protocol on port 6081.
### Target Groups
- EC2 instances.
- IP Addresses - must be private IPs.
![[1749584144-gateway-load-balancer-_glb_-1.webp]]

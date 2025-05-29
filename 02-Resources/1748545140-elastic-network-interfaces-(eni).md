---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Elastic Network Interfaces (eni)
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/05/29
---
# Elastic Network Interfaces (ENI)
## Summary
- 
## Key Ideas
### What is a ENI?
- It's a logical component in a VPC that represents a virtual network card.
### What attributes does it have?
- Primary private IPv4, one or more secondary IPv4.
- One Elastic IP (IPv4) per private IPv4.
- On public IPv4.
- One or more security groups.
- A MAC address.
### How to use them?
- You can create ENI independently and attach them on the fly (move them) on EC2 instances for failover.
- Bound to a specific AZ.
![[1748545140-elastic-network-interfaces-_eni_.webp]]
### Use cases
- **Management Network / Backnet**
	- Use two ENIs on a single instance
		- Public ENI -> handles internet traffic.
		- Private ENI -> Connects to a corporate VPN for secure SSH, logging, and management.
- **Multi-Interface Applications (Load Balancers, NAT Proxies)**
	- Run NAT servers, proxies, or load balancers with multiple ENIs.
	- Disable Source/Destination Check to allow traffic forwarding between subnets.
- **MAC-Based Licensing**
	- Some commercial software licenses are tied to a MAC address.
	- Since an ENI retains its MAC address, you can move it to a new instance without breaking licensing.
- **Low-Budget High Availability (HA)**
	- Attach an ENI to an instance.
	- If the instance fails, reattach the ENI to a new instance - traffic resumes quickly with the same IP/MAC.
## Related Links
- [[]]
## Sources
[New – Elastic Network Interfaces in the Virtual Private Cloud](https://aws.amazon.com/es/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/)
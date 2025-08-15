---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Network Access Control List
  - NACL
tags:
  - resource
  - cloud
  - certificate
  - aws
created_date: 2025-08-14
---
# Network Access Control List
## Summary
- 
## Key Ideas
### 
- Like firewall which control traffic from and to subnets.
- **One NACL per subnet**, new subnets are assigned the **Default NACL.**
- You define **NACL Rules:**
	- Rules have a number (1-32766), higher precedence with a lower number.
	- First rule match will drive the decision.
	- Example: if you define #100 ALLOW `10.0.0.10/32` and #200 DENY `10.0.0.10/32`, the IP address will be allowed because 100 has a higher precedence over 200.
	- The las rule is an asterisk (\*) and denies a request in case of no rule match.
	- AWS recommends adding rules by increment of 100.
- Newly created NACLs will deny everything.
- NACL are a greate way of blocking a specific IP address at the subnet level.
### Default NACL
- Accepts everything inbound/outbound with the subnets it's associated with
![[1755214530-network-access-control-list.webp]]

### Ephemeral Ports
- For any two endpoints to establish a connection, they must use ports.
- Clients connect to a **defined port**, and expect a response on an **ephemeral port.**
- Different Operating Systems use different port ranges, examples:
	- IANA & MS Windows 10 -> 49152-65535.
	- Many Linux Kernels -> 32768-60999.
![[1755214530-network-access-control-list-1.webp]]

### NACL with Ephemeral Ports
![[1755214530-network-access-control-list-2.webp]]

### Create NACL rules for each target subnets CIDR
![[1755214530-network-access-control-list-3.webp]]

### Security Group vs NACLs
![[1755214530-network-access-control-list-4.webp]]











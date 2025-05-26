---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Security Groups & Classic Ports Overview
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/05/26
---
# Security Groups & Classic Ports Overview
## Summary
- 
## Key Ideas
### Introduction to Security Groups.
- They control how traffic is allowed into or out of our EC2 instances.
- Security groups only contain allow rules.
- Security groups rules can reference by IP or by security group.
![[1748283223-security-groups-&-classic-ports-overview.webp]]
#### What do Security Groups regulate?
- Access to Ports.
- Authorized IP ranges - IPv4 and IPv6.
- Control of inbound network (from other to the instance).
- Control of outbound network (from the instance to the other)
#### Security Groups Diagram
![[1748283223-security-groups-&-classic-ports-overview-1.webp]]
#### Classic Ports to know
- 22 = SSH (secure shell) - log into a Linux instance.
- 21 = FTP (file transfer protocol) - upload into a file share.
- 22 = SFTP (secure file transfer protocol) - upload files using SSH.
- 80 = HTTP - Access unsecured websites.
- 443 = HTTPS - Access secured websites.
- 3389 = RDP (Remote Desktop Protocol) - Log into a Windows instance.



## Related Links
- [[]]
## Source
[text](url) 
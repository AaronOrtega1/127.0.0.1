---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Route 53
tags:
  - Knowledge
  - cloud
  - aws
  - certificate
created_date: 2025/06/20
---
# Route 53 Overview
## Summary
- 
## Key Ideas
### What is Route 53?
- A highly available, scalable, fully managed and *Authoritative* [[1750461147-what-is-a-dns?|DNS]].
	- Authoritative: the customer (you) can update the DNS records.
- Is also a Domain Registrar.
### Records
- They define how you want to route traffic for a domain.
- Each contain:
	- **Domain/subdomain Name**
	- **Record Type**
	- **Value**
	- **Routing Policy**
	- **TTL**
- Types supported by Route 53:
	- A/AAAA/CNAME/NS. (must know)
	- CAA/DS/MX/NAPTR/PTR/SOA/TXT/SPF/SRV. (advanced)
### Record types (must know)
- **A** - maps a hostname to IPv4.
- **AAAA** - maps a hostname to IPv6.
- **CNAME** - maps a hostname to another hostname.
	- The target is a domain name which must have an A or AAAA record.
- **NS** - Name Servers for the Hosted Zone.
### Hosted Zones
- Is a container for records that define how to route traffic to a domain and its subdomains.
- **Public Hosted Zones** - contains records that specify how to route traffic on the Internet (public domain names).
- **Private Hosted Zones** - contain records that specify how to route traffic within one or more VPCs (private domain names).
### Public vs Private Hosted Zones
![[1750461685-route-53-overview.webp]]
## Related Links
- [[1750785569-routing-policies-(simple)|Routing Policies (simple)]]
- [[1750786366-routing-policies-(weighted)|Routing Policies (weighted)]]
- [[1750787796-routing-policies-(latency-based)|Routing Policies (latency-based)]]
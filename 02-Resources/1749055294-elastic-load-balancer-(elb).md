---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Elastic Load Balancer (ELB)
  - ELB
tags:
  - resource
  - aws
  - cloud
  - certificate
  - ELB
created_date: 2025/06/04
---
# Elastic Load Balancer (ELB)
## Summary
- 
## Key Ideas
### What is load balancing?
- Servers that forward traffic to multiple servers (e.g., EC2 instances) downstream
![[1749055294-elastic-load-balancer-_elb_.webp]]
### Why use a load balancer?
- **Spread load** across multiple downstream instances.
- **Expose a single point** of access (DNS) to your application.
- **Seamlessly** handle failures of downstream instances.
- **Regular health checks** to the instances.
- Provide SSL termination **(HTTPS)** for your websites.
- Enforce **stickiness** with cookies.
- [[1749053894-scalability-and-high-availability|High availability]] across zones.
- **Separate** public traffic from private traffic.
### Health Checks
- Are crucial for Load Balancers.
- They enable the load balancer to know **if instances** it forwards traffic to **are available to reply** to request.
- The **health check is done on a port and a route** (/health is common).
- If the response is not **200 (OK)**, then the instance is unhealthy.
![[1749055294-elastic-load-balancer-_elb_-1.webp]]
### Types of load balancer on AWS.
- **Classic Load Balancer** (v1-old generation) - 2009 - CLB **(Deprecated)**
	- HTTP, HTTPS, TCP,SSL (secure TCP).
- [[1749061609-application-load-balancer-(alb)|Application Load Balancer]] (v2-new generation) - 2016 - ALB
	- HTTP, HTTPS, WebSocket
- **Network Load Balancer** (v2-new generation) - 2017 - NLB
	- TCP, TLS (Secure TCP), UDP
- **Gateway Load Balancer** - 2020 - GWLB
	- Operates at [[1749058503-osi-model#^Layer3|layer 3]] (Network Layer) - IP protocol.
- Recommended to use newer load balancers because they provide more features.
- Can be setup as **internal** (private) or **external** (public) ELBs.
### Load Balancer [[1748283223-security-groups-&-classic-ports-overview|Security Groups]].
![[1749055294-elastic-load-balancer-_elb_-2.webp]]
## Related Links
- [[1749058503-osi-model|OSI Model]]
## Source
[text](url) 
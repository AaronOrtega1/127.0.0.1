---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Application Load Balancer
  - ALB
tags:
  - resource
  - aws
  - cloud
  - certificate
  - ALB
created_date: 2025/06/04
---
# Application Load Balancer (ALB)
## Summary
- 
## Key Ideas
### What is an Application Load Balancer?
- Is a [[1749058503-osi-model#^Layer7|layer 7]] (HTTP)
- Load balancing to multiple HTTP applications across machines (target groups).
- Routing tables to different target groups:
	- Based on path in URL.
	- Based on hostname in URL (one.example.com & other.example.com).
	- Based on Query String, Headers (example.com/users?id=123&order=false).
- Great for micro services & container-based application **(Docker & Amazon ECS)**.
- Port mapping feature to redirect to a dynamic port in the ECS.
- The application servers don't see the IP of the client directly.
	- The true IP of the clients is in the header **X-Forwarded-For**
	- The port is in **X-Forwarded-Port** and the protocol in **X-Forwarded-Proto**
![[1749061609-application-load-balancer-_alb_-2.webp]]
### HTTP Based Traffic
![[1749061609-application-load-balancer-_alb_.webp]]
### Target Groups
- EC2 instances (can be managed by Auto Scaling Group) - HTTP
- ECS tasks (managed by ECS itself) - HTTP
- Lambda functions - HTTP request is translated into a JSON event.
- IP Addresses - must be private IPs.
### Query Strings/Parameters Routing
![[1749061609-application-load-balancer-_alb_-1.webp]]


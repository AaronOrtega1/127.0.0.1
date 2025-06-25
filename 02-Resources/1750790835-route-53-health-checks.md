---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Route 53 Health Checks
tags:
  - resource
  - aws
  - certificate
  - cloud
created_date: 2025/06/24
---
# Route 53 Health Checks
## Summary
- 
## Key Ideas
### How does it work?
- HTTP Health Checks are only for **public resources**.
- Health Check => Automated DNS Failover:
	- Health Checks that **monitor an endpoint** (application, server, other AWS resource).
	- Health Checks that **monitor other health checks** (Calculated Health Checks).
	- Health Checks that **monitor [[CloudWatch]] Alarms** (full control and helpful for private resources). 
- Are integrated with [[CloudWatch]] metrics.
### Monitor an Endpoint
- **15 global health checkers will check the endpoint health**
	- Healthy/Unhealthy Threshold - 3 (default).
	- Interval - 30 sec (can set to 10 sec - higher cost).
	- Supported protocol: HTTP, HTTPS and TCP.
	- **If > 18%** of health checkers report the endpoint is healthy, Route 53 considers it **Healthy**. Otherwise, it's **Unhealthy**.
	- Pass only when the endpoint responds with 2xx and 3xx status codes.
	- Can be setup to pass/fail based on the text in the first **5120 bytes** of the response.
	- Configure your router/firewall to allow incoming request from Route 53 Health Checkers.
![[1750790835-route-53-health-checks.webp|400]]
### Calculated Health Checks
- Combine the results of **multiple Health Checks** into a single Health Check.
- You can use **OR, AND, or NOT**.
- Can monitor up to 256 Child Health Checks.
![[1750790835-route-53-health-checks-1.webp]]
### Private Hosted Zones
- Route 53 health checkers are outside the VPC.
- They can't access **private endpoints**.
- Can create a [[CloudWatch]] metric and associate a CloudWatch Alarm, then create a Health Check that checks the alarm itself.
![[1750790835-route-53-health-checks-2.webp]]

---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Blocking an IP Address in AWS
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# Blocking an IP Address in AWS
## Blocking IPs in AWS
- Scenario: **EC2 instance** in a **public subnet** accessed by a client.
![[1755700268-blocking-an-ip-address-in-aws-1.webp]]
- **Defense layers**:
  1. **Network ACL ([[1755214530-network-access-control-list|NACL]])**  
     - First line of defense at subnet level.  
     - Supports both **allow** and **deny** rules.  
     - Example: Block a specific IP at subnet boundary.
  2. [[1748283223-security-groups-&-classic-ports-overview|Security Groups]]
     - Second line of defense at instance level.  
     - **Stateful**: only has **allow rules** (no deny rules).  
     - Typically allow only known client IPs.  
  3. **Host-based firewall ([[1748020848-ec2-basics|EC2]] instance)**  
     - Optional, software-based firewall (e.g., iptables).  
     - Offers **fine-grained control** but adds **CPU overhead**.  

## Using Load Balancers for Security
![[1755700268-blocking-an-ip-address-in-aws-2.webp]]
- Architecture: **NACL → [[1749061609-application-load-balancer-(alb)|ALB]] (public subnet) → [[1748020848-ec2-basics|EC2]] (private subnet)**  
  - **Application Load Balancer (ALB)** terminates client connections.  
  - **EC2** sits in a private subnet with **private IP**.  
  - **Security Group** for EC2: allow only traffic from ALB.  
  - Security can be applied at:
    - **ALB level** (via Security Group or [[1754608510-aws-waf|WAF]]).  
    - **NACL level** (subnet-level allow/deny).  
- Same applies for **Network Load Balancer ([[1749583045-network-load-balancer-(nlb)|NLB]])**.  

## Web Application Firewall (WAF)
![[1755700268-blocking-an-ip-address-in-aws-3.webp]]
- Can be attached to **ALB** or [[1751474216-cloudfront-overview|CloudFront]].  
- Provides features beyond IP blocking:
  - IP address filtering.  
  - Protection against common web exploits (SQL injection, XSS).  
  - Rate limiting.  
- Trade-off: **extra cost** for WAF, but more control and protection.  

## CloudFront + Security
![[1755700268-blocking-an-ip-address-in-aws-4.webp]]
- **CloudFront** distributes traffic from **edge locations** to ALB.  
- Important implications:
  - **Clients do not hit NACL directly**, only CloudFront does.  
  - Must configure **Security Group** to allow CloudFront's public IPs.  
  - Can apply **Geo Restriction** to block requests from specific countries.  
  - **WAF at CloudFront level** can filter/inspect requests globally.  

## Key Takeaways
- **Defense in depth**: Multiple layers protect AWS resources.  
- Placement of rules depends on **traffic path**:
  - **NACL** → subnet level filtering.  
  - **Security Group** → instance/load balancer level.  
  - **Host firewall** → fine-grained control, higher cost.  
  - **WAF** → advanced application-level filtering at ALB/CloudFront.  
- **Best practice**: Draw out the **network traffic flow** to determine where to enforce rules.
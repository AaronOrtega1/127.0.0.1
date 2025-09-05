---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudFront Overview
  - CloudFront
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - CloudFront
created_date:
  2025-07-02
---
# CloudFront Overview
## Summary
- 

## Key Ideas
### What is CloudFront?
- Content Delivery Network (CDN).
- **Improves read performance, content is cached at the edge.**
- 216 Points of Presence globally (edge locations).
- DDoS protection (because worldwide), integration with Shield, AWS Web Application Firewall.
![[1751474216-cloudfront-overview.webp]]

### Origins
- "Backends" you want to connect to:
  - **S3 bucket:**
    - For distributing files and caching them at the edge.
    - For uploading files to [[1751042472-s3-overview|S3]] through CloudFront.
    - Secured using Origin Access Control (OAC).
  - **VPC Origin:**
    - For applications hosted in [[VPC]] private subnets.
    - Application Load Balancer ([[1749061609-application-load-balancer-(alb)|ALB]]) / Network Load Balancer ([[1749583045-network-load-balancer-(nlb)|NLB]]) / [[1748020848-ec2-basics|EC2 Instances]].
  - **Custom Origin (HTTP):**
    - S3 website (must first enable the bucket as a static S3 website).
    - Any public HTTP backend you want.

### CloudFront at a high level.
![[1751474216-cloudfront-overview-1.webp]]

### CloudFront vs S3 Cross Region Replication
- CloudFront:
  - Global Edge network.
  - Files are cached for a TTL (maybe a day).
  - **Great for static content that must be available everywhere.**
- S3 Cross Region Replication:
  - Must be setup for each region you want replication to happen.
  - Files are updated in near real-time.
  - Read only.
  - **Great for dynamic content that needs to be available at low-latency in few regions.**

## Related Links
- [[1751478129-cloudfront-alb-or-ec2-as-an-origin|CloudFront ALB or EC2 As An Origin]]

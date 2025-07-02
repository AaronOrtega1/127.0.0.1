---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Global Accelerator
tags:
  - resource
  - aws
  - cloud
  - certificate
  - CloudFront
created_date:
  2025-07-02
---
# Global Accelerator
## Summary
- 

## Key Ideas
### Unicast IP vs Anycast IP
- **Unicast IP:** one server holds one IP address.
- **Anycast IP:** all servers hold the same IP address and the client is routed to the nearest one.

### How does Global Accelerator work?
- Leverage the AWS internal network to route to your application.
- 2 Anycast IP are created for your application.
- The Anycast IP sends traffic directly to edge locations.
- The edge locations send the traffic to your application.
- Works with **Elastic IP, EC2 instances, ALB, NLB, public or private.**

#### Consistent Performance
- Intelligent routing to lowest latency and fast regional failover.
- No issue with client cache (The IP doesn't change).
- Internal AWS network.

#### Health Checks
- Global Accelerator performs a health check of your applications.
- Helps make your application global (failover less than 1 minute for unhealthy).
- Greate for disaster recovery

#### Security
- Only 2 external IP need to be whitelisted.
- DDoS protection thanks to AWS Shield.

### Global Accelerator vs [[1751474216-cloudfront-overview|CloudFront]]
- Both use the AWS global network and its edge locations.
- Both services integrate with AWS Shield for DDoS protection.

- **CloudFront:**
  - Improves performance for both cacheable content (such as img and videos).
  - Dynamic content (such as API acceleration and dynamic site delivery).
  - Content is served at the edge.

- **Global Accelerator:**
  - Improves performance for a wide range of applications over TCP or UDP.
  - Proxying packets at the edge to application running in one or more AWS Regions.
  - Good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP.
  - Good for HTTP use cases that require static IP addresses.
  - Good for HTTP use cases that require deterministic, fast regional failover.


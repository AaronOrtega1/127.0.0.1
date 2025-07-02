---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Cname Vs Alias
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/06/24
---
# CNAME Vs Alias
## Summary
- 
## Key Ideas
### CNAME
- Points a hostname to any other hostname.
- Only for non root domain (aka. **something.mydomain.com**).
### Alias
- Points a hostname to an AWS Resource (app.mydomain.com => blabla.amazonaws.com)
- Works for ROOT DOMAIN and NON ROOT DOMAIN (aka. **mydomain.com**)
- Free of charge, and native healthcheck.
### Alias Records
- Automatically recognizes changes in the resource's IP addresses.
- Can be used for the top node of DNS namespace, e.g.:example.com
- Always of type A/AAAA for AWS resources (IPv4/IPv6).
- Can't set the TTL.
#### Targets
- [[1749055294-elastic-load-balancer-(elb)|Elastic Load Balancer (ELB)]]
- [[1751474216-cloudfront-overview|CloudFront]]
- API Gateway
- Elastic Beanstalk environments
- S3 Websites
- VPC Interface Endpoints
- Global Accelerator accelerator
- Route 53 record in the same hosted zone
- **Cannot set an Alias record for an EC2 DNS name**

## Related Links
- [[]]
## Source
[text](url) 

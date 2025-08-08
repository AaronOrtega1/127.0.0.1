---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Certificate Manager
  - Certificate Manager
  - ACM
tags:
  - resource
  - ACM
  - aws
  - certificate
  - cloud
  - AWS_Security
created_date: 2025-08-07
---
# AWS Certificate Manager
## Summary
- 
## Key Ideas
### What is ACM used for?
- Easily provision, manage, and deploy **TLS Certificates.**
- Provide in-flight encryption for websites (HTTPS)
- Supports bot public and private TLS certificates.
- Free of charge for public TLS certificates.
- Automatic TLS certificate renewal.
- Integrations with (load TLS certificates on)
	- [[1749055294-elastic-load-balancer-(elb)|Elastic Load Balancer ]] (CLB, [[1749061609-application-load-balancer-(alb)|ALB]], [[1749583045-network-load-balancer-(nlb)|NLB]]).
	- [[1751474216-cloudfront-overview|CloudFront]] Distributions.
	- [[1752081958-api|APIs]] on [[1752812933-api-gateway-overview|API Gateway]]
- Cannot use ACM with [[1748020848-ec2-basics|EC2]] (can't be extracted).
![[1754601986-aws-certificate-manager.webp]]

### Requesting Public Certificates
- List domain names to be included in the certificate.
	- Fully Qualified Domain Name (FQDN): corp.example.com
	- Wildcard Domain: *\.example.com
- **Select Validation Method: DNS Validation or Email validation**
	- DNS validation is preferred for automation purposes.
	- Email validation will send emails to contact addresses in the WHOIS database.
	- DNS validation will leverage a CNAME record to DNS config (ex: [[1750461685-route-53-overview|Route 53]]).
- It will take a few hours to get verified.
- The public certificate will be enrolled for automatic renewal.
	- ACM automatically renews ACM-generated certificates 60 days before expiry.

### Importing Public Certificates
- Option to generate the certificate outside of ACM and then import it.
- **No automatic renewal**, must import a new certificate before expiry.
- **ACM sends daily expiration events** starting 45 days prior to expiration
	- The # of days can be configured.
	- Events are appearing in [[1754417774-amazon-eventbridge|EventBridge]]
- [[1754441385-aws-config|AWS Config]] has a managed rule named *acm-certificate-expiration-check* to check for expiring certificates (configurable number of days).
![[1754601986-aws-certificate-manager-1.webp]]

### Integration with [[1749061609-application-load-balancer-(alb)|ALB]]
![[1754601986-aws-certificate-manager-2.webp]]

### Integration with [[1752812933-api-gateway-overview|API Gateway]]
- Crete a Custom Domain Name in API Gateway
- **Edge-Optimized (default):** For global clients
	- Requests are routed through the [[1751474216-cloudfront-overview|CloudFront]] edge locations (improves latency).
	- The API Gateway still lives in only one region.
	- **The TLS Certificate must be in the same region as Cloudfront.**
	- Then setup CNAME or (better) A-Alias record in Route 53.
![[1754601986-aws-certificate-manager-3.webp]]
- **Regional:**
	- For clients within the same region.
	- **The TLS Certificate must be imported on API Gateway, in the same region as the API Stage.**
	- Then setup CNAME or (better) A-Alias record in Route 53.
![[1754601986-aws-certificate-manager-4.webp]]




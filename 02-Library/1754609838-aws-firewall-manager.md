---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - AWS Firewall Manager
tags:
  - Knowledge
  - aws
  - certificate
  - cloud
  - AWS_Security
created_date:
  "2025-08-07"
---
# AWS Firewall Manager
## Summary
### What is used for?
- **Manage rules in all accounts of [[1754499762-aws-organizations|AWS Organizations]].**
- Security policy: common set of security rules.
	- [[1754608510-aws-waf|AWS WAF]] rules ([[1749061609-application-load-balancer-(alb)|ALB]], [[1752812933-api-gateway-overview|API Gateway]], [[1751474216-cloudfront-overview|CloudFront]]).
	- [[1754609307-aws-shield#^Advanced|AWS Shield Advanced]] (ALB, CLB, [[1749583045-network-load-balancer-(nlb)|NLB]], Elastic IP, CloudFront).
	- Security groups for [[1748020848-ec2-basics|EC2]], ALB, [[1748545140-elastic-network-interfaces-(eni)|ENI]] resources in [[1753149747-vpc-cheat-sheet|VPC]].
	- AWS Network Firewall (VPC Level).
	- Amazon [[1750461685-route-53-overview|Route 53]] resolve [[1750461147-what-is-a-dns?|DNS]] firewall.
	- Policies are created at the region leve.
- **Rules are applied to new resources as they are created (good for compliance) across all and future accounts in your Organization.**

### WAF vs. Firewall Manager vs. Shield
![[1754609838-aws-firewall-manager.webp]]



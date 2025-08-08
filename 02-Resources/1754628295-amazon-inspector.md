---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon Inspector
tags:
  - resource
  - aws
  - certificate
  - cloud
  - Inspector
created_date:
  "2025-08-07"
---
# Amazon Inspector
## Summary
- 
## Key Ideas
### 
- **Automated Security Assessments.**
- **For [[1748020848-ec2-basics|EC2]] instances**
	- Leveraging the **AWS System Manger ([[1754587168-ssm-parameter-store-overview|SSM]]) agent**.
	- Analyze against **unintended network accessibility.**
	- Analyze the **running OS** against **known vulnerabilities.**
- **For Container Images push to Amazon [[1752079313-amazon-ecr|ECR]]**
	- Assessment of container images as they are pushed.
- **For [[1752687705-lambda-overview|Lambda]] functions**
	- Identifies software vulnerabilities in function code and package dependencies.
	- Assessment of functions as they are deployed.
- Reporting & integration with AWS Security Hub.
- Send findings to [[1754417774-amazon-eventbridge|EventBridge]].
![[1754628295-amazon-inspector.webp]]

### What does Amazon Inspector evaluate?
- **Remember: only for EC2 instances, Container Images & Lambda functions.**
- Continuous scanning of the infrastructure, only when needed.
- Package vulnerabilities (EC2, ECR & Lambda) - database of CVE.
- Network reachability (EC2).
- A risk score is associated with all vulnerabilities for prioritization.




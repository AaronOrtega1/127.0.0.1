---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Elastic Beanstalk
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/06/25
---
# Elastic Beanstalk
## Summary
- 
## Key Ideas
### Typical architecture: Web App 3-tier
![[1750884621-elastic-beanstalk.webp]]
### What is Elastic Beanstalk?
- A developer centric view of deploying an application on AWS.
- It uses all the components.
- Managed service.
	- Automatically handles capacity provisioning, load balancing, scaling, application health monitoring, instance conf,...
- Still have full control over the configuration.
- Free but you pay the instances.
### Components
- **Application**: collection of Elastic Beanstalk components.
- **Application Version**: iteration of your application code
- **Environment**:
	- Collection of AWS resources running an application version.
	- **Tiers**: Web Server Environment Tier & Worker Environment Tier
	- Can Create multiple environments (dev, test, prod, ...)
![[1750884621-elastic-beanstalk-1.webp]]
### Supported Platforms
![[1750884621-elastic-beanstalk-2.webp]]
### Web Server Tier vs Worker Tier
![[1750884621-elastic-beanstalk-3.webp]]
#### Worker
- Scale based on the number of SQS messages.
- Can push messages to SQS queue from another Web Server Tier.
### Elastic Beanstalk Deployment Modes
![[1750884621-elastic-beanstalk-4.webp]]
## Related Links
- [[]]

---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Connection Draining
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date:
  "2025/06/13"
---
# Connection Draining
## Summary
- 
## Key Ideas
- Connection Draining - for **CLB**
- De-registration Delay - for [[1749061609-application-load-balancer-(alb)|ALB]] & [[1749583045-network-load-balancer-(nlb)|NLB]]
### What does it do?
- Give time to complete "in-flight requests" while the instance is de-registering or unhealthy.
- Stops sending new requests to the [[1748020848-ec2-basics|EC2]] instances which is de-registering.
### Config
- Between 1 to 3600 seconds (default:300 seconds)
- Can be disabled.
- Set to low values if your requests are short.
![[1749840627-connection-draining.webp]]
## Related Links
- [[]]
## Source
[text](url) 
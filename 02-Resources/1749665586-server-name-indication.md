---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Server Name Indication
  - SNI
tags:
  - resource
  - aws
  - cloud
  - SNI
  - SSL
  - certificate
created_date: 2025/06/11
---
# Server Name Indication
## Summary
- 
## Key Ideas
### Server Name Indication (SNI)
- Solves the problem of loading **multiple SSL certificates** onto one web server.
- Requires the client to **indicate** the hostname of the target server in the initial SSL handshake.
- The server will then find the correct certificate, or return the default one.

>[!info] Note
>Only works for [[1749061609-application-load-balancer-(alb)|ALB]] & [[1749583045-network-load-balancer-(nlb)|NLB]] (newer gen), [[1751474216-cloudfront-overview|CloudFront]].
>Does not work for CLB (older gen)

![[1749665586-server-name-indication.webp]]

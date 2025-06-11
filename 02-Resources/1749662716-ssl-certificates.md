---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Ssl Certificates
tags:
  - resource
  - aws
  - SSL
  - cloud
  - certificate
created_date: 2025/06/11
---
# SSL Certificates
## Summary
- 
## Key Ideas
### What does a SSL Certificate does?
- Allows traffic between your clients and your load balancer to be encrypted in transit (in-flight encryption).
### What does SSL and TLS stand for?
- SSL refers to **Secure Sockets Layer**, used to encrypt connections.
- TLS refers to **Transport Layer Security**, which is a newer version.
- **TLS certificates are mainly used**, but people still refer as SSL.
### How It Works?
![[1749662716-ssl-certificates.webp]]
- The load balancer uses a X.509 certificate (SSL/TLS server certificate).
- You can manage the certificates using ACM (AWS Certificate Manager).
- You can create/upload your own certificates alternatively.
- HTTPS listener:
	- Must specify a default certificate.
	- Optionally you can add a list of certs to support multiple domains.
	- **Clients can use [[1749665586-server-name-indication|SNI]] (Server Name Indication) to specify the hostname they reach.**
	- Ability to specify a security policy to support older versions of SSL/TLS (legacy clients).

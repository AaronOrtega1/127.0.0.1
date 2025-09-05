---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - ElastiCache For Solution Architect
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025/06/18
---
# ElastiCache For Solution Architect
## Summary
- 
## Key Ideas
### ElastiCache - Cache Security
- Supports **[[1747859818-iam-intro-users-groups-policies|IAM]] Authentication for Redis**.
- IAM policies on ElastiCache are only used for AWS API-level security.
- Redis AUTH
	- You can set a "password/token" when you create a Redis cluster.
	- This is an extra level of security for your cache (on top of [[1748283223-security-groups-&-classic-ports-overview|Security Groups]]).
	- Support [[1749662716-ssl-certificates|SSL]] in flight encryption.
- Memcached
	- Supports SASL-based authentication (advanced).
![[1750287239-elasticache-for-solution-architect.webp]]
### Patterns for ElastiCache
- **Lazy Loading**: all the read data is cached, data can become stale in cache.
- **Write Through**: Adds or update data in the cache when written to a DB (no stale data)
- **Session Store**: store temporary session data in a cache (using TTL features).

---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Secrets Manager
  - Secrets Manager
tags:
  - resource
  - SecretsManager
  - aws
  - cloud
  - certificate
  - AWS_Security
created_date: 2025-08-07
---
# AWS Secrets Manager
## Summary
- Newer service, meant for storing secrets.
- Capability to force **rotation** every X days.
- Automate generation of secrets on rotation (uses Lambda).
- Integration with [[1750180189-rds-overview|RDS]] (MySQL, [[1754522252-postgresql|PostgreSQL]], [[1750265113-amazon-aurora|Aurora]])
- Secrets are encrypted using [[1748995884-key-management-system|KMS]].
- Mostly meant for RDS integration.

### Multi-region Secrets
- Replicate Secrets across multiple AWS Regions.
- Secrets Manager keeps read replicas in sync with the primary secret.
- Ability to promote a read replica secret to a standalone secret.
- **Use cases:** multi-region apps, disaster recovery strategies, multi-region DB...
![[1754589562-aws-secrets-manager.webp]]


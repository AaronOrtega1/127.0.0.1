---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Lambda Limits
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Lambda
created_date:
  2025-07-16
---
# Lambda Limits
## Summary
- **Execution**
  - Memory allocation: 128 MB - 10 GB (1 MB increments)
  - Maximum execution time: 900 seconds (15 minutes)
  - Environment variables (4 KB)
  - Disk capacity in the "function container" (in /tmp): 512 MB to 10 GB
  - Concurrency executions: 1000 (can be increased) ^LambdaConcurrencyLimit
- **Deployment**
  - Lambda function deployment size (compressed .zip): 50 MB
  - Size of uncompressed deployment (code + dependencies): 250 MB
  - Can use the /tmp directory to load other files at startup
  - Size of environment variables: 4 KB


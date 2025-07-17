---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Lambda
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Lambda
created_date:
  2025-07-16
---
# Lambda Overview
## Summary
- 

## Key Ideas
### What is AWS Lambda?
- Virtual **functions** - no servers to manage!
- Limited by time - **short executions.**
- Run **on-demand.**
- **Scaling is automated!**

### Benefits of AWS Lambda
- Easy Pricing:
  - Pay per request and compute time.
  - Free tier of 1,000,000 requests and 400,000 GBs of compute time.
- Integrated with the whole AWS suite of services.
- Integrated with many programming languages.
- Easy monitoring through AWS [[CloudWatch]].
- Easy to get more resources per functions (up to 10GB of RAM!)
- Increasing RAM will also improve CPU and network!

### Language support
- Node.js (JavaScript)
- Python
- Java
- C# (.NET Core) / Powershell
- Ruby
- Custom Runtime API (community supported, example Rust or Golang)
- Lambda Container Image
  - The container image must implement the Lambda Runtime API.
  - [[1752018964-amazon-ecs|ECS]] / Fargate is preferred for running arbitrary Docker images.

### Pricing
[AWS Lambda Pricing](https://aws.amazon.com/es/lambda/pricing/)

## Related Links
- [[1752691137-lambda-limits|Lambda Limits]]

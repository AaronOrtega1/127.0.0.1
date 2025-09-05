---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - API Gateway
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - APIGateway
created_date:
  2025-07-17
---
# API Gateway Overview
## Summary
- 

## Key Ideas
- [[1752687705-lambda-overview|Lambda]] + API Gateway = No infrastructure to manage.
- Support for WebSocket Protocol.
- Handle API versioning (v1, v2...).
- Handle different environments.
- Handle security (Authentication and Authorization).
- Create API keys, handle request throttling.
- Swagger / Open API import to quickly define APIs.
- Transform and validate request and responses.
- Generate SDK and API specifications.
- Cache [[1752081958-api|API]] responses.

### Integration High Level
- **Lambda Function**
  - Invoke functions.
  - Easy way to expose REST API backed by AWS Lambda.
- **HTTP**
  - Expose HTTP endpoints in the backend.
  - Example: internal HTTP API on premises, [[1749061609-application-load-balancer-(alb)|Application Load Balancer]]...
  - Why? Add rate limiting, caching, user Authentication, API keys, etc...
- **AWS Service**
  - Expose any AWS API through the API Gateway?
  - Example: start an AWS Step Function workflow, post a message to [[1751940872-amazon-sqs-overview|Amazon SQS]].
  - Why? Add authentication, deploy publicly, rate control...

### Endpoint Types
- **Edge-Optimized (default):**
  - For global clients.
  - Request are routed through the [[1751474216-cloudfront-overview|CloudFront]] Edge locations.
  - The API Gateway still lives in only one region.
- **Regional:**
  - For clients within the same region.
  - Could manually combine with CloudFront (more control over the caching strategies and the distribution).
- **Private:**
  - Can only be accessed from your VPC using an interface VPC endpoints (ENI).

### Security
- **User Authentication through**
  - [[1747869134-iam-policies|IAM]] Roles (useful for internal applications).
  - Cognito (identity for external users).
  - Custom Authorizer (your own logic).
- **Custom Domain Name HTTPS** security through integration with AWS Certificate Manager (ACM)
  - If using Edge-Optimized endpoints, then the certificate must be in **us-east-1**.
  - If using Regional endpoint, the certificate must be in the API Gateway region.

## Related Links
- [[]]

## Source
[text]()

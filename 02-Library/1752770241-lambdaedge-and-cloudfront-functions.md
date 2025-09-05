---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Lambda@Edge and CloudFront Functions
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Lambda
created_date:
  2025-07-17
---
# Lambda@Edge and CloudFront Functions
## Summary
- 

## Key Ideas
- Many modern apps execute some form of the logic at the edge.
- **Edge Fucntion:**
  - A code that you write and attach to CloudFront distributions.
  - Runs close to your users to minimize latency.
- [[1751474216-cloudfront-overview|CloudFront]] provides two types: **CloudFront Fucntions & Lambda@Edge**
- Self-managed, deployed globally.
- Use case: customize the [[1752770481-cdn|CDN]] content.
- Pay only for what you use, fully serverless.

### Use Cases
- Website security and privacy.
- Dynamic web application at the edge.
- Search engine optimization (SEO).
- Intelligently route across origins and data centers.
- Bot mitigation at the edge.
- Real-time image transformation.
- A/B testing.
- User authentication and authorization.
- User priorization.
- User tracking and analytics.

### CloudFront Functions
- Lightweight functions written in JavaScript.
- For high-scale, latency-sensitive CDN customization.
- Sub-ms startup times, **millions of request/second.**
- Used to change Viewer request and response:
  - **Viewer Request:** after CloudFront forwards the response.
  - **Viewer Response:** before CloudFront forwards the response to the viewer.
- Native feature of CloudFront (manage code entirely within CloudFront).
![[1752770241-lambdaedge-and-cloudfront-functions.webp]]

### Lambda@Edge
- Lambda functions written in NodeJS or Python.
- Scales to **1000s of request/second.**
- Used to change CloudFront requests and responses:
  - **Viewer Request** - after CloudFront receives a request from a viewer.
  - **Origin Request** - before CloudFront forwards the request to the origin.
  - **Origin Response** - after CloudFront receives the response from the origin.
  - **Viewer Response** - before CloudFront forwards the response to the viewer.
- Author your functions in one AWS region (us-east-1), then CloudFront replicates to its locations.
![[1752770241-lambdaedge-and-cloudfront-functions-1.webp|300]]

### CloudFront Functions vs. Lambda@Edge
![[1752770241-lambdaedge-and-cloudfront-functions-2.webp]]

#### Use Cases
![[1752770241-lambdaedge-and-cloudfront-functions-3.webp]]








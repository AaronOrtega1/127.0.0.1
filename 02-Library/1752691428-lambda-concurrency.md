---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Lambda Concurrency
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Lambda
created_date:
  2025-07-16
---
# Lambda Concurrency
## Summary
- 

## Key Ideas
- [[1752691137-lambda-limits#^LambdaConcurrencyLimit|Concurrency limit]]
- Can set a "reserved concurrency" at the function level (=limit).
- Each invocation over the concurrency limit will trigger a "Throttle". ^EnglishVocab
- Throttle behavior:
  - If synchronous invocation => return ThrottleError - 429.
  - If asynchronous invocation => retry automatically and then go to DLQ.
- If you need a higher limit, open a support ticket.

### Concurrency Issue
- If you don't reserve (=limit) concurrency, and all the concurrency limit is reached in one application, the rest will throttle.
- In a asynchronous invocation, if the function doesn't have enough concurrency, Lambda returns the event to the queue and attempts to run the function again for up to 6 hours.

### Cold Starts & Provisioned Concurrency
- Cold Start
  - New instance => code is loaded and code outside the handler run (init).
  - If the init is large (code, dependencies, SDK...) this process can take some time.
  - First request served by new instances has higher latency than the rest.
- Provisioned Concurrency
  - Concurrency is allocated before the function is invoked (in advance).
  - So the cold start never happens and all invocations have low latency.
  - Application Auto Scaling can manage concurrency (schedule or target utilization).


---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudWatch Metrics
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - CloudWatchMetrics
created_date:
  2025-08-02
---
# CloudWatch Metrics
## Summary
- 

## Key Ideas
### What is CloudWatch Metrics?
- Provides metrics for every service in AWS.
- **Metric** is a variable to monitor (CPUUtilization, NetworkIn...)
- Metrics belong to **namespaces.**
- **Dimension** is an attribute of a metric (instance id, environment, etc...).
- Up to 30 dimensions per metric.
- Metrics have **timestamps.**
- Can create CloudWatch dashboards of metrics.
- Can create **CloudWatch Custom Metrics** (for the RAM for example).

### Streams
- Continually stream CloudWatch metrics to a destination of your choice, with **near-real-time delivery** and low latency.
  - [[1752004131-amazon-data-firehose|Amazon Data Firehose]] (and then its destinations).
  - 3rd party service provider: Datadog, Dynatrace, New Relic, Splunk, Sumo Logic...
- Option to **filter metrics** to only stream a subset of them.
![[1754166071-cloudwatch-metrics.webp]]


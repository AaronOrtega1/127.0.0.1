---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Routing Policies (weighted)
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025/06/24
---
# Routing Policies (weighted)
## Summary
- 
## Key Ideas
### How does it work?
- Control the % of the request to go to each specific resource.
- Assign each record a relative weight:
	- Weights don't need to sum up to 100
>[!math] 
>$$
>traffic(\%)= \frac{Weight\ for\ a\ specific\ record}{Sum\ of\ all\ the\ weights\ for\ all\ records}
>$$
- DNS records must have the same name and type.
- Can be associated with health checks.
- **Use cases:** Load balancing between regions, testing new application versions...
- **Assign a weight of 0 to a record to stop sending traffic to a resource.**
- **If all record have weight of 0, then all records will be returned equally.**
## Related Links
- [[1750785569-routing-policies-(simple)|Routing Policies (simple)]]
- [[1750787796-routing-policies-(latency-based)|Routing Policies (latency-based)]]
## Source
[text](url) 
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Spot Instances & Spot Fleet
  - Spot Fleet
  - Spot Instances
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025/05/26
---
# Spot Instances & Spot Fleet
## Summary
- 
## Key Ideas
### Spot Instance ^Spot
#### EC2 Spot Instance Requests
- Define **max spot price** and get the instance while **current spot price < max**.
	- Hourly spot price varies based on offer and capacity.
	- If the **current spot price > max** you can **stop** or **terminate** your instance.
- Other strategy: **Spot Block** (no longer available to new AWS customers at the moment).
	- "block" spot instance during a specified time frame (1 to 6 hours) without interruptions.
	- In rare situations, the instance may be reclaimed.
- Used for batch jobs, data analysis, or workloads that are resilient to failures.
- **Not great** for critical jobs or databases.
#### How to terminate Spot Instances?
![[1748304707-spot-instances-&-spot-fleet.webp]]
- Can only cancel Spot Instance request that are **open, active or disabled**.
- *Cancelling a Spot Request does not terminate instances*
- You must **first cancel** a Spot Request, **and then terminate** the associated Spot Instances.
### Spot Fleets
- Set of Spot Instances + (optional) On-Demand Instances.
- The Spot Fleet will try to meet the target capacity with price constraints.
	- Define possible launch pools: **instance type, OS, AZ**.
	- Can have multiple launch pools, so that the fleet can choose.
	- Spot Fleet stops launching instances when reaching capacity or max cost.
- Strategies to allocate Spot Instances:
	- **lowestPrice**. (cost optimization, short workloads).
	- **diversified**: distributed across all pools (great for availability, long workloads).
	- **capacityOptimized**: pool with the optimal capacity for the number of instances.
	- **priceCapacityOptimized (recommended)**: pools with highest capacity available, then select the pool with lowest price (best choice for most workloads).
- **Spot Fleets allow us to automatically request Spot Instances with the lowest price**
## Related Links
- [[]]
## Source
[text](url) 
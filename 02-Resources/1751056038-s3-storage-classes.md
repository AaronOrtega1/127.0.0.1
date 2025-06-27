---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Storage Classes
tags:
  - resource
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-06-27
---
# S3 Storage Classes
## Summary
- 
## Key Ideas
### What different classes do we have for Amazon S3?
- Amazon S3 Standard - General purpose.
- Amazon S3 Standard-Infrequent Access (IA).
- Amazon S3 One Zone-Infrequent Access.
- Amazon S3 Glacier Instant Retrieval.
- Amazon S3 Glacier Flexible Retrieval.
- Amazon S3 Glacier Deep Archive.
- Amazon S3 Intelligent Tiering.

>[!info] Notes:
>- Can move between classes manually or using S3 Lifecycle configurations.

### Durability and Availability
- Durability:
  - High Durability (99.999999999%, 11 9's) of objects across multiple [[1747858683-aws-availability-zone|AZ]].
  - If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years.
- Availability:
  - Measures how readily available a service is.
  - Varies depending on storage class.
  - Example: S3 standard has 99.99% availability = **not available 53 min a year**.

#### General Purpose
- 99.99% Availability.
- Used for frequently accessed data.
- Low latency and high throughput.
- Sustain 2 concurrent facility failures.
- **Use Cases:** Big Data analytics, mobile & gaming applications, content distribution...

#### Infrequent Access
- For data that is less frequently accessed, but requires rapid access when needed.
- Lower cost than S3 Standard.

##### Standard-Infrequent Access (S3 Stardar-IA)
- 99.9% Availability
- **Use Cases:** Disaster Recovery, backups.

##### One Zone-Infrequent Access (S3 One Zone-IA)
- High Durability (99.999999999%) in a single AZ; data lost when AZ is destroyed.
- 99.5% Availability.
- **Use Cases:** Storing secondary backup copies of on-premise data, or data you can recreate.

#### Glacier Storage
- Low-cost object storage meant for archiving/backup.
- Pricing: price for storage + object retrieval cost.

##### Glacier Instant Retrieval
- Millisecond retrieval, great for data accessed once a quarter.
- Minimum storage duration of 90 days.

##### Glacier Flexible Retrieval (formerly Amazon S3 Glacier)
- Expedited (1 to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) --- free.
- Minimum storage duration of 90 days.

##### Glacier Deep Archive
- Standard (12 hours), Bulk (48 hours).
- Minimum storage duration of 180 days.

#### Intelligent-Tiering
- Small monthly monitoring and auto-tiering fee.
- Moves objects automatically between Access Tiers based on usage.
- There are no retrieval charges in S3 Intelligent-Tiering.

- Frequent Access tier (automatic): default tier.
- Infrequent Access tier (automatic): objects not accessed for 30 days.
- Archive Instant Access tier (automatic): objects not accessed for 90 days.
- Archive Access tier (optional): configurable from 90 to 700+ days.
- Deep Archive Access tier (optional): configurable from 180 to 700+ days.


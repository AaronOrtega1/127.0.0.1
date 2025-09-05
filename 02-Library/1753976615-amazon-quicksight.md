---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon QuickSight
  - QuickSight
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - QuickSight
created_date:
  2025-07-31
---
# Amazon QuickSight
## Summary
- 

## Key Ideas
### What is QuickSight?
- **Serverless machine learning-powered business intelligence service to create interactive dashboards.**
- Fast, automatically scalable, embeddable, with per-session pricing.
- Use cases:
  - Business analytics.
  - Building visualizations.
  - Perform ad-hoc analysis.
  - Get business insights using data.
- Integrated with [[1750180189-rds-overview|RDS]], [[1750265113-amazon-aurora|Aurora]], [[1753469282-amazon-athena|Athena]], [[1753482302-redshift-overview|Redshift]], [[1751042472-s3-overview|S3]]...
- **In-memory computation using SPICE** engine if data is imported into QuickSight.
- Enterprise edition: Possibility to setup Column-Level security (CLS).

### Integration
![[1753976615-amazon-quicksight.webp]]

### Dashboards & Analysis
- Define Users (standard version) and Groups (enterprise version).
  - These users & groups only exist within QuickSight, not IAM!
- A dashboard...
  - Is a read-only snapshot of an analysis that you can share.
  - preserves the configuration of the analysis (filtering, parameters, controls, sort).
- You can share the analysis or the dashboard with Users or Groups.
- To share a dashboard, you must first publish it.
- Users who see the dashboard can also see the underlying data.



---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Redshift Overview
  - Redshift
tags:
  - resource
  - aws
  - cloud
  - certificate
  - redshift
created_date:
  2025-07-25
---
# Redshift Overview
## Summary
- 

## Key Ideas
### What is Redshift?
- Based on PostgreSQL, but it's not used for OLTP.
- It's OLAP - online analytical processing (analytics and [[1748031799-data-warehouse|Data Warehouse]]).
- 10x better performance that other data warehouses, scale to PBs of data.
- **Columnar** storage of data (instead of row based) & parallel query engine.
- Two modes: Provisioned cluster or Serverless cluster.
- Has a SQL interface for performing the queries.
- BI tools such as Amazon Quicksight or Tableau integrate with it.
- **vs Athena:** faster queries / joins / aggregations thanks to indexes.

### Cluster
- Leader node: for query planning, results aggregation.
- Compute node: for performing the queries, send results to leader.
- Provisioned mode:
  - Choose instance types in advance.
  - Can reserve instances for cost savings.
![[1753482302-redshift-overview.webp]]

### Snapshots & DR
- *Redshift has "Multi-AZ" mode for some cluster.*
- Snapshots are point-in-time backups of a cluster, stored internally in S3.
- Snapshots are incremental (only what has changed is saved).
- You can restore a Snapshots into a **new cluster.**
- Automated: every 8 hours, every 5 GB, or on a schedule. Set retention.
- Manual: snapshot is retained until you delete it.
- **You can configure Amazon Redshift to automatically copy snapshots (automated or manual) of a cluster to another AWS Region.**

### Loading data into Redshift
**Large inserts are MUCH better.**
![[1753482302-redshift-overview-1.webp]]

### Redshift Spectrum
- Query data that is already in [[1751042472-s3-overview|S3]] without loading it.
- **Must have a Redshift cluster available to start the query.**
- The query is then submitted to thousand of Redshift Spectrum nodes.
![[1753482302-redshift-overview-2.webp]]


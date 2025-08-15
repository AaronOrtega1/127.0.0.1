---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon Athena
  - Athena
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Athena
created_date:
  2025-07-25
---
# Amazon Athena
## Summary
- 

## Key Ideas
### What is Athena?
- **Serveless** query service to analyze data stored in [[1751042472-s3-overview|S3]].
- Uses standard SQL language to query the files (built on Presto).
- Supports CSV, JSON, ORC, Avro, and Parquet.
- Pricing: $5.00 per TB of data scanned.
- Commonly used with Amazon Quicksight for reporting/dashboards.
- **Use Cases:** Business intelligence/analytics/reporting, analyze & query [[1753149747-vpc-cheat-sheet|VPC]] Flow Logs, [[1749055294-elastic-load-balancer-(elb)|ELB]] Logs, CloudTrail trails, etc...
- **Exam Tip:** analyze data in [[1751042472-s3-overview|S3]] using serverless SQL, use Athena.

### Performance Improvement
- Use **columnar data** for cost-savings (less scan).
  - Apache Parquet or ORC is recommended.
  - Huge performance improvement.
  - Use Glue to convert your data to Parquet or ORC.
- **Compress data** for smaller retrievals (bzip2, gzip, lz4,...).
- **Partition** datasets in [[1751042472-s3-overview|S3]] for easy querying on virtual columns.
  - Example: s3://athena-examples/flight/parquet/year=1991/month=1/day=1/
- **Use larger files** (> 128 MB) to minimize overhead.

### Federated Query
- Allows you to run SQL queries across data stored in relational, non-relational, object, and custom data sources (AWS or on-premises).
- Uses Data Source Connectors that run on AWS Lambda to run Federated Queries (e.g., [[1753150030-cloudwatch-cheat-sheet|CloudWatch]] Logs, [[1752777935-amazon-dynamodb|DynamoDB]], [[1750180189-rds-overview|RDS]])
- Store the results back in Amazon S3.



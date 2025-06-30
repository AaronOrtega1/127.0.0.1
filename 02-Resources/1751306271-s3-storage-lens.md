---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Storage Lens
tags:
  - resource
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-06-30
---
# S3 Storage Lens
## Summary
- 
## Key Ideas
### What is Storage Lens used for?
- Understand, analyze, and optimize storage across entire AWS Organization.
- Discover anomalies, identify cost efficiencies, and apply data protection best practices across entire AWS Organization (30 days usage & activity metrics).
- Aggregate data for Organization, specific accounts, regions, buckets, or prefixes.
- Default dashboard or Create you own dashboards.
- Can be configure to export metrics daily to an S3 bucket (CSV, Parquet).
![[1751306271-s3-storage-lens.webp]]

### Default Dashboard.
- Visualize summarized insights and trends for both free and advanced metrics.
- Default dashboard shows Multi-Region and Multi-Account data.
- Preconfigured by Amazon S3.
- Can't be deleted, but can be disabled.

### Metrics.
- **Summary Metrics.**
  - General insights about your S3 storage.
  - StorageBytes, ObjectCount...
  - **Use cases**: identify the fastest-growing (or not used) buckets and prefixes.
- **Cost-Optimization Metrics.**
  - Provide insights to manage and optimize your storage costs.
  - NonCurrentVersionStorageBytes, IncompleteMultipartUploadStorageBytes...
  - **Use cases**: identify buckets with incomplete multipart uploaded older than 7 days, identify which objects could be transitioned to lower-cost storage class.
- **Data-Protection Metrics.**
  - Provide insights for data protection features.
  - VersioningEnabledBucketCount, MFADeleteEnabledBucketCount, SSEKMSEnabledBucketCount, CrossRegionReplicationRuleCount...
  - Use cases: identify buckets that aren't following data-protection best practices.
- **Access-management Metrics.**
  - Provide insights for S3 objects ownership.
  - objectOwnershipBucketOwnerEnforcedBucketCount...
  - **Use cases**: identify which Object Ownership settings your buckets use.
- **Performance Metrics.**
  - Provide insights for S3 Transfer Acceleration.
  - TransferAccelerationEnabledBucketCount (identify which buckets have S3 Transfer Acceleration enabled).
- **Activity Metrics.**
  - Provide insights about how your storage is requested.
  - AllRequests, GetRequests, PutRequests, ListRequests, BytesDownloaded...
- **Detailed Status Code Metrics**
  - Provide insights for HTTP status codes.
  - 200OKStatusCount, 403ForbiddenErrorCount, 404NotFoundErrorCount...

### Free vs Paid
- **Free metrics**
  - Automatically available for all customers.
  - Contains around 28 usage metrics.
  - Data is available for queries for 14 days.
- **Advanced Metrics and Recommendations**
  - Additional paid metrics and features
  - **Advanced Metrics** - Activity, Advanced Cost-Optimization, Advanced Data-Protection, Status Code.
  - **CloudWatch Publishing** - Access metrics in CloudWatch without additional charges.
  - **Prefix Aggregation** - Collect metrics at the prefix level.
  - Data is available for queries for 15 months.







---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Performance
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-06-30
---
# S3 Performance
## Summary
- 
## Key Ideas
### Baseline Performance
- S3 automatically scales to high request rates, latency 100-200 ms.
- Your app can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD request per prefix in a bucket.
- There is no limit to the number of prefixes in a bucket.
### Multi-Part upload:
- recommended for files > 100MB, must use for files > 5GB.
- Can help parallelize uploads (speed up transfers).
![[1751304527-s3-performance.webp]]
### S3 Transfer Acceleration.
- Increase transfer speed by transferring file to an AWS edge location which will forward the data to the S3 bucket in the target region.
- Compatible with multi-part upload.
![[1751304527-s3-performance-1.webp]]
### S3 Byte-Range Fetches.
- parallelize GETs by requesting specific byte ranges.
- Better resilience in case of failure.
- **Can be used to speed up downloads.**
![[1751304527-s3-performance-2.webp]]
- **Can be used to retreve only partial data (for example the head of a file).**
![[1751304527-s3-performance-3.webp]]



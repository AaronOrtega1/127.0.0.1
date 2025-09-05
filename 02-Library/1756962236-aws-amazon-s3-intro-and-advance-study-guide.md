---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Amazon S3 Intro and Advance
tags:
  - Knowledge
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section12
  - Section13
  - S3
created_date: 2025-09-03
---
# AWS Amazon S3 Intro and Advance Study Guide
## 1. Amazon S3 Fundamentals

*   **Key Features**:
    *   **Infinitely scaling storage** [1].
    *   Stores files as **objects** within **buckets** [2].
    *   **Buckets** are top-level directories, created at the **region level**, but must have a **globally-unique name** across all AWS regions and accounts [2, 3].
    *   Bucket naming conventions: no uppercase, no underscore, 3-63 characters, not an IP, start with lowercase letter/number [3, 4].
    *   **Objects** have a **key** which is the full path of the file (e.g., `myfolder/myfile.txt`), composed of a prefix and an object name [4, 5]. S3 doesn't have true directories, just long keys with slashes [5, 6].
    *   Max object size is **5 terabytes (5,000 GB)** [6].
    *   Files **greater than 5 GB** must use **multi-part upload** [7, 8].
    *   Objects can have **metadata** (key-value pairs) and **tags** (Unicode key-value pairs, up to 10) [7].
    *   Objects may have a **version ID** if versioning is enabled [9].
    *   Amazon S3 has **11 nines of durability** (99.999999999%) across all storage classes, meaning you can expect to lose a single object once every 10,000 years for every 10 million objects stored [10-12].
*   **Use Cases**:
    *   Backup and storage (files, disks) [13].
    *   Disaster recovery (moving data to another region) [13].
    *   Archival purposes (e.g., Nasdaq stores 7 years of data in S3 Glacier) [13, 14].
    *   Hybrid cloud storage [13, 14].
    *   Hosting applications, media (video, images), software updates [14].
    *   Data lakes and big data analytics (e.g., Sysco runs analytics on S3) [2, 14].
    *   Hosting static websites [14, 15].
*   **Pricing Models**:
    *   Generally, pricing depends on storage class, data transfer, and requests [16, 17].

---

## 2. Amazon S3 Bucket Versioning

*   **Key Features**:
    *   A setting you **must enable at the bucket level** [18].
    *   When a file is uploaded, a **version** is created [18]. Overwriting a file creates a new version (version two, version three, etc.) [19].
    *   Protects against **unintended deletes**: Deleting a file adds a **delete marker**, allowing previous versions to be restored [19].
    *   Allows easy **rollback to a previous version** [19, 20].
    *   Files uploaded **before enabling versioning** will have a **null version** [20].
    *   **Suspending versioning** does not delete previous versions, making it a safe operation [20].
*   **Use Cases**:
    *   Protecting data from accidental deletions or overwrites [19].
    *   Maintaining historical versions of files for compliance or recovery [19, 21].
*   **Pros/Cons**:
    *   **Pros**: Enhanced data protection, easy recovery, supports compliance [19].
    *   **Cons**: Multiple versions consume more storage, increasing costs.
*   **Pricing Models**:
    *   Storage costs apply to all versions of objects stored [21].

---

## 3. Amazon S3 Security

*   **Key Features**:
    *   **User-Based Security**: **IAM policies** authorize which API calls an IAM user can make [22, 23].
    *   **Resource-Based Security**:
        *   **S3 Bucket Policies**: **Bucket-wide rules** assigned directly from the S3 console, based on **JSON documents** [22, 24, 25]. They specify a `resource` (bucket/objects), `effect` (Allow/Deny), `action` (API calls), and `principal` (account/user) [26, 27].
        *   **Object Access Control Lists (ACLs)**: Finer-grain security, can be disabled [24].
        *   **Bucket ACLs**: Less common, can be disabled [24].
    *   **Encryption keys**: Encrypts objects in S3 [25].
    *   **Bucket settings for Block Public Access**: An **extra layer of security** to prevent data leaks. If enabled, the bucket will never be public, even with a public bucket policy. Can be set at the account level [28, 29].
    *   An IAM principle can access an S3 object if IAM permissions **or** resource policies allow it, and there is **no explicit deny** [25].
*   **Use Cases**:
    *   Granting a specific user or user from another account (**cross-account access**) to access S3 buckets [22, 24, 30].
    *   Making S3 buckets public (e.g., for static website hosting) [24, 27, 31].
    *   Forcing objects to be encrypted at upload [27].
    *   Allowing EC2 instances to access S3 using **IAM roles** [23, 30].
    *   Preventing accidental public exposure of sensitive data [28, 29].
*   **Pros/Cons**:
    *   **Pros**: Highly granular control over access, multiple layers of security, prevents data leaks [22, 28].
    *   **Cons**: Requires careful configuration to avoid unintended access or deny issues [25].
*   **Pricing Models**:
    *   Security features themselves generally don't have direct pricing models, but IAM, encryption key management (KMS), and other related services may have costs.

---

## 4. Amazon S3 Storage Classes

*   **Key Features**:
    *   **Durability is 11 nines for all classes** [11, 12].
    *   **Availability** varies by class [11, 32, 33].
    *   You can **choose an object's class** at creation or modify it manually [10].
    *   **Lifecycle configurations** can automatically move objects between classes [10, 34, 35].
*   **Use Cases & Availability/Retrieval**:
    *   **Amazon S3 Standard (General Purpose)** [36]:
        *   **Availability**: 99.99% [11, 32].
        *   **Retrieval**: Low latency, high throughput [32].
        *   **Use Cases**: Frequently accessed data, big data analytics, mobile/gaming applications, content distribution [32, 37].
    *   **Amazon S3 Standard-Infrequent Access (Standard-IA)** [36]:
        *   **Availability**: 99.9% [37].
        *   **Retrieval**: Rapid access when needed, but incurs a retrieval cost [37].
        *   **Use Cases**: Data less frequently accessed, Disaster Recovery, backups [37].
    *   **Amazon S3 One Zone-Infrequent Access (One Zone-IA)** [36]:
        *   **Availability**: 99.5% [33].
        *   **Durability**: High durability within a single AZ; **data is lost if the AZ is destroyed** [33].
        *   **Retrieval**: Incurs a retrieval cost.
        *   **Use Cases**: Secondary copies of on-premises backups, or easily recreatable data [33, 38].
    *   **Glacier Storage Classes** (for archiving and backup) [33]:
        *   **Amazon S3 Glacier Instant Retrieval** [36]:
            *   **Retrieval**: Milliseconds retrieval [39].
            *   **Minimum Storage Duration**: 90 days [39].
            *   **Use Cases**: Data accessed once a quarter, but needs instant access [39].
        *   **Amazon S3 Glacier Flexible Retrieval** (formerly S3 Glacier) [36, 39]:
            *   **Retrieval Options**: Expedited (1-5 minutes), Standard (3-5 hours), Bulk (5-12 hours, free) [40].
            *   **Minimum Storage Duration**: 90 days [40].
            *   **Use Cases**: Flexible retrieval times for archived data [40].
        *   **Amazon S3 Glacier Deep Archive** [36]:
            *   **Retrieval Options**: Standard (12 hours), Bulk (48 hours) [41].
            *   **Minimum Storage Duration**: 180 days [41].
            *   **Use Cases**: Long-term storage, lowest cost, willing to wait longer for retrieval [41].
    *   **Amazon S3 Intelligent-Tiering** [36]:
        *   **Features**: Automatically moves objects between frequent access, infrequent access, archive instant access, archive access (optional), and deep archive access (optional) tiers based on usage patterns [12, 41, 42].
        *   **No retrieval charges** [42].
        *   **Use Cases**: Sit back and relax, let S3 optimize costs automatically for varying access patterns [12].
    *   **Amazon S3 Express One Zone** [43]:
        *   **Features**: High performance, **single Availability Zone** storage. Stores objects in **directory buckets** [43, 44].
        *   **Performance**: Hundreds of thousands of requests per second with single-digit millisecond latency; **10 times the performance of S3 Standard** [44].
        *   **Durability**: Good durability, but availability is lower due to single AZ. Data directly affected if AZ has issues [45].
        *   **Use Cases**: Latency-sensitive apps, data-intensive apps, AI/ML training, financial modeling, media processing, high-performance computing. Co-locates storage and compute resources in the same AZ to reduce latency and networking costs [45, 46].
*   **Pros/Cons**:
    *   **Pros**: Wide range of options for cost optimization, performance, and availability [12, 36]. Intelligent-Tiering simplifies management [12]. S3 Express One Zone offers extreme performance for specific workloads [44].
    *   **Cons**: Choosing the right class requires understanding access patterns and trade-offs. One Zone-IA and S3 Express One Zone carry a risk of data loss if the single AZ is destroyed [33, 45]. Retrieval costs for IA and Glacier classes can be significant if data is accessed frequently [37, 39].
*   **Pricing Models**:
    *   Varies by class, typically includes storage cost per GB/month [16, 39].
    *   Most classes (Standard-IA, One Zone-IA, Glacier) incur **retrieval costs** [37, 39].
    *   Glacier classes have **minimum storage durations** (90 or 180 days) [39-41].
    *   Intelligent-Tiering incurs a **small monthly monitoring fee** and auto-tiering fee, but no retrieval charges [42].
    *   S3 Express One Zone is about **50% lower cost than S3 Standard for 10x performance** [45].

---

## 5. Amazon S3 Replication (CRR & SRR)

*   **Key Features**:
    *   **CRR (Cross-Region Replication)** and **SRR (Same-Region Replication)** [47].
    *   Replication is **asynchronous** and happens in the background [47, 48].
    *   **Versioning must be enabled** on both source and destination buckets [47].
    *   Buckets can be in **different AWS accounts** [48].
    *   Requires proper **IAM permissions** for the S3 service to read/write [48].
    *   Only **new objects are replicated** after replication is enabled [49].
    *   **S3 Batch Replication** is needed to replicate **existing objects** or objects that failed replication [49].
    *   **Delete markers** can be replicated (optional setting) [49].
    *   **Permanent deletions with a version ID are NOT replicated** to avoid malicious deletes [50].
    *   **No chaining of replications**: Bucket 1 replicating to Bucket 2, and Bucket 2 replicating to Bucket 3, does not mean Bucket 1 objects go to Bucket 3 [50].
*   **Use Cases**:
    *   **CRR**: Compliance requirements, lower latency access to data in different regions, replicating data across accounts [51].
    *   **SRR**: Aggregating logs from multiple S3 buckets, live replication between production and test accounts [51].
*   **Pros/Cons**:
    *   **Pros**: High data availability and disaster recovery, compliance, reduced latency for global users [51].
    *   **Cons**: Only new objects replicate by default; existing data needs S3 Batch Replication [49]. Permanent deletions are not replicated [50]. Costs associated with storage in target bucket and data transfer.
*   **Pricing Models**:
    *   Costs include storage in the target bucket and data transfer fees for replication.

---

## 6. Amazon S3 Static Website Hosting

*   **Key Features**:
    *   S3 buckets can host **static websites** (HTML, images, etc.) [15, 31].
    *   Websites are accessible via a specific URL depending on the AWS region [15].
    *   Requires **public reads enabled** on the S3 bucket, typically configured via an **S3 Bucket Policy** [31, 52].
*   **Use Cases**:
    *   Hosting simple static websites [14, 15].
*   **Pros/Cons**:
    *   **Pros**: Cost-effective for static content, highly scalable, easy to configure [15].
    *   **Cons**: Cannot host dynamic server-side content (e.g., PHP, Python backend). Requires careful security configuration to allow public access [31, 52].
*   **Pricing Models**:
    *   Standard S3 storage and data transfer costs apply.

---

## 7. Amazon S3 Batch Operations

*   **Key Features**:
    *   Perform **bulk operations** on existing S3 objects with a single request [53].
    *   A job consists of a **list of objects**, the **action to perform**, and optional parameters [54].
    *   Provides **management of retries, progress tracking, completion notifications, and reports** [54, 55].
    *   Object lists can be generated using **S3 Inventory** and filtered with **Athena** [55].
*   **Use Cases**:
    *   Modifying object metadata or properties for many objects [53].
    *   Copying objects between S3 buckets [53].
    *   **Encrypting unencrypted objects** in a bucket [53, 56].
    *   Modifying ACLs or tags [53].
    *   Restoring many objects from S3 Glacier [53].
    *   Invoking a Lambda function for custom actions on objects [54].
*   **Pros/Cons**:
    *   **Pros**: Efficient for large-scale object management, built-in reliability and monitoring, avoids complex scripting [54].
    *   **Cons**: Requires setting up an object list (e.g., via S3 Inventory + Athena) [55].
*   **Pricing Models**:
    *   Costs are typically based on the number of objects processed and the type of operation.

---

## 8. Amazon S3 Event Notifications

*   **Key Features**:
    *   Reacts to events in S3 such as **object creation, removal, restoration, or replication** [57].
    *   Events can be **filtered** (e.g., by object suffix like `.JPEG`) [57].
    *   Destinations: **SNS topic, SQS queue, or Lambda function** [58, 59].
    *   Requires **resource access policies** attached to the destination (SNS, SQS, or Lambda) to allow S3 to send messages/invoke functions [60, 61].
    *   All S3 events also go into **Amazon EventBridge**, offering **advanced filtering options** (metadata, object size, name) and more than **18 different AWS services as destinations** [59, 62]. EventBridge also provides event archiving, replay, and more reliable delivery [63].
*   **Use Cases**:
    *   Automatically generating thumbnails for uploaded images [58].
    *   Triggering data processing workflows (e.g., with Lambda or Step Functions) [57, 62].
    *   Sending notifications about object changes [58].
*   **Pros/Cons**:
    *   **Pros**: Automates reactions to S3 data changes, integrates with many AWS services, EventBridge enhances capabilities significantly [57, 62].
    *   **Cons**: Requires proper IAM configuration for S3 to interact with destinations [60, 61].
*   **Pricing Models**:
    *   Costs are associated with the destination services (SNS, SQS, Lambda, EventBridge) rather than S3 itself.

---

## 9. Amazon S3 Performance

*   **Key Features**:
    *   **Baseline Performance**: Automatically scales. Low first-byte latency (100-200 milliseconds) [64].
    *   Supports **3,500 PUT/COPY/POST/DELETE requests per second per prefix** [64].
    *   Supports **5,500 GET/HEAD requests per second per prefix** [64].
    *   A **prefix** is anything between the bucket and the file name (e.g., `folder1/subfolder1/` for `folder1/subfolder1/file`) [65, 66]. Spreading reads/writes across multiple prefixes can significantly increase total throughput [8, 66].
*   **Optimizations**:
    *   **Multi-Part Upload**: **Recommended for files over 100 MB**, **must be used for files over 5 GB** [7, 8]. Parallelizes uploads by dividing the file into smaller parts [8, 67].
    *   **S3 Transfer Acceleration**: Increases transfer speed by routing uploads/downloads through an **AWS edge location**, which then forwards data over the **fast, private AWS network** to the target S3 bucket [68, 69]. Compatible with multi-part upload [68].
    *   **S3 Byte Range Fetches**: Parallelizes GETs by requesting **specific byte ranges** for a file [70]. Improves download speed and resilience (can retry smaller ranges) [70, 71].
*   **Use Cases**:
    *   High-throughput applications, big data ingestion, large file transfers [8, 32].
    *   Accelerating transfers from geographically distant locations [68].
    *   Efficiently downloading large files or retrieving only parts of a file (e.g., headers) [71, 72].
*   **Pros/Cons**:
    *   **Pros**: High default performance, significant options to optimize for extreme workloads, improved reliability for large file transfers [8, 64, 70].
    *   **Cons**: Transfer Acceleration incurs additional costs [68].
*   **Pricing Models**:
    *   Standard S3 request and data transfer costs. **Transfer Acceleration has an additional cost** [68].

---

## 10. Amazon S3 Object Lifecycle Management and Analytics

*   **Key Features**:
    *   **Lifecycle Rules**: Automate object management.
        *   **Transition Actions**: Configure objects to move to another storage class (e.g., to Standard-IA after 60 days, or Glacier after 6 months) [35, 73].
        *   **Expiration Actions**: Configure objects to be deleted after a specified time (e.g., access logs after 365 days) [73]. Can also delete **old versions** of files (if versioning enabled) or **incomplete multi-part uploads** [73, 74].
        *   Rules can apply to **entire buckets, specific prefixes, or specific object tags** [74].
    *   **Amazon S3 Analytics**:
        *   Provides **recommendations for Standard and Standard-IA transitions** [75]. **Does not work with One-Zone IA or Glacier** [75].
        *   Generates a daily **CSV report** with recommendations and statistics [75].
        *   Takes 24-48 hours to start seeing data analysis [75].
*   **Use Cases**:
    *   Cost optimization by automatically moving data to cheaper storage classes as access patterns change [34, 35].
    *   Automating data retention policies and compliance by deleting objects or old versions after a set period [38, 73].
    *   Cleaning up incomplete multi-part uploads to save storage costs [73, 76].
    *   Designing optimal storage solutions (e.g., moving source images to Glacier after 60 days, deleting thumbnails after 60 days) [38, 77].
    *   Recovering deleted objects by transitioning non-current versions to different storage classes [21, 38].
*   **Pros/Cons**:
    *   **Pros**: Automates cost savings, simplifies data management, ensures compliance with retention policies. Analytics helps in optimizing rules [35, 75, 78].
    *   **Cons**: Analytics does not cover all storage classes [75].
*   **Pricing Models**:
    *   Costs associated with S3 Analytics for generating reports. Storage costs vary based on the target storage class.

---

## 11. Amazon S3 Requester Pays

*   **Key Features**:
    *   Shifts the **data-transfer costs** from the bucket owner to the requester [79, 80].
    *   The **bucket owner still pays for storage costs** [80].
    *   The **requester must be authenticated in AWS** for billing purposes [81].
*   **Use Cases**:
    *   Sharing large datasets with other accounts or users, where the data access costs should be borne by the recipient [81].
*   **Pros/Cons**:
    *   **Pros**: Enables cost sharing for data distribution, beneficial for public datasets or data exchanges [81].
    *   **Cons**: Requires the requester to have an AWS account and be authenticated [81].
*   **Pricing Models**:
    *   The requester pays for data download/transfer costs [81].

---

## 12. Amazon S3 Storage Lens

*   **Key Features**:
    *   A service to **understand, analyze, and optimize storage across your entire AWS Organization** [82].
    *   Helps discover anomalies, identify cost efficiencies, and apply protection best practices [82].
    *   Aggregates data at **organization, account, region, bucket, or prefix levels** [82].
    *   Provides a **default dashboard** (cannot be deleted, can be disabled) with summarized insights and trends, showing data across multiple regions and accounts [83, 84].
    *   Metrics can be exported to an S3 bucket in CSV or Parquet format [83].
    *   **Metrics Categories**: Summary (storage bytes, object counts), Cost Optimization (non-current version storage bytes, incomplete multi-part upload storage bytes), Data Protection (versioning enabled bucket counts, cross-replication region rules counts), Access Management, Event, Performance (transfer acceleration enabled), Activity (requests, bytes downloaded), HTTP Status Code [76, 85-88].
    *   **Free Metrics**: Automatically available, ~28 usage metrics, data available for **14 days** [88, 89].
    *   **Advanced/Paid Metrics**: Additional metrics (activity, advanced cost/data protection, status codes), data available for **15 months**, can be published to CloudWatch, and collect metrics at the **prefix level** [89, 90].
*   **Use Cases**:
    *   Centralized monitoring of S3 usage and activity across an organization [82, 83].
    *   Identifying fastest-growing or unused buckets and prefixes [85].
    *   Optimizing storage costs by finding non-current versions or incomplete multi-part uploads [76].
    *   Ensuring data protection best practices are followed (e.g., checking for versioning enabled buckets) [86, 87].
    *   Understanding bucket usage patterns and performance [87, 88].
*   **Pros/Cons**:
    *   **Pros**: Comprehensive, organization-wide visibility into S3 usage, proactive identification of issues and optimization opportunities [82, 83]. Default dashboard is pre-configured [84].
    *   **Cons**: Advanced features and longer data retention require a paid tier [89, 90].
*   **Pricing Models**:
    *   **Free tier** for basic usage metrics (14 days data) [89].
    *   **Paid tier** for advanced metrics, longer data retention (15 months), prefix-level metrics, and CloudWatch integration [89, 90].
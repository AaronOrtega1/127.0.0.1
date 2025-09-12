---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "AWS Amazon S3 Security Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/S3_Security
created_date:
  "2025-09-03"
---
# AWS Amazon S3 Security Flashcards
- What is the **default server-side encryption** method for new Amazon S3 buckets and objects?;;**SSE-S3** (Server-Side Encryption with Amazon S3-managed keys) is enabled by default for new buckets and objects.
<!--SR:!2025-09-21,12,270-->
- How are encryption keys managed for **SSE-S3**?;;The encryption key for SSE-S3 is **handled, managed, and owned by AWS**. Users **never have access** to this key.
<!--SR:!2025-09-25,16,290-->
- How do users manage encryption keys when using **SSE-KMS**?;;With SSE-KMS, users manage their own encryption keys using the **KMS service (Key Management Service)**, allowing for user control over key creation and logging key usage in **CloudTrail**.
<!--SR:!2025-09-17,7,250-->
- What is a potential **scalability limitation** when using SSE-KMS for encryption?;;SSE-KMS API calls count towards **KMS quotas** (between 5,000 and 30,000 requests per second per region), which can be a thread limit for very high-throughput S3 buckets, though quotas can be increased.
<!--SR:!2025-09-14,2,235-->
- How are encryption keys handled for **SSE-C**?;;For SSE-C, keys are **customer-provided and managed outside of AWS**. Amazon S3 uses the key for server-side encryption but **never stores it**, discarding it after use.
<!--SR:!2025-09-15,3,250-->
- What **protocol requirement** is mandatory when using SSE-C?;;When using SSE-C, you **must use HTTPS** and pass the encryption key as part of HTTP headers for every request.
<!--SR:!2025-09-23,14,290-->
- What is a key differentiator in **key management** for client-side encryption compared to server-side options?;;In client-side encryption, the **clients fully manage the keys and the entire encryption cycle**, performing encryption before uploading data to S3 and decryption after retrieving it outside of S3.
<!--SR:!2025-09-25,16,290-->
- How can you **force encryption in transit** for an S3 bucket?;;You can use an S3 **bucket policy** to deny any `GetObject` operation if the condition `"aws:SecureTransport": "false"` is met, thereby blocking unencrypted HTTP connections and forcing HTTPS.
<!--SR:!2025-09-22,10,250-->
- What are two **specific destructive operations** that require MFA Delete in S3?;;MFA Delete is required to **permanently delete an object version** and to **suspend Versioning** on an S3 bucket.
<!--SR:!2025-09-18,9,250-->
- What are the **prerequisites and permissions** for enabling MFA Delete?;;To use MFA Delete, **Versioning must first be enabled** on the bucket, and only the **bucket owner (root account)** can enable or disable MFA Delete.
<!--SR:!2025-09-16,7,250-->
- What is a **critical warning** regarding the configuration of S3 Access Logs?;;**Never set the logging bucket to be the same as the bucket you are monitoring**, as this will create an infinite logging loop, causing exponential bucket growth and significant costs.
<!--SR:!2025-09-23,11,250-->
- What is the primary benefit and key differentiator of **S3 Access Points**?;;S3 Access Points **simplify security management and scale access** to S3 buckets by allowing the creation of multiple access points, each with its own access point policy, thereby offloading complex security management from a single bucket policy.
<!--SR:!2025-09-16,7,250-->
- How do you privately access an S3 Access Point configured with a **VPC origin**?;;To access an S3 Access Point with a VPC origin privately, you must create a **VPC endpoint**, and its policy must explicitly allow access to both the target S3 buckets and the access points.
<!--SR:!2025-09-15,3,210-->
- What is the **evaluation order** between S3 bucket policies and default encryption settings?;;**Bucket policies are always evaluated before default encryption settings**, which allows them to preemptively force specific encryption methods like SSE-KMS or SSE-C, overriding the default.
<!--SR:!2025-09-20,11,270-->
- Describe the characteristics of **Compliance Mode** for S3 Object Lock.;;In Compliance Mode, object versions **cannot be overwritten or deleted by any user, including the root user**. Additionally, retention modes and periods **cannot be changed or shortened**.
<!--SR:!2025-09-14,5,230-->
- Describe the characteristics of **Governance Mode** for S3 Object Lock.;;In Governance Mode, most users cannot alter object versions or lock settings, but **admin users with special IAM permissions** have the ability to modify retention settings or delete objects directly.
<!--SR:!2025-09-15,4,210-->
- What is the purpose of an **S3 Object Lock Legal Hold** and how is it managed?;;A Legal Hold **protects an object indefinitely**, independent of any retention period. It can be placed or removed by users who possess the **S3 PutObjectLegalHold** **IAM permission**.
<!--SR:!2025-09-21,12,270-->
- What is the core functionality and key differentiator of **S3 Object Lambda**?;;S3 Object Lambda provides **dynamic data transformation** (e.g., redaction, conversion, resizing) of objects **just before retrieval** by an application, using S3 Access Points connected to Lambda functions to avoid duplicating data in multiple buckets.
<!--SR:!2025-09-24,15,290-->
- What is the main use case for **S3 Pre-Signed URLs**?;;S3 Pre-Signed URLs are used to provide **temporary access** (for download or upload) to a **single, specific S3 object** to a user outside of AWS, inheriting the permissions of the URL generator, without making the object publicly accessible.
<!--SR:!2025-09-24,15,290-->
- What is the **maximum expiration time** for an S3 Pre-Signed URL generated via the CLI?;;When generated via the CLI, an S3 Pre-Signed URL can have an expiration of **up to 168 hours**.
<!--SR:!2025-09-21,12,270-->
- What is **CORS (Cross-Origin Resource Sharing)** and why is it important for S3?;;CORS is a **web browser-based security mechanism** that dictates whether a web browser on one origin is allowed to make requests to another origin. For S3, if a client on one origin (e.g., a static website) requests assets from an S3 bucket on a different origin, the S3 bucket must have **correct CORS headers enabled** to allow the request.
<!--SR:!2025-09-21,12,270-->









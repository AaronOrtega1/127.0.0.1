---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "AWS Amazon S3 Security"
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section14
  - S3
created_date:
  "2025-09-03"
---
# AWS Amazon S3 Security Study Guide
## 1. Amazon S3 (Simple Storage Service)

Amazon S3 is a highly scalable, high-speed, low-cost web-based cloud storage service [1-3].

### 1.1 S3 Object Encryption

S3 offers four methods for encrypting objects in S3 buckets: Server-Side Encryption (SSE-S3, SSE-KMS, SSE-C) and Client-Side Encryption [1].

#### a. SSE-S3 (Server-Side Encryption with Amazon S3-managed keys)
*   **Key Features:**
    *   Uses keys **handled, managed, and owned by AWS** [3].
    *   You **never have access** to this key [3].
    *   Objects are encrypted server-side by AWS using **AES-256** encryption [3].
    *   **Enabled by default** for new buckets and new objects [1, 3, 4].
    *   Requires setting the header `x-amz-server-side-encryption`: `"AES256"` to explicitly request this mechanism [3, 5].
*   **Use Cases:**
    *   Default encryption for all new objects in S3 [1, 3, 4].
*   **Pros/Cons:**
    *   **Pros:** Simplest to use, managed entirely by AWS [5].
    *   **Cons:** No user control over the encryption key [3].
*   **Pricing Implications:** Standard S3 storage costs.

#### b. SSE-KMS (Server-Side Encryption with KMS keys)
*   **Key Features:**
    *   Encrypts with a **KMS key**, allowing you to manage the encryption key yourself using the Key Management Service (KMS) [1, 5, 6].
    *   Provides **user control** over the key; you can create and edit keys within KMS [6].
    *   Key usage is **logged in CloudTrail** for auditing [6].
    *   Requires the header `x-amz-server-side-encryption`: `"aws:kms"` and specifying the KMS key to use [6, 7].
    *   To read an encrypted file, you need access to both the object and the **underlying KMS key** [8].
*   **Use Cases:**
    *   When you need **user control** over encryption keys and **auditability** of key usage [6].
*   **Pros/Cons:**
    *   **Pros:** Enhanced security with user control, detailed audit logs through CloudTrail [6, 8].
    *   **Cons:** API calls (e.g., GenerateDataKey, Decrypt) to KMS count towards **KMS quotas** (5,000 to 30,000 requests per second, depending on the region), which can be a limitation for very high-throughput S3 buckets [8, 9]. This could lead to a "thread link" use case where performance is affected [9].
*   **Pricing Implications:** KMS API calls count towards quotas, which can incur costs if limits are frequently hit or increased [8, 9].

#### c. SSE-C (Server-Side Encryption with Customer-Provided Keys)
*   **Key Features:**
    *   You provide and **manage your own encryption key outside of AWS** [1, 2, 9, 10].
    *   S3 uses the key to encrypt the object server-side but **never stores the key**; it's discarded after use [10].
    *   Requires **HTTPS** and passing the key as part of HTTP headers for every request [10].
    *   To read the file, the user must again **provide the same key** [11].
*   **Use Cases:**
    *   When you want to retain full control and management of your encryption keys outside of AWS [2, 10].
*   **Pros/Cons:**
    *   **Pros:** S3 never stores your key, providing a high level of control over key management [10].
    *   **Cons:** Requires secure transmission via **HTTPS** and managing key transmission with every request [10, 12].
*   **Pricing Implications:** Standard S3 storage costs.

#### d. Client-Side Encryption
*   **Key Features:**
    *   The **client encrypts data themselves** before sending it to Amazon S3 [2, 11].
    *   Decryption also happens on the **client-side, outside of Amazon S3** [13].
    *   The **client fully manages the keys** and the entire encryption cycle [13].
    *   Can leverage client libraries like the Client-Side Encryption Library [11].
*   **Use Cases:**
    *   When you need absolute control over the encryption process and key management on your own systems [11, 13].
*   **Pros/Cons:**
    *   **Pros:** Full client control over encryption and keys [13].
    *   **Cons:** Requires client-side implementation and management [11, 13].
*   **Pricing Implications:** Standard S3 storage costs.

### 1.2 S3 Transit Encryption (Encryption in Flight / SSL/TLS)

*   **Key Features:**
    *   Also known as SSL or TLS [14].
    *   S3 buckets have two endpoints: **HTTP (not encrypted)** and **HTTPS (encrypted in flight)** [14].
    *   HTTPS ensures a **secure and fully encrypted connection** between the user and the server [14].
    *   Most clients use the HTTPS endpoint by default [12].
*   **Use Cases:**
    *   **Recommended for all secure data transmissions** to and from S3 [12].
    *   **Mandatory when using SSE-C** encryption [10, 12].
    *   Can be **forced using a bucket policy** to deny `GetObject` operations if `aws:SecureTransport` is `false` (i.e., not using HTTPS) [12, 15].
*   **Pros/Cons:**
    *   **Pros:** Ensures secure transmission of data, protects against eavesdropping [12, 14].
    *   **Cons:** Using the HTTP endpoint means data is not encrypted in transit [14].
*   **Pricing Implications:** None mentioned, typically standard network costs.

### 1.3 MFA Delete (Multi-Factor Authentication Delete)

*   **Key Features:**
    *   Requires users to provide a **code from an MFA device** (e.g., mobile authenticator app, hardware device) to perform critical operations [16].
    *   **Required for:**
        *   **Permanently deleting an object version** [17, 18].
        *   **Suspending Versioning** on a bucket [17].
    *   **NOT required for:** Enabling Versioning or listing deleted versions [17].
    *   **Versioning must be enabled** on the bucket to use MFA Delete [18].
    *   **Only the bucket owner (root account)** can enable or disable MFA Delete [18].
*   **Use Cases:**
    *   Provides an **extra layer of protection against permanent deletion** of object versions, whether accidental or malicious [17, 18].
*   **Pros/Cons:**
    *   **Pros:** Significantly enhances security for critical destructive operations [17, 18].
    *   **Cons:** Enabling/disabling requires the root account, which is generally not recommended for day-to-day operations [18].
*   **Pricing Implications:** None mentioned.

### 1.4 S3 Access Logging

*   **Key Features:**
    *   Logs **all requests** made to your S3 bucket (authorized or denied) for audit purposes [19].
    *   Logs are stored as files in a **separate target S3 bucket** [19, 20].
    *   The target logging bucket **must be in the same AWS region** as the monitored bucket [19].
    *   Logs can be analyzed using data analysis tools like Amazon Athena [19].
*   **Use Cases:**
    *   **Audit purposes** to track all access to S3 buckets [19].
    *   Security analysis and compliance [19].
*   **Pros/Cons:**
    *   **Pros:** Provides comprehensive audit trails for S3 access [19].
    *   **Cons:** **Crucially, the logging bucket must NOT be the same as the bucket being monitored**; doing so creates an infinite logging loop, causing the bucket to grow exponentially and incur high costs [20, 21].
*   **Pricing Implications:** Costs associated with storing the log files in S3; **significant costs if a logging loop is created** [21].

### 1.5 S3 Access Points

*   **Key Features:**
    *   Simplify **security management** and **scale access** to S3 buckets [22, 23].
    *   Allow creating multiple **access points** to a single S3 bucket, each with its own specific security policy [22, 24, 25].
    *   Each access point has its **own DNS name** [23].
    *   Attach an **access point policy** (similar to a bucket policy) to define read/write access to specific prefixes (e.g., finance, sales) or objects [23, 25, 26].
    *   Can be configured with an **Internet origin** or a **VPC origin** for private traffic [23].
    *   A **VPC origin** requires a **VPC endpoint** to allow private access from resources like EC2 instances within a VPC [23, 27]. The VPC endpoint also has a policy that must allow access to the target buckets and access points [27, 28].
*   **Use Cases:**
    *   Managing access for different users or groups to specific parts of a large S3 bucket (e.g., finance team to finance data, sales team to sales data, analytics team to read-only finance and sales data) [22, 24-26].
    *   Streamlining security for complex access patterns, avoiding overly complicated single S3 bucket policies [22, 24].
*   **Pros/Cons:**
    *   **Pros:** Simplifies security management, provides granular access control at scale, allows for simpler S3 bucket policies [22, 23].
    *   **Cons:** Adds another layer of configuration and policy management (access point policies, VPC endpoint policies if using VPC origin) [27, 28].
*   **Pricing Implications:** Standard S3 data transfer and request costs apply. VPC endpoint costs (if applicable) are not detailed but are part of VPC services.

### 1.6 S3 Object Lambda

*   **Key Features:**
    *   Allows **dynamic data transformation** as objects are retrieved from an S3 bucket [29].
    *   Utilizes **S3 Access Points** connected to **AWS Lambda functions** [29, 30].
    *   An **S3 Object Lambda Access Point** invokes a Lambda function to process the object data before returning it to the calling application [31].
    *   The Lambda function retrieves the original data from S3, runs code to transform it, and then returns the transformed object [31, 32].
*   **Use Cases:**
    *   **Redacting PII** (personally identifiable information) for analytics or non-production environments [30, 33].
    *   **Converting data formats** (e.g., XML to JSON) [33].
    *   **Resizing and watermarking images** on the fly, potentially specific to the requesting user [33].
    *   **Enriching data** by combining it with information from other databases [32, 34].
*   **Pros/Cons:**
    *   **Pros:** Avoids duplicating S3 buckets for different versions of an object, maintains a single source of truth for original data, enables dynamic and flexible transformations [29, 32, 34].
    *   **Cons:** Adds complexity to the retrieval process, potential for increased latency due to Lambda invocation [31].
*   **Pricing Implications:** Costs associated with Lambda function invocations and S3 Object Lambda Access Point usage.

### 1.7 S3 Pre-Signed URLs

*   **Key Features:**
    *   **Temporarily grant access** to a specific S3 object for GET (download) or PUT (upload) operations [35, 36].
    *   URLs are generated using the S3 console, CLI, or SDK [35].
    *   Have an **expiration time**: up to **12 hours** via the console, up to **168 hours** (7 days) via the CLI [35].
    *   The user receiving the URL **inherits the permissions of the user who generated it** [35, 37].
*   **Use Cases:**
    *   Allowing users **outside of AWS** to access a private S3 file without making the file public [36, 37].
    *   Allowing logged-in users to **download premium content** (e.g., videos) from a private S3 bucket [36].
    *   Temporarily allowing a user to **upload a file** to a precise location in a private S3 bucket [38].
    *   Dynamically generating URLs for an ever-changing list of users [38].
*   **Pros/Cons:**
    *   **Pros:** Secure way to grant temporary, limited access to specific files in private buckets [36, 38].
    *   **Cons:** Access is time-limited, and the security relies on the permissions of the generating user [35].
*   **Pricing Implications:** Standard S3 storage and data transfer costs.

### 1.8 S3 CORS (Cross-Origin Resource Sharing)

*   **Key Features:**
    *   A **web browser-based security mechanism** to allow or deny requests to other origins while visiting a main origin [39, 40].
    *   An "origin" is defined by the scheme (protocol), host (domain), and port (e.g., `https://www.example.com` implies port 443 for HTTPS) [39, 40].
    *   If a web browser on one origin (`www.example.com`) makes a request to a different origin (`www.other.com`), the browser will first send a **pre-flight request** (OPTIONS method) to verify if the cross-origin is allowed [41, 42].
    *   The cross-origin server (in this case, an S3 bucket) must respond with **CORS headers** (`Access-Control-Allow-Origin`) indicating which origins and HTTP methods (GET, PUT, DELETE) are allowed [43].
    *   You can allow specific origins or use `*` to allow all origins [44].
*   **Use Cases:**
    *   When hosting a **static website on S3** where assets (e.g., images, scripts) are stored in a **different S3 bucket or another domain** [44, 45]. Without correct CORS configuration, the browser's security mechanism will block the requests [45].
*   **Pros/Cons:**
    *   **Pros:** Enables secure cross-origin requests, essential for modern web applications that interact with resources from multiple domains [40, 46].
    *   **Cons:** Must be correctly configured on the S3 bucket; misconfiguration can lead to web browsers blocking legitimate requests [45].
*   **Pricing Implications:** Standard S3 storage and data transfer costs.

### 1.9 S3 Object Lock

*   **Key Features:**
    *   Enables a **WORM (Write Once Read Many)** model for S3 objects, meaning objects cannot be modified or deleted for a specified period [47, 48].
    *   **Versioning must be enabled** on the bucket to use S3 Object Lock [48].
    *   Offers two **retention modes**:
        *   **Compliance Mode:** The object version **cannot be overwritten or deleted by any user**, including the root user. Retention modes and periods **cannot be changed or shortened**. This is the **strictest** mode [49].
        *   **Governance Mode:** Most users cannot override or delete an object version or alter its lock settings. However, **admin users with specific IAM permissions can change the retention period or delete the object directly** [50].
    *   A **retention period** must be set for both modes, which can be extended [51].
    *   **Legal Hold:** A separate feature that protects any object **indefinitely**, independent of retention periods [51, 52]. It can be placed or removed by users with the `S3 PutObjectLegalHold` IAM permission [52, 53]. Useful for legal investigations [52].
*   **Use Cases:**
    *   **Compliance** and **data retention** requirements (e.g., financial records, legal documents) [49, 54].
    *   Protecting critical data from accidental or malicious deletion [48].
    *   Placing an **indefinite hold** on objects for legal discovery [52].
*   **Pros/Cons:**
    *   **Pros:** Provides strong data immutability, essential for regulatory compliance and preventing data loss [49, 54]. Governance mode offers flexibility for administrators [50]. Legal holds are very flexible for specific, indefinite protection [52].
    *   **Cons:** Compliance mode is **extremely rigid** and largely irreversible once set [49]. Requires careful planning.
*   **Pricing Implications:** Standard S3 storage costs.

### 1.10 S3 Default Encryption vs. Bucket Policies

*   **Key Features:**
    *   **Default encryption for S3 buckets is SSE-S3** and is applied automatically to new objects [4, 55]. This default can be changed to another type, like SSE-KMS [4].
    *   **Bucket policies can force encryption** by denying any `PutObject` API call that does not include the correct encryption headers (e.g., for SSE-KMS or SSE-C) [4, 56].
    *   **Bucket policies are always evaluated before default encryption settings** [55, 56].
*   **Use Cases:**
    *   Ensuring that all objects uploaded to a bucket meet a specific encryption standard (e.g., forcing SSE-KMS for all uploads) [4, 56].
    *   Overriding the default SSE-S3 encryption with stricter requirements [4, 55].
*   **Pros/Cons:**
    *   **Pros:** Provides flexibility and granular control to enforce specific encryption requirements across a bucket [4, 55].
    *   **Cons:** Incorrectly configured bucket policies can block legitimate uploads [56].
*   **Pricing Implications:** If SSE-KMS is enforced, KMS API call costs may apply (as discussed in SSE-KMS section) [4].

## 2. AWS KMS (Key Management Service)

*   **Key Features:**
    *   Manages encryption keys used in AWS services [6].
    *   Allows users to **create, manage, and control their own encryption keys** [6].
    *   Key usage is **logged via CloudTrail**, providing an audit trail [6].
*   **Use Cases:**
    *   Managing encryption keys for **SSE-KMS** in Amazon S3 [6].
    *   Centralized key management for other AWS services (not detailed in sources, but implied by "Key Management Service") [6].
*   **Pros/Cons:**
    *   **Pros:** Provides user control, enhanced security, and auditability of key operations [6].
    *   **Cons:** Subject to **API call quotas** (5,000-30,000 requests per second depending on region), which can be a limiting factor for high-volume operations [8, 9].
*   **Pricing Implications:** API calls count towards quotas, implying potential costs if these quotas are reached or if an increase is requested [8, 9].

## 3. AWS CloudTrail

*   **Key Features:**
    *   A service that **logs everything that happens in AWS** [6].
*   **Use Cases:**
    *   Auditing KMS key usage [6].
    *   General auditing and governance for AWS accounts [6].
*   **Pros/Cons:**
    *   **Pros:** Provides comprehensive logs for security and operational monitoring [6].
    *   **Cons:** Not detailed further in the provided sources.
*   **Pricing Implications:** Not explicitly mentioned, but typically involves costs for storing logs.

## 4. Amazon Athena

*   **Key Features:**
    *   A data analysis tool [19].
*   **Use Cases:**
    *   Analyzing S3 Access Logs stored in S3 buckets [19].
*   **Pros/Cons:**
    *   **Pros:** Simplifies querying and analyzing data directly in S3 using standard SQL [19].
    *   **Cons:** Not detailed further in the provided sources.
*   **Pricing Implications:** Not explicitly mentioned, but typically based on data scanned.

## 5. Amazon S3 Glacier (Vault Lock)

*   **Key Features:**
    *   Designed for **archival storage** [47].
    *   **Glacier Vault Lock** enforces a **WORM (Write Once Read Many)** model on a Glacier Vault [47].
    *   Requires creating a Vault Lock Policy and then **locking the policy itself for future edits** [47].
    *   Once locked, the policy **cannot be changed or deleted by anyone**, including administrators or AWS [54].
    *   Objects inserted into a locked vault **can never be deleted** [54].
*   **Use Cases:**
    *   Meeting **compliance and data retention** requirements where data immutability is critical for legal purposes [47, 54].
*   **Pros/Cons:**
    *   **Pros:** Provides extremely strong, irreversible data immutability [54].
    *   **Cons:** Extremely strict and permanent once locked, requires careful planning [47, 54].
*   **Pricing Implications:** Standard Glacier storage costs.

## 6. AWS Lambda

*   **Key Features:**
    *   A serverless compute service that allows you to **run a bit of code in the cloud very easily** [31].
*   **Use Cases:**
    *   Performing **dynamic data transformations** as part of S3 Object Lambda [30, 31].
    *   Various event-driven compute tasks (implied by "run a bit of code...very easily") [31].
*   **Pros/Cons:**
    *   **Pros:** Serverless, no servers to provision or manage, scales automatically [31].
    *   **Cons:** Not detailed further in the provided sources.
*   **Pricing Implications:** Based on the number of requests for your functions and the time your code executes (invocation costs) [31].

---



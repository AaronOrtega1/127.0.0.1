---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Amazon S3 Security Quiz
tags:
  - Knowledge
  - Cards/AWS/SAA_Udemy
  - aws
  - cloud
  - certificate
created_date: 2025-07-01
---
# Amazon S3 Security Quiz
- Your client wants to make sure that file encryption is happening in S3, but he wants to fully manage the encryption keys and never store them in AWS. You recommend him to use...;;SSE-C, the encryption happens in AWS and you have full control over the encryption keys.
<!--SR:!2025-11-05,72,250-->
- A company you're working for wants their data stored in S3 to be encrypted. They don't mind the encryption keys stored and managed by AWS, but they want to maintain control over the rotation policy of the encryption keys. You recommend them to use ...;;SSE-KMS, the encryption happens in AWS, and the encryption keys are managed by AWS but you have full control over the rotation policy of the encryption key. Encryption keys stored in AWS.
<!--SR:!2025-11-30,109,310-->
- Your company does not trust AWS for the encryption process and wants it to happen on the application. You recommend them to use ...;;Client-Side Encryption, you have to do the encryption yourself and you have full control over the encryption keys. You perform the encryption yourself and send the encrypted data to AWS.
<!--SR:!2025-09-15,32,270-->
- You have a website that loads files from an S3 bucket. When you try the URL of the files directly in your Chrome browser it works, but when a website with a different domain tries to load these files it doesn't. What's the problem?;;CORS is wrong.
<!--SR:!2025-09-25,64,310-->
- An e-commerce company has its customers and orders data stored in an S3 bucket. The company’s CEO wants to generate a report to show the list of customers and the revenue for each customer. Customer data stored in files on the S3 bucket has sensitive information that we don’t want to expose in the report. How do you recommend the report can be created without exposing sensitive information?;;Use S3 Object Lambda to chnge the objects before they are retrieved by the report generator application.
<!--SR:!2026-02-17,165,310-->
- You suspect that some of your employees try to access files in an S3 bucket that they don't have access to. How can you verify this is indeed the case without them noticing?;;Enable S3 Access Logs and analyze them using Athena.
<!--SR:!2025-10-06,33,270-->
- You are looking to provide temporary URLs to a growing list of federated users to allow them to perform a file upload on your S3 bucket to a specific location. What should you use?;;S3 Pre-Signed URL.
<!--SR:!2026-02-27,177,310-->
- For compliance reasons, your company has a policy mandate that database backups must be retained for 4 years. It shouldn't be possible to erase them. What do you recommend?;;Glacier Vaults with Vault Lock Policies.
<!--SR:!2025-10-03,30,190-->
- You would like all your files in an S3 bucket to be encrypted by default. What is the optimal way of achieving this?;;Do nothing, Amazon S3 automatically encrypt new objects using Server-Side Encryption with S3-Managed Keys (SSE-S3).
<!--SR:!2025-12-31,128,290-->
- You have enabled versioning and want to be extra careful when it comes to deleting files on an S3 bucket. What should you enable to prevent accidental permanent deletions?;;Enable MFA Delete.
<!--SR:!2025-09-22,61,310-->
- A company has its data and files stored on some S3 buckets. Some of these files need to be kept for a predefined period of time and protected from being overwritten and deletion according to company compliance policy. Which S3 feature helps you in doing this?;;S3 Object Lock - Retention Compliance Mode.
<!--SR:!2025-09-07,36,230-->
- Which of the following S3 Object Lock configuration allows you to prevent an object or its versions from being overwritten or deleted indefinitely and gives you the ability to remove it manually?;;Legal Hold.
<!--SR:!2025-09-20,59,310-->





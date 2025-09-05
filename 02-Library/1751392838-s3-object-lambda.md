---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - S3 Object Lambda
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - S3
created_date:
  2025-07-01
---
# S3 Object Lambda
## Summary
- 

## Key Ideas
### What is a S3 Object Lambda?
- It uses AWS Lambda Functions to change the object before it is retrieved by the caller app.
- Only one S3 bucket is needed, on top of which we create **S3 Access Point and S3 Object Lambda Access Points**.
- Use Cases:
  - Redacting personally identifiable information [[1751393715-personally-identifiable-information|PII]] for analytics or non-production environments.
  - Converting across data formats, such as converting XML to JSON.
  - Resizing and watermarking images on the fly using caller-specific details, such as the user who requested the object.
![[1751392838-s3-object-lambda.webp]]


## Related Links
- [[]]
## Source
[text]()

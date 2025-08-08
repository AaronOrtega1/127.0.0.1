---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - KMS Multi-Region Keys
tags:
  - resource
  - aws
  - certificate
  - cloud
  - KMS
created_date: 2025-08-07
---
# KMS Multi-Region Keys
## Summary
- 
## Key Ideas
![[1754584242-kms-multi-region-keys.webp]]
### What it's used for?
- Identical KMS keys in different AWS regions that can be used interchangeably.
- Multi-region keys have the same key ID, key material, automatic rotation.
- Encrypt in one region and decrypt in other regions.
- No need to re-encrypt or making cross-region API calls.
- KMS multi-region are not global (primary + replicas).
- Each multi-region key is managed **independently.**
- **Use cases:** global client-side encryption, encryption on Global [[1752777935-amazon-dynamodb|DynamoDB]], Global [[1750265113-amazon-aurora|Aurora]].

### DynamoDB Global Tables and KMS Multi-Region Keys Client-Side encryption.
- We can encrypt **specific attributes** client-side in our DynamoDB table using the **Amazon DynamoDB Encryption Client.**
- Combined with Global Tables, the client-side encrypted data is replicated to other regions.
- If we use a multi-region key, replicated in the same region as the DynamoDB Global table, then clients in these regions can use low-latency API calls to KMS in their region to decrypt the data client-side.
- Using client-side encryption we can protect specific fields and guarantee only decryption if the client has access to an API key.
![[1754584242-kms-multi-region-keys-1.webp|500]]

## Related Links
- [[1748995884-key-management-system|KMS]]

---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Caching Strategies in AWS
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# Caching Strategies on AWS
![[1755699907-caching-strategies-in-aws.webp]]
## Typical Solution Architecture
- [[1751474216-cloudfront-overview|CloudFront]] in front of [[1752812933-api-gateway-overview|API Gateway]] → in front of **Application Logic** ([[1748020848-ec2-basics|EC2]], [[1752687705-lambda-overview|Lambda]]).
- Application uses a **Database** (no built-in caching).
- Possible internal caches:
  - **Redis**
  - **Memcached**
  - [[1752790629-dynamodb-advanced-features#^DAX|DAX]] (for [[1752777935-amazon-dynamodb|DynamoDB]]).
- Static content:
  - Served from [[1751042472-s3-overview|S3]] through **CloudFront**.

## Caching Layers and Implications

### 1. **CloudFront (Edge Caching)**
- Caches content **as close as possible to users**.
- **Advantages:**
  - Very fast response if cache is hit.
- **Limitations:**
  - Data may become stale (backend changes not reflected).
- **Control Mechanism:**
  - Use **TTL (Time-to-Live)** to refresh cache periodically.
- **Tradeoff:**
  - More caching at the edge = better latency, but risk of outdated data.

### 2. **API Gateway Caching**
- Has **regional cache** (independent of CloudFront).
- **Benefits:**
  - Reduces calls to backend when cache is hit.
- **Limitation:**
  - Still some network latency between client and API Gateway.
- Can be used **with or without CloudFront**.

### 3. **Application Logic Caching**
- Typically doesn’t cache by default, but integrates with:
  - **Redis**
  - **Memcached**
  - **DAX (DynamoDB Accelerator)**
- **Goal:**
  - Avoid hitting the database for repetitive or complex queries.
- **Benefit:**
  - Reduces **database load**.
  - Increases **read capacity**.

### 4. **Database & S3**
- **No caching capability** in:
  - Databases ([[1750180189-rds-overview|RDS]], DynamoDB, etc.).
  - **S3**.
- Must rely on **external caching layers**.

## General Principles
- Moving closer to the backend:
  - **More accurate data**, but **higher latency**.
- Moving closer to the user:
  - **Lower latency**, but **higher risk of stale data**.
- **No universal best practice**:
  - Strategy depends on **use case**.
  - Consider:
    - Where to cache (edge, regional, internal).
    - How long to cache (TTL).
    - Which content should be cached.
    - Tradeoff between **latency, freshness, and cost**.

## Key Takeaway
Caching in AWS is **flexible and scenario-dependent**:
- Choose caching points based on:
  - Performance goals.
  - Freshness requirements.
  - Cost considerations.
- Balance **latency vs. accuracy** when designing caching strategy.


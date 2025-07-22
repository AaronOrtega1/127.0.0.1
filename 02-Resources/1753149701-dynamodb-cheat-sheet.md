---
link: "[[1750441691-aws|AWS]]"
aliases: 
  - DynamoDB Cheat Sheet
tags:
  - resource
  - aws
  - cloud
  - CheatSheet
  - DatabaseService
created_date:
  2025-07-21
---
# DynamoDB Cheat Sheet
**Key Features:**
- Fully managed NoSQL database
- Single-digit millisecond latency
- Automatic scaling
- Serverless option available

**Important Concepts:**
- Primary Key: Partition key or partition+sort key
- Secondary indexes:
  - Global Secondary Index (GSI): Different partition/sort key
  - Local Secondary Index (LSI): Same partition key
- DAX: In-memory cache for faster reads
- Streams: Time-ordered sequence of item changes
- TTL: Automatic item expiration

**Use Cases:**
- High-traffic web applications
- Gaming leaderboards
- IoT applications

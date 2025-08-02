---
link: "[[1754146837-diseno-de-sistemas-escalables|Diseño de Sistemas Escalables]]"
aliases: 
  - Cloud Storage System Design
tags:
  - resource
created_date:
  2025-08-02
---
# Cloud Storage System Design
## **Introduction and Requirements (00:00 - 00:53)**
- **Objective**: Design a cloud storage system that allows users to store, share, and sync files.
- **Functional requirements**:
  - File upload and download.
  - File synchronization across multiple users and devices.
- **Non-functional requirements**:
  - High scalability and reliability.
  - Real-time collaboration is not addressed in this video.

## **Scalability Estimates (00:53 - 01:44)**
- **Daily active users**: 500 million.
- **Files uploaded per user**: 1 file per day.
- **Average file size**: 150 KB.
- **Daily storage**: 7.5 TB.
- **Annual storage**: 27 PB.
- **Total storage (10 years)**: 270 PB.
- **Queries per second (QPS)**: ~6,000.

## **Core Problem: File Change Optimization (01:44 - 03:02)**
- **Problem**: Small changes in large files (e.g., 2 GB) require resending the entire file, which doesn't scale.
- **Solution**: Split files into **4 MB blocks**.
  - Only modified blocks are sent and stored.
  - Reduces network traffic and storage, but adds complexity to file reconstruction.

## **Database Schema (03:02 - 04:22)**
- **Main tables**:
  - **User**: ID, name, creation date.
  - **Device**: One-to-many relationship with users.
  - **Team space**: Similar to Google Drive's "Shared Drives".
  - **Object (file)**: ID, name, latest version.
  - **Object history**: File versions with block references.
  - **Block**: Contains file fragments with positions for reconstruction.

## **System Architecture (04:22 - 07:48)**
1. **Client**:
   - **Monitor**: Detects local file changes.
   - **Blockify Service**: Splits files into blocks and reconstructs them.
   - **Synchronizer**: Sends changes to server and updates local database.
   - **Local database**: Stores file metadata and state (SQLite).

2. **Server Services**:
   - **Block Service**: Stores blocks in S3-like content storage.
     - **Compression**: Algorithms like Huffman or arithmetic.
     - **Encryption**: AES-256 standard.
     - **Cold storage**: AWS Glacier for cost reduction.
   - **Metadata Service**: Manages global file state.
     - **Cache**: Redis or Memcached for frequent objects.
     - **Database**: SQL (MySQL/PostgreSQL) for consistency and durability.
     - **Sharding**: Horizontal partitioning for scalability.

3. **Notifications and Synchronization**:
   - **Notification Service**: Notifies clients about changes.
     - **Long Polling**: Best option for real-time updates.
   - **Message queues**: Kafka to distribute changes to multiple users.

## **Workflow (11:10 - 12:26)**
1. **File upload**:
   - Client detects changes and splits file into blocks.
   - Blocks are sent to **Block Service** for storage.
   - Metadata is stored in **Metadata Service**.
2. **File download**:
   - Client receives change notifications via **Long Polling**.
   - **Synchronizer** fetches missing blocks from **Block Service**.
   - Blocks are reconstructed on the client.

## **Additional Discussion Points (12:26 - 13:17)**
- **Cost reduction**:
  - **Cold storage**: Move inactive files to economical storage.
  - **Deduplication**: Avoid storing duplicate blocks using hashes.
- **Optimization**:
  - **Compression and encryption**: Improves efficiency and security.
  - **Multi-data center**: Locate servers near users to reduce latency.
- **Additional services**:
  - **Analytics**: Optimize resources based on usage patterns.

## **Conclusion**
- This design addresses the challenges of scalability, storage, and synchronization in a cloud storage system.
- Focuses on optimizing network traffic, reducing costs, and ensuring high availability.






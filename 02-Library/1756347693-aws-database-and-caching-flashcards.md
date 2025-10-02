---
link: "[[1756347565-aws-database-and-caching-study-guide|AWS Database and Caching Study Guide]]"
aliases: 
  - "AWS Database and Caching Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/DB_and_Caching
created_date:
  "2025-08-27"
---
# AWS Database and Caching Flashcards
- What does AWS RDS stand for, and what is its primary function?;;RDS stands for **Relational Database Service**, and it is a **managed database service** for databases that use **SQL** as a query language.
<!--SR:!2025-10-23,41,290-->
- What are the key limitations when using AWS RDS instances as a managed service?;;You **cannot SSH into the RDS instances** because AWS manages the underlying EC2 instance.
<!--SR:!2025-10-13,33,270-->
- What are the typical default network ports for PostgreSQL, MySQL, and Aurora (PostgreSQL compatible / MySQL compatible) databases on RDS?;;**PostgreSQL - 5432**, **MySQL - 3306**, **Aurora (PostgreSQL compatible) - 5432**, **Aurora (MySQL compatible) - 3306**.
<!--SR:!2025-12-31,90,290-->
- Describe the functionality and conditions for **RDS Storage Auto Scaling**.;;With RDS Storage Auto Scaling enabled, RDS will **automatically scale the storage** for your database if the **free storage is less than 10%** of what's allocated, the low-storage condition last for **more than five minutes**, and **six hours** have passed since the last modification. A maximum storage threshold can be set.
<!--SR:!2025-11-09,48,270-->
- What is the primary purpose of **RDS Read Replicas**, and what consistency model do they use?;;Read Replicas help you **scale your reads**. They use **asynchronous replication**, meaning reads are **eventually consistent**. You can have up to **15** Read Replicas.
<!--SR:!2025-10-29,28,250-->
- What is the primary purpose of **RDS Multi-AZ**, and what type of replication does it use?;;Multi-AZ is mainly used for **Disaster Recovery**. It uses **synchronous replication** to a standby instance in different AZ. It is **not used for scaling reads**.
<!--SR:!2025-11-04,43,250-->
- How does the failover time for Aurora compare to Multi-AZ on MySQL RDS?;;Failover in Aurora is **instantaneous**, typically less than **30 seconds on average**, which is much faster than Multi-AZ on MySQL RDS.
<!--SR:!2025-11-16,60,310-->
- Explain the difference between Aurora's **Writer Endpoint** and **Reader Endpoint**.;;The **Writer Endpoint** is a DNS name that **always points to the master instance** for writes. The **Reader Endpoint** is for **load balancing connections** across all read replicas for read workloads.
<!--SR:!2025-11-27,62,270-->
- What is **RDS Custom**, and for which database types is it available?;;RDS Custom allows you to have **full admin access** to the **underlying operating system and database** for certain database types. It is available for **Oracle** and **Microsoft SQL Server**. You can SSH into the underlying EC2 instance.
<!--SR:!2025-10-22,40,290-->
- What are the main benefits of using **Amazon RDS Proxy**?;;RDS Proxy allows applications to **pool and share database connections**, reducing stress on database resources. It also **reduces failover time by up to 66%** for RDS and Aurora. Additionally, it can **enforce IAM authentication** for your database.
<!--SR:!2025-10-19,38,290-->
- What is **Amazon ElastiCache** primarily used for, and what are the two main caching technologies it manages?;;ElastiCache provides **managed Redis or Memcached**. It is used for **in-memory databases** with high performance and low latency to **reduce the load off of databases for read-intensive workloads** and to make applications **stateless** by storing session data.
<!--SR:!2025-12-08,70,270-->
- Which ElastiCache technology supports Multi-AZ with auto-failover and read replicas, and what unique use case can it facilitate with Sorted Sets?;; **Redis** supports Multi-AZ with auto-failover and read replicas. It can facilitate **real-time gaming leaderboards** using its **Sorted Sets** feature.
<!--SR:!2025-11-12,56,310-->
- How is **at-rest encryption** managed for RDS and Aurora databases, especially for existing unencrypted databases?;;At-rest encryption using KMS is defined at **launch time**. To encrypt an **already existing unencrypted database**, you must **take a database snapshot** and then **restore the snapshot as an encrypted database**.
<!--SR:!2025-10-06,19,270-->
- What is the typical replication lag for Aurora Global Database secondary regions, and what is the Recovery Time Objective (RTO) for promoting another region for disaster recovery?;;The replication lag for secondary read-only regions should be **less than one second**. The RTO for promoting another region for disaster recovery is **less than one minute**.
<!--SR:!2025-10-31,39,250-->
- What is the purpose of **Babelfish for Aurora PostgreSQL**?;;Babelfish allows **Amazon Aurora PostgreSQL to understand commands (T-SQL)** that are target for **Microsoft SQL Server**, enabling applications written for SQL Server to migrate Aurora PostgreSQL with little to no code changes.
<!--SR:!2025-10-14,31,270-->
- Describe the mechanism of **Aurora Database Cloning** and its benefit.;;Aurora Database Cloning creates a new Aurora cluster from an existing one **very quickly**, faster than snapshot/restore. It uses a **copy-on-write protocol**, meaning it initially uses the same data volume as the original, and new storage is allocated only as updates are made to either clone.
<!--SR:!2025-10-19,25,290-->



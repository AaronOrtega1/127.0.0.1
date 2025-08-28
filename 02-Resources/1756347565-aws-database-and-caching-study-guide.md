---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "AWS Database and Caching Study Guide"
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section9
created_date:
  "2025-08-27"
---
# AWS Database and Caching Study Guide
## 1. AWS Relational Database Service (RDS)

### Overview
*   **AWS RDS** is a **managed database service** for databases that use SQL as a query language [1].
*   AWS manages the databases, providing numerous benefits [1].

### Key Features
*   **Supported Database Engines**: PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, and Aurora [2].
*   **Automation**:
    *   **Automated provisioning** of the database [3].
    *   **Underlying operating system patching** is fully automated [3].
    *   **Maintenance windows** for upgrades [4].
*   **Backups & Recovery**:
    *   **Continuous automated backups** are made, allowing **Point in Time Restore** to a specific timestamp (up to 5 minutes ago) [3, 5].
    *   Daily full backups occur during a specified backup window, with transaction logs backed up every five minutes [5].
    *   Automated backup retention can be set from **1 to 35 days** and can be disabled by setting to zero [6].
    *   **Manual DB Snapshots** are user-triggered and can be retained **indefinitely** [6].
    *   Restoring an automated backup or manual snapshot **creates a new database** [7].
    *   MySQL RDS databases can be restored from an S3 object storage bucket (from an on-premises backup) onto a new RDS instance [8].
*   **Performance & Scaling**:
    *   **Monitoring dashboards** to view database performance [3].
    *   **Read Replicas** can be set up to **improve read performance** by offloading read-intensive workloads from the primary database [3, 9].
        *   Up to **15 Read Replicas** can be created [10].
        *   They can be located within the same Availability Zone (AZ), cross AZ, or cross-region [10].
        *   Replication is **asynchronous**, meaning reads are **eventually consistent** (may receive old data before replication completes) [11].
        *   Read replicas can be promoted to become their own standalone databases [11, 12].
        *   Replication traffic within the same region (even across AZs) is **free** for RDS as a managed service [13]. Cross-region replication incurs network fees [14].
        *   Scaling is **vertical** (increasing instance type) and **horizontal** (adding read replicas) [4].
    *   **RDS Storage Auto Scaling**: Automatically scales storage when free space drops below 10% of allocated storage, if the low-storage condition persists for more than five minutes, and six hours have passed since the last modification [15-17].
        *   Requires setting a **maximum storage threshold** [17].
        *   Helpful for applications with **unpredictable workloads** and supports all database engines [18].
    *   Storage is backed by EBS [4].
*   **High Availability & Disaster Recovery**:
    *   **Multi-AZ deployments** are used for **disaster recovery** and **high availability** [3, 4, 14].
    *   Involves a **synchronous replication** of the master database instance to a standby instance in a different AZ [19].
    *   Applications connect to a **single DNS name**, and in case of master failure, there's an **automatic failover** to the standby database [19, 20].
    *   **Not used for scaling**; the standby is purely for failover and cannot be read from or written to directly [21].
    *   Converting a Single AZ RDS database to Multi-AZ is a **zero-downtime operation** (done by modifying the database setting), where a snapshot is taken, restored to a new standby, and then synchronized [22-24].
    *   Read Replicas can also be set up as Multi-AZ for disaster recovery [21, 22].
*   **Security**:
    *   **Data at-rest encryption** using **KMS** (Key Management Service) is defined at launch time [25].
        *   If the master database is unencrypted, read replicas cannot be encrypted [25].
        *   To encrypt an existing unencrypted database, take a snapshot, then restore it as an encrypted database [26].
    *   **In-flight encryption** (between clients and database) is supported by default using **TLS root certificates** [26].
    *   **Database authentication** uses username/password or **IAM roles** (allowing EC2 instances with IAM roles to authenticate) [27].
    *   **Network access control** via **Security Groups** (allowing/blocking specific ports, IPs, or other security groups) [28].
    *   **Audit Logs** can be enabled to track queries and events, and for long-term retention, they can be sent to **CloudWatch Logs** [28, 29].

### Use Cases
*   Applications requiring managed SQL databases with automated administration [1].
*   Scaling read-heavy applications using **Read Replicas** (e.g., separating reporting/analytics workloads from production) [9, 30, 31].
*   Achieving high availability and disaster recovery with **Multi-AZ** [14].
*   Handling unpredictable storage growth with **RDS Storage Auto Scaling** [18].
*   Cost-saving for infrequently used databases by using manual snapshots [32, 33].

### Pros/Cons
*   **Pros**:
    *   Fully managed by AWS, reducing operational overhead (provisioning, patching, backups, monitoring) [1, 3, 15].
    *   Automated backups and Point in Time Restore [3].
    *   High availability and disaster recovery with Multi-AZ [14].
    *   Scalable for both reads (Read Replicas) and storage (Auto Scaling) [4, 15].
    *   Built-in security features (encryption, IAM, Security Groups) [25-28].
*   **Cons**:
    *   **No SSH access** to the underlying EC2 instances (it's a managed service) [4, 28].
    *   Read Replicas require application changes to direct read traffic [12].
    *   Cross-region Read Replicas incur network replication fees [14].
    *   Read replicas are only for `SELECT` (read) statements; cannot `INSERT`, `UPDATE`, or `DELETE` [34].

### Pricing Models
*   Generally billed based on instance type, storage, and I/O operations.
*   Cross-region replication for Read Replicas incurs network fees [14]. Intra-region replication traffic between AZs for RDS is free [13].

### Important Notes
*   **Database Ports**: PostgreSQL: **5432**, MySQL: **3306**, Oracle RDS: **1521**, MSSQL Server: **1433**, MariaDB: **3306** [35].

## 2. AWS RDS Custom

### Overview
*   **RDS Custom** is a variant of RDS that provides customers with **access to the underlying operating system and database customization** [36].
*   It's designed for specific database types that require advanced configurations [36].

### Key Features
*   **Supported Database Types**: Oracle and Microsoft SQL Server only [36, 37].
*   **Access & Customization**:
    *   Provides **full administrator access** to the underlying OS and database [37, 38].
    *   Users can configure internal settings, install patches, enable native features [38].
    *   Allows **SSH or SSM Session Manager access** to the underlying EC2 instance [28, 38].
*   **Automation Control**:
    *   It is recommended to **deactivate automation mode** when performing customizations to prevent RDS from performing automated maintenance or scaling actions [38, 39].

### Use Cases
*   Applications that require deep customization of the database or operating system, such as installing specific agents, enabling non-standard features, or applying custom patches [36, 38].

### Pros/Cons
*   **Pros**:
    *   Provides **unprecedented control** over the database environment compared to standard RDS [37, 38].
    *   Still benefits from RDS's automated setup, operations, and scaling for parts that don't conflict with customization [36].
*   **Cons**:
    *   Limited to **Oracle and Microsoft SQL Server** [37].
    *   The user is responsible for potential issues caused by customizations; it's advisable to take a **database snapshot** before making changes to enable recovery [39].

### Pricing Models
*   Not explicitly detailed, but it's an extension of RDS, so base RDS costs apply with additional charges for the custom features.

## 3. Amazon Aurora

### Overview
*   **Amazon Aurora** is a **proprietary database technology from AWS** that is cloud-optimized and compatible with PostgreSQL and MySQL drivers [2, 40, 41].
*   It offers significantly higher performance than standard MySQL or PostgreSQL on RDS [41].

### Key Features
*   **Performance**:
    *   Achieves **5x performance over MySQL on RDS** and **3x performance over PostgreSQL on RDS** [41].
    *   Replication process for read replicas is **faster than MySQL**, typically with sub-10ms replica lag [42].
*   **Storage**:
    *   **Automatically grows** from 10GB up to **128TB** as data is added [43, 44].
    *   Stores **six copies of your data across three Availability Zones** for high availability and durability [45].
    *   Requires only four copies for writes and three copies for reads to be available [45].
    *   Features **self-healing** with peer-to-peer replication for corrupted data [45, 46].
    *   Utilizes a shared, logical storage volume that is replicated, self-healing, and auto-expanding [46, 47].
*   **High Availability & Failover**:
    *   Provides **cloud-native high availability** by default [42].
    *   **Instantaneous failover** (much faster than MySQL Multi-AZ) [42].
    *   If the master instance fails, failover typically occurs in **less than 30 seconds** on average [48].
*   **Scaling**:
    *   **Read Replicas**: Supports up to **15 read replicas** [43, 48].
    *   **Replica Auto-scaling**: Automatically adds Aurora replicas based on increased CPU usage or read requests on the reader endpoint to distribute read traffic [49-51].
*   **Endpoints**:
    *   **Writer Endpoint**: A DNS name that **always points to the current master instance**, automatically redirecting clients during failovers [44, 51, 52].
    *   **Reader Endpoint**: A DNS name that handles **connection load balancing** across all available read replicas [52, 53].
    *   **Custom Endpoints**: Allow defining a **subset of Aurora instances** (e.g., larger ones) for specific types of workloads like analytical queries [54-56].
*   **Aurora Serverless**:
    *   Provides **automated database instantiation and auto-scaling** based on actual usage [56].
    *   Ideal for **infrequent, intermittent, or unpredictable workloads**, eliminating the need for capacity planning [56].
    *   Uses a managed proxy fleet, and you **pay per second** of instance usage [56, 57].
*   **Aurora Global Database**:
    *   Designed for **cross-region disaster recovery** and **low-latency global read workloads** [57, 58].
    *   One primary region for reads and writes, and up to **10 secondary read-only regions** [58].
    *   Replication lag to secondary regions is typically **less than one second** (on average) [58, 59].
    *   Offers a Recovery Time Objective (RTO) of **less than one minute** for promoting a secondary region in case of primary region outage [58, 59].
*   **Machine Learning Integration (Aurora ML)**:
    *   Enables **ML-based predictions** within applications via the SQL interface [60].
    *   Integrates with AWS ML services like **SageMaker** (for any ML model) and **Amazon Comprehend** (for sentiment analysis) [61].
    *   Use cases include fraud detection, ad targeting, sentiment analysis, and product recommendations [61, 62].
    *   Simplifies ML usage, as no ML expertise is required by the application [61-63].
*   **Babelfish for Aurora PostgreSQL**:
    *   Allows Aurora PostgreSQL to **understand commands intended for Microsoft SQL Server using T-SQL** [63].
    *   Facilitates migration of SQL Server applications to Aurora PostgreSQL with **little to no code changes** by allowing the same SQL Server Client Driver to communicate with Aurora PostgreSQL [64-66].
    *   AWS SCT and DMS can be used for data migration [66].
*   **Backups & Recovery**:
    *   **Automated backups** with 1-35 days retention (cannot be disabled for Aurora) [33].
    *   **Point-in-time recovery** to any moment within the retention window [33].
    *   **Manual DB Snapshots** can be user-triggered and retained indefinitely [7].
    *   Restoring a backup/snapshot creates a **new database** [7].
    *   MySQL Aurora clusters can be restored from an S3 backup (requires using **Percona XtraBackup** for on-premises backups) [67].
    *   **Database Cloning**: Allows creation of a new Aurora database cluster from an existing one **very quickly** (faster than snapshot/restore) [68, 69].
        *   Uses a **copy-on-write protocol**, initially sharing the same data volume and allocating new storage only when updates are made [69, 70].
        *   Highly efficient and cost-effective for creating staging/test environments [70].
*   **Backtrack**: Provides the ability to **restore data to any point in time** without relying on traditional backups [71, 72].
*   Other managed features include automated patching with zero downtime, advanced monitoring, and routine maintenance [71].

### Use Cases
*   High-performance, scalable relational database workloads requiring MySQL or PostgreSQL compatibility [41].
*   Applications with high read traffic that benefit from replica auto-scaling [49, 50].
*   Workloads with infrequent, intermittent, or unpredictable usage patterns (Aurora Serverless) [56].
*   Global applications requiring low-latency reads across regions and robust disaster recovery (Aurora Global Database) [57, 58].
*   Integrating machine learning predictions directly into SQL queries (Aurora ML) [60, 61].
*   Migrating Microsoft SQL Server applications to a managed PostgreSQL environment with minimal code changes (Babelfish) [63, 66].
*   Quickly creating staging or test environments from production databases (Database Cloning) [68, 70].

### Pros/Cons
*   **Pros**:
    *   Exceptional performance and scalability [41, 43].
    *   High availability and very fast failover [42, 48].
    *   Automatic storage scaling and self-healing [43, 45].
    *   Advanced features like Serverless, Global Database, ML integration, and Babelfish [56, 57, 60, 63].
    *   Fast and cost-effective database cloning [68, 70].
*   **Cons**:
    *   Costs about **20% more than standard RDS** [42].
    *   Automated backups **cannot be disabled** (unlike RDS) [33].

### Pricing Models
*   Generally 20% more expensive than standard RDS, but cost-effective at scale due to efficiency [42].
*   Aurora Serverless bills per second of instance usage [56].

### Important Notes
*   **Database Ports**: **5432** (if PostgreSQL compatible) or **3306** (if MySQL compatible) [35].

## 4. Amazon ElastiCache

### Overview
*   **Amazon ElastiCache** is a service that helps you get **managed Redis or Memcached** caching technologies [73].
*   Caches are **in-memory databases** designed for high performance and low latency [73].

### Key Features
*   **Purpose**:
    *   Helps **reduce the load off of databases** for read-intensive workloads by caching common queries [73-75].
    *   Helps make applications **stateless** by storing application state, such as user sessions [75-77].
*   **Management**: AWS handles OS maintenance, patching, optimization, setup, configuration, monitoring, failure recovery, and backups [76].
*   **Data Loading Patterns**:
    *   **Lazy Loading**: Read data is cached only on a cache miss. Data can become **stale** [78, 79].
        *   Application queries ElastiCache first. On a **cache hit**, data is retrieved from ElastiCache. On a **cache miss**, data is fetched from the database and then written to the cache for future requests [74, 75, 79, 80].
    *   **Write Through**: Data is added or updated in the cache whenever it is written to the database, ensuring **no stale data** [78].
    *   **Session Store**: Stores user session data to maintain user login state across application instances, making the application stateless. Sessions can expire using **Time To Live (TTL)** features [75, 77, 78].
*   **Security**:
    *   **Redis**:
        *   Supports **IAM authentication** (for AWS API-level security) [81, 82].
        *   **Redis AUTH** allows setting a password/token for in-cache security [81].
        *   Supports **SSL in-flight encryption** [81].
    *   **Memcached**: Supports **SASL-based authentication** [82].

### Redis Specific Features
*   **High Availability**: **Multi-Availability Zone** with **auto-failover** [77, 83].
*   **Scaling**: Can create **read replicas** to scale reads and provide high availability [83].
*   **Data Durability**: Supports **AOF (Append Only File) persistence** [83].
*   **Backup & Restore**: Features are available on the open-source version of Redis [83].
*   **Data Structures**: Supports **sets and sorted sets** (useful for leaderboards) [83, 84].

### Memcached Specific Features
*   **Architecture**: Uses **multiple nodes for data partitioning** (sharding) [85, 86].
*   **High Availability**: **No built-in high availability or replication**; loss of a node may result in losing the entire cache [85, 86].
*   **Backup & Restore**: Only available for the **serverless version** of Memcached on ElastiCache [86].
*   **Performance**: Features a **multi-thread architecture** [86].

### Use Cases
*   **Reducing database load** for applications with high read-intensive workloads [73].
*   **Storing user session data** to make web applications stateless and improve user experience (e.g., maintaining login status across instances) [75-77].
*   **Redis Specific**: Creating **real-time gaming leaderboards** using Sorted Sets [84, 87, 88].

### Pros/Cons
*   **Pros**:
    *   **Extremely high performance and low latency** for data retrieval [73].
    *   Significantly **reduces load on backend databases** [73, 75].
    *   AWS manages infrastructure, patching, and backups [76].
    *   Helps achieve **stateless applications** [76].
    *   Redis offers high availability, read replicas, and advanced data structures [83].
*   **Cons**:
    *   Requires **significant application code changes** to integrate with the cache [76, 80].
    *   **Cache invalidation is a complex problem** that needs a strategy to prevent stale data [75, 78, 79].
    *   Memcached lacks built-in high availability and replication, posing a risk of data loss [85, 86].

### Pricing Models
*   Not explicitly detailed, but generally based on instance type, storage, and data transfer. The managed nature reduces operational costs.

## 5. Amazon RDS Proxy

### Overview
*   **Amazon RDS Proxy** is a **fully managed, highly available, and serverless database proxy** for RDS and Aurora [89, 90].
*   It sits between your application and your database [89].

### Key Features
*   **Supported Database Engines**: MySQL, PostgreSQL, MariaDB, Microsoft SQL Server, and Aurora for MySQL and PostgreSQL [91].
*   **Connection Pooling**:
    *   Allows applications to **pool and share database connections**, reducing the number of open connections to the database instance [89, 92, 93].
    *   **Improves database efficiency** by reducing stress on database resources (CPU, RAM) and minimizing open connections and timeouts [92].
    *   Especially beneficial for applications that open and close many connections rapidly, like **Lambda functions** [94, 95].
*   **Faster Failover**:
    *   **Reduces failover time by up to 66%** for RDS and Aurora [90, 93].
    *   The proxy handles the failover transparently to the application, which continues connecting to the same proxy endpoint [90, 91].
*   **Enhanced Security**:
    *   Enforces **IAM authentication** for database access, allowing secure connection management [93, 96, 97].
    *   Database credentials can be securely stored in **AWS Secrets Manager** [93, 96].
    *   **Never publicly accessible**; only accessible from within your VPC, enhancing security [97].
*   **No Code Changes**: Does **not require any application code changes**; simply update the connection endpoint to point to the proxy [96].
*   **Serverless**: Fully serverless and auto-scaling, meaning you don't need to manage its capacity [90].

### Use Cases
*   Applications with a **high number of concurrent connections** or frequently opening/closing connections (e.g., serverless Lambda functions) to prevent database overload [92, 94, 95].
*   Improving **database resilience and availability** by significantly reducing failover times [90].
*   Enforcing and simplifying database **authentication using IAM** and securely managing credentials [96, 97].

### Pros/Cons
*   **Pros**:
    *   **Improves database efficiency** and resource utilization through connection pooling [92].
    *   **Reduces failover time** for high availability [90].
    *   **Enhances security** with IAM authentication and VPC-only access [96, 97].
    *   **No application code changes** required [96].
    *   Fully managed, serverless, and highly available [90].
*   **Cons**:
    *   Only accessible from **within your VPC** [97].

### Pricing Models
*   Not explicitly detailed, but as a managed serverless service, it is generally billed based on database instance usage or proxy capacity.






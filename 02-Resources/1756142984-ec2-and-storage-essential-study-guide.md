---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
- EC2 and Storage Essential Study Guide
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - EC2
  - Section5
  - Section6
  - Section7
created_date: 2025-08-25
---
# EC2 and Storage Essential Study Guide
## 1. Amazon EC2 (Elastic Compute Cloud)
**EC2 Overview**
*   **Key Features**:
    *   **Infrastructure as a Service (IaaS)**, allowing you to rent virtual machines, known as **EC2 instances**.
    *   Choose **Operating System**: Linux (most popular), Windows, or Mac OS.
    *   Select **Compute Power (CPU)** and **Random Access Memory (RAM)**.
    *   Define **Storage Space**: network-attached (EBS or EFS) or hardware-attached (EC2 Instance Store).
    *   Configure **Network Type** and public IP.
    *   Manage **firewall rules** using Security Groups.
    *   **Bootstrap instances** with **EC2 User Data** scripts at first launch to automate tasks (e.g., install updates, software, download files). Scripts run with root user privileges.
*   **Use Cases**: General purpose computing, web servers, code repositories, batch processing, media transcoding, high-performance computing (HPC), machine learning, gaming servers, various database and data warehousing applications, and distributed file systems.
*   **Pricing Model**: Varies by purchasing option, instance type, and OS. On-demand Linux/Windows instances are billed per second (after the first minute), other OS are billed per hour.

### 1.1 EC2 Instance Types
*   **Naming Convention**: Follows the pattern `instance_class.generation.size` (e.g., `m5.2xlarge`).
    *   **Instance Class** (`M`): General purpose, compute optimized, memory optimized, storage optimized.
    *   **Generation** (`5`): Indicates hardware improvement over time.
    *   **Size** (`2xlarge`): Corresponds to CPU, memory, and network performance.

*   **Types**:
    *   **General Purpose (e.g., T, M series)**
        *   **Key Features**: Provides a good balance of compute, memory, and networking. The `t2.micro` instance is part of the AWS Free Tier (up to 750 hours/month).
        *   **Use Cases**: Web servers, code repositories, and a wide diversity of workloads.
    *   **Compute Optimized (e.g., C series)**
        *   **Key Features**: Optimized for **compute-intensive tasks** requiring a high level of processor.
        *   **Use Cases**: Batch processing, media transcoding, high-performance web servers, HPC, machine learning, and dedicated gaming servers.
    *   **Memory Optimized (e.g., R, X1, High Memory, Z1 series)**
        *   **Key Features**: Designed for fast performance on workloads that **process large data sets in memory (RAM)**.
        *   **Use Cases**: High-performance relational/non-relational databases (especially in-memory), distributed web-scale cache stores (e.g., ElastiCache), in-memory databases for business intelligence (BI), and real-time processing of big unstructured data [10, 11].
    *   **Storage Optimized (e.g., I, D, H1 series)**
        *   **Key Features**: Ideal for workloads that require **high-frequency access to large data sets on local storage**.
        *   **Use Cases**: High-frequency Online Transaction Processing (OLTP) systems, relational and NoSQL databases, caches for in-memory databases (e.g., Redis), data warehousing applications, and distributed file systems.

### 1.2 EC2 Placement Groups
*   **Key Features**: Allow you to control how your EC2 instances are placed within the AWS infrastructure to optimize for performance or availability. There are three available strategies.
*   **Strategies**:
    *   **Cluster Placement Group**
        *   **Key Features**: Instances are **grouped together in a low-latency hardware setup within a single Availability Zone (AZ)**. Provides up to 10 gigabits per second (Gbps) of bandwidth with enhanced networking, ensuring low latency and high throughput.
        *   **Use Cases**: Big data jobs requiring fast completion with very high networking, or applications needing extremely low latency and high throughput between instances.
        *   **Pros/Cons**: **Pro**: High performance, great networking. **Con**: **High risk**; if the AZ fails, all instances in the group will fail simultaneously.
    *   **Spread Placement Group**
        *   **Key Features**: Instances are **spread across different underlying hardware**. Designed to minimize failure risk. Can span across multiple AZs. There is a restriction of **up to seven EC2 instances per placement group per AZ**.
        *   **Use Cases**: Critical applications where instance failures must be isolated from one another to maximize high availability and reduce risk.
        *   **Pros/Cons**: **Pro**: Significantly reduces the risk of simultaneous failure (if one hardware fails, others won't). **Con**: Limited to 7 instances per AZ per placement group.
    *   **Partition Placement Group**
        *   **Key Features**: Similar to Spread, instances are spread across different **partitions**, where each partition represents a different set of racks of hardware within an AZ. Each partition is isolated from failure. You can have up to **seven partitions per AZ**. Partitions can span across multiple AZs. This strategy allows scaling to **hundreds of EC2 instances per group**. Instance partition information can be accessed via the metadata service.
        *   **Use Cases**: Big data applications that are partition-aware to distribute data and servers across partitions, such as Hadoop, Cassandra, Kafka, HDFS, and HBase.
        *   **Pros/Cons**: **Pro**: Offers isolation from rack failures and allows for larger scale (hundreds of instances) compared to Spread placement groups.

### 1.3 EC2 Purchasing Options
*   **On-Demand Instances**
    *   **Key Features**: Run instances on demand, with predictable pricing. Billed per second for Linux/Windows (after the first minute) and per hour for other OS. No upfront payments or long-term commitments.
    *   **Use Cases**: Short-term, uninterrupted workloads where application behavior is unpredictable.
    *   **Pros/Cons**: **Pro**: High flexibility, no commitment. **Con**: Highest cost among purchasing options.
*   **Reserved Instances (RIs)**
    *   **Key Features**: Commit to a 1-year or 3-year term, offering up to **72% discount** compared to On-Demand. You reserve specific instance attributes (type, region, tenancy, OS). Payment options include upfront, partial upfront, or no upfront (all upfront yields maximum discount). Can be scoped to a specific region or AZ (for capacity reservation).
    *   **Use Cases**: Applications with steady-state usage, such as databases.
    *   **Pros/Cons**: **Pro**: Significant cost savings for predictable, long-running workloads. Can be bought or sold in a marketplace.
    *   **Convertible RIs**: Offer more flexibility, allowing changes to instance type, family, OS, scope, and tenancy, with discounts up to 66%.
*   **Savings Plans**
    *   **Key Features**: Offer similar discounts (around 70%) to Reserved Instances for 1-year or 3-year terms. Instead of committing to specific instance types, you commit to a **specific amount of usage in dollars per hour**. Any usage beyond the plan is billed at On-Demand rates. Provides flexibility across instance size, OS, and tenancy, but is locked to a specific instance family and region.
    *   **Use Cases**: Long-term workloads where you want flexibility in instance types.
    *   **Pros/Cons**: **Pro**: Simplified cost management, significant discounts, and more flexibility than standard RIs within committed spending.
*   **Spot Instances**
    *   **Key Features**: Offer the most aggressive discounts, up to **90% off On-Demand prices**. You define a maximum price you are willing to pay; if the spot price exceeds it, your instance can be reclaimed by AWS. There is a two-minute grace period before interruption, allowing you to stop or terminate the instance. Spot prices vary based on AZ. **Spot Blocks** allow you to block a spot instance for 1-6 hours without interruption (rare exceptions).
    *   **Use Cases**: Very short workloads, batch jobs, data analysis, image processing, distributed workloads, or any workload resilient to failure and with flexible start/end times.
    *   **Pros/Cons**: **Pro**: Extremely cost-efficient. **Con**: **Less reliable** as instances can be lost at any time, **not suited for critical jobs or databases**.
    *   **Spot Fleets**: A feature to request a fleet of Spot and optionally On-Demand instances to meet a target capacity based on defined price constraints. It intelligently launches instances from various launch pools (different instance types, OS, AZs). Allocation strategies include:
        *   **Lowest Price**: Launches instances from the pool with the lowest current price (popular for short workloads).
        *   **Diversified**: Distributes instances across all defined pools for better availability and long workloads.
        *   **Capacity Optimized**: Selects pools with optimal capacity.
        *   **Price Capacity Optimized**: Chooses the pool with the highest available capacity, then the lowest price within that pool.
*   **Dedicated Hosts**
    *   **Key Features**: Provides an **entire physical server** fully dedicated to your use case, giving you control over instance placement and visibility into lower-level hardware. Can be purchased On-Demand or reserved for 1-3 years.
    *   **Use Cases**: Meeting compliance requirements, using existing server-bound software licenses (billed per-socket, per-core, per-VM), or strong regulatory needs requiring access to the physical server.
    *   **Pros/Cons**: **Pro**: Ideal for strict compliance and licensing models. **Con**: Most expensive EC2 option.
*   **Dedicated Instances**
    *   **Key Features**: Instances run on hardware dedicated to you, but you may **share the hardware with other instances in the same account** and have **no control over instance placements**.
    *   **Use Cases**: Similar compliance needs as Dedicated Hosts, but without the granular hardware control.
    *   **Pros/Cons**: **Pro**: Ensures no other customers share your hardware. **Con**: Less control over placement compared to Dedicated Hosts.
*   **Capacity Reservations**
    *   **Key Features**: Allows you to reserve On-Demand instance capacity in a **specific AZ for any duration**, ensuring availability when you need it. No time commitment (can cancel anytime). **No billing discounts** by itself. You are charged at On-Demand rates **whether or not you run instances**.
    *   **Use Cases**: Short-term, uninterrupted workloads that require guaranteed capacity in a specific AZ.
    *   **Pros/Cons**: **Pro**: Guarantees instance availability. **Con**: No inherent discount; you pay for the reserved capacity even if unused. For discounts, combine with RIs or Savings Plans.

### 1.4 EC2 Hibernate

*   **Key Features**:
    *   Preserves the **in-memory state (RAM)** of an instance by writing it to the root EBS volume.
    *   The operating system is "frozen" rather than stopped or restarted, allowing for **much faster instance boot times**.
    *   The **root EBS volume must be encrypted** and large enough to contain the RAM dump.
    *   Supports various instance families and operating systems (Linux, Windows).
    *   Instance RAM size must be less than 150 GB (subject to change).
    *   Hibernation is intended for periods of no more than 60 day.
*   **Use Cases**: Long-running processes, applications that need to save their RAM state, or services that take a long time to initialize and need to boot up fast.
*   **Pros/Cons**: **Pro**: Faster instance resumption and preservation of in-memory application state. **Con**: Requires an encrypted root EBS volume with sufficient space.

### 1.5 Connecting to EC2 instances (SSH, Putty, EC2 Instance Connect)

*   **Key Features**:
    *   **SSH (Secure Shell)**: A command-line utility used on Mac, Linux, and Windows (version 10 and above) to securely log into Linux EC2 instances [60, 61].
    *   **Putty**: A free SSH and Telnet client for Windows (especially versions prior to 10, but works for all Windows versions) that provides the same functionality as SSH [61].
    *   **EC2 Instance Connect**: A browser-based SSH session alternative that simplifies connecting to EC2 instances [61, 62]. It is valid for Mac, Linux, and all Windows versions [63]. It uploads a temporary SSH key, eliminating the need for manual SSH key management [64]. It relies on SSH behind the scenes and requires **Port 22** to be open in the instance's Security Group [65, 66]. Primarily works with Amazon Linux 2 AMI [63].
*   **Use Cases**: Performing maintenance, running commands, or interacting with your EC2 servers [60, 67].
*   **Pros/Cons**:
    *   **SSH/Putty**: Standard and robust methods, but can be challenging to configure correctly (e.g., security group rules, command typos) [68, 69].
    *   **EC2 Instance Connect**: **Pro**: User-friendly, no local software installation needed, simplifies key management [64, 68]. **Con**: Currently best supported for Amazon Linux 2 [63].

---

## 2. Amazon EBS (Elastic Block Store) Volumes

**EBS Overview** [70]

*   **Key Features**:
    *   A **network drive** (conceptually like a network USB stick) that can be attached to EC2 instances [70-72].
    *   Provides **persistent data storage** even after the associated EC2 instance is terminated [70].
    *   **Bound to a specific Availability Zone (AZ)**; an EBS volume in one AZ cannot be attached to an instance in another AZ [71, 73, 74].
    *   Can be **detached from one EC2 instance and quickly attached to another** within the same AZ, useful for failovers [73].
    *   You must **provision capacity (gigabytes and IOPS)** in advance and are billed for this provisioned capacity [75].
    *   Supports **encryption** for data at rest and in transit [76].
    *   Allows for **snapshots** to create point-in-time backups [77].
*   **Pros/Cons**: **Pro**: Data persistence, flexibility for failover, encryption, various performance options. **Con**: Network-attached nature introduces some latency [72]. Typically limited to one instance at a time (with Multi-Attach as an exception) [71, 74].
*   **Pricing Model**: Billed for the provisioned capacity (storage size and IOPS) [75].

---

### 2.1 EBS Volume Types [78]

*   **General Purpose SSD (gp2, gp3)** [78, 79]
    *   **Key Features**: Cost-effective storage balancing price and performance [78, 79]. Can be used as **boot volumes** [79].
    *   **gp3**: Newer generation. Offers a baseline of 3,000 IOPS and 125 MB/s throughput. **IOPS (up to 16,000) and throughput (up to 1,000 MB/s) can be increased independently** of storage size [80, 81].
    *   **gp2**: Older version. Small volumes can burst up to 3,000 IOPS. **IOPS are linked to volume size** (3 IOPS per GB, up to 16,000 IOPS for 5,334 GB) [80-82].
    *   **Use Cases**: System boot volumes, virtual desktops, development and test environments [79].
*   **Provisioned IOPS SSD (io1, io2 Block Express)** [78, 83]
    *   **Key Features**: Highest-performance SSD volumes for mission-critical, low-latency, and high-throughput workloads [78, 83]. Can be used as **boot volumes** [79]. Supports **EBS Multi-Attach** [84, 85].
    *   **io1**: Max 64,000 IOPS (for Nitro EC2 instances) or 32,000 IOPS (for other instances) [83, 86]. IOPS can be increased independently of storage size [82, 86].
    *   **io2 Block Express**: Offers sub-millisecond latency, up to 64 TB of data, and up to **256,000 IOPS** with a 1,000 IOPS per GB ratio [86].
    *   **Use Cases**: Critical business applications requiring sustained IOPS performance, especially databases sensitive to storage performance and consistency [83].
*   **Throughput Optimized HDD (st1)** [85, 87]
    *   **Key Features**: Low-cost HDD designed for frequently accessed, throughput-intensive workloads [87]. Cannot be used as **boot volumes** [85]. Max throughput of 500 MB/s and 500 IOPS [85].
    *   **Use Cases**: Big data, data warehousing, and log processing [85].
*   **Cold HDD (sc1)** [87, 88]
    *   **Key Features**: Lowest-cost HDD volume designed for less frequently accessed workloads (archive data) [87, 88]. Cannot be used as **boot volumes** [85]. Max throughput of 250 MB/s and 250 IOPS [88].
    *   **Use Cases**: Archive data where the lowest possible storage cost is paramount [88].

---

### 2.2 EBS Multi-Attach [84]

*   **Key Features**:
    *   Allows you to **attach the same EBS volume to multiple EC2 instances simultaneously** [84].
    *   Instances must be in the **same Availability Zone** [84, 89].
    *   Only available for **io1 and io2** EBS volumes [84].
    *   Each attached instance has **full read and write permissions** to the volume [89].
    *   Limited to **up to 16 EC2 instances** per volume [90].
    *   Requires a **cluster-aware file system** (different from XFS or EX4) to manage concurrent writes [90].
*   **Use Cases**: Increasing application availability for clustered Linux applications (e.g., Teradata), or applications that must manage concurrent write operations to shared storage [89].
*   **Pros/Cons**: **Pro**: Enhances high availability for shared storage needs. **Con**: Restricted to a single AZ, specific volume types, limited number of instances, and requires a specialized file system [89, 90].

---

### 2.3 EBS Snapshots [77]

*   **Key Features**:
    *   A **point-in-time backup** of your EBS volume [77].
    *   Can be copied **across different Availability Zones or Regions** [77].
    *   It is recommended, but not necessary, to detach the EBS volume before taking a snapshot for data integrity [77].
*   **Specific Features**:
    *   **EBS Snapshot Archive**: Allows you to move snapshots to a cheaper "archive tier" (up to 75% cheaper). Restoration from this tier takes 24-72 hours [91].
    *   **Recycle Bin for EBS Snapshots**: Provides a way to recover accidentally deleted snapshots, with retention configurable from one day to one year [91, 92].
    *   **Fast Snapshot Restore (FSR)**: Forces a full initialization of a snapshot to eliminate latency on the first use when restoring a volume or launching an instance. This feature is costly [92, 93].
*   **Use Cases**: Backups, disaster recovery (by copying across AZs/Regions), and migrating EBS volumes between AZs [77, 82, 91].
*   **Pros/Cons**: **Pro**: Essential for data backup and recovery, cost-effective archiving with Snapshot Archive. **Con**: FSR is expensive [93].

---

### 2.4 EBS Volume Encryption [76]

*   **Key Features**:
    *   When an EBS volume is encrypted, **data at rest, data in flight** (between instance and volume), **all snapshots**, and **all volumes created from those snapshots** are encrypted [76].
    *   Encryption and decryption mechanisms are **handled transparently** by EC2 and EBS, with minimal impact on latency [94].
    *   Leverages **KMS keys (AES-256)** for encryption [94].
*   **How to Encrypt an Unencrypted EBS Volume**:
    1.  Create an EBS snapshot of the unencrypted volume [95].
    2.  Encrypt the EBS snapshot using the "copy" function, enabling encryption during the copy process [95, 96].
    3.  Create a new EBS volume from the newly encrypted snapshot; this new volume will also be encrypted [95, 97].
    4.  Attach the encrypted volume to the original instance (or a new one) [95].
    *   **Shortcut**: You can also enable encryption on the fly when creating a new EBS volume from an unencrypted snapshot [98].
*   **Pros/Cons**: **Pro**: Enhances data security and compliance with very low performance impact [94].

---

## 3. Amazon EFS (Elastic File System) [99]

*   **Key Features**:
    *   A **managed Network File System (NFS)** that can be **mounted on many EC2 instances simultaneously, even across different Availability Zones** [99-101].
    *   **Highly available and scalable**, automatically growing to petabyte scale [99, 102].
    *   **Pay-per-use** model, meaning you don't provision capacity in advance [99, 103].
    *   Only compatible with **Linux-based AMIs** as it uses the POSIX file system [103, 104].
    *   Supports **encryption at rest** using KMS [103].
    *   Supports thousands of concurrent NFS clients and 10+ Gbps throughput [102].
*   **Performance Modes (set at creation)**: [102]
    *   **General Purpose (default)**: For latency-sensitive use cases (e.g., web servers, content management systems) [102].
    *   **Max I/O**: For high-throughput, highly parallel workloads (e.g., big data applications, media processing), with higher latency [105].
*   **Throughput Modes**: [105]
    *   **Bursting**: Throughput scales with storage size (e.g., 1 TB provides 50 MB/s baseline with bursts up to 100 MB/s) [105, 106].
    *   **Provisioned**: Allows you to set a specific throughput independently of your storage size [106].
    *   **Elastic**: Automatically scales throughput up and down based on your workload, suitable for unpredictable workloads (e.g., up to 3 GB/s for reads, 1 GB/s for writes) [106, 107].
*   **Storage Classes / Tiers (with Lifecycle Management)**: [107]
    *   **Standard**: For frequently accessed files. Offers multi-AZ availability and durability for production workloads [107-109].
    *   **EFS-IA (Infrequent Access)**: Designed for files accessed less frequently, offering a lower storage price but a cost to retrieve files [108]. A "One Zone" option provides a cheaper alternative for development with backups [109, 110].
    *   **Archive**: For rarely accessed data (e.g., a few times a year), providing the cheapest storage price [108].
    *   **Lifecycle Policies**: Automate the movement of files between storage tiers after a defined number of days [108, 109].
*   **Use Cases**: Content management, web serving, data sharing, WordPress, distributed applications [100, 101].
*   **Pros/Cons**: **Pro**: High availability, automatic scalability, shared access across multiple instances/AZs, pay-per-use, significant cost savings (up to 90%) with storage tiers [99, 103, 110]. **Con**: More expensive than EBS (approximately three times the cost of a GP2 EBS volume) [99, 104]. Only compatible with Linux-based instances [103, 104].
*   **Pricing Model**: Pay-per-use for each gigabyte of data stored [99, 103]. Cost savings are achieved by leveraging different storage tiers [110].

---

## 4. Amazon Machine Images (AMI) [111]

*   **Key Features**:
    *   A **customization of an EC2 instance** that defines its software configuration, operating system, and monitoring tools [111].
    *   Allows for **faster boot and configuration times** as all desired software is pre-packaged [111, 112].
    *   AMIs are built for a specific region but can be **copied across regions** to leverage AWS's global infrastructure [112].
    *   Building an AMI automatically creates **EBS snapshots** behind the scenes [113].
*   **Types**: [112]
    *   **Public AMIs**: Provided by AWS (e.g., Amazon Linux 2 AMI) [112].
    *   **Custom AMIs**: Created and maintained by users to meet specific application needs [114].
    *   **AWS Marketplace AMIs**: Provided by third-party vendors, often pre-configured with software, and can be purchased [113, 114].
*   **AMI Creation Process from an EC2 instance**: [113, 115]
    1.  Launch and customize an EC2 instance.
    2.  **Stop the instance** to ensure data integrity.
    3.  Build an AMI from the stopped instance (this also creates EBS snapshots).
    4.  Launch new EC2 instances from the custom AMI, effectively creating copies of your pre-configured instance.
*   **Use Cases**: Standardizing deployments, creating exact copies of EC2 instances (e.g., in different AZs), faster instance launches, distributing pre-configured applications [115].
*   **Pros/Cons**: **Pro**: Increases deployment speed, ensures consistency across instances, and reduces manual configuration effort [111, 112]. **Con**: Custom AMIs require ongoing maintenance [114].

---

## 5. Security Groups [116]

*   **Key Features**:
    *   Act as a **virtual firewall around your EC2 instances**, controlling inbound and outbound traffic [116-118].
    *   Contain only **"allow" rules**; all inbound traffic is blocked by default, and all outbound traffic is authorized by default [116, 119].
    *   Rules can reference traffic by **IP addresses (IPv4 or IPv6 ranges)** or by **other security groups** [116, 120, 121].
    *   Regulate access to specific **ports** [122].
    *   **Live outside the EC2 instance**; if traffic is blocked by a security group, the EC2 instance will not even see it [118].
    *   Are **locked to a specific region/VPC combination**; new security groups must be created if you switch regions or VPCs [118, 123].
    *   Can be attached to multiple instances, and an instance can have multiple security groups [123].
*   **Common Ports to Know**: [124-126]
    *   **22**: **SSH** (Secure Shell) for logging into Linux instances; also used for SFTP (Secure File Transfer Protocol).
    *   **21**: **FTP** (File Transfer Protocol) for uploading files.
    *   **80**: **HTTP** for accessing unsecured websites.
    *   **443**: **HTTPS** for accessing secured websites (standard nowadays).
    *   **3389**: **RDP** (Remote Desktop Protocol) for logging into Windows instances.
*   **Troubleshooting**: [119, 127]
    *   If you experience a **timeout** when trying to connect, it's typically a **security group issue** (traffic is blocked).
    *   If you receive a **"connection refused"** error, the security group allowed the traffic through, but the application on the instance itself was not running or errored.
*   **Use Cases**: Controlling network access to EC2 instances, segmenting networks, enabling communication between instances (by referencing other security groups), and enhancing overall network security [116, 121, 128].
*   **Pros/Cons**: **Pro**: Fundamental for network security, flexible with IP and security group referencing. **Con**: Requires careful configuration to avoid connectivity issues [127].

---

## 6. Elastic Network Interfaces (ENI) [129]

*   **Key Features**:
    *   A **logical component in a VPC** that represents a **virtual network card** [129].
    *   Provides network connectivity to EC2 instances and other AWS services [129].
    *   Each ENI can have a **primary private IPv4 address** and one or more secondary private IPv4s [130].
    *   Can have an **Elastic IPv4 address** and/or one or more public IPv4s associated with its private IPs [130, 131].
    *   One or more **security groups** can be attached to an ENI [131].
    *   ENIs can be created independently from EC2 instances and **attached, detached, or moved on the fly** between instances [131, 132].
    *   Are **bounded to a specific Availability Zone (AZ)** [131, 132].
*   **Use Cases**: Implementing network failover (by moving an ENI with its private IP between instances), creating a management network, or providing multiple IP addresses to an instance [132, 133].
*   **Pros/Cons**: **Pro**: Highly flexible for network configuration and failover scenarios. **Con**: Bounded to a single AZ [131].

---

## 7. Elastic IP (EIP) [134]

*   **Key Features**:
    *   A **static, public IPv4 address** that you own and can associate with an EC2 instance [134].
    *   Unlike dynamic public IPs, an EIP **does not change when an EC2 instance is stopped and started** [134].
    *   Can be attached to **one instance at a time** [134].
    *   Accounts are typically limited to **five EIPs** (this limit can be increased by request) [135].
*   **Use Cases**: Masking the failure of an instance or software by quickly moving the EIP to a healthy instance, providing a fixed public IP address for instances that need to be consistently accessible [135].
*   **Pros/Cons**: **Pro**: Provides a fixed public IP address for consistent external access [134]. **Con**: Often considered a **poor architectural decision**; it's generally recommended to avoid EIPs in favor of DNS (e.g., Route 53) or Load Balancers for better scalability and flexibility [135, 136]. Costs may apply if an EIP is not associated with a running instance.

---

## 8. EC2 Instance Store [137]

*   **Key Features**:
    *   A **hardware disk physically attached directly to the host server** of an EC2 instance [137, 138].
    *   Offers **extremely high disk performance**, including superior I/O operations per second (IOPS) and throughput compared to EBS volumes (e.g., millions of IOPS vs. tens of thousands) [138-140].
    *   Considered **ephemeral storage**: all data on an Instance Store volume is **lost if the EC2 instance is stopped or terminated** [141].
    *   Data is also lost if the underlying physical server fails [142].
    *   It is the user's responsibility to back up and replicate any data stored on an Instance Store volume [142].
*   **Use Cases**: Temporary storage for buffers, caches, scratch data, or other temporary content that does not require long-term persistence [141].
*   **Pros/Cons**: **Pro**: Provides exceptionally high disk performance for demanding I/O workloads [138, 140]. **Con**: **Not durable for long-term storage** due to its ephemeral nature; data loss occurs upon instance stop, termination, or hardware failure [141, 142].
*   **Pricing Model**: Typically included with specific EC2 instance types (e.g., I3 instances are known to utilize Instance Stores) [139, 142].

---

## 9. Billing and Cost Management [143]

*   **Key Features**:
    *   Provides access to your **billing data**, including month-to-date costs, forecasted costs, and last month's total cost [144]. (Note: IAM users need explicit activation of "IAM user and role access to billing information" from the root account to view billing data) [143, 145, 146].
    *   Offers a **cost breakdown by service** (e.g., EC2, EBS costs) for specific months [144, 147].
    *   Includes a **Free Tier dashboard** to monitor current and forecasted usage against free tier limits, alerting you if you're projected to exceed them [148, 149].
*   **Budgets**: [149]
    *   Allows you to **create budgets** that will alert you when your spending reaches predefined thresholds [149, 150].
    *   **Zero Spend Budget**: Configured to send an alert as soon as 1 cent is spent [150].
    *   **Monthly Cost Budget**: Set a specific monthly cost (e.g., $10) and receive alerts when actual spend (e.g., at 85% and 100%) or forecasted spend (e.g., at 100%) reaches specified percentages of the budget [151, 152].
*   **Use Cases**: Monitoring and controlling AWS spending, preventing unexpected large bills, debugging cost and billing issues, and ensuring adherence to budget limits [143, 148, 151, 153].
*   **Pros/Cons**: **Pro**: Essential tool for cost visibility and control, helps in proactive management of cloud expenditures [151, 153].
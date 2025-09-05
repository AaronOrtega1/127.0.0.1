---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "Storage and Data Transfer Services Study Guide"
tags:
  - Knowledge
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section16
created_date:
  "2025-09-04"
---
# Storage and Data Transfer Services Study Guide
## AWS DataSync

### Key Features
- Synchronizes data to and from on-premises/other cloud locations into AWS, and between AWS services
- Requires an agent to run on-premises or on other clouds for connections via NFS, SMB, HDFS, or other protocols
- No agent is required for data transfer between AWS services
- Replication tasks are scheduled (hourly, daily, or weekly), meaning they are not continuous and have a lag
- Has the unique ability to preserve file permissions and metadata (security, NFS POSIX, and SMB permissions). This is a key differentiator for exam questions regarding metadata preservation
- One DataSync agent can achieve up to 10 gigabits of data per second
- Supports bandwidth limits to prevent network saturation
- Establishes encrypted connections between the agent and the DataSync service
- Supports synchronization to Amazon S3 (including all storage classes, even Glacier via lifecycle policies), Amazon EFS, and Amazon FSx (all types)
- Supports bi-directional synchronization (on-premises to AWS and AWS to on-premises)
- AWS Snowcone devices come with the DataSync agent pre-installed for environments with limited network capacity

### Use Cases
- Moving large amounts of data from on-premises or other clouds into AWS
- Migrating data between different AWS storage services (e.g., S3 to EFS, S3 to FSx)
- Synchronizing on-premises files using SMB or NFS protocols into S3, EFS, or FSx
- Performing scheduled data transfers from on-premises to AWS or AWS to AWS
- When network capacity is a bottleneck for data transfer, use AWS Snowcone (with its pre-installed DataSync agent) to physically transport data to AWS

### Pros/Cons
- **Pros**: Excellent for large-scale, scheduled data migrations and synchronizations; uniquely preserves file metadata and permissions; offers high-speed transfers; integrates with Snowcone for offline transfers; supports various AWS storage targets.
- **Cons**: Tasks are scheduled, not continuous, which means there will always be a data lag

### Pricing Models
Not explicitly detailed in the provided sources.

---

## AWS Snow Family (Snowball, Snowcone, Snowmobile)

### Key Features
- Highly secure and portable devices designed for collecting, processing data at the edge, and migrating data into and out of AWS
- Available in two main types: Snowball Edge Storage Optimized (210 TB storage) and Snowball Edge Compute Optimized (28 TB storage, focusing on compute)
- Physical devices that are shipped to your on-premises infrastructure for data loading and then shipped back to AWS for data transfer
- Edge computing capabilities: Compute Optimized devices can run EC2 instances or Lambda functions directly at edge locations. This allows for pre-processing, machine learning, or media transcoding at the source
- AWS Snowcone: A smaller device that comes with the DataSync agent pre-installed, ideal for smaller-scale data transfers in environments with limited or no network
- Cannot directly import data into Amazon S3 Glacier; data must first be imported into Amazon S3, and then transitioned to Glacier using an S3 lifecycle policy

### Use Cases
- Large-scale data migrations (e.g., petabytes) where network transfer is slow, has limited bandwidth, is costly, unstable, or would take over a week
- Edge computing in locations with no or limited internet access or compute power (e.g., remote sites, vehicles, ships)
- Pre-processing, machine learning, or media transcoding at the data source before transferring to AWS
- Physical data transfer when network capacity is insufficient for direct uploads
- Using Snowcone to transfer data to AWS storage resources when network capacity is limited, leveraging its pre-installed DataSync agent
- Importing data for archival in Glacier, by first importing into S3 and then using lifecycle policies

### Pros/Cons
- **Pros**: Solves challenges of large-scale data transfer over poor or costly networks; enables robust edge computing; secure and portable. Snowcone's DataSync integration offers a specific solution for network-constrained data movement.
- **Cons**: Involves physical shipping and handling of devices; cannot directly import into S3 Glacier

### Pricing Models
Not explicitly detailed in the provided sources.

---

## AWS Storage Gateway

### Key Features
- A bridge service for hybrid cloud architectures, connecting on-premises data to AWS cloud storage
- Requires a Storage Gateway VM to be deployed on-premises
- Offers different types of gateways tailored to specific storage needs: S3 File Gateway, Volume Gateway, and Tape Gateway

#### S3 File Gateway
- Exposes Amazon S3 buckets as standard file shares on-premises
- Supports NFS and SMB protocols for on-premises application access
- Translates file system requests into HTTPS requests for S3
- Supports various S3 storage classes (Standard, IA, One Zone-IA, Intelligent-Tiering) but does not directly support S3 Glacier for active files. However, you can configure lifecycle policies to transition objects to Glacier for archiving
- Caches most recently used data on the gateway for low-latency access
- Integrates with Microsoft Active Directory for user authentication with SMB file shares

#### Volume Gateway
- Provides block storage volumes on-premises using the iSCSI protocol, with data backed by Amazon S3
- On-premises volumes can be backed up to AWS as EBS snapshots (stored in S3), enabling restoration of volumes on-premises or on AWS
- Two modes: Cached volumes (most data in S3, on-premises cache for recent data) and Stored volumes (entire dataset on-premises, scheduled backups to S3)

#### Tape Gateway
- Replaces physical tape libraries with a Virtual Tape Library (VTL) backed by Amazon S3 and S3 Glacier/Glacier Deep Archive
- Compatible with existing tape-based backup software and processes using the iSCSI interface

### Use Cases
- Disaster recovery: Backing up on-premises data to the cloud
- Cloud migration: Facilitating backup and restore processes to migrate data to AWS
- Extending on-premises storage to the cloud, allowing colder, less frequently accessed data to reside in AWS
- Providing low-latency on-premises cache for frequently accessed files, while storing the majority of data on AWS
- S3 File Gateway: Exposing S3 objects to on-premises applications as file shares (NFS/SMB)
- Volume Gateway: Backing up on-premises application server volumes, or providing cloud-backed iSCSI block storage
- Tape Gateway: Modernizing tape-based backup processes by archiving virtual tapes to S3 and Glacier

### Pros/Cons
- **Pros**: Enables seamless hybrid cloud integration for various storage needs; cost-effective for backups, archives, and extending storage; supports standard on-premises protocols.
- **Cons**: Requires deployment and management of a VM on-premises. S3 File Gateway cannot directly present Glacier as an active file share

### Pricing Models
Not explicitly detailed in the provided sources.

---

## AWS Transfer Family

### Key Features
- A fully managed service for transferring data into and out of Amazon S3 or EFS
- Allows data transfer using standard file transfer protocols instead of S3 APIs or EFS network file system
- Supports three protocols: FTP (File Transfer Protocol, unencrypted), FTPS (File Transfer Protocol over SSL, encrypted), and SFTP (Secure File Transfer Protocol, encrypted)
- Provides a scalable, reliable, and highly available infrastructure
- Users can access via AWS-provided endpoints or custom hostnames using Route 53
- Utilizes IAM roles for transparent read/write access to S3 or EFS
- Offers flexible authentication: manage user credentials within the service or integrate with existing systems like Microsoft Active Directory, LDAP, Okta, Amazon Cognito, or custom sources

### Use Cases
- Uploading or downloading files from S3 or EFS using standard FTP, FTPS, or SFTP clients
- Sharing files, public datasets, or integrating with CRM/ERP systems that require an FTP interface
- Providing a secure and managed FTP/FTPS/SFTP endpoint for partners or internal users to interact with S3 or EFS

### Pros/Cons
- **Pros**: Fully managed service, eliminating infrastructure overhead; supports widely used, secure protocols (FTPS, SFTP); integrates with enterprise authentication systems; simplifies data exchange with S3/EFS without direct API usage.
- **Cons**: FTP protocol is unencrypted, so secure protocols (FTPS/SFTP) should be prioritized for sensitive data

### Pricing Models
You pay per provisioned endpoint per hour, plus a fee per gigabyte of data transferred in and out.

---

## Amazon FSx (Managed Third-Party File Systems)

### Key Features
- A managed service that allows you to launch high-performance, third-party file systems on AWS, similar to RDS for databases
- Supports various specialized file systems: FSx for Windows File Server, FSx for Lustre, FSx for NetApp ONTAP, and FSx for OpenZFS

#### FSx for Windows File Server
- **Key Features**: Fully managed Windows File Server share drive; supports SMB protocol and Windows NTFS; integrates with Microsoft Active Directory for security (ACLs, user quotas); can be mounted on Linux EC2 instances; supports Microsoft DFS to link with on-premises servers; scales to tens of GB/s, millions of IOPS, hundreds of PB; offers SSD (low-latency) and HDD (cost-effective) storage options; supports Multi-AZ deployments for high availability; daily backups to S3
- **Use Cases**: Shared file storage for Windows applications; centralizing home directories; media processing, data analytics, and databases requiring low-latency file access; hybrid environments extending on-premises Windows file servers

#### FSx for Lustre
- **Key Features**: Distributed file system designed for large-scale computing, Machine Learning (ML), and High-Performance Computing (HPC); offers massive scale (hundreds of GB/s, millions of IOPS, sub-millisecond latency); supports SSD (low-latency, IOPS-intensive) and HDD (throughput-intensive) storage; seamless integration with Amazon S3 for reading as a file system and writing computation output; accessible from on-premises via VPN/Direct Connect

##### Deployment Options
- **Scratch file system**: Temporary storage, data not replicated (lost if server fails), optimized for high bursts (6x persistent performance), 200 MB/s per TB. For short-term processing and cost optimization
- **Persistent file system**: For long-term storage of sensitive data, data is replicated within the same Availability Zone (not across AZs), with transparent replacement of files in minutes upon server failure

- **Use Cases**: Machine learning, HPC, video processing, financial modeling, electronic design automation; workloads requiring extremely high throughput and low latency

#### FSx for NetApp ONTAP
- **Key Features**: Managed NetApp ONTAP file system; compatible with NFS, SMB, and iSCSI protocols; broad compatibility with Linux, Windows, macOS, and various AWS services (EC2, ECS, EKS, VMware Cloud, etc.); auto-scaling storage (shrinks/grows automatically); supports replication, snapshots, data compression, and data de-duplication; enables point-in-time instantaneous cloning for testing
- **Use Cases**: Migrating existing ONTAP or NAS workloads from on-premises to AWS; environments requiring broad OS compatibility; leveraging advanced storage management features like de-duplication and cloning for development and testing

#### FSx for OpenZFS
- **Key Features**: Managed OpenZFS file system; compatible only with NFS protocol; broad OS compatibility (Linux, Mac, Windows); very high performance (up to 1 million IOPS, <0.5 ms latency); supports snapshots, compression, and point-in-time instantaneous cloning; does not support data de-duplication
- **Use Cases**: Migrating existing ZFS workloads from on-premises to AWS; applications requiring high-performance NFS storage; testing new workloads with quick cloning capabilities

### Pros/Cons
- **Pros**: Provides specialized, high-performance managed file systems for specific workloads (Windows, HPC, enterprise NAS, ZFS); offers deep integration and advanced features tailored to each file system type.
- **Cons**: Each FSx type has specific compatibilities and feature sets, requiring careful selection for the right use case; Lustre scratch file systems are temporary and lose data on server failure; Lustre is limited to a single AZ; OpenZFS lacks data de-duplication and is NFS-only

### Pricing Models
Not explicitly detailed in the provided sources.

---

## Amazon S3 (Simple Storage Service)

### Key Features
- The primary object storage service on AWS
- A proprietary storage technology
- Supports a wide range of storage classes (S3 Standard, S3 Standard-IA, S3 One Zone-IA, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive) for cost optimization based on access patterns
- Serves as a backend for many other AWS services, including DataSync, Storage Gateway, Transfer Family, FSx for Lustre, and Snowball imports

### Use Cases
- General purpose object storage for cloud-native applications
- Target for large-scale data imports (e.g., from Snowball)
- Backend storage for hybrid file shares (via S3 File Gateway) or virtual tapes (via Tape Gateway)
- Data lake storage, data archiving (via Glacier), and serving as a data repository for high-performance computing (FSx for Lustre)
- Source or destination for file transfers using standard protocols via AWS Transfer Family

### Pros/Cons
- **Pros**: Highly scalable, durable, and available object storage; cost-effective with various storage classes and lifecycle policies; deeply integrated with the AWS ecosystem.
- **Cons**: Object storage has a specific API, unlike traditional file systems or block storage

### Pricing Models
Not explicitly detailed in the provided sources, but the mention of storage classes implies a tiered pricing model based on access and redundancy.

---

# Amazon S3 Glacier (and S3 Glacier Deep Archive)

## Key Features
- Dedicated for cost-effective archival storage of data
- Considered a "colder data" tier
- Data can be transitioned from S3 to Glacier using S3 Lifecycle Policies
- Serves as a backend for the Tape Gateway's Virtual Tape Library

## Use Cases
- Long-term archival of infrequently accessed data, such as compliance records, media archives, or backups
- Archiving virtual tapes created by the Tape Gateway
- As an ultimate destination for data imported via Snowball, requiring an initial stop in S3 followed by a lifecycle policy

## Pros/Cons
- **Pros**: Extremely low cost for long-term data archival.
- **Cons**: Not suitable for frequently accessed data due to varying retrieval times and costs (implied by "archival" and "colder data"); cannot be a direct target for Snowball imports

## Pricing Models
Not explicitly detailed in the provided sources, but its purpose indicates very low storage costs.

---

# Amazon EBS (Elastic Block Store)

## Key Features
- Provides block storage volumes for use with Amazon EC2 instances
- Typically attached to one EC2 instance at a time, though specific IO1 and IO2 volumes have a "multitask" feature
- Offers various volume types (e.g., GP3, IO2) with different performance characteristics
- EBS snapshots are used for backups, which can be stored in S3 and leveraged by Volume Gateway to restore on-premises volumes

## Use Cases
- Persistent storage for EC2 instances, including boot volumes and data volumes for databases or applications
- Used by Volume Gateway to create snapshots of on-premises volumes for backup and disaster recovery in the cloud

## Pros/Cons
- **Pros**: Persistent, high-performance block storage; integrates seamlessly with EC2; supports snapshots for data protection.
- **Cons**: Generally attached to a single EC2 instance (multitask feature is an exception)

## Pricing Models
Not explicitly detailed in the provided sources.

---

# EC2 Instance Store

## Key Features
- Provides physical storage directly attached to an EC2 instance
- Not network storage
- Offers super high performance with very high IOPS

## Use Cases
- Applications requiring extremely high performance, temporary storage directly on the instance, such as for caches, scratch data, or temporary processing

## Pros/Cons
- **Pros**: Exceptional performance and very high IOPS for demanding workloads.
- **Cons**: Ephemeral storage; data is lost if the EC2 instance is stopped, terminated, or fails [Implicit, but a critical characteristic of instance store].

## Pricing Models
Not explicitly detailed in the provided sources (its cost is typically bundled with the EC2 instance).

---

# Amazon EFS (Elastic File System)

## Key Features
- A managed Network File System (NFS compliant) for Linux instances
- Can be mounted across multiple Availability Zones within a region
- Supports the POSIX filesystem standard
- Serves as a target or source for DataSync
- Can be a source or destination for file transfers using AWS Transfer Family

## Use Cases
- Shared file storage for Linux-based applications that require a scalable, highly available network file system across multiple EC2 instances or containers
- Content management systems, web serving, development environments, and home directories for Linux users [Implicit, but common EFS use cases]
- Target for DataSync for file system synchronization
- Backend for FTP, FTPS, or SFTP access via AWS Transfer Family

## Pros/Cons
- **Pros**: Fully managed, highly scalable, and highly available (Multi-AZ) network file system; POSIX compliant; ideal for shared file access across multiple Linux instances.
- **Cons**: Primarily designed for Linux instances (use FSx for Windows File Server for Windows-based file systems)

## Pricing Models
Not explicitly detailed in the provided sources.




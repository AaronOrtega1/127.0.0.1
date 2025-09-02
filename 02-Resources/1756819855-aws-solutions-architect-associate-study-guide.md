---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "AWS Solutions Architect Associate Study Guide"
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section11
created_date:
  "2025-09-02"
---
# AWS Solutions Architect Associate Study Guide
1. EC2 Instances
• Key Features:
    ◦ Can be launched from Golden AMIs or configured using User Data
    ◦ Can have Public IP and Private IP addresses
    ◦ Can be scaled vertically (changing instance type, e.g., T2 Micro to M5 Large)
    ◦ Can be scaled horizontally (adding more instances)
    ◦ Managed by Auto Scaling Groups (ASG) for dynamic scaling
    ◦ Support Reserved Instances and Spot Instances for cost optimization
• Use Cases:
    ◦ Running websites and web applications
    ◦ Acting as web servers in a web tier
    ◦ Acting as worker instances that pull messages from an SQS queue
    ◦ Basic Proof of Concept (PoC) applications
• Pros:
    ◦ Golden AMIs offer the fastest way to start up instances by pre-installing applications and OS dependencies
    ◦ User Data allows for bootstrapping and dynamic configuration at startup
    ◦ Horizontal scaling increases capacity for high traffic
    ◦ Reserved Instances provide significant cost savings for predictable workloads
• Cons:
    ◦ Bootstrapping with user data for extensive installations can be very slow and repetitive
    ◦ Vertical scaling causes downtime during the upgrade process
    ◦ Managing multiple instances with individual Elastic IPs becomes tricky and has limitations
    ◦ Spot Instances can be terminated, making them unsuitable for critical, uninterrupted workloads
• Pricing:
    ◦ Not explicitly detailed, but payment is for the underlying compute resources
    ◦ Reserved Instances offer cost savings for guaranteed capacity
    ◦ Spot Instances offer less cost but with the risk of termination

2. AMIs (Amazon Machine Images)
• Key Features:
    ◦ Golden AMI: An AMI created with pre-installed applications, OS dependencies, and configurations
    ◦ Can be reconfigured
• Use Cases:
    ◦ Rapidly launching future EC2 instances with everything already installed and ready to go
• Pros:
    ◦ Significantly speeds up EC2 instance startup time by eliminating post-launch installation steps
    ◦ Ensures consistency across launched instances

3. EC2 User Data
• Key Features:
    ◦ Allows for bootstrapping an EC2 instance when it first starts
    ◦ Can be used for dynamic configuration
    ◦ Can be used in a hybrid mix with a Golden AMI
• Use Cases:
    ◦ Configuring instances dynamically, such as retrieving database URLs or passwords
• Pros:
    ◦ Enables flexible and dynamic configuration of instances at launch
• Cons:
    ◦ Using user data for installing applications or OS dependencies can be very slow and inefficient if repeated across many instances

4. Elastic IP (EIP)
• Key Features:
    ◦ Provides a static, public IP address to an EC2 instance
• Use Cases:
    ◦ Ensuring an EC2 instance maintains the same public IP address even if it is stopped and restarted, or its type is changed
    ◦ Initial Proof of Concept (PoC) for a single instance application
• Pros:
    ◦ Provides a persistent public endpoint for a single EC2 instance
• Cons:
    ◦ Limited to five Elastic IPs per region per account by default
    ◦ Not suitable for horizontally scaled applications with many instances, as users would need to be aware of multiple IPs

5. Route 53
• Key Features:
    ◦ AWS's highly available DNS service
    ◦ Supports A records (maps domain to IP addresses)
    ◦ Supports Alias records (maps domain to AWS resources like ELBs, which have dynamic IPs)
    ◦ DNS records have a TTL (Time To Live)
• Use Cases:
    ◦ Directing user traffic to EC2 instances or Load Balancers
    ◦ Providing a domain name (e.g., api.whatisthetime.com) for applications
• Pros:
    ◦ Highly available by default
    ◦ Alias records are ideal for ELBs because they automatically handle the changing IPs of load balancers
    ◦ Eliminates the need to manage multiple individual Elastic IPs for horizontally scaled instances
• Cons:
    ◦ Using an A record with a high TTL (e.g., one hour) can lead to downtime if the underlying EC2 instance changes or is terminated, as users will keep trying to connect to the old IP

6. ELB (Elastic Load Balancer)
• Key Features:
    ◦ Distributes incoming application traffic across multiple targets (e.g., EC2 instances)
    ◦ Can be public-facing
    ◦ Performs health checks to ensure traffic is only sent to healthy instances
    ◦ Supports Multi-AZ deployment for high availability and resilience
    ◦ Stickiness (Session Affinity): An ELB feature that directs subsequent requests from the same client to the same EC2 instance
• Use Cases:
    ◦ Balancing user requests across multiple EC2 instances to improve application responsiveness and availability
    ◦ Achieving high availability and disaster recovery by distributing traffic across multiple Availability Zones
    ◦ Maintaining user sessions (e.g., shopping carts) by ensuring a user's requests go to the same instance (with stickiness)
• Pros:
    ◦ No downtime for users when instances are added, removed, or fail, due to health checks
    ◦ Multi-AZ capability ensures the application remains available even if an entire Availability Zone fails
    ◦ Stickiness can maintain user state, but has limitations
• Cons:
    ◦ Stickiness does not provide full fault tolerance; if the sticky instance terminates, the session data is lost

7. Auto Scaling Group (ASG)
• Key Features:
    ◦ Manages a collection of EC2 instances, automatically adjusting their number
    ◦ Enables scaling on demand (scaling in and scaling out) based on defined policies
    ◦ Supports Multi-AZ deployments to distribute instances across multiple Availability Zones
    ◦ Can utilize Reserved Instances, On-Demand Instances, and Spot Instances
• Use Cases:
    ◦ Automatically adjusting EC2 instance capacity to match application demand, ensuring performance and cost-efficiency
    ◦ Maintaining high availability by replacing unhealthy instances and distributing capacity across AZs
• Pros:
    ◦ Automated scaling eliminates manual instance management, reducing operational overhead
    ◦ Cost-effective as it only runs the necessary number of instances
    ◦ Multi-AZ resilience ensures application continuity during AZ failures

8. Reserved Instances (RI)
• Key Features:
    ◦ Allows you to reserve EC2 instance capacity for a discounted rate
• Use Cases:
    ◦ For applications with predictable, minimum capacity requirements that run continuously
• Pros:
    ◦ Provides significant cost savings compared to On-Demand instances for steady-state workloads
• Cons:
    ◦ Requires a commitment (e.g., 1 or 3 years) [Not explicitly in source, but implied]

9. Spot Instances
• Key Features:
    ◦ EC2 instances available at a lower cost but can be terminated by AWS with short notice if capacity is needed elsewhere
• Use Cases:
    ◦ For fault-tolerant, flexible, and non-critical workloads that can handle interruptions
• Pros:
    ◦ Offers considerable cost savings compared to On-Demand instances
• Cons:
    ◦ Instances might be terminated, leading to potential interruptions for workloads not designed for it

10. Security Groups
• Key Features:
    ◦ Acts as a virtual firewall for EC2 instances and other AWS resources
    ◦ Restricts inbound and outbound traffic based on rules
    ◦ Can reference other security groups in rules for inter-service communication
• Use Cases:
    ◦ Securing communication between different layers of an application (e.g., allowing ELB to talk to EC2, EC2 to ElastiCache, EC2 to RDS)
• Pros:
    ◦ Provides tight, granular security for network traffic at the instance level
    ◦ Simplifies management by allowing referencing other security groups

11. RDS (Relational Database Service)
• Key Features:
    ◦ Managed relational database service
    ◦ Supports Multi-AZ deployment with a standby replica for disaster recovery
    ◦ Supports Read Replicas (up to 15) to scale reads
    ◦ Can be restored from snapshots which include schemas and data
    ◦ Master instance handles writes
• Use Cases:
    ◦ Storing durable, long-term user data such as addresses, names, or blog content (e.g., for MyClothes.com or WordPress)
    ◦ Scaling database reads for read-heavy applications using Read Replicas
    ◦ Disaster recovery using Multi-AZ for high availability
    ◦ Quickly getting databases ready with schemas and data from snapshots
• Pros:
    ◦ Multi-AZ provides high availability and automatic failover during disasters
    ◦ Read Replicas significantly scale read performance for read-intensive workloads
    ◦ Snapshots offer a much faster way to restore data compared to running large insert statements
• Cons:
    ◦ Scaling reads still requires Read Replicas. Writes are handled by the master.
    ◦ Performance can be improved by caching with ElastiCache
• Pricing:
    ◦ Multi-AZ and Read Replicas will increase costs

12. Aurora (MySQL Compatible)
• Key Features:
    ◦ An AWS-proprietary relational database compatible with MySQL
    ◦ Supports Multi-AZ, Read Replicas, and Global Databases
    ◦ Offers better scalability and is easier to upgrade compared to standard MySQL RDS
• Use Cases:
    ◦ Replacing standard RDS MySQL when needing to "go big" and achieve very high scalability for databases
    ◦ Applications like WordPress that require a highly scalable and resilient database
• Pros:
    ◦ Provides less operational overhead
    ◦ Scales better and is easier to upgrade
    ◦ Offers advanced features like Global Databases
    ◦ Includes Multi-AZ and Read Replica capabilities
• Cons:
    ◦ Generally more expensive than standard RDS (implied, not explicitly in sources)

13. ElastiCache
• Key Features:
    ◦ In-memory caching service
    ◦ Offers sub-millisecond performance
    ◦ Supports Multi-AZ if using Redis
• Use Cases:
    ◦ Storing server session data (e.g., shopping cart content) using a session ID, making the web tier stateless
    ◦ Caching frequently accessed data from RDS (lazy loading pattern) to reduce database load and improve read performance
• Pros:
    ◦ Achieves statelessness for EC2 instances, improving scalability and resilience
    ◦ More secure for session data than client-side cookies, as ElastiCache acts as the source of truth
    ◦ Significantly improves performance due to sub-millisecond response times
    ◦ Reduces traffic and CPU usage on RDS when used for caching
    ◦ Multi-AZ (with Redis) provides high availability
• Cons:
    ◦ Requires cache maintenance when used for caching RDS data
• Pricing:
    ◦ Not explicitly detailed in the sources

14. DynamoDB
• Key Features:
    ◦ NoSQL database service
• Use Cases:
    ◦ An alternative for storing session data or as a session cache
• Pros:
    ◦ Not detailed in sources but mentioned as an alternative to ElastiCache for session data storage

15. EBS Volumes (Elastic Block Store)
• Key Features:
    ◦ Block-level storage attached to a single EC2 instance
    ◦ Resides within a single Availability Zone
    ◦ Can be restored from a snapshot, which is already formatted and contains data
• Use Cases:
    ◦ Storing data for a single EC2 instance, such as application files or images for a WordPress site running on one instance
• Pros:
    ◦ Works well when you have a single EC2 instance
    ◦ Cheaper than EFS
    ◦ Snapshots allow for quick restoration of pre-formatted, pre-filled disks
• Cons:
    ◦ Does not work well when scaling across multiple instances or Availability Zones, as data is not shared and instances in different AZs cannot access the same EBS volume. This can lead to data loss or inconsistency for scaled applications

16. EFS (Elastic File System)
• Key Features:
    ◦ A Network File System (NFS)
    ◦ Creates ENIs (Elastic Network Interfaces) in each Availability Zone
    ◦ Provides shared storage that can be accessed by multiple EC2 instances across different Availability Zones simultaneously
• Use Cases:
    ◦ Scaling website storage (e.g., user-uploaded pictures for WordPress) across many different EC2 instances and Availability Zones
    ◦ For distributed applications where multiple instances need to access the same file system
• Pros:
    ◦ Enables shared access to the same files from multiple EC2 instances, regardless of their Availability Zone
    ◦ Solves the data sharing problem encountered with EBS volumes in multi-instance/multi-AZ deployments
    ◦ Provides high availability and scalability for file storage
• Cons:
    ◦ More expensive than EBS
• Pricing:
    ◦ More expensive than EBS

17. Elastic Beanstalk
• Key Features:
    ◦ A developer-centric, managed service for deploying and scaling web applications
    ◦ Automates the provisioning and management of underlying AWS resources (EC2, ASG, ELB, RDS, etc.)
    ◦ Developers are primarily responsible for their application code
    ◦ Supports a wide range of programming languages and platforms (Go, Java, .NET, Node.js, PHP, Python, Ruby, Docker)
    ◦ Allows full control over the configuration of individual components
    ◦ Application Versions: Iterations of your application code
    ◦ Environments: Collections of resources running a specific application version (can have dev, test, prod environments)
    ◦ Tiers:
        ▪ Web Server Environment Tier: Traditional load balancer to EC2 web servers
        ▪ Worker Environment Tier: SQS queue feeding EC2 instances as workers; scales based on SQS messages
    ◦ Deployment Modes:
        ▪ Single Instance: For development purposes (one EC2, Elastic IP)
        ▪ High Availability with Load Balancer: For production (ELB, multiple EC2 via ASG, Multi-AZ)
• Use Cases:
    ◦ Simplified deployment and management of web applications, allowing developers to focus on code
    ◦ Deploying applications that follow common web architectures
• Pros:
    ◦ Developer-friendly: Automates infrastructure setup, configuration, scaling, and health monitoring
    ◦ Managed service: Reduces operational burden
    ◦ Supports diverse technologies
    ◦ Cost-free service itself (you only pay for the underlying AWS resources it provisions)
• Cons:
    ◦ You pay for the underlying resources (EC2, ASG, ELB, RDS) leveraged by Beanstalk

General Architectural Concepts:
• Stateless vs. Stateful Applications:
    ◦ Stateless applications (e.g., WhatIsTheTime.com) do not require storing session information; each request is independent
    ◦ Stateful applications (e.g., MyClothes.com with a shopping cart) require state to be maintained across requests. The goal is to make the web tier as stateless as possible by offloading state to external services like ElastiCache or RDS
• Multi-AZ (Multi-Availability Zone):
    ◦ A key strategy for high availability and disaster recovery
    ◦ Involves deploying resources (ELB, ASG, RDS, ElastiCache) across multiple distinct Availability Zones within a region
    ◦ Ensures that if one AZ goes down, the application remains available through resources in other AZs
    ◦ Increases cost but provides significant resilience
• Cost Trade-offs:
    ◦ Architectural decisions like enabling Multi-AZ, scaling reads with Read Replicas, or choosing services like EFS over EBS often increase cost but provide benefits in terms of scalability, availability, or resilience. Understanding these trade-offs is crucial for a Solutions Architect

This guide should provide a solid foundation for understanding the key AWS services and architectural patterns discussed in the sources for your SAA exam. Remember to consider the trade-offs (cost, performance, availability, security) for each architectural decision.

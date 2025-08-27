---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Load Balancing and Auto Scaling Study Guide
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - EC2
  - Section8
created_date:
  "2025-08-26"
---
# Load Balancing and Auto Scaling Study Guide
## 1. Load Balancing (General Concepts)

### Key Features
*   A load balancer is a server or set of servers that **forwards traffic received to multiple backend or downstream EC2 instances or servers** [1].
*   It **spreads the load across multiple downstream instances** [2].
*   Exposes a **single point of access** to your applications [2].
*   **Seamlessly handles failures** of downstream instances because it incorporates health check mechanisms [2, 3].
*   Can perform **health checks** on your instances [3].
*   Provides **SSL termination** for HTTPS encrypted traffic [3, 4].
*   Can enforce **stickiness with cookies** [3, 5].
*   Offers **high availability** across zones [3, 6].
*   Can separate public traffic from private traffic [3].
*   The Elastic Load Balancer (ELB) is a **managed load balancer** by AWS, meaning AWS handles upgrades, maintenance, and high availability [7].
*   Using an ELB is generally **more cost-effective and scalable** than setting up your own load balancer [7].
*   ELBs are **integrated with many AWS offerings and services**, including EC2, Auto Scaling Groups, Amazon ECS, Certificate Manager, CloudWatch, Route 53, and WAF Global Accelerator [8].

### Use Cases
*   Distributing incoming application traffic across multiple targets, such as EC2 instances [1].
*   Ensuring **high availability and fault tolerance** for applications by redirecting traffic away from unhealthy instances [2, 3, 6].
*   **Encrypting traffic** between clients and the load balancer (SSL termination) [3, 4].
*   **Maintaining user sessions** with specific backend instances (stickiness) [3, 5, 9].
*   **Simplifying application access** by providing one endpoint for connectivity [2].

### Benefits (Pros)
*   **Increased application availability and fault tolerance** [2, 3, 6].
*   **Simplified architecture** for users with a single point of access [2].
*   **Reduced operational overhead** as AWS manages the service [7].
*   **Cost savings** and better scalability compared to self-managing [7].
*   **Enhanced security** by allowing EC2 instances to only accept traffic directly from the load balancer's security group [10, 11].
*   **Scalability** to balance load across many instances as user count grows [2, 12].

### Pricing Models
*   The load balancer itself is a managed service, but you pay for the **resources created underneath** [7].
*   Specific charges may apply for certain features like cross-zone load balancing for Network Load Balancers (NLB) and Gateway Load Balancers (GWLB) [13-15].

---

## 2. Health Checks

### Key Features
*   A mechanism for your Elastic Load Balancer to **verify whether or not an EC2 instance is properly working** [16].
*   If an instance is not working properly, **no traffic will be sent to that instance** [16].
*   Done by using a **protocol, a port, and a route (endpoint)** to check the health (e.g., HTTP, port 4567, /health) [16].
*   An EC2 instance is marked as **unhealthy if it does not respond with an "okay" response** (typically an HTTP 200 status code) [17].

### Use Cases
*   Ensuring that **only healthy instances receive traffic** from the load balancer [16].
*   Informing Auto Scaling Groups to **terminate unhealthy instances** and launch replacements [18, 19].
*   Monitoring the operational status and responsiveness of backend applications [16].

---

## 3. Types of Managed Load Balancers on AWS

AWS offers four kinds of managed load balancers, with newer generations recommended [20]:

### A. Classic Load Balancer (CLB)
*   **Older generation (V1), from 2009**, also known as CLB [17].
*   **Compatibility:** Supports HTTP, HTTPS, TCP, and SSL (Secure TCP) [17].
*   **Recommendation:** AWS generally **does not want you to use this load balancer anymore**; it is shown as deprecated in the console but still available [21, 22].
*   **SSL Certificates:** Supports **only one SSL certificate**. For multiple hostnames with different SSL certificates, multiple CLBs would be required [23].
*   **Cross-Zone Load Balancing:** **Disabled by default**. If enabled, there are **no charges** for inter-AZ data transfers [13].
*   **Connection Draining:** The feature is named "**Connection Draining**" for CLBs [24].

### B. Application Load Balancer (ALB)
*   **Newer generation, from 2016**, also known as ALB [21].
*   **Layer:** Operates at **Layer 7 (HTTP/HTTPS)** [25].
*   **Compatibility:** Supports HTTP, HTTPS, HTTP/2, and WebSockets protocols [21, 26].
*   **Advanced Routing Capabilities (Layer 7):**
    *   **Path-based routing:** Routes traffic based on the target path of the URL (e.g., `example.com/users` to one target group, `example.com/posts` to another) [26-29].
    *   **Hostname-based routing:** Routes based on the hostname of the URL (e.g., `one.example.com` to one target group, `other.example.com` to another) [27].
    *   **Query string and Header-based routing:** Routes based on query strings (e.g., `?Platform=Mobile`) and HTTP headers [27, 30, 31].
*   **Target Groups:** Can route to **multiple applications on the same EC2 instance** and route to **multiple different target groups** [25, 32].
    *   Target types include EC2 instances, ECS tasks, Lambda functions, and private IP addresses [32, 33].
    *   **Health checks are performed at the target group level** [32].
*   **Additional Features:**
    *   Supports **redirects** (e.g., HTTP to HTTPS automatically) [26].
    *   Has **port mapping features** ideal for dynamic ports on ECS instances [34].
    *   **Excellent for microservices and container-based applications** [34].
    *   A single ALB can front many applications, unlike Classic Load Balancers which require one per application [28, 34].
*   **Client IP Handling:** Application servers do not see the client IP directly. The true client IP is inserted into the **X-Forwarded-For** header. X-Forwarded-Port and X-Forwarded-Proto headers are also provided [31, 35, 36].
*   **SSL Certificates:** Supports multiple listeners with **multiple SSL certificates** using **Server Name Indication (SNI)** [23, 37].
*   **Cross-Zone Load Balancing:** **Enabled by default**. There are **no charges** for inter-AZ data transfers [15, 38]. Can be disabled at the target group level [39].
*   **Stickiness (Deregistration Delay):** The feature for session affinity is called "**Deregistration Delay**" for ALBs [24]. It can be configured using **load balancer generated cookies** (duration-based, named AWSALB) or **application-based cookies** (custom, named AWSALBAPP or a custom name, avoiding reserved names like AWSALB, AWSALBAPPOR, AWSALBTG) [40-43].

### C. Network Load Balancer (NLB)
*   **Newer generation, from 2017**, also known as NLB [21].
*   **Layer:** Operates at **Layer 4 (TCP/UDP)** [44].
*   **Compatibility:** Supports TCP, TLS, Secure TCP, and UDP protocols [21, 44].
*   **Performance:** Offers **extremely high performance**, handling millions of requests per second with **ultra-low latency** [44, 45].
*   **IP Addresses:** Provides **one static IP per Availability Zone**. You can assign an **Elastic IP** to each AZ, which is useful when applications need to be exposed with a set of static IPs [45].
*   **Target Groups:** Can route to EC2 instances or private IP addresses (including servers in your own data center) [46, 47].
*   **Combination with ALB:** Can be placed in front of an Application Load Balancer to provide static IP addresses while leveraging ALB's HTTP routing features [48].
*   **Health Checks:** Supports TCP, HTTP, and HTTPS protocols for health checks [49].
*   **SSL Certificates:** Supports multiple listeners with **multiple SSL certificates** using **Server Name Indication (SNI)** [37].
*   **Cross-Zone Load Balancing:** **Disabled by default**. If enabled, **charges apply** for inter-AZ data transfers [13, 14].
*   **Stickiness (Deregistration Delay):** The feature is called "**Deregistration Delay**" for NLBs [24]. The load balancer generated cookie name for NLB is AWSELB [41].

### D. Gateway Load Balancer (GWLB)
*   **Newest kind, from 2020**, also known as GWLB [21].
*   **Layer:** Operates at **Layer 3 (Network Layer)** and the IP protocol [20, 50].
*   **Core Function:** Used to **deploy, scale, and manage a fleet of third-party network virtual appliances** in AWS [51].
*   **Dual Functionality:**
    *   Acts as a **transparent network gateway** because all traffic in your VPC can go through it as a single entry and exit point [50, 52].
    *   Acts as a **load balancer** by distributing traffic across a set of virtual appliances in its target group [52].
*   **Use Cases:**
    *   Ensuring **all network traffic goes through a firewall**, intrusion detection/prevention system (IDPS), or deep packet inspection system [51, 53, 54].
    *   **Analyzing or modifying network traffic** at the network level before it reaches applications [50, 53, 55].
*   **Protocol:** Uses the **GENEVE protocol on ports 6081** for communication with target appliances [52].
*   **Target Groups:** Can be EC2 instances (registered by instance ID) or private IP addresses (for appliances on your own network/data center) [56].
*   **Cross-Zone Load Balancing:** **Disabled by default**. If enabled, **charges apply** for inter-AZ data transfers [13-15].

---

## 4. Security for Load Balancers

### Key Features
*   **Load Balancer Security Group:** Typically configured to allow incoming traffic from **anywhere (0.0.0.0/0)** on common application ports like **HTTP (port 80)** or **HTTPS (port 443)** [10, 20].
*   **EC2 Instance Security Group:** Crucially, the security group for your EC2 instances should **only allow traffic coming directly from the load balancer's security group**, rather than from anywhere on the internet. This is an enhanced security mechanism [10, 11].

### Use Cases
*   Protecting backend EC2 instances by creating a secure boundary, ensuring they only receive traffic that has first passed through the load balancer [10, 11].
*   Simplifying security group management by centralizing public access control at the load balancer level [10].

---

## 5. Connection Draining / Deregistration Delay

### Key Features
*   **Purpose:** This feature gives instances a specified amount of time to **complete in-flight or active requests** when they are being deregistered from the load balancer or marked unhealthy [24].
*   **Naming Convention:**
    *   Called "**Connection Draining**" for Classic Load Balancers [24].
    *   Called "**Deregistration Delay**" for Application Load Balancers and Network Load Balancers [24].
*   During this period, the ELB **stops sending new requests** to the instance being drained/deregistered [57, 58].
*   **Configurable Duration:** Can be set anywhere between **1 to 3,600 seconds** (default is 300 seconds or 5 minutes) [58, 59].
*   Can be **disabled** by setting the value to 0, meaning no draining occurs [59].

### Use Cases
*   **Gracefully removing instances from service** (e.g., during scaling in, instance replacement, or updates) without abruptly terminating active user connections [24, 57].
*   Ensuring data integrity and preventing data loss for applications with **long-lived requests or uploads** [60].

### Considerations (Pros/Cons)
*   **Low Value:** Good for short requests (e.g., less than one second), allowing the instance to be taken offline quickly [59, 60].
*   **High Value:** Necessary for long-lived requests, but means the instance remains active for longer, delaying its full deregistration [60].

---

## 6. Cross-Zone Load Balancing

### Key Features
*   **Purpose:** When enabled, each load balancer instance will **distribute traffic evenly across all registered instances in all Availability Zones (AZs)**, rather than only to instances within its own AZ [61, 62].
*   **Default Behavior and Charges:**
    *   **Application Load Balancer (ALB):** **Enabled by default**. There are **no charges** for inter-AZ data transfers when cross-zone load balancing is enabled [15, 38]. It can be disabled at the target group level [39].
    *   **Network Load Balancer (NLB) & Gateway Load Balancer (GWLB):** **Disabled by default**. If enabled, **charges apply** for inter-AZ data transfers [13-15].
    *   **Classic Load Balancer (CLB):** **Disabled by default**. If enabled, there are **no charges** for inter-AZ data transfers [13].

### Use Cases
*   Achieving **uniform traffic distribution** across all EC2 instances backing your application, irrespective of the AZ they reside in [61, 62].
*   Mitigating scenarios where an imbalanced number of EC2 instances across AZs could lead to some instances receiving disproportionately more traffic [63].

### Considerations (Pros/Cons)
*   **Enabled:** Leads to a more even distribution of load across all instances. For NLB and GWLB, this incurs inter-AZ data transfer charges [13, 61, 62].
*   **Disabled:** Traffic is distributed only to instances within the same AZ as the load balancer node. This can result in **imbalanced traffic distribution** if instance counts vary between AZs [63, 64]. However, it avoids inter-AZ data transfer charges for NLB and GWLB [13].

---

## 7. Sticky Sessions (Session Affinity)

### Key Features
*   **Purpose:** A mechanism to ensure that a client making multiple requests to the load balancer is consistently directed to the **same backend EC2 instance** [5, 65].
*   **Mechanism:** Achieved using a **cookie** sent from the client to the load balancer, which contains stickiness information and an expiration date. When the cookie expires, the client might be redirected to a different instance [9, 66].
*   **Supported by:** Classic Load Balancer, Application Load Balancer, and Network Load Balancer [65].
*   **Cookie Types:**
    *   **Application-based cookie:** A custom cookie generated by the target (your application). You can include custom attributes and specify its duration. ALB-generated application cookie name is AWSALBAPP. Reserved names (AWSALB, AWSALBAPPOR, AWSALBTG) should not be used for custom cookies [40, 67].
    *   **Duration-based cookie:** A cookie generated by the load balancer itself, with an expiry based on a specific duration set at the load balancer level (e.g., 1 second to 7 days). For ALB, the cookie name is AWSALB; for CLB, it's AWSELB [40-42].

### Use Cases
*   Ensuring **user session data** (e.g., login information) is maintained on a specific backend instance, which is crucial for stateful applications where session data is not shared across instances [9].

### Considerations (Pros/Cons)
*   **Benefit:** Preserves user session context and prevents loss of state [9].
*   **Limitation:** Can lead to an **imbalanced load** across backend EC2 instances if some users are "very sticky" to certain instances, resulting in uneven utilization [67].

---

## 8. SSL/TLS Certificates & Server Name Indication (SNI)

### Key Features
*   **SSL (Secure Sockets Layer) / TLS (Transport Layer Security):** Protocols used to **encrypt traffic in transit** (in-flight encryption) between clients and the load balancer over HTTPS [68, 69]. TLS is the newer version, though "SSL" is commonly used [69, 70].
*   **Public SSL Certificates:** Issued by Certificate Authorities (e.g., Comodo, GoDaddy) and have an expiration date, requiring regular renewal [4, 70, 71].
*   **SSL Termination:** The load balancer decrypts incoming HTTPS traffic at its endpoint. It can then communicate with backend EC2 instances using HTTP (unencrypted) over the private VPC network, which is generally considered secure [4].
*   **AWS Certificate Manager (ACM):** AWS service for managing SSL/TLS certificates. You can use certificates provided by ACM or upload your own [72].
*   **HTTPS Listener Configuration:** When setting up an HTTPS listener, you must specify a **default certificate**. You can also add an optional list of certificates to support multiple domains [72].
*   **Security Policy:** You can set a specific security policy for HTTPS to support older versions of SSL/TLS for legacy clients [73].

### Server Name Indication (SNI)
*   **Purpose:** SNI solves the problem of how to **load multiple SSL certificates onto one web server** (or load balancer) to serve multiple websites from a single IP address [74].
*   **Mechanism:** A newer protocol that requires the client to **indicate the hostname of the target server in the initial SSL handshake**. This allows the server (load balancer) to determine which certificate to present [74].
*   **Support:**
    *   **Application Load Balancer (ALB) & Network Load Balancer (NLB):** Support SNI and can use multiple listeners with multiple SSL certificates [23, 37, 75].
    *   **Classic Load Balancer (CLB):** Does **NOT support SNI**. It can only support one SSL certificate. To use multiple hostnames with different SSL certificates, multiple CLBs would be needed [23, 75].
*   **Use Case:** Hosting **multiple domains or websites with distinct SSL certificates behind a single ALB or NLB**, with the load balancer intelligently routing to the correct target group based on the hostname requested by the client [76, 77].

---

## 9. Auto Scaling Groups (ASG)

### Key Features
*   **Goal:** To **automate scaling out (adding EC2 instances) to match increased load** and **scaling in (removing EC2 instances) to match decreased load** [6, 78, 79].
*   The **size of the ASG varies over time** based on demand [79].
*   You define **minimum capacity** (e.g., 2 instances), **desired capacity** (e.g., 4 instances), and **maximum capacity** (e.g., 7 instances) [18, 79, 80].
*   **Integration with Load Balancers:** ASG instances are automatically linked to and registered with a load balancer. The ELB's health checks can be passed to the ASG, allowing it to **terminate unhealthy instances and launch new ones** to replace them [18, 19, 79].
*   **Fault Tolerance:** A superpower of ASGs is that if an instance is deemed unhealthy, it is terminated, and a new EC2 instance is created to replace it, enhancing application resilience [18].
*   **Cost:** **Auto Scaling Groups are free**; you only pay for the underlying EC2 instances and other resources launched [18].
*   **Launch Template:** ASGs use a **launch template** (replacing deprecated launch configurations) to define how to launch EC2 instances. This includes parameters like AMI, instance type, user data, EBS volumes, security groups, SSH key pair, IAM roles, network/subnet information, and load balancer information [81, 82].
*   **Scaling Policies:**
    *   **Dynamic Scaling:**
        *   **Target Tracking Scaling:** Simple to set up. Define a metric (e.g., CPU utilization) and a target value (e.g., 40%), and the ASG will scale to keep the metric around that target [83].
        *   **Simple or Step Scaling:** Define CloudWatch alarms that, when triggered by a metric (e.g., average CPU too high), will add or remove units of capacity (e.g., increase/decrease instance count) [83-86].
    *   **Scheduled Scaling:** Used when you anticipate scaling based on **known usage patterns** (e.g., increasing minimum capacity at 5:00 PM on Fridays) [84].
    *   **Predictive Scaling:** Continuously forecasts load based on historical patterns and **schedules scaling actions ahead of time**, very useful for cyclical data [84, 87].
*   **Scaling Metrics:** Common metrics include **CPU utilization** (as computation uses CPU) [87, 88], **RequestCountPerTarget** (from ALB, based on optimal requests per instance) [88, 89], **Network In/Out** (for network-bound applications) [90], or any **custom metric** pushed to CloudWatch [90].
*   **Scaling Cooldown:** After a scaling activity (adding or removing instances), there's a **cooldown period** (default 5 minutes / 300 seconds) during which the ASG will not launch or terminate additional instances. This allows metrics to stabilize [90, 91].
    *   Using a "ready-to-use" AMI can reduce instance configuration time, allowing for a shorter cooldown period and more dynamic scaling [92, 93].
*   **Detailed Monitoring:** Enabling detailed monitoring for your ASG (metrics every one minute) is recommended to get faster metric updates and enable more dynamic scaling [93].
*   **High Availability:** ASGs can be configured to span **multiple Availability Zones**, enhancing the high availability of your application [6].

### Use Cases
*   Automatically adjusting compute capacity to meet **fluctuations in demand** for web applications and services [78, 79].
*   Maintaining **application performance and availability** by ensuring sufficient capacity is always available [79].
*   **Replacing unhealthy instances automatically** to improve application resilience [18].
*   **Optimizing costs** by scaling down during periods of low demand [79].

### Benefits (Pros)
*   **Cost Optimization:** Reduces EC2 costs by automatically scaling in when demand is low [79].
*   **Improved Availability & Fault Tolerance:** Automatically replaces unhealthy instances and can distribute capacity across multiple AZs [6, 18].
*   **Enhanced Performance:** Scales out automatically to handle increased load, preventing performance bottlenecks [79].
*   **Operational Efficiency:** Automates instance management, reducing manual intervention and operational burden [78].

### Pricing Models
*   The Auto Scaling Group service itself is **free**. You are charged only for the **EC2 instances and other AWS resources** that the ASG launches and manages [18].

---

## 10. Scalability & High Availability (General Concepts)

### A. Scalability
*   **Definition:** The ability of an application or system to **handle a greater load by adapting** [94].
*   **Two Types of Scalability:**
    *   **Vertical Scalability (Scale Up/Down):** Involves **increasing the size or resources of an existing instance**. For example, upgrading an EC2 instance from a `t2.micro` to a `t2.large`, or conceptually, a junior operator becoming a senior operator who can handle more calls [95-97].
        *   **Use Cases:** Common for **non-distributed systems**, such as databases (e.g., RDS, ElastiCache). There are usually hardware limits to how much an instance can be vertically scaled [96, 98].
    *   **Horizontal Scalability (Scale Out/In, also called Elasticity):** Involves **increasing the number of instances or systems** for your application. For example, adding more EC2 instances, or hiring more call operators [6, 98, 99].
        *   **Use Cases:** Very common for **distributed systems** like web applications and modern applications. The cloud (e.g., Amazon EC2, Auto Scaling Groups) makes it easy to horizontally scale [6, 99, 100].

### B. High Availability
*   **Definition:** Means running your application or system in **at least two data centers (Availability Zones in AWS)**. The goal is to **survive a data center loss** (e.g., if one AZ goes down) [6, 100, 101].
*   **Goal:** To ensure the application remains operational and accessible even in the event of a failure in one location [101].
*   **Implementation:**
    *   Can be **active (horizontal scaling)** where all instances in multiple AZs are actively taking requests [102]. This often goes hand-in-hand with horizontal scaling [100].
    *   Can also be **passive**, such as with RDS Multi-AZ, where a standby instance is ready to take over if the primary fails [102].
*   **AWS Services:** Auto Scaling Groups and Load Balancers can be configured to enable multi-AZ deployments for high availability [6].





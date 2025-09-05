---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Route 53 Study Guide
tags:
  - Knowledge
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Route53
  - Section10
created_date: 2025-08-27
---
# AWS Route 53 Study Guide
### 1. Amazon Route 53 Overview
*   **Definition**: Amazon Route 53 is a **highly available, scalable, fully managed, and authoritative DNS** (Domain Name System) web service [1]. It translates human-friendly domain names (e.g., example.com) into numerical IP addresses (e.g., 54.22.33.44) that computers use to connect to resources [1, 2].
*   **Authoritative DNS**: This means that as a customer, you **can update the DNS records**, giving you full control over this DNS service [1].
*   **Domain Registrar**: Route 53 also functions as a **domain registrar**, allowing you to register your own domain names, such as example.com [3, 4].
*   **Availability SLA**: It is the **only service in AWS that provides a 100% availability SLA** [5].
*   **Naming Convention**: It is called "Route 53" as a reference to the **traditional DNS port 53** used by DNS services [5].

### 2. Key Concepts & Components

#### 2.1 DNS Records
*   **Definition**: DNS records define **how you want to route traffic** to a specific domain [5].
*   **Information in a Record**: Each record contains several pieces of information [5-7]:
    *   **Domain or Subdomain Names**: E.g., example.com.
    *   **Record Type**: Specifies the type of record, such as A, AAAA, CNAME, or NS.
    *   **Value**: The target for the record, e.g., an IP address like 12.34.56.78.
    *   **Routing Policy**: Determines how Route 53 will respond to DNS queries.
    *   **TTL (Time To Live)**: The duration for which the record will be cached at DNS resolvers.

#### 2.2 Important Record Types
*   **A Record**: Used to map a **hostname to an IPv4 IP address** (e.g., example.com to 1.2.3.4) [7].
*   **AAAA Record (Quad A)**: Similar to an A record, but maps a **hostname to an IPv6 address** [8].
*   **CNAME Record**: Used to map a **hostname to another hostname** [8, 9].
    *   **Limitation**: You **cannot create CNAME records for the top nodes of a DNS namespace (Zone Apex)**, such as example.com itself. However, you can create CNAME records for subdomains like www.example.com [8, 10, 11].
*   **NS Record (Name Servers)**: Identifies the DNS names or IP addresses of the servers that can respond to DNS queries for your hosted zone, which controls how traffic is routed to a domain [12, 13].

#### 2.3 Hosted Zones
*   **Definition**: Hosted zones are **containers of records** that define how to route traffic to a domain and its subdomains [12].
*   **Types**:
    *   **Public Hosted Zone**: Can answer queries from **public clients** for public domain names (e.g., mypublicdomain.com). These are accessible from the internet [14-16].
    *   **Private Hosted Zone**: For domain names that are **not publicly available** (private). These can only be resolved within your own Virtual Private Cloud (VPC) (e.g., application1.company.internal) [14, 17-19].

#### 2.4 Time To Live (TTL)
*   **Purpose**: The TTL specifies the amount of time that a DNS resolver or client should **cache** the response to a DNS query [20].
*   **High TTL (e.g., 24 hours)**: Results in less DNS traffic and potentially lower costs because clients query the DNS less frequently. However, records might become **outdated for a longer period** if changes are made [21].
*   **Low TTL (e.g., 60 seconds)**: Leads to more DNS traffic and potentially higher costs, but allows for **quicker propagation of record changes** [22].
*   **Mandatory Status**: TTL is **mandatory for every record type except Alias records** [23]. For Alias records, the TTL is automatically set by Route 53 [24].

#### 2.5 Alias Records
*   **Nature**: Alias records are **specific to Route 53** and are an extension to standard DNS functionalities [10, 25].
*   **Function**: They allow you to point a hostname to a **specific AWS Resource** [10].
*   **Advantages (Pros)**:
    *   **Zone Apex Support**: Unlike CNAMEs, alias records **work for both root domains (Zone Apex)** (e.g., mydomain.com) and non-root domains (e.g., app.mydomain.com) [11, 25, 26]. This is a key advantage for routing traffic from your main domain.
    *   **Cost**: They are **free of charge** [26, 27].
    *   **Health Checks**: Possess **native health check capability** [26, 28].
    *   **Automatic IP Recognition**: Automatically recognize and update if the underlying AWS resource's IP address changes [25].
    *   **TTL Management**: The TTL is **automatically set by Route 53** and cannot be manually configured [24].
    *   **Type**: Alias records are always of type **A or AAAA** [24].
*   **Common Targets**: Elastic Load Balancers (ELBs), CloudFront Distributions, API Gateway, Elastic Beanstalk environments, S3 Websites (when configured as such), VPC Interface Endpoints, Global Accelerator accelerators, and other Route 53 records within the same hosted zone [24, 29].
*   **Limitations (Cons)**:
    *   **EC2 DNS Names**: You **cannot set an alias for an EC2 DNS name** [29, 30].

### 3. Route 53 Routing Policies
*   **Purpose**: Routing policies dictate **how Route 53 responds to DNS queries**. It's important to remember that Route 53 (as a DNS service) only provides the target endpoint; it **does not directly route traffic** itself [31, 32].

#### 3.1 Simple Routing Policy
*   **Function**: Typically routes traffic to a **single resource** [33].
*   **Multiple Values**: If multiple values (e.g., IP addresses) are specified in a single record, Route 53 will return all of them, and the **client will randomly choose one** [33-35].
*   **Health Checks (Cons)**: **Cannot be associated with health checks**, meaning Route 53 will return all specified values regardless of their health status [34, 36].

#### 3.2 Weighted Routing Policy
*   **Function**: Allows you to **control the percentage of requests** that are directed to specific resources by assigning relative "weights" to each record [37].
*   **Traffic Distribution**: The percentage of traffic sent to each record is proportional to its weight divided by the sum of all weights. Weights do not need to sum to 100 [38].
*   **Health Checks**: Can be associated with health checks [39].
*   **Use Cases**: **Load balancing** across different regions, **testing new application versions** (e.g., sending a small percentage of traffic to a new feature), and gradually shifting traffic over time [39].
*   **Weight of Zero**: Assigning a weight of zero to a record **stops sending traffic** to that resource. If all records have a weight of zero, they will all be returned with equal weight [40].

#### 3.3 Failover Routing Policy
*   **Function**: Configures a **primary resource** and a **secondary (failover/disaster recovery) resource**. Traffic is routed to the primary as long as it is healthy. If the primary becomes unhealthy, Route 53 automatically **fails over to the secondary resource** [41, 42].
*   **Health Checks**: A health check is **mandatory for the primary record** to determine its health. The secondary record can also have an optional health check [41, 43, 44].
*   **Configuration**: You can configure only one primary and one secondary record [42].
*   **Use Case (Pros)**: Provides **automated DNS failover** for high availability and disaster recovery, ensuring continuous service [42, 45].

#### 3.4 Latency-Based Routing Policy
*   **Function**: Routes traffic to the resource that provides the **lowest network latency** (i.e., is geographically closest) to the user [46, 47].
*   **Measurement**: Latency is evaluated based on how quickly users can connect to the identified AWS region for that record [46].
*   **Health Checks**: Can be combined with health checks [47].
*   **Use Case (Pros)**: Ideal when **latency is the primary concern** for your websites or applications, aiming to provide the fastest possible response times to users [46].

#### 3.5 Geolocation Routing Policy
*   **Function**: Routes traffic based on the **geographic location of the user** (e.g., continent, country, or even specific U.S. states) [48]. Route 53 selects the most precise location match first [48].
*   **Default Record**: A **default record is mandatory** to handle requests from locations that do not have a specific geolocation record defined [48].
*   **Health Checks**: Can be associated with health checks [49].
*   **Use Cases**: **Website localization** (e.g., directing German users to a German version of an app), restricting content distribution, or basic load balancing based on location [49].

#### 3.6 Multi-Value Answer Routing Policy
*   **Function**: Returns **multiple values (resources)** for a DNS query. It returns up to **eight healthy records** per query [50, 51].
*   **Health Checks**: This policy **must be associated with health checks**. Only resources that are associated with a **healthy health check** will be returned in the response [50, 51].
*   **Client-Side Load Balancing**: While it returns multiple IPs, it acts as a form of **client-side load balancing** where the client chooses one of the returned healthy IPs. It is **not a substitute for an Elastic Load Balancer (ELB)** [50, 51].
*   **Advantage (Pros)**: Unlike simple routing, multi-value records guarantee that all returned records correspond to healthy endpoints [36].

#### 3.7 Geoproximity Routing Policy
*   **Function**: Routes traffic based on the **geographic location of both your users and your resources** [52].
*   **Bias Value**: Uses a "bias" value to **shift traffic towards or away from specific resources**. A **positive bias (increasing the value)** expands the geographic area from which traffic is routed to a resource, attracting more traffic. A **negative bias (decreasing to a negative number)** shrinks this area, directing less traffic [53-55].
*   **Resource Location**: Resource locations can be specified by their AWS region for AWS resources, or by latitude and longitude for non-AWS (on-premises) resources [53, 56].
*   **Requirement**: This policy requires the use of the **advanced Route 53 Traffic Flow** feature to leverage the bias settings [56].
*   **Use Case**: Ideal for scenarios where you need to **shift traffic from one region to another**, for example, during planned maintenance or to manage load across different deployments [55, 57].

#### 3.8 IP-Based Routing Policy
*   **Function**: Defines routing rules based on **client IP addresses (CIDR blocks)** [58, 59].
*   **Configuration**: You define lists of CIDRs (IP ranges) and specify which location or endpoint traffic from those CIDRs should be sent to [58, 59].
*   **Use Cases**: Optimizing performance (by routing specific IP ranges to closest or best-performing endpoints) or reducing network costs [58].

### 4. Route 53 Health Checks
*   **Purpose**: Health checks are used to monitor the health and availability of your resources. They primarily monitor public resources but can also be configured to monitor private resources indirectly [60].
*   **Types**:
    *   **Monitor an Endpoint**: Checks the health of a public endpoint (e.g., an application, server, or another AWS resource) [45].
        *   **Global Health Checkers**: Approximately **15 global health checkers** from various locations around the world send requests to your public endpoint [61].
        *   **Healthy Threshold**: An endpoint is deemed healthy if **over 18%** of the health checkers report it as healthy [62].
        *   **Intervals**: Health checks can be configured for regular (every 30 seconds) or fast (every 10 seconds, incurring a higher cost) intervals [61, 62].
        *   **Protocols**: Supports HTTP, HTTPS, and TCP protocols [62].
        *   **Text Matching**: Can check for specific text within the first 5,120 bytes of the response [63].
        *   **Network Access**: For health checks to function, the **IP address range of Route 53 health checkers must be allowed** in your resource's security groups or network ACLs [63].
    *   **Calculated Health Checks**: Combines the results of **multiple child health checks** into a single "parent" health check [45, 64].
        *   **Conditions**: You can define conditions using **OR, AND, or NOT logic** to combine the child health check results [65].
        *   **Capacity**: Can monitor up to 256 child health checks [65].
    *   **Monitor a CloudWatch Alarm**: This is the method for monitoring the health of **private resources** [66, 67].
        *   **Mechanism**: Since public Route 53 health checkers cannot access private endpoints within your VPC or on-premises network, you create a **CloudWatch Metric** to monitor the private resource. A **CloudWatch Alarm** is then set on this metric. When the alarm transitions into an "alarm state," the associated Route 53 health check is automatically marked as unhealthy [67, 68].

### 5. Route 53 Resolver Endpoints for Hybrid DNS
*   **Route 53 Resolver (Default)**: By default, the Route 53 Resolver in your AWS account answers DNS queries for local domain names (e.g., EC2 instances), records in your private hosted zones, and records in your public name servers [69].
*   **Hybrid DNS Requirement**: When you need to establish DNS connectivity and resolution between your AWS Cloud DNS and your on-premises network DNS, you use Resolver Endpoints [70, 71].
*   **Resolver Endpoints**:
    *   **Inbound Endpoint**: Allows **DNS resolvers from your on-premises network to query and resolve domain names of your AWS resources** (e.g., a server in your data center querying for an EC2 instance in a private hosted zone in AWS) [70, 72, 73]. This requires established connectivity (VPN or Direct Connect) between your data center and AWS [72].
    *   **Outbound Endpoint**: Allows the **Route 53 Resolver (in AWS) to forward DNS queries to your on-premises DNS resolvers** (e.g., an EC2 instance in AWS querying for a web.onpremise.private domain) [73, 74].
*   **Summary**: Resolver inbound and outbound endpoints are essential for **bidirectional DNS resolution** in hybrid cloud environments, ensuring that DNS queries between on-premises and AWS are successfully resolved [71].

### 6. Pricing Model (Route 53 Specific)
*   **Hosted Zones**: You pay **$0.50 per month** for each hosted zone you create in AWS [15, 17].
*   **Domain Registration**: Registering a domain name through Route 53 costs a **minimum of $12 per year**, with prices varying depending on the specific domain [15].
*   **DNS Queries**: You are charged based on the **number of DNS queries** that Route 53 receives for your domains. Using a low TTL can increase the number of queries and, consequently, the cost [22].
*   **Alias Records**: Alias records are **free of charge** [26, 27].
*   **Health Checks**: While health checks are generally included, **fast health checks** (10-second intervals) incur a **higher cost** compared to regular health checks (30-second intervals) [62].
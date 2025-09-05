---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS SAA 2025]]"
aliases: 
  - "Global Content Delivery and Networking Services Study Guide"
tags:
  - Knowledge
  - StudyGuide
  - aws
  - cloud
  - certificate
  - Section15
  - CloudFront
created_date:
  "2025-09-04"
---
# Global Content Delivery and Networking Services Study Guide
## 1. AWS Global Accelerator

**AWS Global Accelerator** is a newer AWS service designed to improve the availability and performance of applications for a global user base by leveraging the AWS global network [1, 2].

*   **Key Features:**
    *   **Solves Global Latency:** Addresses the problem of high latency and many hops through the public internet for global users accessing an application deployed in a single region [1, 3, 4].
    *   **Anycast IP:** Utilizes the **Anycast IP concept**, where all servers hold the same IP address, and clients are routed to the nearest one [2, 4, 5]. Global Accelerator creates **two static, global Anycast IP addresses** for your application [6-8].
    *   **AWS Global Network:** Leverages the **AWS internal global network** to route traffic, directing it from the closest edge location to your application via a private, more stable, and lower-latency AWS network [2, 6, 9].
    *   **Supported Endpoints:** Works with **Elastic IP, EC2 instances, Application Load Balancers (ALB), and Network Load Balancers (NLB)**, which can be either public or private [7].
    *   **Consistent Performance:** Provides consistent performance through **intelligent routing** to the lowest latency edge location [7].
    *   **Fast Regional Failover:** Offers **automated and fast regional failover** in less than one minute to a healthy endpoint if health checks fail for an application in a specific region [8, 10, 11].
    *   **No Client Cache Issues:** The two Anycast IPs used do not change, preventing client cache problems [8].
    *   **Health Checks:** Performs health checks on your application endpoints to ensure availability and facilitate failover [8].
    *   **DDoS Protection:** Automatically includes **DDoS protection** through **AWS Shield** [10, 12].
    *   **No Caching:** Unlike CloudFront, Global Accelerator **does not cache content** [11]. Packets are proxied from the edge locations directly to the applications running in one or more AWS regions [11, 13].

*   **Use Cases:**
    *   **Global applications** with users worldwide accessing a single-region deployment, seeking to minimize latency and improve direct access to AWS infrastructure [1, 3, 4].
    *   Applications requiring **static IP addresses globally** [11].
    *   **Non-HTTP use cases** such as gaming, IoT, or Voice over IP (VoIP) [11].
    *   HTTP use cases that specifically require static IP addresses globally [11].
    *   Scenarios needing **deterministic and fast regional failover** [11].
    *   Enhancing **disaster recovery** strategies due to its health checks and automated failover capabilities [10].

*   **Pros:**
    *   **Significantly reduces latency** by routing traffic over the AWS global network instead of the public internet [4, 6, 9].
    *   Provides **two static Anycast IP addresses** globally, simplifying client whitelisting [6, 7, 10].
    *   Offers **automated, fast failover** (under one minute) for high availability and disaster recovery [8, 10, 11].
    *   Ensures **consistent performance** with intelligent routing to the closest, lowest-latency edge location [7].
    *   Includes **automatic DDoS protection** via AWS Shield [10].
    *   Supports a **wide range of applications** over TCP or UDP, making it suitable for many non-HTTP workloads [13].
    *   Can direct traffic to **public or private endpoints** (Elastic IP, EC2, ALB, NLB) [7].

*   **Cons:**
    *   **Does not provide content caching**, meaning all requests are proxied to the origin [11].
    *   Primarily focuses on network performance and availability rather than content caching benefits.

*   **Pricing Model:** The provided sources do not detail the specific pricing model for AWS Global Accelerator.

## 2. Amazon CloudFront

**Amazon CloudFront** is a **Content Delivery Network (CDN)** that improves read performance and user experience by caching website content at various edge locations worldwide [14].

*   **Key Features:**
    *   **Content Delivery Network (CDN):** CloudFront is AWS's CDN service [14].
    *   **Global Edge Network:** Comprises **hundreds of points of presence** (edge locations and caches) globally, reducing latency for users worldwide [14-16].
    *   **Content Caching:** Improves read performance by **caching content** at edge locations. Once content is fetched from the origin, subsequent requests from the same edge location are served from the cache [14, 17, 18].
    *   **DDoS Protection:** Provides **DDoS protection** inherently and integrates with **AWS Shield** and Web Application Firewall (WAF) [12, 15].
    *   **Cache Invalidation:** Allows for **forced partial or entire cache refreshes** before TTL expiry. You can invalidate specific file paths (e.g., `/index.html`) or entire directories (e.g., `/images/*`) [19-21]. When invalidated, the edge location removes the file and fetches the updated content from the origin on the next request [21, 22].
    *   **Geo-Restriction:** Enables **restricting access to content based on the user's country**. This can be set up as an **allowlist** (approved countries) or a **blocklist** (banned countries), determined by a third-party Geo-IP database [23, 24].
    *   **Price Classes:** Offers three price classes to control costs by **reducing the number of edge locations** used:
        *   **Price Class All:** Includes all global regions for best performance, but at the highest cost [25].
        *   **Price Class 200:** Includes most regions, excluding the most expensive ones [26, 27].
        *   **Price Class 100:** Includes only the least expensive regions (North America and Europe), offering the lowest cost [26, 27].
    *   **VPC Origins:** The **recommended and more secure way** to connect CloudFront to applications hosted in **private subnets within a VPC**. This allows delivering content from private ALBs, NLBs, or EC2 instances without exposing them to the internet [28-31].
    *   **Origin Access Control (OAC):** Secures the connection between CloudFront and **Amazon S3 buckets** used as origins [31, 32]. Requires modifying the S3 bucket policy [32].
    *   **Multiple Origin Types:**
        *   **Amazon S3 buckets:** For distributing and caching files, or uploading files directly through CloudFront. Can be used for static S3 websites [17, 33].
        *   **VPC origins:** For applications in private subnets (ALB, NLB, EC2) [31].
        *   **Custom origins:** Any public HTTP backend, whether inside or outside of AWS [31, 33].

*   **Use Cases:**
    *   **Caching and delivering static content** (e.g., images, videos, CSS, JavaScript) globally to reduce load on origin servers and improve user experience [12-14, 34].
    *   **Accelerating dynamic content** delivery, such as API acceleration and dynamic site delivery [13].
    *   **Distributing files from Amazon S3 buckets** across the world efficiently [16, 17].
    *   Delivering content from **privately hosted applications** in a VPC securely [28].
    *   Implementing **geographic content restrictions** due to copyright laws or other regional access requirements [23].
    *   Protecting web applications and content from **DDoS attacks** [15].
    *   When **static content must be available everywhere** around the world with low latency [34].

*   **Pros:**
    *   **Enhances read performance** and significantly **lowers latency** for global users through caching [14].
    *   Provides robust **DDoS protection** [15].
    *   Supports various origin types, offering **flexibility** for different application architectures [17, 31].
    *   **VPC origins** enable **secure delivery** of content from private applications [28, 30].
    *   **Cache invalidation** allows for rapid updates to cached content [19, 20].
    *   **Geo-restriction** offers fine-grained control over content access based on user location [23].
    *   **Price classes** help optimize costs by balancing performance with budget [25].

*   **Cons:**
    *   Updates to cached content require **cache invalidation** or waiting for the TTL to expire [19].
    *   The older method of connecting to public origins required manual management of CloudFront IP allowlists in security groups, which was less secure and more tedious than VPC origins [30, 35, 36].

*   **Pricing Model:**
    *   Pricing is primarily based on **data transferred out** of CloudFront edge locations, which varies significantly by geographic region [37].
    *   For example, data transfer out from US/Canada/Mexico is $0.085 per gigabyte for the first 10 terabytes, while from India, it's about twice that at $0.17 per gigabyte [38].
    *   Costs decrease as the volume of data transferred increases (e.g., over 5 petabytes from the United States costs $0.02 per gigabyte) [38].
    *   **Price Classes** (All, 200, 100) allow you to **reduce costs** by limiting the regions your distribution uses, at the expense of performance in some areas [25, 26].

## 3. Amazon S3 (as a CloudFront Origin)

**Amazon S3** buckets can serve as secure and scalable backend **origins for CloudFront distributions** [17].

*   **Key Features:**
    *   **Static Website Hosting:** S3 buckets can be configured to host static websites [33].
    *   **CloudFront Origin:** Functions as a backend origin for CloudFront, enabling global distribution and caching of files stored in the bucket [17, 39].
    *   **Origin Access Control (OAC):** Provides a **secure connection** between CloudFront and S3, ensuring that content can only be accessed via CloudFront and not directly from the S3 bucket's public URL [31, 32]. This requires modifying the S3 bucket policy [32].

*   **Use Cases:**
    *   Storing and serving **static website content** (HTML, CSS, JavaScript, images) globally via CloudFront [17, 33, 40].
    *   **Distributing large files** (e.g., software downloads, media assets) that benefit from caching at edge locations [17].
    *   When you need a global solution for **static content** that is cached and available everywhere [34].

*   **Pros:**
    *   **Highly scalable and durable storage** for website assets and files.
    *   **Cost-effective** for storing large amounts of data.
    *   **Seamless integration with CloudFront** for global content delivery and performance optimization [17].
    *   **Enhanced security** for content delivery through OAC, preventing direct access to the S3 bucket [31].

*   **Cons:**
    *   Not suitable for **dynamic content** that requires real-time updates across many regions, as CloudFront caching introduces a delay unless invalidation is used [34]. For real-time dynamic content across a few regions, S3 Cross-Region Replication might be more appropriate [34].

*   **Pricing Model:** The provided sources do not detail the specific pricing model for S3 storage or data transfer, only its role in CloudFront pricing.

## 4. AWS Shield

**AWS Shield** is a managed Distributed Denial of Service (DDoS) protection service [10].

*   **Key Features:**
    *   **Automatic DDoS Protection:** Provides automatic protection against DDoS attacks [10].
    *   **Integration with AWS Services:** Integrates seamlessly with other AWS services like **Global Accelerator** and **CloudFront** to provide a layer of security [10, 12, 15].

*   **Use Cases:**
    *   Protecting applications and resources that are fronted by **Global Accelerator** [10].
    *   Securing content delivered through **CloudFront** distributions from DDoS attacks [12, 15].

*   **Pros:**
    *   **Automatic protection** reduces operational overhead for DDoS mitigation [10].
    *   **Seamless integration** with core AWS networking and content delivery services [10, 12].

*   **Cons:** The provided sources do not mention any cons for AWS Shield.

*   **Pricing Model:** The provided sources do not detail the specific pricing model for AWS Shield.

## 5. EC2 Instances, Application Load Balancers (ALB), and Network Load Balancers (NLB)

These services act as **backend targets** for traffic routed by **Global Accelerator** and **origins** for **CloudFront** [7, 28, 31].

*   **Key Features (as Targets/Origins):**
    *   **Global Accelerator Targets:** Can be targeted by Global Accelerator, whether they are **public or private** [7].
    *   **CloudFront Origins (VPC Origins):** Can be used as origins for CloudFront via **VPC origins**, allowing them to remain in **private subnets** within a VPC for enhanced security [28, 29, 31].
    *   **Legacy CloudFront Origins:** Previously, CloudFront could connect to **public ALBs or EC2 instances** by requiring users to allow CloudFront's public IP addresses in security groups, which was more tedious and less secure than VPC origins [30, 35, 36].

*   **Use Cases:**
    *   Hosting **applications** that require improved global performance and availability through **AWS Global Accelerator** [7].
    *   Serving as **backend origins** for **CloudFront** to deliver dynamic content or content from private applications [28, 31].

*   **Pros:**
    *   **Flexibility:** Can host a wide range of applications.
    *   **Integration:** Seamlessly integrate with Global Accelerator and CloudFront for performance, availability, and security benefits [7, 28].
    *   **Security with VPC Origins:** CloudFront's VPC origins allow these services to remain private while still leveraging CDN benefits [28, 30].

*   **Cons:**
    *   The older method of connecting CloudFront to public ALBs/EC2 instances required manual security group management and posed a higher security risk if misconfigured [30, 35, 36].

*   **Pricing Model:** The provided sources do not detail the specific pricing models for EC2 instances, ALBs, or NLBs.

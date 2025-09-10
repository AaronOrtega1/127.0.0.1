---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - "Global Content Delivery and Networking Services Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/Content_Delivery_Networking_Services
created_date:
  "2025-09-04"
---
# Global Content Delivery and Networking Services Flashcards
- What problem does AWS Global Accelerator aim to solve for global applications?;;AWS Global Accelerator aims to solve the problem of **high latency** and **many hops over the public internet** for global users trying to access an application deployed in a single AWS region.
<!--SR:!2025-09-19,11,270-->
- Explain the fundamental difference between Unicast IP and Anycast IP.;;With **Unicast IP**, one server holds one IP address, and clients are routed to that specific server. With **Anycast IP**, all servers hold the **same IP address**, and clients are routed to the **nearest** one.
<!--SR:!2025-09-12,3,230-->
- What core IP addressing concept does AWS Global Accelerator leverage to route traffic?;;AWS Global Accelerator leverages the **Anycast IP** concept to route traffic.
<!--SR:!2025-09-11,2,210-->
- How many static IP addresses does AWS Global Accelerator provide for an application, and are they global or regional?;;AWS Global Accelerator provides **two static Anycast IP addresses** that are **global** for your application.
<!--SR:!2025-09-11,3,250-->
- Describe the mechanism by which AWS Global Accelerator improves traffic routing for global users.;;It sends user traffic to the **closest AWS edge location** using **Anycast IP**, and from there, it routes the traffic directly to the application over the **private AWS global network**, bypassing the public internet for most of the path.
<!--SR:!2025-09-19,11,270-->
- Name three types of AWS resources that can be used as endpoints with AWS Global Accelerator.;;AWS Global Accelerator can work with **Elastic IP addresses, EC2 instances, Application Load Balancers (ALB), and Network Load Balancers (NLB)**, whether they are public or private.
<!--SR:!2025-09-11,1,210-->
- How does AWS Global Accelerator handle regional application failures?;;AWS Global Accelerator performs **health checks** on your application endpoints. If an endpoint becomes unhealthy, it provides **automated failover to a healthy endpoint in less than one minute**.
<!--SR:!2025-09-13,3,210-->
- What is a key differentiating factor between AWS Global Accelerator and CloudFront regarding content caching?;;**CloudFront** is designed to **cache content** (both static and dynamic) at edge locations and serve it directly from there. In contrast, **Global Accelerator has no caching available**; it proxies packets from edge locations directly to the application in AWS regions.
<!--SR:!2025-09-20,12,270-->
- For what types of use cases is AWS Global Accelerator particularly well-suited, especially when compared to CloudFront?;;Global Accelerator is a good fit for **non-HTTP use cases** like gaming, IoT, or Voice over IP, HTTP use cases requiring **static IP addresses globally**, or when you need **deterministic and fast regional failover**.
<!--SR:!2025-09-12,3,230-->
- What is the primary purpose of CloudFront?;;CloudFront is a Content Delivery Network (CDN) primarily used to **improve read performance** by **caching website content at various edge locations** globally, thereby reducing latency and improving the user experience.
<!--SR:!2025-09-24,15,290-->
- How does CloudFront contribute to the security of applications against DDoS attacks?;;CloudFront provides **automatic DDoS protection**, integrating with services like **AWS Shield** and Web Application Firewall (WAF).
<!--SR:!2025-09-17,7,250-->
- How does CloudFront securely connect to an Amazon S3 bucket used as an origin?;;CloudFront uses an **Origin Access Control (OAC)** to secure the connection to an S3 bucket, along with modifying the S3 bucket policy.
<!--SR:!2025-09-12,3,230-->
- Why would an administrator use CloudFront cache invalidation?;;An administrator would use CloudFront cache invalidation to **force an immediate refresh** of cached content at the edge locations, ensuring that users receive updated content from the origin **without waiting for the cache's Time To Live (TTL) to expire**.
<!--SR:!2025-09-25,16,290-->
- How does CloudFront determine a user's country for geo-restriction purposes?;;CloudFront uses a **third-party Geo-IP database** to match the user's IP address to their country.
<!--SR:!2025-09-25,16,290-->
- What is the purpose of CloudFront Price Classes?;;CloudFront Price Classes allow you to **reduce the number of edge locations** your distribution uses to **lower costs**. Options include Price Class All (all regions), Price Class 200 (most regions, excluding most expensive), and Price Class 100 (least expensive regions like North America and Europe).
<!--SR:!2025-09-25,16,290-->
- What is the main security advantage of using CloudFront VPC origins?;;The main security advantage of CloudFront VPC origins is that they allow CloudFront to deliver content from applications hosted in **private subnets within your VPC**, meaning the applications **do not need to be publicly exposed to the internet**.
<!--SR:!2025-09-21,12,270-->
- When would you choose CloudFront over S3 Cross Region Replication for content distribution?;;You would choose **CloudFront** for distributing and caching **static content** that needs to be available globally with low latency. **S3 Cross Region Replication** is suitable for **dynamic content** that requires near real-time updates in a few specific regions.
<!--SR:!2025-09-15,5,230-->
- What broad types of application layer protocols do Global Accelerator and CloudFront typically optimize?;;**CloudFront** primarily optimizes performance for applications using **HTTP/HTTPS** protocols. **Global Accelerator** optimizes performance for a **wide range of applications over TCP or UDP**.
<!--SR:!2025-09-11,1,210-->
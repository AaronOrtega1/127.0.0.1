---
link: "[[1756351625-aws-route-53-study-guide|AWS Route 53 Study Guide]]"
aliases: 
  - "AWS Route 53 Flashcards"
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/Route53
created_date:
  "2025-08-27"
---
# AWS Route 53 Flashcards
- What is the **traditional DNS port** that "Route 53" refers to?;;The traditional DNS port is **53**.
<!--SR:!2025-10-25,33,250-->
- What is the **availability Service Level Agreement (SLA)** offered by Amazon Route 53?;;Amazon Route 53 is the **only service in AWS that provides a 100% availability SLA**.
<!--SR:!2025-10-24,36,270-->
- What does it mean for Route 53 to be an "**authoritative DNS**"?;;It means that the **customer (you) can update the DNS records**, giving you full control over the DNS.
<!--SR:!2025-10-13,26,270-->
- What is the primary purpose of an **A record** in Route 53?;;An A record is used to **map a hostname into an IPv4 IP address**.
<!--SR:!2025-11-08,47,290-->
- What is the primary purpose of an **AAAA record** in Route 53?;;An AAAA record is used to **map a hostname into an IPv6 address**.
<!--SR:!2025-10-11,24,270-->
- What is a key **restriction for CNAME records** in Route 53 regarding the domain namespace?;;You **cannot create CNAME records for the top node of a DNS namespace, also known as the Zone Apex** (e.g., example.com).
<!--SR:!2025-10-07,20,250-->
- How do **Alias records** differ from CNAME records regarding the Zone Apex?;;Unlike CNAMEs, **Alias records can be used for the Zone Apex** (e.g., mydomain.com can point to an alias resource).
<!--SR:!2025-10-23,35,270-->
- What is a key difference in **TTL management** between Alias records and other record types in Route 53?;;With Alias records, you **cannot set the TTL; it is set automatically by Route 53**. TTL is mandatory for all other record types.
<!--SR:!2025-12-04,59,270-->
- What is a **cost difference** for queries between Alias records and other Route 53 records?;;**Alias records are free of charge for queries**.
<!--SR:!2025-11-07,46,290-->
- What specific type of target can an **Alias record** point to that a CNAME cannot directly represent?;;Alias records allow you to point a hostname to a **specific AWS Resource** (e.g., Elastic Load Balancers, CloudFront Distributions, S3 Websites). They cannot, however, target EC2 DNS names.
<!--SR:!2025-10-13,19,210-->
- What is the **monthly cost** for creating a hosted zone in Route 53?;;You pay **50 cents per month for any hosted zone** you create in AWS.
<!--SR:!2025-10-21,29,250-->
- What is the fundamental difference in scope between **public and private hosted zones**?;;A **public hosted zone** answers queries from **public clients** (anyone on the internet), while a **private hosted zone** is only queried from **within your private resources**, such as your VPC.
<!--SR:!2025-10-21,29,270-->
- What is the main factor that **Geolocation Routing Policy** uses to route traffic?;;Geolocation Routing Policy routes traffic based on the **user's actual geographic location** (continent, country, or even U.S. states), selecting the most precise location first.
<!--SR:!2025-11-02,41,290-->
- In **Geoproximity Routing Policy**, how does a "bias" value affect traffic distribution?;;A **positive bias (increasing the value) expands the size of a geographic region**, shifting more traffic to that resource. A **negative bias (decreasing the value) shrinks the region**, sending less traffic to that resource.
<!--SR:!2025-10-31,39,270-->
- How does the **IP-based Routing Policy** determine where to send traffic?;;IP-based Routing Policy defines routing based on **client IP addresses** by allowing you to define a list of **CIDR blocks (IP ranges)** and specifying the target location for traffic originating from those ranges.
<!--SR:!2025-10-11,8,170-->
- What is a **mandatory requirement** for the primary record when using a **Failover Routing Policy**?;;The **primary record must be associated with a health check**. If this health check becomes unhealthy, Route 53 automatically fails over to the secondary resource.
<!--SR:!2025-11-01,39,270-->
- How can you perform **health checks on private resources** using Route 53, given that Route 53 health checkers are public?;;To monitor private resources, you should: Monitor the private resource using a **CloudWatch Metric**. Create a **CloudWatch Alarm** on that metric. Assign the **CloudWatch Alarm to the Route 53 health check**, which will then become unhealthy when the alarm state is triggered.
<!--SR:!2025-10-12,25,270-->
- What is a key difference between **Multi-Value Routing Policy** and **Simple Routing Policy** when multiple values are returned?;;**Multi-Value Routing Policy can be associated with health checks**, ensuring that only **healthy resources (up to eight)** are returned. **Simple Routing Policy cannot be associated with health checks**, meaning it might return unhealthy resources.
<!--SR:!2025-11-16,46,250-->
- What is the impact of setting a **high TTL** (e.g., 24 hours) versus a **low TTL** (e.g., 60 seconds) on Route 53 traffic and record changes?;;**High TTL:** Results in **less traffic on Route 53** (lower cost) but means clients may have **outdated records for longer**, making record changes slower to propagate. **Low TTL:** Results in **more traffic on your DNS** (higher cost) but records are **outdated for less time**, making it quicker and easier to change records.
<!--SR:!2025-11-24,62,310-->
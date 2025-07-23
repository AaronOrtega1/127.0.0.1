---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - CloudFront And AWS Global Accelerator Quiz
tags:
  - resource
  - Cards/AWS
  - aws
  - cloud
  - certificate
created_date:
  2025-07-02
---
# CloudFront And AWS Global Accelerator Quiz
- You have a CloudFront Distribution that serves your website hosted on a fleet of EC2 instances behind an Application Load Balancer. All your clients are from the United States, but you found that some malicious requests are coming from other countries. What should you do to only allow users from the US and block other countries?;;Use CloudFront Geo Restriction.
<!--SR:!2025-08-22,32,270-->
- You have a static website hosted on an S3 bucket. You have created a CloudFront Distribution that points to your S3 bucket to better serve your requests and improve performance. After a while, you noticed that users can still access your website directly from the S3 bucket. You want to enforce users to access the website only through CloudFront. How would you achieve that?;; Configure your CloudFront Distribution and create an Origin Access Control (OAC), then update your S3 bucket Policy to only accept request from your CloudFront Distribution.
<!--SR:!2025-08-02,12,230-->
- ![[1751484664-cloudfront-and-aws-global-accelerator-quiz.webp]];;Only allows the S3 bucket content to be accessed from your CloudFront Distribution.
<!--SR:!2025-09-26,65,310-->
- A WordPress website is hosted in a set of EC2 instances in an EC2 Auto Scaling Group and fronted by a CloudFront Distribution which is configured to cache the content for 3 days. You have released a new version of the website and want to release it immediately to production without waiting for 3 days for the cached content to be expired. What is the easiest and most efficient way to solve this?;;CloudFront Cache Invalidation.
<!--SR:!2025-08-17,27,270-->
- A company is deploying a media-sharing website to AWS. They are going to use CloudFront to deliver the content with low latency to their customers where they are located in both US and Europe only. After a while there a huge costs for CloudFront. Which CloudFront feature allows you to decrease costs by targeting only US and Europe?;;CloudFront Price Classes.
<!--SR:!2025-07-25,9,230-->
- A company is migrating a web application to AWS Cloud and they are going to use a set of EC2 instances in an EC2 Auto Scaling Group. The web application is made of multiple components so they will need a host-based routing feature to route to specific web application components. This web application is used by many customers and therefore the web application must have a static IP address so it can be whitelisted by the customers’ firewalls. As the customers are distributed around the world, the web application must also provide low latency to all customers. Which AWS service can help you to assign a static IP address and provide low latency across the globe?;;AWS Global Accelerator + Application Load Balancer.
<!--SR:!2025-07-24,9,250-->




---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - High Availability & Scalability Quiz
tags:
  - resource
  - Cards/AWS
  - aws
  - cloud
  - certificate
created_date: 2025/06/14
---
# High Availability & Scalability Quiz
- Scaling an EC2 instance from `r4.large` to `r4.4xlarge` is called...;;Vertical Scalability.
<!--SR:!2025-09-08,60,310-->
- Running an application on an Auto Scaling Group that scales the number of EC2 instances in and out is called...;;Horizontal Scalability.
<!--SR:!2025-09-04,57,310-->
- Elastic Load Balancers provide a...;;static DNS name we can use in our application.
<!--SR:!2025-07-18,3,190-->
- You are running a website on 10 EC2 instances fronted by an Elastic Load Balancer. Your users are complaining about the fact that the website always asks them to re-authenticate when they are moving between website pages. You are puzzled because it's working just fine on your machine and in the Dev environment with 1 EC2 instance. What could be the reason?;;The Elastic Load Balancer does not have Sticky Sessions enabled.
<!--SR:!2025-09-06,58,310-->
- You are using an Application Load Balancer to distribute traffic to your website hosted on EC2 instances. It turns out that your website only sees traffic coming from private IPv4 addresses which are in fact your Application Load Balancer's IP addresses. What should you do to get the IP address of clients connected to your website?;;Modify your website's backend to get the client IP address from the X-Forwarded-For header.
<!--SR:!2025-08-07,31,270-->
- You hosted an application on a set of EC2 instances fronted by an Elastic Load Balancer. A week later, users begin complaining that sometimes the application just doesn't work. You investigate the issue and found that some EC2 instances crash from time to time. What should you do to protect users from connecting to the EC2 instances that are crashing?;;Enable ELB Health Checks.
<!--SR:!2025-07-11,16,290-->
- You are working as a Solutions Architect for a company and you are required to design an architecture for a high-performance, low-latency application that will receive millions of requests per second. Which type of Elastic Load Balancer should you choose?;;Network Load Balancer.
<!--SR:!2025-09-07,59,310-->
- Application Load Balancers which protocols?;;HTTP, HTTPS, WebSocket.
<!--SR:!2025-07-20,13,230-->
- Application Load Balancer can route traffic to different Target Groups Based on what?;;URL Path, Hostname, HTTP Headers, and Query Strings.
<!--SR:!2025-07-15,5,190-->
- What can be registered as a targets in a Target Groups for an Application Load Balancer can be?;;EC2 Instances, Private IP Addresses, Lambda Functions.
<!--SR:!2025-07-17,2,190-->
- For compliance purposes, you would like to expose a fixed static IP address to your end-users so that they can write firewall rules that will be stable and approved by regulators. What type of Elastic Load Balancer would you choose?;;Network Load Balancer, because it has one static IP address per AZ and you can attach an Elastic IP address to it.
<!--SR:!2025-08-25,41,290-->
- You want to create a custom application-based cookie in your Application Load Balancer. Which of the following you can use as a cookie name?;;APPUSERC
<!--SR:!2025-07-16,9,230-->
- You have a Network Load Balancer that distributes traffic across a set of EC2 instances in `us-east-1`. You have 2 EC2 instances in `us-east-1b` AZ and 5 EC2 instances in `us-east-1e` AZ. You have noticed that the CPU utilization is higher in the EC2 instances in `us-east-1b` AZ. After more investigation, you noticed that the traffic is equally distributed across the two AZs. How would you solve this problem?;;Enable Cross-Zone Load Balancing, to distribute the traffic evenly.
<!--SR:!2025-07-17,10,230-->
- Which feature in both Application Load Balancers and Network Load Balancers allows you to load multiple SSL certificates on one listener?;;Sever Name Indication.
<!--SR:!2025-09-17,64,310-->
- Which feature in both Application Load Balancers and Network Load Balancers allows you to load multiple SSL certificates on one listener?;;Server Name Indication. -Continue.
<!--SR:!2025-09-09,61,310-->
- You have an application hosted on a set of EC2 instances managed by an Auto Scaling Group that you configured both desired and maximum capacity to 3. Also, you have created a CloudWatch Alarm that is configured to scale out your ASG when CPU Utilization reaches 60%. Your application suddenly received huge traffic and is now running at 80% CPU Utilization. What will happen?;;Nothing, the ASG can't go over the maximum capacity (you configured) during scale-out events.
<!--SR:!2025-09-16,63,310-->
- You have an Auto Scaling Group fronted by an Application Load Balancer. You have configured the ASG to use ALB Health Checks, then one EC2 instance has just been reported unhealthy. What will happen to the EC2 instance?;;The ASG will terminate the EC2 instance, and then launch a new EC2 instance.
<!--SR:!2025-09-02,55,310-->
- Your boss asked you to scale your Auto Scaling Group based on the **number of requests per minute** your application makes to your database. What should you do?;;Create a CloudWatch custom metric then create a Cloud Watch Alarm on this Metric to scale your ASG.
<!--SR:!2025-07-23,20,250-->
- An application is deployed with an Application Load Balancer and an Auto Scaling Group. Currently, you manually scale the ASG and you would like to define a Scaling Policy that will ensure the average number of connections to your EC2 instances is around 1000. Which Scaling Policy should you use?;;Target Tracking Policy.
<!--SR:!2025-07-29,20,250-->
- You have an ASG and a Network Load Balancer. The application on your ASG supports the HTTP protocol and is integrated with the Load Balancer health checks. You are currently using the TCP health checks. You would like to migrate to using HTTP health checks, what do you do?;;Migrate the health check to HTTP, because the NLB supports it as well as TCP and HTTPS.
<!--SR:!2025-09-03,56,310-->
- You have a website hosted in EC2 instances in an Auto Scaling Group fronted by an Application Load Balancer. Currently, the website is served over HTTP, and you have been tasked to configure it to use HTTPS. You have created a certificate in ACM and attached it to the Application Load Balancer. What you can do to force users to access the website using HTTPS instead of HTTP?;;Configure the ALB to redirect HTTP to HTTPS.
<!--SR:!2025-08-17,41,290-->













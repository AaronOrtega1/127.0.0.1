---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Classic Solutions Architecture Discussions Quiz
tags:
  - Knowledge
  - Training/AWS/SAA_Udemy
  - aws
created_date: 2025/06/25
---
# Classic Solutions Architecture Discussions Quiz
- Your website **TriangleSunglasses.com** is hosted on a fleet of EC2 instances managed by an Auto Scaling Group and fronted by an Application Load Balancer. Your ASG has been configured to scale on-demand based on the traffic going to your website. To reduce costs, you have configured the ASG to scale based on the traffic going through the ALB. To make the solution highly available, you have updated your ASG and set the minimum capacity to 2. How can you further reduce the costs while respecting the requirements?;;Reserve two EC2 instances.
<!--SR:!2026-03-02,174,310-->
- Which of the following will **NOT** help us while designing a **STATELESS** application tier?;;Store session data on EBS volumes, since they are created in specific AZ and can only be attached to one EC2 instance.
<!--SR:!2026-01-04,128,290-->
- You want to install software updates on 100s of Linux EC2 instances that you manage. You want to store these updates on shared storage which should be dynamically loaded on the EC2 instances and shouldn't require heavy operations. What do you suggest?;;Store the software updates on EFS and mount EFS as a network drive at startup.
<!--SR:!2026-06-29,270,330-->
- As a Solutions Architect, you're planning to migrate a complex ERP software suite to AWS Cloud. You're planning to host the software on a set of Linux EC2 instances managed by an Auto Scaling Group. The software traditionally takes over an hour to set up on a Linux machine. How do you recommend you speed up the installation process when there's a scale-out event?;;Use a Golden AMI.
<!--SR:!2026-02-25,169,310-->
- You're developing an application and would like to deploy it to Elastic Beanstalk with minimal cost. You should run it in ..................;;Single instance.
<!--SR:!2026-01-03,128,290-->
- You're deploying your application to an Elastic Beanstalk environment but you notice that the deployment process is painfully slow. After reviewing the logs, you found that your dependencies are resolved on each EC2 instance each time you deploy. How can you speed up the deployment process with minimal impact?;;Create a Golden AMI that contains the dependencies and use that image to launch the EC2 instances.
<!--SR:!2026-02-09,161,310-->

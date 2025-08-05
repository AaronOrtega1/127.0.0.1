---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases: 
  - Containers on AWS Quiz
tags:
  - resource
  - Cards/AWS
  - aws
  - cloud
  - certificate
created_date:
  2025-07-09
---
# Containers on AWS Quiz
- You have multiple Docker-based applications hosted on-premises that you want to migrate to AWS. You don't want to provision or manage any infrastructure; you just want to run your containers on AWS. Which AWS service should you choose?;;AWS Fargate on ECS.
<!--SR:!2025-08-18,25,290-->
- Amazon Elastic Container Service (ECS) has two Launch Types: ... and ...;;Amazon EC2 Launch Type and Fargate Launch Type.
<!--SR:!2025-09-27,59,310-->
- You have an application hosted on an ECS Cluster (EC2 Launch Type) where you want your ECS tasks to upload files to an S3 bucket. Which IAM Role for your ECS Tasks should you modify?;;ECS Task Role.
<!--SR:!2025-08-28,23,250-->
- You're planning to migrate a WordPress website running on Docker containers from on-premises to AWS. You have decided to run the application in an ECS Cluster, but you want your docker containers to access the same WordPress website content such as website files, images, videos, etc. What do you recommend to achieve this?;;Mount an EFS, since it can be shared between different EC2 instances and different ECS Tasks.
<!--SR:!2025-09-24,56,310-->
- You are deploying an application on an ECS Cluster made of EC2 instances. Currently, the cluster is hosting one application that is issuing API calls to DynamoDB successfully. Upon adding a second application, which issues API calls to S3, you are getting authorization issues. What should you do to resolve the problem and ensure proper security?;;Create an IAM task role for the new application.
<!--SR:!2025-09-22,54,310-->
- You are migrating your on-premises Docker-based applications to Amazon ECS. You were using Docker Hub Container Image Library as your container image repository. Which is an alternative AWS service which is fully integrated with Amazon ECS?;;Elastic Container Registry (ECR).
<!--SR:!2025-09-28,59,310-->
- Amazon EKS doesn't supports which node types?;;AWS Lambda.
<!--SR:!2025-09-12,42,290-->
- A developer has a running website and APIs on his local machine using containers and he wants to deploy both of them on AWS. The developer is new to AWS and doesn’t know much about different AWS services. Which of the following AWS services allows the developer to build and deploy the website and the APIs in the easiest way according to AWS best practices?;;AWS App Runner.
<!--SR:!2025-08-28,31,270-->


---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Serverless Solution Architecture Discussions Quiz
tags:
  - Knowledge
  - Training/AWS/SAA_Udemy
  - aws
  - cloud
  - certificate
created_date: 2025-07-21
---
# Serverless Solution Architecture Discussions Quiz
- A startup company plans to run its application on AWS. As a solutions architect, the company hired you to design and implement a fully Serverless REST API. Which technology stack do you recommend?;;API Gateway + AWS Lambda.
<!--SR:!2025-10-13,61,310-->
- The following AWS service doesn't have an out of the box caching feature;;Lambda.
<!--SR:!2025-10-08,20,268-->
- You have a lot of static files stored in an S3 bucket that you want to distribute globally to your users. Which AWS service should you use?;;Amazon CloudFront.
<!--SR:!2026-03-03,166,328-->
- You have created a DynamoDB table in `ap-northeast-1` and would like to make it available in `eu-west-1`, so you decided to create a DynamoDB Global Table. What needs to be enabled first before you create a DynamoDB Global Table?;;DynamoDB Streams, since it makes DynamoDB able to get a changelog and use that changelog to replicate data across replica tables in other AWS Regions.
<!--SR:!2025-09-18,41,290-->
- You have configured a Lambda function to run each time an item is added to a DynamoDB table using DynamoDB Streams. The function is meant to insert messages into the SQS queue for further long processing jobs. Each time the Lambda function is invoked, it seems able to read from the DynamoDB Stream but it isn't able to insert the messages into the SQS queue. What do you think the problem is?;;The Lambda Execution IAM Role is missing permissions.
<!--SR:!2026-02-05,136,308-->
- You would like to create an architecture for a micro-services application whose sole purpose is to encode videos stored in an S3 bucket and store the encoded videos back into an S3 bucket. You would like to make this micro-services application reliable and has the ability to retry upon failures. Each video may take over 25 minutes to be processed. The services used in the architecture should be asynchronous and should have the capability to be stopped for a day and resume the next day from the videos that haven't been encoded yet. Which of the following AWS services would you recommend in this scenario?;;Amazon SQS + Amazon EC2.
<!--SR:!2026-01-24,136,308-->
- You are running a photo-sharing website where your images are downloaded from all over the world. Every month you publish a master pack of beautiful mountain images that are over 15 GB in size. The content is currently hosted on an Elastic File System (EFS) file system and distributed by an Application Load Balancer and a set of EC2 instances. Each month, you are experiencing very high traffic which increases the load on your EC2 instances and increases network costs. What do you recommend to reduce EC2 load and network costs without refactoring your website?;;Create a CloudFront Distribution.
<!--SR:!2025-10-09,21,270-->
- An AWS service allows you to capture gigabytes of data per second in real-time and deliver these data to multiple consuming applications, with a replay feature.;;Kinesis Data Streams.
<!--SR:!2025-09-26,50,308-->


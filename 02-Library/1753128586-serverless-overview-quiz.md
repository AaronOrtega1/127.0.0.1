---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Serverless Overview Quiz
tags:
  - Knowledge
  - Training/AWS/SAA_Udemy
  - aws
  - cloud
  - certificate
created_date: 2025-07-21
---
# Serverless Overview Quiz
- You have created a Lambda function that typically will take around 1 hour to process some data. The code works fine when you run it locally on your machine, but when you invoke the Lambda function it fails with a "timeout" error after 3 seconds. What should you do?;;Run your code somewhere else (e.g., EC2 instance).
<!--SR:!2026-03-12,170,312-->
- Before you create a DynamoDB table, you need to provision the EC2 instance the DynamoDB table will be running on.;;False
<!--SR:!2026-06-22,254,330-->
- You have provisioned a DynamoDB table with 10 RCUs and 10 WCUs. A month later you want to increase the RCU to handle more read traffic. What should you do?;;Increase RCU and keep WCU the same, since they are decoupled you can increase/decrease each separately.
<!--SR:!2025-10-12,60,310-->
- You have an e-commerce website where you are using DynamoDB as your database. You are about to enter the Christmas sale and you have a few items which are very popular and you expect that they will be read often. Unfortunately, last year due to the huge traffic you had the `ProvisionedThroughputExceededException` exception. What would you do to prevent this error from happening again?;;Create a DAX Cluster, is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to 10x performance improvement. Caches the most frequently used data, thus offloading the heavy reads on hot keys off your DynamoDB table.
<!--SR:!2025-12-20,109,310-->
- You have developed a mobile application that uses DynamoDB as its datastore. You want to automate sending welcome emails to new users after they sign up. What is the most efficient way to achieve this?;;Enable DynamoDB Streams and configure it to invoke a Lambda function to send emails.
<!--SR:!2026-01-06,110,290-->
- To create a serverless API, you should integrate Amazon API Gateway with...;;AWS Lambda.
<!--SR:!2026-06-03,240,330-->
- When you are using an Edge-Optimized API Gateway, your API Gateway lives in CloudFront Edge Locations across all AWS Regions.;;False, API requests are routed to the nearest CloudFront Edge Location which improves latency. The API Gateway still lives in one AWS Region.
<!--SR:!2025-10-16,64,312-->
- You are running an application in production that is leveraging DynamoDB as its datastore and is experiencing smooth sustained usage. There is a need to make the application run in development mode as well, where it will experience the unpredictable volume of requests. What is the most cost-effective solution that you recommend?;;Use **Provisioned Capacity Mode with Auto Scaling enabled for production** and use **On-Demand Capacity Mode for development.**
<!--SR:!2025-12-03,85,270-->
- You have an application that is served globally using CloudFront Distribution. You want to authenticate users at the CloudFront Edge Locations instead of authentication requests go all the way to your origins. What should you use to satisfy this requirement?;;Lambda@Edge.
<!--SR:!2025-10-13,21,270-->
- The maximum size of an item in a DynamoDB table is...;;400 KB.
<!--SR:!2026-06-17,250,330-->
- Which AWS service allows you to build Serverless workflows using AWS services (e.g., Lambda) and supports human approval?;;AWS Step Functions.
<!--SR:!2025-10-18,66,312-->
- A company has a serverless application on AWS which consists of Lambda, DynamoDB, and Step Functions. In the last month, there are an increase in the number of requests against the application which results in an increase in DynamoDB costs, and requests started to be throttled. After further investigation, it shows that the majority of requests are read requests against some queries in the DynamoDB table. What do you recommend to prevent throttles and reduce costs efficiently?;;Use DynamoDB Accelerator (DAX) to cache the most requested read data.
<!--SR:!2025-12-22,95,270-->
- You are a DevOps engineer in a football company that has a website that is backed by a DynamoDB table. The table stores viewers’ feedback for football matches. You have been tasked to work with the analytics team to generate reports on the viewers’ feedback. The analytics team wants the data in DynamoDB in `json` format and hosted in an S3 bucket to start working on it and create the reports. What is the best and most cost-effective way to convert DynamoDB data to `json` files?;;Select DynamoDB table then select Export to S3.
<!--SR:!2026-06-14,249,332-->
- A website is currently in the development process and it is going to be hosted on AWS. There is a requirement to store user sessions for users logged in to the website with an automatic expiry and deletion of expired user sessions. Which of the following AWS services are best suited for this use case?;;Store users sessions in a DynamoDB table and enable TTL.
<!--SR:!2026-01-31,130,290-->
- You have a mobile application and would like to give your users access to their own personal space in the S3 bucket. How do you achieve that?;;Use Amazon Cognito Identity Federation.
<!--SR:!2026-01-27,113,250-->
- You are developing a new web and mobile application that will be hosted on AWS and currently, you are working on developing the login and signup page. The application backend is serverless and you are using Lambda, DynamoDB, and API Gateway. Which of the following is the best and easiest approach to configure the authentication for your backend?;;Use Cognito User Pools.
<!--SR:!2025-12-19,98,252-->
- You are running a mobile application where you want each registered user to upload/download images to/from his own folder in the S3 bucket. Also, you want to give your users to sign-up and sign in using their social media accounts (e.g., Facebook). Which AWS service should you choose?;;Amazon Cognito.
<!--SR:!2025-10-15,63,310-->







---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Security & Encryption Quiz
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/SAA_Udemy
created_date: 2025-08-07
---
# AWS Security & Encryption Quiz
- To enable In-flight Encryption (In-Transit Encryption), we need to have...;;an HTTPS endpoint with an SSL certificate.
<!--SR:!2025-09-10,20,250-->
- Server-Side Encryption means that the data is sent encrypted to the server.;;False, it means that the server will encrypt the data for use.
<!--SR:!2025-10-28,61,310-->
- In Server-Side Encryption, where do the encryption and decryption happen?;;Both encryption and decryption happen on the server.
<!--SR:!2025-10-22,56,310-->
- In Client-Side Encryption, the server must know our encryption scheme before we can upload the data.;;False.
<!--SR:!2025-10-23,57,310-->
- You need to create KMS Keys in AWS KMS before you are able to use the encryption features for EBS, S3, RDS ...;;False.
<!--SR:!2025-11-01,64,310-->
- AWS KMS supports both symmetric and asymmetric KMS keys.;;True.
<!--SR:!2025-11-01,64,310-->
- When you enable Automatic Rotation on your KMS Key, the backing key is rotated every;;1 year.
<!--SR:!2025-10-22,56,310-->
- You have an AMI that has an encrypted EBS snapshot using KMS CMK. You want to share this AMI with another AWS account. You have shared the AMI with the desired AWS account, but the other AWS account still can't use it. How would you solve this problem?;;You need to share the KMS CMK used to encrypt the AMI with the other AWS account.
<!--SR:!2025-10-21,55,310-->
- You have created a Customer-managed CMK in KMS that you use to encrypt both S3 buckets and EBS snapshots. Your company policy mandates that your encryption keys be rotated every 6 months. What should you do?;;Re-configure your KMS CMK and enable Automatic Key Rotation, and configure the Retention Period with 180 days.
<!--SR:!2025-10-14,46,290-->
- What should you use to control access to your KMS CMKs?;;KMS Key Policies.
<!--SR:!2025-10-05,41,290-->
- You have a Lambda function used to process some data in the database. You would like to give your Lambda function access to the database password. Which of the following options is the most secure?;;Have it as an encrypted environment variable and decrypt it at runtime.
<!--SR:!2025-10-02,38,290-->
- You have a secret value that you use for encryption purposes, and you want to store and track the values of this secret over time. Which AWS service should you use?;;SSM Parameter Store.
<!--SR:!2025-09-26,32,270-->
- Your user-facing website is a high-risk target for DDoS attacks and you would like to get 24/7 support in case they happen and AWS bill reimbursement for the incurred costs during the attack. What AWS service should you use?;;AWS Shield Advanced.
<!--SR:!2025-10-30,63,310-->
- You would like to externally maintain the configuration values of your main database, to be picked up at runtime by your application. What's the best place to store them to maintain control and version history?;;SSM Parameter Store.
<!--SR:!2025-10-31,63,310-->
- AWS GuardDuty doesn't scan the following data sources;;CloudWatch Logs.
<!--SR:!2025-09-12,3,210-->
- You have a website hosted on a fleet of EC2 instances fronted by an Application Load Balancer. What should you use to protect your website from common web application attacks (e.g., SQL Injection)?;;AWS WAF.
<!--SR:!2025-11-02,65,310-->
- You would like to analyze OS vulnerabilities from within EC2 instances. You need these analyses to occur weekly and provide you with concrete recommendations in case vulnerabilities are found. Which AWS service should you use?;;Amazon Inspector.
<!--SR:!2025-09-11,10,230-->
- What is the most suitable AWS service for storing RDS DB passwords which also provides you automatic rotation?;;AWS Secrets Manager.
<!--SR:!2025-10-01,37,290-->
- Which AWS service allows you to centrally manage EC2 Security Groups and AWS Shield Advanced across all AWS accounts in your AWS Organization?;;AWS Firewall Manager.
<!--SR:!2025-10-27,60,310-->
- Which AWS service helps you protect your sensitive data stored in S3 buckets?;;Amazon Macie.
<!--SR:!2025-09-17,26,290-->
- An online-payment company is using AWS to host its infrastructure. The frontend is created using VueJS and is hosted on an S3 bucket and the backend is developed using PHP and is hosted on EC2 instances in an Auto Scaling Group. As their customers are worldwide, they use both CloudFront and Aurora Global database to implement multi-region deployments to provide the lowest latency and provide availability, and resiliency. A new feature required which gives customers the ability to store data encrypted on the database and this data must not be disclosed even by the company admins. The data should be encrypted on the client side and stored in an encrypted format. What do you recommend to implement this?;;Using Aurora Client-side Encryption and KMS Multi-region Keys.
<!--SR:!2025-09-17,16,250-->
- You have an S3 bucket that is encrypted with SSE-KMS. You have been tasked to replicate the objects to a target bucket in the same AWS region but with a different KMS Key. You have configured the S3 replication, the target bucket, and the target KMS key and it is still not working. What is missing to make the S3 replication work?;;You have to configure permissions for both Source KMS Key `kms:Decrypt` and Target KMS Key `kms:Encrypt` to be used by the S3 Replication Service.
<!--SR:!2025-09-16,25,270-->
- You have generated a public certificate using LetsEncrypt and uploaded it to the ACM so you can use and attach to an Application Load Balancer that forwards traffic to EC2 instances. As this certificate is generated outside of AWS, it does not support the automatic renewal feature. How would you be notified 30 days before this certificate expires so you can manually generate a new one?;;Configure EventBridge for daily expiration events from ACM to invoke SNS notifications to your email.
<!--SR:!2025-10-21,42,250-->
- You have created the main Edge-Optimized API Gateway in `us-west-2` AWS region. This main Edge-Optimized API Gateway forwards traffic to the second level API Gateway in `ap-southeast-1`. You want to secure the main API Gateway by attaching an ACM certificate to it. Which AWS region are you going to create the ACM certificate in?;;`us-east-1`, as the edge-optimized API Gateway is using AWS managed CloudFront distribution behind the scene to rout requests across the glob through CloudFront Edge location, the ACM certificate must be created in us-east-1.
<!--SR:!2025-10-29,62,310-->
- You are managing an AWS Organization with multiple AWS accounts. Each account has a separate application with different resources. You want an easy way to manage Security Groups and WAF Rules across those accounts as there was a security incident the last week and you want to tighten up your resources. Which AWS service can help you to do so?;;AWS Firewall Manager.
<!--SR:!2025-09-27,22,270-->





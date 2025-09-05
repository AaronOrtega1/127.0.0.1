---
link: "[[1754146837-diseno-de-sistemas-escalables|Diseño de Sistemas Escalables]]"
aliases: 
  - Scaling On AWS For The First 10 Million Users
tags:
  - Knowledge
created_date:
  2025-08-02
---
# Scaling On AWS For The First 10 Million Users
## **Introduction (00:00 - 03:06)**
- Christine and Skye, AWS Solutions Architects, explain how to scale an application from zero to 10 million users.
- They focus on a three-tier web application: **frontend**, **backend**, and **data storage**.
- They emphasize the importance of iterating and improving the architecture over time, adopting a **"build, measure, learn"** approach.

## **Initial Architecture (03:06 - 06:04)**
- For the **frontend**, they recommend **AWS Amplify Hosting**, a serverless service that simplifies deployment and scaling of modern applications (React, Next.js, etc.).
- Amplify offers integration with repositories like GitHub, unit testing, and atomic deployments.

## **Backend and Compute Options (06:04 - 12:32)**
- They discuss backend options: **EC2**, **ECS/EKS** (containers), and **AWS Lambda** (serverless).
- They recommend **Amazon ECS with Fargate** for backend, as it's a managed service that lets you focus on application logic without worrying about infrastructure.

## **Data Storage (12:32 - 20:42)**
- For databases, they suggest starting with **Amazon Aurora Serverless v2**, a scalable, managed relational database.
- Aurora separates compute from storage, allowing each component to scale independently.

## **Scaling from 10,000 to 10 Million Users (22:22 - 39:40)**
- **Frontend**: Amplify Hosting uses **CloudFront** (CDN) for global scaling.
- **Backend**: Using **Fargate** to auto-scale tasks and handle variable load.
- **Storage**: Vertical scaling (increasing node capacity) and horizontal scaling (read replicas) with **Aurora**. Also recommends using **RDS Proxy** to manage connections and **ElastiCache** for caching.
- As the application grows, they suggest migrating to a **microservices** architecture and using **purpose-built** databases (DynamoDB, time series, etc.).
- They emphasize the importance of **observability** with tools like **CloudWatch** and **X-Ray**.

## **AWS Scaling Techniques**
1. **Frontend**:
   - **AWS Amplify Hosting**: Simplifies deployment and scaling of modern frontend applications.
   - **CloudFront**: Global CDN to reduce latency and improve performance.

2. **Backend**:
   - **Amazon ECS with Fargate**: Automatic container scaling without server management.
   - **AWS Lambda**: Serverless compute for event-driven workloads.

3. **Data Storage**:
   - **Amazon Aurora Serverless v2**: Scalable relational database with compute-storage separation.
   - **RDS Proxy**: Manages database connections to improve performance.
   - **ElastiCache**: Caching with Redis or Memcached to reduce database load.

4. **Global Scaling**:
   - Using **CloudFront** and **Amplify Hosting** to distribute content and applications globally.

5. **Microservices and Specialized Databases**:
   - Migration to microservices architecture to handle complexity and scalability.
   - Use of **purpose-built** databases like **DynamoDB** (NoSQL) for specific workloads.

6. **Observability and Monitoring**:
   - Tools like **CloudWatch** and **X-Ray** to monitor and optimize application performance.

## **Conclusion**
- AWS offers various managed services that enable efficient application scaling, from the first user to 10 million.
- The key is to start with a simple architecture, iterate based on metrics, and adopt specialized services as the application grows.
- Observability and serverless services are fundamental to reducing operational overhead and focusing on product development.

## Source
[AWS re:Invent 2024 - Scaling on AWS for the first 10 million users (ARC201)](https://www.youtube.com/watch?v=AzUG7GOfh7w)

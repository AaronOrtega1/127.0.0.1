---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - RDS Aurora And ElastiCache Quiz
tags:
  - resource
  - aws
  - cloud
  - certificate
  - Cards/AWS
created_date: 2025/06/20
---
# RDS Aurora And ElastiCache Quiz
- Amazon RDS supports the following databases:;;MySQL, PostgreSQL, MariaDB,Oracle, MS SQL, and Amazon Aurora.
<!--SR:!2025-07-17,16,290-->
- You're planning for a new solution that requires a MySQL database that must be available even in case of a disaster in one of the Availability Zones. What should you use?;; Enable Multi-AZ, since it helps when you plan a disaster recovery for an entire AZ going down.
<!--SR:!2025-07-18,11,270-->
- You have set up read replicas on your RDS database, but users are complaining that upon updating their social media posts, they do not see their updated posts right away. What is a possible cause for this?;;Read Replicas have Asynchronous Replication, therefore it's likely your users will only read Eventual Consistency.
<!--SR:!2025-07-24,16,250-->
- Which RDS **(NOT Aurora)** feature when used does not require you to change the SQL connection string?;;Multi-AZ, keeps the same connection string regardless of which database is up.
<!--SR:!2025-07-13,6,230-->
- Your application running on a fleet of EC2 instances managed by an Auto Scaling Group behind an Application Load Balancer. Users have to constantly log back in and you don't want to enable Sticky Sessions on your ALB as you fear it will overload some EC2 instances. What should you do?;;Store session data in ElastiCache.
<!--SR:!2025-07-17,16,290-->
- An analytics application is currently performing its queries against your main production RDS database. These queries run at any time of the day and slow down the RDS database which impacts your users' experience. What should you do to improve the users' experience?;;Setup a Read Replica.
<!--SR:!2025-07-15,14,290-->
- You would like to ensure you have a replica of your database available in another AWS Region if a disaster happens to your main AWS Region. Which database do you recommend to implement this easily?;;Aurora Global Database, since it allows you to have an replica in another AWS Region.
<!--SR:!2025-07-15,14,290-->
- How can you enhance the security of your ElastiCache Redis Cluster by allowing users to access your ElastiCache Redis Cluster using their IAM Identities (e.g., Users, Roles)?;;Using IAM Authentication.
<!--SR:!2025-07-20,12,250-->
- Your company has a production Node.js application that is using RDS MySQL 5.6 as its database. A new application programmed in Java will perform some heavy analytics workload to create a dashboard on a regular hourly basis. What is the most cost-effective solution you can implement to minimize disruption for the main application?;;Create a Read Replica in a different AZ and run the analytics workload on the replica database.
<!--SR:!2025-07-15,14,290-->
- You would like to create a disaster recovery strategy for your RDS PostgreSQL database so that in case of a regional outage the database can be quickly made available for both read and write workloads in another AWS Region. The DR database must be highly available. What do you recommend?;;Create a Read Replica in a different region and enable Multi-AZ on the Read Replica.
<!--SR:!2025-07-14,5,230-->
- You have migrated the MySQL database from on-premises to RDS. You have a lot of applications and developers interacting with your database. Each developer has an IAM user in the company's AWS account. What is a suitable approach to give access to developers to the MySQL RDS DB instance instead of creating a DB user for each one?;;Enable IAM Database Authentication.
<!--SR:!2025-07-10,7,250-->
- Read Replica uses Asynchronous Replication and Multi-AZ uses Synchronous Replication.
- How do you encrypt an unencrypted RDS DB instance?;;Create a snapshot of the unencrypted RDS DB instance, copy the snapshot and tick "Enable encryption", then restore the RDS DB instance from the encrypted snapshot.
<!--SR:!2025-07-17,16,290-->
- For your RDS database, you can have up to ............ Read Replicas.;;15.
<!--SR:!2025-07-16,7,250-->
- Which RDS database technology does **NOT** support IAM Database Authentication?;;Oracle.
<!--SR:!2025-07-10,7,270-->
- You have an un-encrypted RDS DB instance and you want to create Read Replicas. Can you configure the RDS Read Replicas to be encrypted?;;No, you can not create encrypted Read Replicas from an unencrypted RDS DB instance.
<!--SR:!2025-07-17,16,290-->
- An application running in production is using an Aurora Cluster as its database. Your development team would like to run a version of the application in a scaled-down application with the ability to perform some heavy workload on a need-basis. Most of the time, the application will be unused. Your CIO has tasked you with helping the team to achieve this while minimizing costs. What do you suggest?;;Use Aurora Serverless.
<!--SR:!2025-07-18,11,270-->
- How many Aurora Read Replicas can you have in a single Aurora DB Cluster?;;15.
<!--SR:!2025-07-10,7,270-->
- Amazon Aurora supports both .......................... databases.;;MySQL and PostgreSQL.
<!--SR:!2025-07-16,15,290-->
- You work as a Solutions Architect for a gaming company. One of the games mandates that players are ranked in real-time based on their score. Your boss asked you to design then implement an effective and highly available solution to create a gaming leaderboard. What should you use?;;Use ElastiCache for Redis - Sorted Sets.
<!--SR:!2025-07-15,14,290-->
- You need full customization of an Oracle Database on AWS. You would like to benefit from using the AWS services. What do you recommend?;;RDS Custom for Oracle.
<!--SR:!2025-07-14,7,230-->
- You need to store long-term backups for your Aurora database for disaster recovery and audit purposes. What do you recommend?;;Perform On Demand Backups.
<!--SR:!2025-07-15,8,230-->
- Your development team would like to perform a suite of read and write tests against your production Aurora database because they need access to production data as soon as possible. What do you advise?;;Use the Aurora Cloning Feature.
<!--SR:!2025-07-11,3,210-->
- You have 100 EC2 instances connected to your RDS database and you see that upon a maintenance of the database, all your applications take a lot of time to reconnect to RDS, due to poor application logic. How do you improve this?;;Use an RDS Proxy, this reduces the failover time by up to 66% and keeps connection active for your app.
<!--SR:!2025-07-14,7,250-->
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Ec2 Data Management Quiz
tags:
  - resource
  - Cards/AWS/SAA_Udemy
  - aws
  - cloud
  - EC2
  - certificate
created_date: 2025/06/04
---
# EC2 Data Management Quiz
- You have just terminated an EC2 instance in `us-east-1a`, and its attached EBS volume is now available. Your teammate tries to attach it to an EC2 instance in `us-east-1b` but he can't. What is a possible cause for this?;;EBS volumes are locked to an AZ.
<!--SR:!2025-09-05,60,310-->
- You have launched an EC2 instance with two EBS volumes, Root volume type and the other EBS volume type to store the data. A month later you are planning to terminate the EC2 instance. What's the default behavior that will happen to each EBS volume?;;The root volume type will be deleted an the EBS volume type will not be deleted.
<!--SR:!2025-08-31,55,310-->
- You can use an AMI in N.Virginia Region `us-east-1` to launch an EC2 instance in any AWS Region.;;False, AMIs are built for specific AWS Regions.
<!--SR:!2026-02-15,181,310-->
- Which of the following EBS volume types can be used as boot volumes when you create EC2 instances?;;gp2, gp3, io1, io2.
<!--SR:!2025-09-28,65,270-->
- What is EBS Multi-Attach?;;Attach the same EBS volume to multiple EC2 instances in the same AZ.
<!--SR:!2025-08-28,43,250-->
- You would like to encrypt an unencrypted EBS volume attached to your EC2 instance. What should you do?;;Create an EBS snapshot of you EBS volume. Copy the snapshot and tick the option to encrypt the copied snapshot. Then, use the encrypted snapshot to create a new EBS volume.
<!--SR:!2025-09-29,70,270-->
- You have a fleet of EC2 instances distributes across AZs that process a large data set. What do you recommend to make the same data to be accessible as an NFS drive to all of your EC2 instances?;;Use EFS, that allows you to mount the same file system on EC2 instances in different AZs.
<!--SR:!2025-09-04,38,250-->
- You would like to have a high-performance local cache for your application hosted on an EC2 instance. You don't mind losing the cache upon the termination of your EC2 instance. Which storage mechanism do you recommend as a Solutions Architect?;;Instance Store, because it provides the best disk I/O performance.
<!--SR:!2026-01-08,153,310-->
- You are running a high-performance database that requires an IOPS of 310,000 for its underlying storage. What do you recommend?;;Use an EC2 Instance Store, but the data will be lost if the EC2 instance is stopped, you can have a replica of the instance with another instance store as solution or have a backup mechanism.
<!--SR:!2025-10-28,94,290-->

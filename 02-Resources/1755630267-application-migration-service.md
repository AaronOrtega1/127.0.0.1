---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Application Migration Service
  - MGN
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# Application Migration Service
## Summary
### Two Migration Scenarios
1. **Start Fresh**  
   - Build directly in the cloud.  
   - No migration required.  

2. **Migrate Existing On-Premises Workloads**  
   - Move servers, data, and apps from on-prem to AWS.  
   - Requires careful planning and use of migration services.  

### AWS Application Discovery Service
- **Purpose**: Analyze on-prem servers before migration.
- **Collects**:
  - Server utilization (CPU, memory, disk).
  - Dependency mapping (interconnected apps/services).
- **Methods**:
  1. **Agentless Discovery** (Connector):
     - Info on VMs, configuration, performance history.
  2. **Agent-Based Discovery** (Application Discovery Agent):
     - More detailed data:
       - System configuration
       - Running processes
       - Network connections
       - Fine-grained dependency mapping
- **Integration**: Results are visualized in **AWS Migration Hub**.

### AWS Migration Hub
- **Purpose**: Central place to view migration progress.  
- Tracks discoveries, migration plans, and status across AWS migration tools.  

### AWS Application Migration Service (MGN)
- **Previously**: CloudEndure Migration.  
- **Function**: Simplifies **rehosting** ("lift-and-shift") migrations.
- **How it Works**:
  1. Install **Replication Agent** on on-prem servers.
  2. Continuous replication of on-prem **disks → AWS**:
     - Data goes into staging area (low-cost [[1748020848-ec2-basics|EC2]] + [[1748622252-ebs-overview|EBS]]).
  3. At **cutover**:
     - Launch production-ready EC2 instances.
     - Use appropriately sized EBS volumes for performance needs.
- **Benefits**:
  - Minimal downtime (continuous replication until cutover).
  - Broad support: multiple platforms, OS, and databases.
  - Cost-effective (reduces need for specialized migration engineers).
  - Automated, scalable solution.

### Key Takeaways (Exam-Oriented)
- **Discovery Phase**:  
  - Use **Application Discovery Service** → gathers utilization + dependencies.  
  - View results in **Migration Hub**.  

- **Migration Phase**:  
  - Use **Application Migration Service (MGN)** for lift-and-shift.  
  - Continuous replication → staging → cutover to production.  

- **MGN Advantages**: Minimal downtime, reduced costs, broad platform support.  







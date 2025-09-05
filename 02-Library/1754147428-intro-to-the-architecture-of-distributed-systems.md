---
link: "[[1754146837-diseno-de-sistemas-escalables|Diseño de Sistemas Escalables]]"
aliases: 
  - Intro to the Architecture of Distributed Systems
tags:
  - Knowledge
  - DistributedSystems
  - Architecture
created_date:
  2025-08-02
---
# Intro to the Architecture of Distributed Systems
## Summary
- 

## Key Ideas
### **Basic Architecture of Distributed Systems**  
- **Monolithic Architecture**:  
  - Starts with a simple three-tier architecture: client, application service, and database.  
  - Frameworks like Ruby on Rails or Django enable rapid development.  
  - **Limitations**: As the system grows, complexity increases, making modifications and testing difficult.  

### **Vertical Scaling (Scale Up)**  
- **Initial strategy**: Increase hardware capacity (more CPUs, memory).  
- **Advantage**: Simple and effective for moderate workloads.  
- **Limitation**: Eventually, a single server won't be able to handle the load, no matter how much it's scaled.  

### **Horizontal Scaling (Scale Out)**  
- **Service replication**: Distribute the load across multiple servers.  
- **Key components**:  
  - **Load balancer**: Distributes requests among servers.  
  - **Stateless services**: Do not retain session information, allowing any server to handle any request.  
- **Advantages**:  
  - Greater capacity and fault resilience.  
  - Theoretically infinite scalability.  
- **Limitation**: The database can become a bottleneck.  

### **Database Scalability**  
- **Distributed cache**: Stores frequently accessed data to reduce database load.  
  - Examples: Redis, Memcached.  
- **Distributed databases**:  
  - **Distributed SQL**: Scales horizontally with multiple nodes.  
  - **NoSQL**: Databases like Cassandra, MongoDB, and Neo4j distribute data across multiple nodes.  
- **Advantages**: Greater storage capacity and availability.  

### **Multi-Tier Architectures**  
   - **Independent services**: Different services can be scaled independently based on demand.  
   - **Backend for Frontend (BFF) pattern**: Dedicated services for web and mobile clients.  
   - **Advantage**: Flexibility to scale individual services based on load.  

### **Improving Responsiveness**  
   - **Message queues**: Enable faster responses by decoupling database writes.  
     - Example: A queue system can temporarily store data before persisting it to the database.  
   - **Advantage**: Enhances responsiveness and scalability.  

### **Hardware and Software Scalability**  
   - **Amdahl's Law**: Scalability is limited by the portion of code that cannot run in parallel.  
   - **Importance of multithreaded code**: To maximize scalability, code must be highly parallelizable.  
   - **Experiments and measurements**: Testing is crucial to evaluate the impact of hardware improvements.  

### **Summary and Further Reading**  
   - **Microservices Architectures**: Evolution of service-oriented architecture (SOA) for more modular systems.  
   - **Big Data Architectures**: Approaches like Lambda and Kappa for large-scale data processing.  

## Related Links
- [[]]

## Source
[text]()

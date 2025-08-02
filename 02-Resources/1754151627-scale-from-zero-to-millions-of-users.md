---
link: "[[1754146837-diseno-de-sistemas-escalables|Diseño de Sistemas Escalables]]"
aliases: 
  - Scale From Zero To Millions Of Users
tags:
  - resource
created_date:
  2025-08-02
---
# Scale From Zero To Millions Of Users
## 1. **Initial Architecture (Single Server Setup)**
  - Starts with a single server hosting the web application, database, and cache.
  - Users access through DNS, which resolves the server's IP address.
  - Traffic comes from web and mobile applications, and responses are returned in JSON format.

## 2. **Vertical vs. Horizontal Scaling**
  - **Vertical scaling**: Adding more resources (CPU, RAM) to a single server. Has limitations in terms of capacity and lacks redundancy.
  - **Horizontal scaling**: Adding more servers to distribute the load. Recommended for large-scale applications.

## 3. **Load Balancer**
  - Distributes incoming traffic among multiple web servers.
  - Improves availability and fault tolerance: if one server fails, traffic is redirected to other servers.

## 4. **Database Replication**
  - Uses a master-slave model to improve performance and availability.
  - The master handles write operations, while slaves handle reads.
  - If the master fails, a slave can be promoted to master.

## 5. **Cache and CDN**
  - **Cache**: Stores frequently accessed data to reduce database load and improve performance.
  - **CDN (Content Delivery Network)**: Distributes static content (images, CSS, JS) from servers closer to the user to reduce latency.

## 6. **Stateless Architecture (Stateless Web Tier)**
  - Web servers don't store state (session data), allowing easy horizontal scaling.
  - State is stored in databases or external systems like Redis or Memcached.

## 7. **Database Scaling**
  - **Vertical scaling**: Adding more resources to an existing database, but has physical and cost limits.
  - **Horizontal scaling (Sharding)**: Splits the database into multiple shards (fragments) to distribute the load. Each shard contains a portion of the data.

## 8. **Message Queues**
  - Enable asynchronous communication between services, decoupling components and improving scalability.
  - Example: Background image processing, where workers consume tasks from a queue.

## 9. **Observability and Automation**
  - **Logging and metrics**: Essential for monitoring performance and detecting errors in large systems.
  - **Automation**: Tools like CI/CD (Continuous Integration/Continuous Deployment) help maintain consistency across multiple data centers.

## 10. **Scaling to Millions of Users**
  - Requires a combination of techniques: load balancing, database replication, caching, CDN, stateless architecture, and service decoupling.
  - Scalability is an iterative process requiring continuous adjustments and optimization.

## Source
[Scale From Zero to Millions Of Users](https://inst-fs-iad-prod.inscloudgate.net/files/328af2a5-32a8-4fd6-afd0-777ef2839030/ByteByteGo%20_%20Technical%20Interview%20Prep.pdf?download=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NDAxNDUzMDQsInVzZXJfaWQiOiIxMjczNDAwMDAwMDAwMDkzNDEiLCJyZXNvdXJjZSI6Ii9maWxlcy8zMjhhZjJhNS0zMmE4LTRmZDYtYWZkMC03NzdlZjI4MzkwMzAvQnl0ZUJ5dGVHbyUyMF8lMjBUZWNobmljYWwlMjBJbnRlcnZpZXclMjBQcmVwLnBkZiIsImp0aSI6IjgzZmUyOGIyLWE4ZTktNDFlZC1hNTUxLWE2NmYzYzBkZmNlYyIsImhvc3QiOiJjYW52YXMuaXRlc28ubXgiLCJvcmlnaW5hbF91cmwiOiJodHRwczovL2ExMjczNC04OTM5Njg2LmNsdXN0ZXIyNzEuY2FudmFzLXVzZXItY29udGVudC5jb20vY291cnNlcy8xMjczNH40NjEyMC9maWxlcy8xMjczNH44OTM5Njg2L2NvdXJzZSUyMGZpbGVzL0J5dGVCeXRlR28lMjBfJTIwVGVjaG5pY2FsJTIwSW50ZXJ2aWV3JTIwUHJlcC5wZGY_ZG93bmxvYWRfZnJkPTFcdTAwMjZub19jYWNoZT10cnVlXHUwMDI2cmVkaXJlY3Q9dHJ1ZVx1MDAyNnNmX3ZlcmlmaWVyPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVelV4TWlKOS5leUoxYzJWeVgybGtJam9pTVRJM016UXdNREF3TURBd01EQTVNelF4SWl3aWNtOXZkRjloWTJOdmRXNTBYMmxrSWpvaU1USTNNelF3TURBd01EQXdNREF3TURBeElpd2liMkYxZEdoZmFHOXpkQ0k2SW1OaGJuWmhjeTVwZEdWemJ5NXRlQ0lzSW5KbGRIVnlibDkxY213aU9tNTFiR3dzSW1aaGJHeGlZV05yWDNWeWJDSTZJbWgwZEhCek9pOHZZMkZ1ZG1GekxtbDBaWE52TG0xNEwyTnZkWEp6WlhNdk5EWXhNakF2Wm1sc1pYTXZPRGt6T1RZNE5pOWtiM2R1Ykc5aFpEOWtiM2R1Ykc5aFpGOW1jbVE5TVZ4MU1EQXlObVpoYkd4aVlXTnJYM1J6UFRFM05EQXhOamN6TkRVaUxDSmxlSEFpT2pFM05EQXhOamMyTkRWOS50eE53aVk3dHNEOXEzS3JuY3hzN3RucWtBczdEcThhcWI2cmN2Vy1VS2lKOHp1RVNQWmloV1VKaHp3cHlhWnZ0RDRKdklEQW1mUG5xYnNOR0d0U0pyZyIsImV4cCI6MTc0MDIzMTcwNH0.8Yv75SuEhLuFobPPx88R_vzzl8RONT8XX_6f58-_NlEDUK0CuBcG1gaRjHzazLjOoiOJXedJox_pOQs6Cq5OyQ)


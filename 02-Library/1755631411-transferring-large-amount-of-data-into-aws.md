---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Transferring large amount of data into AWS
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-19
---
# Transferring large amount of data into AWS
## Summary
### Problem Context
- Scenario: Transfer **200 TB** of data into AWS.
- Internet connection: **100 Mbps**.

### Option 1: Public Internet / [[1755279885-aws-site-to-site-vpn|Site-to-Site VPN]]
- **Uses**: Existing internet connection.
- **Setup**: Immediate, no additional provisioning.
- **Computation**:
  - $200 \, \text{TB} = 200 \times 1024 \, \text{GB} = 204,800 \, \text{GB}$
  - $204,800 \, \text{GB} \times 1024 = 209,715,200 \, \text{MB}$
  - Convert to megabits: $209,715,200 \times 8 = 1.68 \times 10^9 \, \text{Mb}$
  - Transfer time: $\frac{1.68 \times 10^9}{100 \, \text{Mbps}} \approx 16,000,000 \, \text{s} \approx 185 \, \text{days}$
- **Conclusion**: Too slow for large datasets (≈ 6 months).

### Option 2: AWS [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]]
- **Speed**: Assume **1 Gbps** line.
- **Setup**: Long setup time (≈ 1 month if not provisioned).
- **Computation**:
  - 10x faster than 100 Mbps → ~18.5 days.
- **Conclusion**: Much faster, but still weeks + setup delay.

### Option 3: [[1751562589-aws-snowball-overview|AWS Snowball]]
- **Process**:
  - Order device → Delivered → Load data → Ship back → AWS imports data.
- **End-to-End Time**: ≈ 1 week.
- **Use Case**: Best for **one-off large transfers**.
- **Extra**: Can combine with **Database Migration Service (DMS)** for syncing database deltas after bulk load.

### Option 4: Ongoing Replication
- **When to Use**: Continuous or incremental data movement.
- **Options**:
  - **Site-to-Site VPN** (reasonable for smaller ongoing changes).
  - **Direct Connect** (dedicated, reliable).
  - **DMS** (for databases).
  - **[[1751568813-aws-datasync|DataSync]]** (automated, efficient ongoing transfer).

### Key Takeaways (Exam-Oriented)
- **Small Data**: Internet/VPN is fine.
- **Large, One-Time Transfer**: Use **Snowball** (fastest practical).
- **Ongoing Replication**: Use **Direct Connect, VPN, DMS, or DataSync**.
- **Direct Connect**: Good for ongoing large data, but setup takes time.
- **Snowball**: Designed for bulk offline transfers → fastest for initial large-scale migrations.

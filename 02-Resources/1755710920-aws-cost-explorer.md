---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Cost Explorer
tags:
  - resource
  - aws
  - cloud
  - certificate
  - CostExplorer
created_date: 2025-08-20
---
# AWS Cost Explorer
- **Cost Explorer**: Service to **visualize, analyze, and manage AWS costs and usage**.
- Provides **dashboards, graphs, and reports** for cost insights.
- Granularity of analysis:
  - High-level (total costs across all accounts)
  - Time-based (monthly, daily, hourly)
  - Resource-level (per-instance or per-resource usage/cost)

## Key Features
1. **Custom Reports**
   - Build tailored reports on cost and usage.
   - Helps analyze trends, identify expensive resources, and track spend over time.
2. **Cost Optimization**
   - Identify whether resources (e.g., **[[1748020848-ec2-basics|EC2]] instances**) are:
     - Correctly sized
     - Fully utilized
     - Cost-effective
   - Helps spot underutilized or over-provisioned instances.
3. **Savings Plans Recommendations**
   - **Cost Explorer** suggests **Savings Plans** (alternative to Reserved Instances).
   - Recommendations include:
     - Type of plan
     - Estimated monthly spend
     - Potential savings
4. **Forecasting**
   - Forecast AWS usage and cost **up to 12 months** ahead.
   - Uses historical usage to predict future spend.
   - Provides confidence intervals for estimates.
   - Useful for **budget planning** and **capacity planning**.

## Exam Notes
- **Cost Explorer** is **the primary billing service** AWS may ask about in the exam.
- Focus areas:
  - Custom reporting
  - Forecasting usage/cost
  - Savings Plans integration
  - Granular breakdowns (monthly, hourly, resource-level)
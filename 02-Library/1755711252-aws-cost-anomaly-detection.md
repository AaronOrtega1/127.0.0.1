---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - AWS Cost Anomaly Detection
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# AWS Cost Anomaly Detection
- **AWS Cost Anomaly Detection**: Service that uses **machine learning (ML)** to automatically detect unusual spending patterns in your AWS account.
- Learns from your **historical cost and usage data** to understand what is “normal.”
- Detects:
  - **One-time cost spikes**
  - **Continuous cost increases**
- No need to set manual thresholds → ML models adapt to your usage.

## Monitoring Scope
- Tracks costs and usage across:
  - **AWS services**
  - **Member accounts** (in Organizations)
  - **Cost allocation tags**
  - **Cost categories**

## Notifications & Reports
- Generates **anomaly detection reports** including:
  - Root cause analysis of anomalies
  - Details of abnormal service usage/spend
- Notification options:
  - Immediate alerts for anomalies
  - Daily or weekly summaries
- Alerts delivered via **Amazon SNS**.

## Exam Notes
- Emphasize:
  - **ML-based detection** (no manual thresholds required)
  - Works at multiple granularities (service, account, tags, categories)
  - **Root cause analysis** included in reports
  - Integrates with **SNS** for notifications
---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - Amazon AppFlow
tags:
  - resource
  - aws
  - cloud
  - certificate
created_date: 2025-08-20
---
# Amazon AppFlow
- **Amazon AppFlow**: Fully managed service to **transfer and integrate data** between **Software-as-a-Service ([[1755713364-software-as-a-service|SaaS]]) applications** and **AWS services**.
- Simplifies integrations that would otherwise require custom development.
- Supports **bi-directional data flows** between sources and destinations.

## Supported Sources
- Popular SaaS applications:
  - **Salesforce** (commonly asked in exams)
  - SAP
  - Zendesk
  - Slack
  - ServiceNow

## Supported Destinations
- AWS services:
  - [[1751042472-s3-overview|S3]]
  - [[1753482302-redshift-overview|Redshift]]
- Non-AWS platforms:
  - Snowflake
  - Salesforce (as a destination)

## Key Features
1. **Trigger Options**
   - Run on a **schedule**
   - Run **on-demand**
   - Run in response to **specific events**
2. **Data Transformation**
   - Filtering
   - Validation
   - Mapping between source and destination fields
3. **Security**
   - Data **encrypted** in transit over public internet
   - Option for private transfer using **AWS PrivateLink**
4. **Ease of Use**
   - Pre-built connectors eliminate custom integration coding.
   - Users can quickly move data between applications and AWS accounts.

---

## Exam Notes
- **AppFlow** is primarily about **SaaS-to-AWS data integration**.
- Key points:
  - Remember **Salesforce** as a common source.
  - Destinations include **S3, Redshift**, and select external platforms.
  - Offers **transformation, validation, and encryption**.
  - Supports **scheduled, event-driven, or on-demand flows**.
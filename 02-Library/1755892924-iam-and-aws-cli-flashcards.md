---
link: "[[1755881612-iam-and-aws-cli-study-guide|IAM and AWS CLI study guide]]"
aliases:
  - IAM and AWS CLI Flashcards
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Training/AWS/NotebookLM/IAM_CLI
created_date: 2025-08-22
---
# IAM and AWS CLI Flashcards
- What is AWS CloudShell;;Is a **free-to-use terminal in the cloud** of AWS that allows you to issue commands.
<!--SR:!2025-09-30,26,288-->
- In AWS CloudShell, what is the default region for API calls?;;The **default region** in CloudShell is the **region you are currently logged into.**
<!--SR:!2025-09-10,12,288-->
- What happens to files you create within your CloudShell environment if you restart your CloudShell session?;;All files you create within your CloudShell environment will **persist and stay** even if you restart your session.
<!--SR:!2025-09-09,11,288-->
- What are the three different options to access AWS services?;;The three options are the **AWS Management Console** (web interface), the **AWS Command Line Interface (CLI)**, and the **AWS Software Development Kit (SDK)**.
<!--SR:!2025-09-24,19,250-->
- How are the AWS Management Console, CLI, and SDK typically protected for access?;;The  Management Console is protected by **username/password** (and potentially MFA). The CLI and SDK are protected by **access key.**
<!--SR:!2025-09-08,7,230-->
- What is the primary difference in how you use the AWS CLI versus the AWS SDK?;;The **AWS CLI** is a tool you use to interact with AWS services via **commands typed in your command-line shell**, while the **AWS SDK** is a set of language-specific libraries that you **embed within your application code** to programmatically access and manage AWS services.
<!--SR:!2025-09-20,18,268-->
- What is the "least privilege principle" in AWS IAM?;;The least privilege principle means you **don't give more permissions than a user needs.** If a user only requires access to three services, you should only grant permissions for those specific services.
<!--SR:!2025-09-15,14,290-->
- What is the recommended use for the AWS Root Account?;;The root account should only be used for setting up your AWS account initially and should not be used for daily operations or shared.
<!--SR:!2025-09-16,15,290-->
- What is the purpose of IAM Roles?;;**IAM Roles** are used to assign permissions to **AWS services** (not physical people) that need to perform actions on your behalf, such as an EC2 Instance or a Lambda Function.
<!--SR:!2025-09-10,12,288-->
- What are the two main defense mechanisms to protect IAM users and groups from being compromised?;;The two main defense mechanisms are defining a **password policy** and enforcing **Multi-Factor Authentication (MFA).**
<!--SR:!2025-09-14,11,230-->
- Name at least three configuration options for an AWS IAM password policy:;;You can set a **minimum password length,** require **specific character types** (e.g., uppercase, lowercase, numbers, non-alphanumeric characters), allow or disallow IAM users to **change their own passwords,** require users to **change passwords after a certain time** (password expiration), and **prevent password reuse.**
<!--SR:!2025-09-13,12,270-->
- List two types of Multi-Factor Authentication (MFA) devices supported by AWS:;;Two types include **virtual MFA devices** (like Google Authenticator or Authy) and **Universal 2nd Factor (U2F) Security Keys** (physical devices like YubiKey). Other options include hardware key fob MFA devices and special key fobs for AWS GovCloud.
<!--SR:!2025-09-29,25,288-->
- What are two essential security tools available in IAM to help enforce the principle of least privilege?;;The **IAM Credentials Report** (account-level) provides the status of all user credentials, and the **IAM Access Advisor** (user-level) shows service permissions granted to a user and when those services were last accessed.
<!--SR:!2025-09-09,4,230-->
- What is the difference between an IAM user and an IAM role?;;An **IAM user** represents a **physical person** within your organization, while an **IAM role** is intended to be used by **AWS services** to perform actions on your behalf.
<!--SR:!2025-09-09,11,288-->
- Can IAM groups contain other IAM groups?;;No, IAM groups can **only contain users**, not other groups.
<!--SR:!2025-09-08,10,288-->
- Which specific AWS SDK is the AWS CLI built upon?;;The AWS CLI is built on the **AWS SDK for Python, name boto.**
<!--SR:!2025-10-01,26,270-->
- What are access keys, and how should the be treated?;;Access keys are **credentials (like a secret password)** that allow you to access AWS programatically or via the CLI. They are **private to you** and **should never be shared** with others.
<!--SR:!2025-09-17,16,290-->
- Can an IAM user belong to multiple groups?;;Yes, a user **can belong to multiple groups** within IAM.
<!--SR:!2025-09-16,15,290-->
- What is an "inline policy" in AWS IAM?;;An **inline policy** is an IAM policy that is **attached directly to a specific user** (or group or role), rather than being a standalone managed policy.
<!--SR:!2025-09-07,6,230-->
- Is IAM (Identity Access Management) a global or regional AWS service?;;IAM is a **global service.**
<!--SR:!2025-09-17,16,290-->


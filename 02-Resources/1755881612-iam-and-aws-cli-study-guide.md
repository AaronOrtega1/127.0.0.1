---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS SAA 2025]]"
aliases:
  - IAM and AWS CLI study guide
tags:
  - resource
  - StudyGuide
  - aws
  - cloud
  - certificate
  - IAM
  - Section4
created_date: 2025-08-22
---
# IAM and AWS CLI study guide
**1. AWS Identity and Access Management (IAM)**
IAM is a **global service** responsible for managing identity and access to AWS resources. It enables you to securely control who is authenticated (signed in) and authorized (has permissions) to use resources.
- **Key Features:**
	- **Root Account:** The initial account created with full administrative access. It should **only be used for initial setup** and then secured with MFA and not used for daily tasks.
	- **Users:** Represents a single person or application that interacts with AWS.Each **AWS user should correspond to one physical user**; credentials should never be shared.
	 - **Groups:** A collection of IAM users. **Permissions can be assigned to groups**, and all users in the group inherit those permissions.Groups can only contain users, not other groups. A user can belong to multiple groups.
	 - **IAM Policies:** **JSON documents that define permissions**.They specify what actions users or groups are allowed or denied on specific resources.
		 - **Policy Structure:** Includes a `Version`, optional `ID` and `Sid` (statement ID), `Effect` (Allow/Deny), `Principal` (who the policy applies to), `Action` (list of API calls), `Resource` (list of resources), and an optional `Condition`.
		 - Policies can be attached at the group level (inherited by all members) or as **inline policies** attached directly to a user.
	- **IAM Roles:** Similar to users, but intended for **AWS services** (e.g., an EC2 instance, Lambda function) or federated users to assume permissions to perform actions on your behalf. An EC2 instance, for example, can be assigned an IAM Role to access other AWS services.
	- **Security Tools:**
		- **IAM Credentials Report:** An **account-level report** detailing all users and the status of their various credentials.
		- **IAM Access Advisor:** A **user-level tool** that shows which service permissions were granted to a user and when those services were last accessed. This helps in implementing the **principle of least privilege**.
	- **Protection Mechanisms:**
		- **Password Policy:** Allows you to set rules for user passwords, such as minimum length, required character types (uppercase, lowercase, number, non-alphanumeric), allowing users to change their own passwords, **requiring periodic password changes (expiry)**, and preventing password reuse.This helps protect against brute-force attacks.
		- **Multi-Factor Authentication (MFA):** Strongly recommended and a **must for your root account**, and ideally for all IAM users, to provide an additional layer of security. MFA combines "something you know" (password) with "something you own" (a security device).
			- **MFA Device Options:**
				- **Virtual MFA devices:** Applications like Google Authenticator or Authy, which can support multiple tokens on a single phone.
				- **Universal 2nd Factor (U2F) Security Keys:** Physical devices like a YubiKey (from a third-party vendor like Yubico).
				- **Hardware Key Fob MFA devices:** Physical devices from third-party vendors like Gemalto.
				- **AWS GovCloud special key fob:** For US government cloud users, provided by SurePassID.
- **Use Cases:**
	- **Granular Access Control:** Defining precise permissions for who can do what with your AWS resources.
	- **Organizational Structure:** Grouping users by job function (e.g., developers, operations) to simplify permission management.
	- **Secure Programmatic Access:** Allowing applications and services to interact with AWS APIs securely using IAM Roles or access keys.
	- **Compliance and Security Audits:** Using tools like Credentials Report and Access Advisor to monitor and refine permissions.
	- **Implementing Least Privilege:** Ensuring users and services only have the minimum permissions necessary to perform their tasks, reducing security risks.
- **Pros/Cons:**
	- **Pros:**
		- **Robust Security:** Provides highly granular access control, enforces strong password policies, and supports MFA for enhanced security.
		- **Principle of Least Privilege:** Enables you to grant only the necessary permissions, significantly reducing potential damage from compromised accounts.
		- **Scalability:** Efficiently manage access for a small team or a large enterprise with many users and services.
		- **Automation Support:** IAM Roles are crucial for allowing AWS services to interact with each other securely and programmatically.
	- **Cons:**
		- **Complexity:** Can become complex to manage policies, especially in large environments with many users, groups, and services if not carefully designed.
		- **Security Risks of Misconfiguration:** Incorrectly configured policies or shared access keys can lead to significant security vulnerabilities.
- **Pricing Model:** (Not explicitly detailed in the sources, but IAM as a service for managing users and permissions is generally offered at no additional charge. You only pay for the AWS services your users or roles access).
**2. AWS CloudShell**
AWS CloudShell is a **browser-based shell** that makes it easy to securely manage, explore, and interact with your AWS resources. It is a terminal in the cloud of AWS.
- **Key Features:**
	- **Cloud-based Terminal:** Provides an alternative to a local terminal for issuing commands against AWS.
	- **Pre-installed AWS CLI:** Comes with the AWS Command Line Interface (CLI) already installed (e.g., version 2.1 mentioned).
	- **Persistent Storage:** Files you create within your CloudShell environment (e.g., `demo.TXT`) will **stick and remain available across sessions**.
	- **Customization:** You can configure settings like **font size** (smallest, medium, large) and **theme** (light or dark).
	- **File Management:** Supports **uploading and downloading files** to and from your CloudShell environment, which is highlighted as a "lifesaver".
	- **Multi-tasking:** Allows for **multiple tabs** and **split-column views** for concurrent terminal sessions within the same environment.
	- **Credential Handling:** API calls made from CloudShell use the credentials of the account you are currently logged into.
	- **Default Region:** The default region for API calls in CloudShell is the region you are currently logged into.
- **Use Cases:**
	- **Quick AWS Management:** Performing ad-hoc AWS CLI commands and managing resources directly from your browser, without needing to configure a local environment.
	- **Troubleshooting:** Quickly accessing and diagnosing issues with AWS services.
	- **Script Execution:** Running small scripts or commands against AWS.
	- **Learning and Hands-on Labs:** A convenient environment for learning AWS CLI commands in a guided setting.
- **Pros/Cons:**
	- **Pros:**
		- **Free to Use:** CloudShell is **free to use**.
		- **No Local Setup Required:** Eliminates the need to install and configure the AWS CLI or other tools on your local machine.
		- **Portability:** Access your terminal and files from any web browser.
		- **Persistent Environment:** Your files and command history persist across sessions.
		- **Integrated:** Seamlessly integrated into the AWS Management Console.
	- **Cons:**
		- **Regional Availability:** **Not available in all AWS regions**, so you might need to check for availability or switch regions.
		- **Launch Time:** May take a minute to launch your environment.
- **Pricing Model:** **Free to use**.
**3. AWS Command Line Interface (CLI)**
The AWS CLI is a powerful tool that allows you to interact with AWS services using commands in your command-line shell.
- **Key Features:**
	- **Command-Line Interaction:** Enables management of AWS services from your local terminal.
	- **Access Keys:** Protected by **access keys** (an access key ID and a secret access key), which are credentials downloaded from the Management Console.**These are secret and must not be shared**.
	- **Direct API Access:** Provides direct access to the public APIs of AWS services.
	- **Scripting and Automation:** Can be used to develop scripts to manage resources and **automate tasks**.
	- **Open-Source:** The AWS CLI is open-source, with its code available on GitHub.
	- **Built on SDK:** The AWS CLI itself is built on the **AWS SDK for Python (Boto)**.
- **Use Cases:**
	- **Automation:** Writing scripts to provision, manage, and de-provision AWS resources automatically.
	- **Batch Operations:** Performing actions on multiple resources efficiently.
	- **Alternative to Console:** Managing AWS resources for users who prefer a command-line interface or for tasks that are cumbersome in the Management Console.
	- **Integration:** Integrating AWS operations into CI/CD pipelines or other programmatic workflows.
- **Pros/Cons:**
	- **Pros:**
		- **Powerful for Automation:** Ideal for scripting and automating complex AWS tasks.
		- **Granular Control:** Offers fine-grained control over AWS services and resources.
		- **Efficiency:** Can be faster for experienced users to perform tasks compared to the console.
		- **Open-Source:** Benefits from community contributions and transparency.
	- **Cons:**
		- **Requires Setup:** Needs to be set up and configured on a local computer, including managing access keys.
		- **Security Risks:** Improper handling of access keys (e.g., sharing them, hardcoding them) can lead to significant security vulnerabilities.
		- **Steep Learning Curve:** Can be challenging for beginners unfamiliar with command-line interfaces.
- **Pricing Model:** (The AWS CLI tool itself is free to download and use. You are charged for the AWS services you interact with using the CLI, based on those services' pricing models).
**4. AWS Software Development Kit (SDK)**
The AWS SDK is a set of language-specific libraries that allow you to access and manage AWS services and APIs programmatically from within your application code.
- **Key Features:**
	- **Programmatic Access:** Enables applications to interact with AWS services and APIs directly.
	- **Language Specific:** Available for many programming languages, including **JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, and C++**.
	- **Embedded in Code:** Unlike the CLI, the SDK is embedded within your application code.
	- **Access Keys:** Protected by **access keys**, similar to the CLI.
	- **Specialized SDKs:** Includes mobile SDKs (for Android and iOS) and IoT (Internet of Things) device SDKs.
	- **Foundation for CLI:** The AWS CLI is built on the AWS SDK for Python.
- **Use Cases:**
	- **Building Custom Applications:** Developing applications that integrate with AWS services (e.g., storing data in S3, managing EC2 instances, processing events with Lambda).
	- **Automated Solutions:** Creating robust, programmatic solutions that leverage AWS capabilities within a larger software system.
	- **Mobile and IoT Development:** Connecting mobile apps or IoT devices to AWS backend services.
- **Pros/Cons:**
	- **Pros:**
		- **Deep Integration:** Allows for powerful and seamless integration of AWS services into custom applications.
		- **Language Flexibility:** Supports a wide array of popular programming languages.
		- **Scalability:** Enables building scalable applications that can programmatically adapt to changing AWS resource needs.
	- **Cons:**
		- **Requires Programming Knowledge:** Users need programming skills in a supported language to utilize the SDK effectively.
		- **Security Risks:** Requires careful management of access keys within application code to prevent security breaches.
- **Pricing Model:** (The AWS SDKs are free to download and use. You are charged for the AWS services your applications interact with, based on those services' pricing models).
**5. AWS Management Console**
The AWS Management Console is a **web-based interface** that provides a graphical environment for managing your AWS resources.
- **Key Features:**
	- **Web Interface:** A user-friendly graphical interface accessible through a web browser.
	- **Security:** Protected by your username, password, and optionally **Multi-Factor Authentication (MFA)**.
	- **Access Key Generation:** Used for generating and managing access keys for CLI and SDK users.
- **Use Cases:**
	- **Visual Management:** Monitoring resources, configuring services, and performing administrative tasks through a visual interface.
	- **Initial Setup:** Setting up your AWS account, creating IAM users and groups, and configuring security policies.
	- **Learning and Exploration:** Ideal for new users to explore AWS services and understand their configurations.
- **Pros/Cons:**
	- **Pros:**
		- **User-Friendly:** Easy to navigate for beginners and visual learners.
		- **Comprehensive:** Provides access to almost all AWS services and their configurations.
		- **Intuitive:** Good for performing one-off tasks and checking resource status.
	- **Cons:**
		- **Less Efficient for Automation:** Not suitable for automating tasks compared to the CLI or SDK.
		- **Not Preferred by All:** Some power users may prefer the efficiency of the CLI.
- **Pricing Model:** (The AWS Management Console itself is free to use. You are charged for the AWS services you provision and use through the console, based on those services' pricing models).
## Related Links
- [[]]
## Source
[Notebooklm](https://notebooklm.google.com/notebook/23e6a525-5556-49e5-8ee6-bb9fdbbdef4c)


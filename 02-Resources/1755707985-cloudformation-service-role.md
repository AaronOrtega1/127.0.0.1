---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - CloudFormation Service Role
tags:
  - resource
  - aws
  - cloud
  - certificate
  - CloudFormation
created_date: 2025-08-20
---
# [[1753150090-cloudformation-cheat-sheet|CloudFormation]] Service Role
## Key Concept: Service Roles in **CloudFormation**
- **Service roles** = special **[[1747869134-iam-policies|IAM]] roles** created specifically for **CloudFormation**.  
- Purpose: allow **CloudFormation** to **create, update, and delete stack resources** on behalf of the user.  
- They let users interact with **CloudFormation** stacks without needing direct permissions on every AWS resource.  

## How Service Roles Work
1. **User permissions**:
   - User only needs permission to **interact with CloudFormation** (not with every resource directly).
   - User must have the **`iam:PassRole`** permission to assign a role to **CloudFormation**.

2. **Service role permissions**:
   - Define an **IAM role** that CloudFormation assumes.  
   - Example: a service role with **[[1751042472-s3-overview|S3]] Full Access**.  
   - Then, **CloudFormation** can create/update/delete S3 buckets even if the user cannot directly.

## Example Flow
1. **User** defines a CloudFormation template.  
2. **User IAM permissions**: only allow actions on **CloudFormation** + `iam:PassRole`.  
3. **Service role**:
   - Created for **CloudFormation**.  
   - Assigned **S3 Full Access policy**.  
   - Name: `DemoRole for CFN with S3 capabilities`.  

4. **CloudFormation stack creation**:
   - User starts stack creation.  
   - In the "Permissions" section, choose `DemoRole`.  
   - Now **CloudFormation** uses the role instead of the user’s own permissions.  

## Important Notes
- If **no service role is specified**, CloudFormation uses **the user’s permissions**.  
- If the service role does not have enough permissions (e.g., role has only S3 but stack creates [[1748020848-ec2-basics|EC2]]), the stack **fails**.  
- This mechanism enforces **[[1748016888-least-privilege|least privilege]] principle**:
  - Users only need **minimal permissions**.  
  - CloudFormation executes with **controlled, scoped permissions** via the service role.  

## Security Principle
- **Least Privilege**:  
  - Users shouldn’t have broad access to all AWS services.  
  - Instead, they should only be able to:
    1. Interact with **CloudFormation**.  
    2. Pass the **service role**.  
  - CloudFormation executes stack resources using the service role’s permissions.  

## Key Permission
- **`iam:PassRole`** → required for user to assign the service role to CloudFormation.  

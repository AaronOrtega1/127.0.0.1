---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases: 
  - Amazon Cognito Overview
  - Amazon Cognito
tags:
  - Knowledge
  - aws
  - cloud
  - certificate
  - Cognito
created_date:
  2025-07-21
---
# Amazon Cognito Overview
## Summary
- 

## Key Ideas
### 
- Give users an identity to interact with our **web or mobile** applications.
- **Cognito User Pools:** ^UserPools
  - Sign in functionality for app users.
  - Integrate with [[1752812933-api-gateway-overview|API Gateway]] & [[1749061609-application-load-balancer-(alb)|Application Load Balancer]].
- **Cognito Identity Pools (Federate Identity):**
  - Provide AWS credentials to users so they can access AWS resources directly.
  - Integrate with Cognito User Pools as an identity provider.
- **Cognito vs IAM:** "hundreds of users", "mobile users", "authenticate with SAML".

### Cognito User Pools (CUP)
#### User Features
- **Create a serverless database of user for your web & mobile apps.**
- Simple login: Username (or email) / password combination.
- Password reset.
- Email & Phone Number Verification.
- Multi-factor Authentication (MFA).
- Federated Identities: users from Facebook, Google, SAML...

#### Integrations
![[1753121614-amazon-cognito-overview.webp]]

### Cognito Identity Pools (Federate Identity)
- **Get Identities for "users" so they obtain temporary AWS credentials.**
- Users source can be Cognito User Pools, 3rd party logins, etc...
- **Users can then access AWS services directly or through API gateway.**
- The [[1747869134-iam-policies|IAM]] policies applied to the credentials are defined in Cognito.
- They can be customized based on the user_id for fine grained control.
- **Default IAM roles** for authenticated and guest users.
![[1753121614-amazon-cognito-overview-1.webp]]

#### Row Level Security in [[1752777935-amazon-dynamodb|Amazon DynamoDB]].
![[1753121614-amazon-cognito-overview-2.webp]]



## Related Links
- [[]]

## Source
[text]()

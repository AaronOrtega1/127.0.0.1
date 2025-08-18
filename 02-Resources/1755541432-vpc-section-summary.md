---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|AWS Certified Solution Architect Associate 2025]]"
aliases:
  - VPC Section Summary
tags:
  - resource
  - cloud
  - certificate
  - aws
  - VPC
created_date: 2025-08-18
---
# VPC Section Summary
- **CIDR** - IP Range.
- **VPC** - Virtual Private Cloud => we define a list of IPv4 & IPv6 CIDR.
- **Subnets** - tied to an [[1747858683-aws-availability-zone|AZ]], we define a CIDR.
- **Internet Gateway** - at the VPC level, provide IPv4 & IPv6 Internet Access.
- **Route Tables** - must be edited to add routes from subnets to IGW, [[1755275243-vpc-peering|VPC Peering]] Connections, [[1755275978-vpc-endpoints|VPC Endpoints]],...
- **[[1755193629-bastion-hosts|Bastion Hosts]]** - public [[1748020848-ec2-basics|EC2]] instances to SSH into, that has SSH connectivity to EC2 instances in private subnets.
- **NAT Instances** - gives Internet access to EC2 instances in private subnets. Old, must be setup in a public subnet, disable Source / Destination check flag.
- **NAT Gateway** - managed by AWS, provides scalable Internet access to private EC2 instances, when the target is and IPv4 address.
- [[1755214530-network-access-control-list|NACL]] - stateless, subnets rules for inbound and outbound, don't forget [[1755214530-network-access-control-list#^EphemeralPorts|Ephemeral Ports]].
- [[1748283223-security-groups-&-classic-ports-overview|Security Groups]] - stateful, operate at the EC2 instance level.
- **VPC Peering** - connect two VPCs with non overlapping CIDR, non-transitive.
- **VPC Endpoints** - provide private access to AWS Services ([[1751042472-s3-overview|S3]], [[1752777935-amazon-dynamodb|DynamoDB]], [[1753150090-cloudformation-cheat-sheet|CloudFormation]], [[1754587168-ssm-parameter-store-overview|SSM]]) within a VPC.
- [[1755277213-vpc-flow-logs|VPC Flow Logs]] - can be setup at the VPC / Subnet / [[1748545140-elastic-network-interfaces-(eni)|ENI]] Level, for ACCEPT and REJECT traffic, helps identifying attacks, analyze using Athena or CloudWatch Logs Insights.
- [[1755279885-aws-site-to-site-vpn|Site-to-Site VPN]] - setup a Customer Gateway on DC, a Virtual Private Gateway on VPC, and site-to-site VPN over public Internet.
- **AWS VPN CloudHub** - hub-and-spoke VPN mode to connect your sites.
- [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect]] - setup a Virtual Private Gateway on VPC, and establish a direct private connection to an AWS Direct Connect Location.
- [[1755281058-direct-connect-and-direct-connect-gateway|Direct Connect Gateway]] - setup a Direct Connect to many VPCs in different AWS regions.
- **AWS PrivateLink/VPC Endpoint Services:**
	- Connect services privately from your service VPC to customers VPC.
	- Doesn't need VPC Peering, public Internet, NAT Gateway, Route Tables.
	- Must be used with Network Load Balancer & ENI.
- **ClassicLink** - connect EC2-Classic EC2 instances privately to your VPC.
- **Transit Gateway** - transitive peering connections for VPC, VPN & DX.
- **Traffic Mirroring** - copy network traffic from ENIs for further analysis.
- **Egress-only Internet Gateway** - like a NAT Gateway, but for IPv6.






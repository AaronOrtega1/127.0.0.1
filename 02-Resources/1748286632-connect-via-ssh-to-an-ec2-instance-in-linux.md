---
link: "[[1747853373-aws-certified-solution-architect-associate-2025|Aws Certified Solution Architect Associate 2025]]"
aliases:
  - Connect Via Ssh To An Ec2 Instance In Linux
tags:
  - resource
  - aws
  - cloud
  - EC2
  - SSH
created_date: 2025/05/26
---
# Connect Via SSH To An EC2 Instance In Linux
## Summary
- 
## Key Ideas
### Previous Step [[1747944988-how-to-access-aws#^AwsAccessKey|How To Access Aws]]
#### Command to use.
- change the [[1748287509-chmod-and-linux-file-permissions|permission]] of the access key.
```bash
chmod 400 <key>
```
- Once with the correct permissions in the key we can connect with the following command:
```bash
ssh -i <key> ec2-user@<publicIPv4OfTheInstance>
```
## Related Links
- [[]]
## Source
[text](url) 
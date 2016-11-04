# Sls log From S3

To use the CloudWatch Logs from S3 Stream in Serverless Framework.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/katsuhiko/sls-log-from-s3` to install the service in your current working directory
2. Next up cd into the service with `cd sls-log-from-s3`
3. Run `npm install`
4. Deploy with `serverless deploy`

## How to use

```bash
serverless logs -f photosConsumer -t
```

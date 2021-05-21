# Base Serverless Framework Template

## What's included

- Folder structure used consistently across our projects.
- [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
- [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.
- [serverless-deployment-bucket](https://www.npmjs.com/package/serverless-deployment-bucket): Allow to specify a bucket for deploy, to avoid create several for each service/stage.
- [serverless-plugin-log-retention](https://www.npmjs.com/package/serverless-plugin-log-retention): Specify a period for CloudWatch log retention, to avoid possible future costs.
- [serverless-dotenv-plugin](https://www.npmjs.com/package/serverless-dotenv-plugin): Allow load environment variables from .env files.
- [serverless-domain-manager](https://www.npmjs.com/package/serverless-domain-manager): Specify a domain name for your service (check .env.development to specify domain name, certificate, among others).

## Getting started

```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/pradella/serverless-starter
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!

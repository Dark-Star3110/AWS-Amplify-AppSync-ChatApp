/* eslint-disable */
const awsmobile = {
  Auth: {
    region: "your-region",
    userPoolId: "your-region_YOUR_REGION_ID",
    userPoolWebClientId: "YOURCLIENTID",
    identityPoolId: "identitypoolID",
  },
  Storage: {
    AWSS3: {
      bucket: "bucket-name",
      region: "your-region",
    },
  },
  aws_project_region: "ap-northeast-1",
  aws_appsync_graphqlEndpoint:
    "https://your-api.appsync-api.your-region.amazonaws.com/graphql",
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
};

export default awsmobile;

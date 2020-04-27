# Slack Message SDK
SDK for connection to a proprietary automatic slack messaging endpoint

## Installation
```
npm install --save @trifoia/sdk-slack-message
```

## Basic Usage
```js
const slackMessage = require('@trifoia/sdk-slack-message');

const messageOpts = {
  endpoint: 'APIGatewayEndpoint'
  channel: 'test',
  subject: 'Slack Message SDK Test',
  message: 'This is a tet from the slack message sdk',
  iconEmoji: ':robot_face:',
  data: {
    test: 'test',
    num: 123,
    num2: 314532,
    sdkData: 'this is from the sdk! Boo!'
  },
  dataLogStream: `${(new Date()).toISOString()}-slack-message-sdk`
}
const res = await slackMessage(messageOpts);
```

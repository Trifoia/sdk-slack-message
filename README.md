# Slack Message SDK
SDK for connection to a proprietary automatic slack messaging endpoint

# Installation
```
npm install --save @trifoia/sdk-slack-message
```

# Usage
## Options
This library exports a single function that takes an "options" object as its parameter. The following values are supported:
| Field Name  | Required? | Description |
| ----------- | --------- | ----------- |
| `endpoint`  | Required  | The API endpoint to use when sending the message |
| `apiKey`        | Required  | API Key granting access to the endpoint |
| `channel`       | Required  | The channel the message should be sent to |
| `subject`       | Required  | Subject line for the message |
| `message`       | Required  | The main message body to send to Slack |
| `iconEmoji`     | Optional  | Emoji to use as a user icon |
| `iconUrl`       | Optional  | Url of an image to use at the user icon |
| `data`          | Optional  | Additional data to store in CloudWatch |
| `dataLogStream` | Optional | Name of the new CloudWatch Log Stream used to store data |

The message request will still send if there is no API key present, to support backwards compatibility, but the API should be set up to reject these requests

## Basic Example
```js
const slackMessage = require('@trifoia/sdk-slack-message');

const messageOpts = {
  endpoint: 'APIGatewayEndpoint',
  apiKey: 'YourAPIKey',
  channel: 'test',
  subject: 'Slack Message SDK Test',
  message: 'This is a test from the slack message sdk',
  iconEmoji: ':left_speech_bubble:',
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

# Development
## Commands
```sh
# Lint files and fix any simple errors
$ npm run lint

# Run all Unit test
$ npm test

# Run only "quick" unit tests
$ npm run test-quick

# Publish to NPM (must be logged in via `npm login`)
$ npm publish --access public
```

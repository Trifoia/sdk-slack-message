'use strict';

const assert = require('assert');

const config = require('../../config.js');
const itSlowly = require('../test-utils/it-slowly.js');

const slackMessage = require('../../lib/control/slack-message.js');

describe('slack-message', function() {
  this.timeout(100000);
  it('should return false (fail) with invalid input', async () => {
    let opts = {
      message: 'some-message',
      channel: 'some-channel'
    };
    assert.strictEqual(await slackMessage(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(await slackMessage(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(await slackMessage(opts), false);

    opts = {
      endpoint: 'some-endpoint',
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(await slackMessage(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel',
      message: 'some-message'
    };
    assert.strictEqual(await slackMessage(opts), false);
  });

  itSlowly('should be able to send a message', async () => {
    const opts = {
      endpoint: config.api.testEndpoint,
      channel: 'test',
      subject: 'Slack Message SDK Test',
      message: 'This is a tet from the slack message sdk',
      apiKey: config.api.testApiKey,
      iconEmoji: ':left_speech_bubble:',
      data: {
        test: 'test',
        num: 123,
        num2: 314532,
        sdkData: 'this is from the sdk! Boo!'
      },
      dataLogStream: `${(new Date()).toISOString()}-slack-message-sdk`
    };
    const res = await slackMessage(opts);
    assert.strictEqual(res.message, 'success');
    assert.strictEqual(typeof res.logStreamName, 'string');
    assert.strictEqual(typeof res.nextSequenceToken, 'string');
  });
});

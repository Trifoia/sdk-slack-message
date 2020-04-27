'use strict';

const assert = require('assert');

const config = require('../../config.js');
const itSlowly = require('../test-utils/it-slowly.js');

const sendMessage = require('../../lib/units/send-message.js');

describe('send-message', function() {
  this.timeout(100000);
  itSlowly('should not be able to send message without API key', async () => {
    const opts = {
      endpoint: config.api.testEndpoint,
      channel: 'test',
      subject: 'Slack Message SDK Test',
      message: 'This is a tet from the slack message sdk',
      iconEmoji: ':left_speech_bubble:',
      data: {
        test: 'test',
        num: 123,
        num2: 314532,
        sdkData: 'this is from the sdk! Boo!'
      },
      dataLogStream: `${(new Date()).toISOString()}-slack-message-sdk`
    };
    const res = await sendMessage(opts);
    assert.strictEqual(res, '{"message":"Forbidden"}');
  });

  itSlowly('should be able to send a message', async () => {
    const opts = {
      endpoint: config.api.testEndpoint,
      apiKey: config.api.testApiKey,
      channel: 'test',
      subject: 'Slack Message SDK Test',
      message: 'This is a tet from the slack message sdk',
      iconEmoji: ':left_speech_bubble:',
      data: {
        test: 'test',
        num: 123,
        num2: 314532,
        sdkData: 'this is from the sdk! Boo!'
      },
      dataLogStream: `${(new Date()).toISOString()}-slack-message-sdk`
    };
    const res = await sendMessage(opts);
    assert.strictEqual(res, 'success');
  });
});

'use strict';

const assert = require('assert');

const validateOpts = require('../../lib/units/validate-opts.js');

describe('validate-opts', function() {
  it('should return success on valid minimum opts', async () => {
    const opts = {
      endpoint: 'some-endpoint',
      channel: 'some-channel',
      subject: 'some-subject',
      message: 'some-message'
    };
    assert.strictEqual(validateOpts(opts), true);
  });

  it('should return failure missing required values', async () => {
    let opts = {
      message: 'some-message',
      channel: 'some-channel'
    };
    assert.strictEqual(validateOpts(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(validateOpts(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(validateOpts(opts), false);

    opts = {
      endpoint: 'some-endpoint',
      subject: 'some-subject',
      channel: 'some-channel'
    };
    assert.strictEqual(validateOpts(opts), false);

    opts = {
      subject: 'some-subject',
      channel: 'some-channel',
      message: 'some-message'
    };
    assert.strictEqual(validateOpts(opts), false);
  });

  it('should return success with optional values', async () => {
    const opts = {
      endpoint: 'some-endpoint',
      channel: 'some-channel',
      subject: 'some-subject',
      message: 'some-message',
      username: 'some-username',
      iconUrl: 'some-icon-url',
      iconEmoji: 'some-icon-emoji',
    };
    assert.strictEqual(validateOpts(opts), true);
  });

  it('should return success with unknown values', async () => {
    const opts = {
      endpoint: 'some-endpoint',
      channel: 'some-channel',
      subject: 'some-subject',
      message: 'some-message',
      extraMember: 'some-extra-member'
    };
    assert.strictEqual(validateOpts(opts), true);
  });
});

'use strict';

const phin = require('phin');

/**
 * Sends a message to slack
 *
 * @param {object} opts Previously validated Slack Message Options
 */
const sendMessage = async (opts) => {
  const phinOpts = {
    url: opts.endpoint,
    method: 'POST',
    data: opts,
    headers: {}
  };
  if (opts.apiKey) {
    phinOpts.headers['x-api-key'] = opts.apiKey;
  } else {
    console.warn('Warning: Attempting to send Slack message without an API key');
  }
  let { body } = await phin(phinOpts);

  // Try to parse the body
  try {
    body = JSON.parse(body);
  } catch(e) {
    // Allow failure, the body will remain a string
  }

  return body;
};

module.exports = sendMessage;

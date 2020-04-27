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
    data: opts
  };
  const res = await phin(phinOpts);

  return res.body.toString();
};

module.exports = sendMessage;

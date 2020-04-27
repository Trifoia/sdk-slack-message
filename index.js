'use strict';

const validateOpts = require('./lib/units/validate-opts.js');
const sendMessage = require('./lib/units/send-message.js');

/**
 * Send a message to slack
 * 
 * @param {object} opts Slack Message Options
 */
module.exports = async (opts) => {
  if (!validateOpts(opts)) return false;

  return sendMessage(opts);
};

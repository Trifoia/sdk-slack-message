'use strict';

const validateOpts = require('../units/validate-opts.js');
const sendMessage = require('../units/send-message.js');

/**
 * Send a message to slack
 * 
 * @param {object} opts Slack Message Options
 */
const slackMessage = async (opts) => {
  if (!validateOpts(opts)) return false;

  return sendMessage(opts);
};

module.exports = slackMessage;

'use strict';

const config = require('../../config.js');

/**
 * Validates the format of a message options object. Will return false on failure and
 * true on success
 * 
 * @param {object} opts Message options
 * 
 * @returns {boolean} If the opts pass validation
 */
const validateOpts = (opts) => {
  const requiredMembers = config.api.requiredOptsMembers;
  const missing = requiredMembers.filter((required) => !opts[required]);
  if (missing.length) {
    console.error(`Opts provided to 'slackMessageSdk.validateOpts' are missing the following field(s): ${missing.join(', ')}`);
    return false;
  }

  return true;
};

module.exports = validateOpts;

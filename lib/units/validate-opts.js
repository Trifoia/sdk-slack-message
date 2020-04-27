'use strict';

/**
 * Validates the format of a message options object. Will return false on failure and
 * true on success
 * 
 * @param {object} opts Message options
 * 
 * @returns {boolean} If the opts pass validation
 */
const validateOpts = (opts) => {
  if (typeof opts.url !== 'string') return false;
  if (typeof opts.subject !== 'string') return false;
  if (typeof opts.message !== 'string') return false;

  return true;
};

module.exports = validateOpts;

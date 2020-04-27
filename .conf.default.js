'use strict';

/**
 * Default configuration file. Any values also present in the .conf.js file will be overridden
 * The configurations have two layers
 * 1. Category
 * 2. Value
 * 
 * This system does not support nesting beyond these two layers. Any object value will
 * be replaced with the entire object value in the secret config
 * 
 * All values marked as `undefined` must be defined in the .conf.js file
 */
module.exports = {
  /**
   * API related configurations 
   */
  api: {
    /**
     * Values that must be present options provided to this method
     */
    requiredOptsMembers: [
      'endpoint',
      'channel',
      'subject',
      'message'
    ],

    /**
     * API Gateway endpoint to use when testing
     */
    testEndpoint: null,

    /**
     * API key used for testing
     */
    testApiKey: null
  }
};

'use strict';

/**
 * test-pdr service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-pdr.test-pdr');

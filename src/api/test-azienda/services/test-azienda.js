'use strict';

/**
 * test-azienda service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-azienda.test-azienda');

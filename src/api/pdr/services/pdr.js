'use strict';

/**
 * pdr service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pdr.pdr');

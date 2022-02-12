'use strict';

/**
 * test-pod service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-pod.test-pod');

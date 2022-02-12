'use strict';

/**
 * test-pod router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-pod.test-pod');

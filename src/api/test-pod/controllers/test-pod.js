'use strict';

/**
 *  test-pod controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-pod.test-pod');

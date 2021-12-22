'use strict';

/**
 * pod service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pod.pod');

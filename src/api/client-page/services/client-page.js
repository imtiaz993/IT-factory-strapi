'use strict';

/**
 * client-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-page.client-page');

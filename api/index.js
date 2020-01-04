const { toLambda } = require('probot-serverless-now');
const app = require('./indej.js');

module.exports = toLambda(app);

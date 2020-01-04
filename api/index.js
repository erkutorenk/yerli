const { toLambda } = require('probot-serverless-now');
const app = require('./path/to/your/app.js');
module.exports = toLambda(app);

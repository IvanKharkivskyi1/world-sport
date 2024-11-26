// next.config.js
module.exports = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/world-sport/' : '',
};


const path = require('path');

const source = path.resolve(__dirname, '../source');
const build = path.resolve(__dirname, '../build');

const webpackParams = {
  build: {
    // It's passed from gitlab-ci.yml
    version: process.env.TAG || 'local',
  },
  helpers: {
    fromSource: (...pathTo) => path.resolve(source, ...pathTo),
  },
  paths: {
    source,
    build,
  },
  server: {
    port: '3010',
  },
};

module.exports = webpackParams;

#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const LaunchEpub = require('./index.js');

// launch directory named in first argument or otherwise the current working directory if no argument
const epubDir = argv._[0] || '';

const config = {
  epubDir
};

const server = new LaunchEpub(config);
server.start();

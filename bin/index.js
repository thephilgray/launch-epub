#!/usr/bin/env node
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const launchLiveServer = require('../index.js');

// launch directory named in first argument or otherwise the current working directory if no argument

const relativePath = argv._[0] || '';
const root = path.join(__dirname, 'reader/');
const port = argv.port || 8080;

const config = {
  relativePath,
  root,
  port
};

launchLiveServer(config);

#!/usr/bin/env node
const argv = require("minimist")(process.argv.slice(2));
const pickBy = require("lodash/pickBy.js");
const LaunchEpub = require("./index.js");

// launch directory named in first argument or otherwise the current working directory if no argument
const epubDir = argv._[0] || "";

const browserSyncOptions = pickBy(argv, (val, key) => key !== "_");

const server = new LaunchEpub(epubDir, browserSyncOptions);

server.start();

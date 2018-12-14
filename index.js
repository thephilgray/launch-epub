#!/usr/bin/env node
const path = require('path');
const Lnf = require('lnf');
const argv = require('minimist')(process.argv.slice(2));
const server = require('live-server');

// launch directory named in first argument or otherwise the current working directory if no argument

const projectDir = argv._[0]
  ? path.join(process.cwd(), argv._[0])
  : process.cwd();
const projectName = path.basename(projectDir);

const port = argv.port || 8080;

launchLiveServer();

function launchLiveServer() {
  server.start({
    port,
    open: `?epub=epub_content/${projectName}`,
    root: path.join(__dirname, 'bin/reader/'),
    noCssInject: true,
    mount: [[`/epub_content/${projectName}`, projectDir]]
  });
}

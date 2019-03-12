const path = require('path');
const server = require('live-server');

const defaults = {
  relativePath: '',
  port: 8080
};

module.exports = function launchLiveServer(options) {
  options = Object.assign(defaults, options);

  const epubProjectDirectory = path.resolve(
    process.cwd(),
    options.relativePath
  );
  const epubProjectName = options.name || path.basename(epubProjectDirectory);

  const serverConfig = {
    port: options.port,
    open: `?epub=epub_content/${epubProjectName}`,
    root: options.root || path.join(__dirname, 'bin/reader/'),
    noCssInject: true,
    mount: [[`/epub_content/${epubProjectName}`, epubProjectDirectory]]
  };

  server.start(serverConfig);
};

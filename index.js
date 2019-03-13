const path = require('path');
const BrowserSync = require('browser-sync');

const defaults = { epubDir: '' };

module.exports = class LaunchEpub {
  constructor(options = defaults) {
    this.epubProjectDirectoryPath = path.resolve(
      process.cwd(),
      options.epubDir
    );
    this.epubProjectName =
      options.epubName || path.basename(this.epubProjectDirectoryPath);

    this.server = BrowserSync.create();

    this.config = {
      server: {
        baseDir: path.resolve(__dirname, './bin/reader/'),
        index: 'index.html',
        routes: {
          [`/epub_content/${this.epubProjectName}`]: this
            .epubProjectDirectoryPath
        }
      },
      startPath: `index.html?epub=epub_content/${this.epubProjectName}`
    };
  }

  start() {
    this.server.init(this.config);
  }

  reload() {
    this.server.reload();
  }
};

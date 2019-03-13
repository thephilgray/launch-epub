const path = require('path');
const BrowserSync = require('browser-sync');

const defaults = { epubDir: '', port: 3000 };

module.exports = class LaunchEpub {
  constructor(options) {
    const extendedOptions = { ...defaults, ...options };
    this.epubProjectDirectoryPath = path.resolve(
      process.cwd(),
      extendedOptions.epubDir
    );
    this.epubProjectName =
      extendedOptions.epubName || path.basename(this.epubProjectDirectoryPath);

    this.server = BrowserSync.create();

    this.config = {
      ...extendedOptions,
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

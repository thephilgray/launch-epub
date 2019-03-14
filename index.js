const path = require("path");
const BrowserSync = require("browser-sync");

module.exports = class LaunchEpub {
  constructor(epubDir = "", options) {
    this.options = options;
    this.epubProjectDirectoryPath = path.resolve(process.cwd(), epubDir);
    this.epubProjectName = path.basename(this.epubProjectDirectoryPath);
    this.BrowserSyncInstance = BrowserSync.create();
    this.config = {
      ...this.options,
      server: {
        baseDir: path.resolve(__dirname, "./bin/reader/"),
        index: "index.html",
        routes: {
          [`/epub_content/${this.epubProjectName}`]: this
            .epubProjectDirectoryPath
        }
      },
      startPath: `index.html?epub=epub_content/${this.epubProjectName}`
    };
  }

  start() {
    this.BrowserSyncInstance.init(this.config);
    this.BrowserSyncInstance.watch(
      this.epubProjectDirectoryPath,
      this.reload.bind(this)
    );
  }

  reload() {
    this.BrowserSyncInstance.reload();
  }
};

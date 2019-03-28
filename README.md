# Launch-EPUB

A wrapper for BrowserSync and readium-js-viewer to launch unzipped EPUB projects in the browser for quick local testing and development with live reload.

Ideal for usage in the command line or as part of an EPUB development workflow.

## Installation

- Install as Node module with `NPM`:

```bash
npm i launch-epub
```

### CLI (Command Line Interface) Installation

- Install globally with `NPM`:

```bash

npm i -g launch-epub

```

- Or, as a self-contained executable:

```bash
git clone https://github.com/thephilgray/launch-epub.git
cd launch-epub
npm i

cd ../
npx pkg launch-epub

# osx-specific

cp launch-epub-macos /usr/local/bin/launch-epub

```

## API

> NOTE: EPUB project should be an unzipped directory

- Install it locally to your project

- Require and instantiate it, passing in the path to the unzipped EPUB directory as the first argument, and any BrowserSync options as the second.

```js
// index.js

const LaunchEpub = require('launch-epub');

const epubDir = './path-to-epub'; // relative or absolute
const browserSyncOptions = {};
const epubServer = new LaunchEpub(epubDir, browserSyncOptions);

epubServer.start();

// also, epubServer.reload() if needed
// if you need something else from BrowserSync, get the instance like this: epubServer.BrowserSyncInstance
// then you can call methods like `reload` or `pause` directly on the instance like this: epubServer.BrowserSyncInstance.reload()
```

> See <https://www.browsersync.io/docs/options> for full list of BrowserSync options.
> NOTE: not all BrowserSync options have been tested or are practical for this use case.

### CLI Usage (OSX)

- Open Terminal (or your preferred terminal application) from Applications
- Type the following command into Terminal (or your preferred terminal application) window and press <kbd>return</kbd>:

```bash
launch-epub
```

- Drag and drop the project directory into Terminal (or your preferred terminal application) window and press <kbd>return</kbd>

- Press <kbd>⌃ (control)</kbd> + <kbd>c</kbd> to stop the application

#### Options

```bash
# launch from within any directory on your computer by specifying the project directory path
launch-epub <epub-project-directory-path>

# specify a port
launch-epub --port=3000
```

## TODO:

- [ ] Write --help command
- [ ] Customize readium to make it possible to override or bypass scaling for previews of different aspect ratios and device frames.

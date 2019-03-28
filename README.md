# Launch-EPUB

A wrapper for BrowserSync and readium-js-viewer to launch unzipped EPUB projects in the browser for quick local testing and development with live reload.

Ideal for usage in the command line or as part of a development workflow.

## Basic usage (OSX)

NOTE: EPUB project should be an unzipped directory

- Open Terminal from Applications
- Type the following command into Terminal window and press <kbd>return</kbd>:

```bash
launch-epub
```

- Drag and drop the project directory into Terminal window and press <kbd>return</kbd>

- Press <kbd>⌃ (control)</kbd> + <kbd>c</kbd> to stop the application

### Options

```bash
# launch from within any directory on your computer by specifying the project directory path
launch-epub <epub-project-directory-path>

# specify a port
launch-epub --port=3000
```

## Install globally

### As an executable

```bash
git clone https://github.com/thephilgray/launch-epub.git
cd launch-epub
npm i

cd ../
npx pkg launch-epub

# osx-specific

cp launch-epub-macos /usr/local/bin/launch-epub

```

### As a node module in the command line (Node required to run)

```bash

npx degit https://github.com/thephilgray/launch-epub.git launch-epub

cd launch-epub
npm install
npm link

# or

cd launch-epub
npm install -g

# then use launch-epub command

```

## Use as an NPM module

Install it locally to your project

```bash
npm i --save git+https://github.com/thephilgray/launch-epub.git
```

Require and instantiate it

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

## TODO:

- [ ] Write --help command
- [ ] Customize readium to make it possible to override or bypass scaling for previews of different aspect ratios and device frames.

# Launch-EPUB

Launches epub project inside readium with live-server for quick local testing and development.

## Basic usage (OSX)

NOTE: EPUB project should be an unzipped directory

- Open Terminal from Applications
- Drag and drop the project directory into Terminal window and press <kbd>return</kbd>
- Type the following command into Terminal window and press <kbd>return</kbd>:

```bash
launch-epub
```

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
npm i -g degit
degit https://github.com/thephilgray/launch-epub.git launch-epub
cd launch-epub

npm i
npm i -g pkg
cd ../
pkg launch-epub

# osx-specific

cp launch-epub-macos /usr/local/bin/launch-epub

```

### As a node module (Node required)

```bash
npm i -g degit

degit https://github.com/thephilgray/launch-epub.git launch-epub

cd launch-epub
npm install
npm link

# or

cd launch-epub
npm install -g

# then use launch-epub command

```

## TODO:

- Write --help command
- Only watch epub_content files
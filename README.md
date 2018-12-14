# Launch-EPUB

Launches epub project inside readium with live-server for quick local testing and development.

## Basic usage

```bash
launch-epub <epub-project-dir>

# or

cd <epub-project-dir>
launch-epub


# option: port

launch-epub --port=3000

```

## Install globally

### As a node module

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

## TODO:

- Write --help command
- Only watch epub_content files

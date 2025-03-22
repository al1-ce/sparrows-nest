#!/usr/bin/env -S just --justfile
# just reference  : https://just.systems/man/en/

set quiet
set export

# Perform build
default: build

# Perform build
build:
    make -j $(nproc)

# Remove generated files
clean:
    make clean

# Start server
serve:
    http-server

# List tasks
list:
    just --list

# Perform single-time initial setup
setup:
    #!/usr/bin/env bash
    __has() { command -v $@ 2>&1 >/dev/null && return 0 || return 1; }
    __has sass || npm install -g sass
    __has kdl2html || cargo install --git https://github.com/jsl-lang/jsl-to-html-kdl.git
    echo " "
    echo "Finished setup"

# Sync local branch with master
sync:
    #!/usr/bin/env bash
    git fetch
    git rebase origin/master
    git push

toc:
    doctoc --title="## Table of contents" ./docs/README.md


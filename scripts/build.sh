#!/usr/bin/env bash

set -e

APP_NAME=envdoctor
BUILD_DIR=dist

echo "Building EnvDoctor binaries..."

rm -rf $BUILD_DIR
mkdir -p $BUILD_DIR

echo "→ macOS"
GOOS=darwin GOARCH=amd64 go build -o $BUILD_DIR/${APP_NAME}-macos-amd64 ./cmd/envdoctor

echo "→ Linux"
GOOS=linux GOARCH=amd64 go build -o $BUILD_DIR/${APP_NAME}-linux-amd64 ./cmd/envdoctor

echo "→ Windows"
GOOS=windows GOARCH=amd64 go build -o $BUILD_DIR/${APP_NAME}-windows-amd64.exe ./cmd/envdoctor

echo "Build complete."

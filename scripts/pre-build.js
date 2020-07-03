#!/bin/node

const buildInfo = require('./build-info');
const buildPages = require('./build-pages');

async function build() {
  buildInfo();
  console.log(`ℹ️  Info file has been generated`);

  buildPages();
  console.log(`📑 Pages have been created`);
}

build();

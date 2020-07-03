#!/bin/node

const resizeImages = require('./optimize-images');

async function build() {
  await resizeImages();
  console.log(`🖼  Images have been optimized`);
}

build();

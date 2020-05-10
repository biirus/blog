#!/bin/node

const { spawn } = require('child_process');
const resizeImages = require('./optimize-images');

function build() {
  const serverProcess = spawn('npm', ['run', 'start:server']);
  const buildProcess = spawn('./node_modules/.bin/stencil', [
    'build',
    '--prerender',
  ]);

  buildProcess.stdout.pipe(process.stdout);
  buildProcess.stderr.pipe(process.stderr);

  buildProcess.on('exit', function (code, signal) {
    serverProcess.kill();
    Promise.all(resizeImages()).then((images) => {
      console.log(`🖼   Generated ${images.filter(Boolean).length} images`);
      process.exit();
    });
  });
}

build();

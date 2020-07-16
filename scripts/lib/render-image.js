const url = require('url');
const http = require('http');
const path = require('path');
const sizeOf = require('image-size');

const sizes = [320, 640, 960, 1280, 1920, 2560];

const getLocalSrcSet = (src) => {
  const parts = src.split('.');
  const ext = parts.pop();

  return sizes.map((size) => {
    return `${parts.join('')}-${size}.${ext} ${size}w`;
  });
};

const getUnsplahSrcSet = (src) => {
  return sizes.map((size) => {
    return `${src}/${size}x${size} ${size}w`;
  });
};

const isLocalImg = (src) => {
  return /^\/assets\/.*/.test(src);
};

const isUnsplashImg = (src) => {
  return /^https:\/\/source\.unsplash.*/.test(src);
};

function renderImage(src, options, alt) {
  let availableImages = null;
  let imgSrc = src;
  let srcSet = '';

  const isLocal = isLocalImg(src);

  if (isLocal) {
    availableImages = getLocalSrcSet(src);
  } else if (isUnsplashImg(src)) {
    availableImages = getUnsplahSrcSet(src);
  }

  if (availableImages) {
    imgSrc = availableImages[0].split(' ').shift();
    srcSet = availableImages.join(', \n');
  }

  const { width, height } = isLocal
    ? sizeOf(path.join(process.cwd(), 'src', src))
    : {};

  return `
    <img
      width="${width}"
      height="${height}"
      loading="lazy"
      alt="${alt}"
      src="${src}"
      srcset="${srcSet}"
      class="${options}"
    />`;
}

module.exports = renderImage;

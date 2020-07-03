const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const getFileName = (file, size) => {
  const info = path.parse(file);
  return `${info.dir}/${info.name}-${size}${info.ext}`;
};

const shouldConvert = (file) => {
  return !/^.*-[0-9]{3,4}\.[a-z]{2,4}$/i.test(file);
};

const resizeImage = (filePath) => {
  const sizes = [320, 640, 960, 1280, 1920, 2560];

  return sizes.map((size) => {
    const fileName = getFileName(filePath, size);

    if (fs.existsSync(fileName)) {
      return Promise.resolve();
    }

    const image = sharp(filePath);
    return image
      .metadata()
      .then(function (metadata) {
        if (metadata.width > size) {
          return image.resize(size).toFile(fileName);
        }

        return null;
      })
      .catch(() => {});
  });
};

function traverseDir(dir) {
  return fs.readdirSync(dir).flatMap((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      return traverseDir(filePath);
    } else if (shouldConvert(filePath)) {
      return resizeImage(filePath);
    }
    return Promise.resolve();
  });
}

function resizeImages() {
  return [path.join(process.cwd(), 'www', 'assets')].flatMap(traverseDir);
}

module.exports = resizeImages;

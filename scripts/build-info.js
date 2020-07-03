require('./config');
const fs = require('fs');
const path = require('path');
const getFileInfo = require('./lib/get-file-info');

const getFileUrl = (filePath) =>
  path.join(
    '/',
    path
      .relative(path.join(process.cwd(), process.env.PAGES), filePath)
      .replace('.md', '')
  );

const sortByDate = (fileA, fileB) => {
  // dir always goes last
  if (fileB.isDir || fileA.date < fileB.date) {
    return -1;
  }

  return fileA.date === fileB.date ? 0 : 1;
};

function getPages(dir) {
  return fs
    .readdirSync(dir)
    .map((file) => {
      const filePath = path.join(dir, file);

      return {
        ...getFileInfo(filePath).data,
        url: getFileUrl(filePath),
      };
    })
    .sort(sortByDate);
}

function buildInfo() {
  const availableLangs = ['ru'];

  const pagesStructure = availableLangs.reduce((acc, lang) => {
    acc[lang] = getPages(path.join(process.cwd(), process.env.PAGES, lang));
    return acc;
  }, {});

  fs.writeFileSync(
    path.join(process.cwd(), 'data/info.json'),
    JSON.stringify(pagesStructure, null, 2)
  );
}

module.exports = buildInfo;

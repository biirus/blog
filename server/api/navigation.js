const fs = require('fs');
const path = require('path');
const getFileInfo = require('../lib/get-file-info');

const infoFileName = '_info.md';
const isNotInfoFile = (fileName) => fileName !== infoFileName;

const getFullPath = (dir) => (file) => path.join(dir, file);
const getDirInfo = (dir) => getFileInfo(path.join(dir, infoFileName)).data;

const getStats = (filePath) => ({
  stats: fs.statSync(filePath),
  filePath,
});

const getFileUrl = (filePath) => {
  return path.join(
    process.env.PAGES_PREFIX,
    path
      .relative(path.join(process.cwd(), process.env.PAGES_SRC), filePath)
      .replace('.md', '')
  );
};

const sortByDate = (fileA, fileB) => {
  // dir always goes last
  if (fileB.isDir || fileA.date < fileB.date) {
    return -1;
  }

  return fileA.date === fileB.date ? 0 : 1;
};

function getPages(dir) {
  const info = getDirInfo(dir);

  const files = fs
    .readdirSync(dir)
    .filter(isNotInfoFile)
    .map(getFullPath(dir))
    .map(getStats)
    .map((fileInfo) => {
      if (fileInfo.stats.isDirectory()) {
        return getPages(fileInfo.filePath);
      }

      return {
        ...getFileInfo(fileInfo.filePath).data,
        url: getFileUrl(fileInfo.filePath),
      };
    })
    .sort(sortByDate);

  return {
    isDir: true,
    info,
    files,
  };
}

function hadleNavigationRequest(req, res) {
  res.json(getPages(path.join(process.cwd(), process.env.PAGES_SRC)));
}

module.exports = hadleNavigationRequest;

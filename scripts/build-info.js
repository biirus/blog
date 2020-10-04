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

const hideDraft = (fileInfo) => !fileInfo.draft;

const sortByDate = (fileA, fileB) => {
  // dir always goes last
  if (fileB.isDir || fileA.date < fileB.date) {
    return -1;
  }

  return fileA.date === fileB.date ? 0 : 1;
};

function getFileDescription(dir) {
  return (file) => {
    const filePath = path.join(dir, file);

    return {
      ...getFileInfo(filePath).data,
      url: getFileUrl(filePath),
    };
  };
}

function getPages(lang) {
  const dir = path.join(process.cwd(), process.env.PAGES, lang);

  return fs
    .readdirSync(dir)
    .map(getFileDescription(dir))
    .filter(hideDraft)
    .sort(sortByDate);
}

function buildStructure(langs) {
  return Object.fromEntries(langs.map((lang) => [lang, getPages(lang)]));
}

function saveFile(structure) {
  fs.writeFileSync(
    path.join(process.cwd(), 'data/info.json'),
    JSON.stringify(structure, null, 2)
  );
}

function buildInfo() {
  saveFile(buildStructure(['ru']));
}

buildInfo();

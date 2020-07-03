const fs = require('fs');
const matter = require('gray-matter');

const getFileInfo = (filePath) => {
  if (fs.existsSync(filePath)) {
    const mdFileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(mdFileContent);
    return parsed;
  }

  return {};
};

module.exports = getFileInfo;

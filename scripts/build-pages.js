require('./config');

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const getFileInfo = require('./lib/get-file-info');
const renderImage = require('./lib/render-image');

const renderer = new marked.Renderer();

// Set options
marked.setOptions({
  renderer,
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

renderer.image = renderImage;

function getPage(pagePath) {
  const parsed = getFileInfo(
    path.join(process.cwd(), process.env.PAGES, `${pagePath}.md`)
  );

  if (parsed.content) {
    const html = marked(parsed.content);
    return {
      meta: {
        ...parsed.data,
        url: pagePath,
      },
      content: html,
    };
  }

  return undefined;
}

function getLanguages() {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data/info.json'), 'utf-8')
  );
}

function createDirs(lang) {
  fs.mkdirSync(path.join(process.cwd(), 'data/pages', lang), {
    recursive: true,
  });
}

function saveFile(page, url) {
  fs.writeFileSync(
    path.join(process.cwd(), 'data/pages', `${url}.json`),
    JSON.stringify(page, null, 2)
  );
}

function createFiles(pageInfo) {
  const page = getPage(pageInfo.url);

  if (page) {
    saveFile(page, pageInfo.url);
  }
}

function buildPages() {
  Object.entries(getLanguages()).forEach(([lang, pages]) => {
    createDirs(lang);
    pages.forEach(createFiles);
  });
}

buildPages();

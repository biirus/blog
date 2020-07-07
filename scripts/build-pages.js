require('./config');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const getFileInfo = require('./lib/get-file-info');

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

renderer.image = (href, title, alt) => {
  return `<app-img title="${title}" alt="${alt}" src="${href}"></app-img>`;
};

function getPage(pagePath) {
  const parsed = getFileInfo(
    path.join(process.cwd(), process.env.PAGES, `${pagePath}.md`)
  );

  if (parsed.content) {
    const html = marked(parsed.content);
    return {
      meta: parsed.data,
      content: html,
    };
  }

  return undefined;
}

function buildPages() {
  const languages = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data/info.json'), 'utf-8')
  );

  Object.entries(languages).forEach(([lang, pages]) => {
    fs.mkdirSync(path.join(process.cwd(), 'data/pages', lang), {
      recursive: true,
    });

    pages.forEach((pageInfo) => {
      const page = getPage(pageInfo.url);

      if (page) {
        fs.writeFileSync(
          path.join(process.cwd(), 'data/pages', `${pageInfo.url}.json`),
          JSON.stringify(page, null, 2)
        );
      }
    });
  });
}

buildPages();

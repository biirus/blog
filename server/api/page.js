const path = require('path');
const marked = require('marked');
const getFileInfo = require('../lib/get-file-info');

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

renderer.image = (href, title, alt) =>
  `<img title="${title}" alt="${alt}" src="${href}"/>`;

function getPage(pagePath) {
  const parsed = getFileInfo(
    path.join(process.cwd(), process.env.PAGES_SRC, `${pagePath}.md`)
  );

  if (parsed.content) {
    const html = marked(parsed.content);
    return {
      meta: parsed,
      content: html,
    };
  }

  return undefined;
}

function handlePageRequest(req, res) {
  const page = getPage(req.query.path);
  if (page) {
    return res.json(page);
  }

  return res.status(404).json(null);
}

module.exports = handlePageRequest;

export function helmet(meta: FileInfo) {
  return new Promise((resolve) => {
    document.title = meta.title;

    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', meta.title);

    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute('content', meta.title);

    document
      .querySelector('meta[property="og:url"]')
      .setAttribute('content', process.env.HOST + meta.url);

    if (meta.description !== '') {
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', meta.description);

      document
        .querySelector('meta[property="og:description"]')
        .setAttribute('content', meta.description);

      document
        .querySelector('meta[name="twitter:description"]')
        .setAttribute('content', meta.description);
    }

    if (meta.tags?.length > 0) {
      document
        .querySelector('meta[name="keywords"]')
        .setAttribute('content', meta.tags.join(', '));
    }

    resolve();
  });
}

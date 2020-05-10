export function helmet(meta: FileInfo) {
  return new Promise((resolve) => {
    document.title = meta.title;

    if (meta.description !== '') {
      document
        .querySelector('meta[name="description"]')
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

import { Component, h, State } from '@stencil/core';

async function loadPages(pages: FileInfo[]) {
  const [page, ...rest] = pages;

  if (!page) {
    return;
  }

  await fetch(`/assets/data/pages${page.url}.json`);
  loadPages(rest);
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  @State() pages: FileInfo[] = [];

  async componentWillLoad() {
    try {
      const response = await fetch(`/assets/data/info.json`);
      const languages = await response.json();
      this.pages = languages.ru;

      setTimeout(() => {
        loadPages(this.pages);
      }, 3000);
    } catch (e) {}
  }

  render() {
    return (
      <div class="app-home">
        {this.pages.map((page) => (
          <div key={page.url}>
            <stencil-route-link url={page.url}>
              <h1>{page.title}</h1>
            </stencil-route-link>
            <p>{page.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

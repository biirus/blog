import { Component, h, State } from '@stencil/core';

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

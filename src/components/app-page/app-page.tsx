import { Component, Prop, h, State } from '@stencil/core';
import { helmet } from '../../utils/helmet';

@Component({
  tag: 'app-page',
  styleUrl: 'app-page.css',
  shadow: false,
})
export class AppPage {
  @State() page: Page;

  /**
   * Language and Page url come here
   */
  @Prop() url: string;

  async componentWillLoad() {
    await this.fetchPage(this.url);
  }

  private async fetchPage(url: string) {
    if (typeof url !== 'undefined' && url.length > 0) {
      try {
        const response = await fetch(`/assets/data/pages${url}.json`);
        const page = await response.json();
        await helmet(page.meta);

        this.page = page;
      } catch (e) {
        this.page = null;
      }
    }
  }

  render() {
    if (this.page === null) {
      return <app-not-found></app-not-found>;
    }

    if (!this.page) {
      return null;
    }

    return (
      <article>
        <header>
          <h1>{this.page.meta.title}</h1>
        </header>
        <div class="content" innerHTML={this.page.content}></div>
      </article>
    );
  }
}

import { Component, Prop, h, Watch, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { helmet } from '../../utils/helmet';

@Component({
  tag: 'app-page',
  styleUrl: 'app-page.css',
  shadow: false,
})
export class AppPage {
  @State() url: string;
  @State() page: Page;

  /**
   * Language and Page url come here
   */
  @Prop() match: MatchResults;

  @Watch('match')
  matchWatcher() {
    this.fetchPage(this.match?.url);
  }

  async componentWillLoad() {
    await this.fetchPage(this.match?.url);
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

    if (!Boolean(this.page)) {
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

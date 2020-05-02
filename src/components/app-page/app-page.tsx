import { Component, Host, Prop, h, Watch, State } from '@stencil/core';
import Helmet from '@stencil/helmet';
import { MatchResults } from '@stencil/router';
import { getApiHost } from '../../utils/config';

@Component({
  tag: 'app-page',
  styleUrl: 'app-page.css',
  shadow: true,
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
    this.fetchPage(this.match.url);
  }

  async componentWillLoad() {
    await this.fetchPage(this.match.url);
  }

  private async fetchPage(url: string) {
    if (typeof url !== 'undefined') {
      const response = await fetch(`${getApiHost()}/api/page?path=${url}`);
      this.page = await response.json();
    }
  }

  render() {
    if (!Boolean(this.page)) {
      return null;
    }

    return (
      <Host>
        <Helmet>
          <title>{this.page.meta.data.title}</title>
        </Helmet>
        <h1>{this.page.meta.data.title}</h1>
        <div innerHTML={this.page.content}></div>
      </Host>
    );
  }
}

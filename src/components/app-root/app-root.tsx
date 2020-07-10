import { Component, h, Host, Build, State, Watch } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() currentTheme: string = 'light';

  @Watch('currentTheme')
  updateTheme() {
    document.documentElement.setAttribute('theme', this.currentTheme);
  }

  componentWillLoad() {
    if (Build.isBrowser) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');

      console.log(media);

      if ('addEventListener' in media) {
        media.addEventListener('change', this.whatchSystemTheme);
      } else if (typeof media['addListener'] !== 'undefined') {
        (media as MediaQueryList).addListener(this.whatchSystemTheme);
      }

      const systemTheme = media.matches ? 'dark' : 'light';
      console.log(systemTheme, localStorage.getItem('theme'));

      this.currentTheme = localStorage.getItem('theme') || systemTheme;

      console.log(this.currentTheme);

      this.updateTheme();
    }
  }

  private toggleTheme = () => {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.saveTheme();
  };

  private whatchSystemTheme = (e: MediaQueryListEvent) => {
    if (!Boolean(localStorage.getItem('theme'))) {
      this.currentTheme = e.matches ? 'dark' : 'light';
    }
  };

  private saveTheme = () => {
    localStorage.setItem('theme', this.currentTheme);
  };

  private resetTheme = () => {
    localStorage.removeItem('theme');
  };

  render() {
    return (
      <Host>
        <header>
          <h3>
            <stencil-route-link url="/">iBurn</stencil-route-link>
          </h3>

          <button onClick={this.resetTheme}>reset</button>
          <button onClick={this.toggleTheme}>toggle</button>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0.001}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route group="ru" url="/ru/:page*" component="app-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}

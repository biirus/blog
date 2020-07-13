import { Component, Host, h, Build, State, Watch } from '@stencil/core';

@Component({
  tag: 'theme-control',
  styleUrl: 'theme-control.css',
  shadow: true,
})
export class ThemeControl {
  @State() currentTheme: string = 'light';

  @Watch('currentTheme')
  updateTheme() {
    document.documentElement.setAttribute('theme', this.currentTheme);
  }

  componentWillLoad() {
    if (Build.isBrowser) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');

      if ('addEventListener' in media) {
        media.addEventListener('change', this.whatchSystemTheme);
      } else if (typeof media['addListener'] !== 'undefined') {
        (media as MediaQueryList).addListener(this.whatchSystemTheme);
      }

      const systemTheme = media.matches ? 'dark' : 'light';
      this.currentTheme = localStorage.getItem('theme') || systemTheme;

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

  // private resetTheme = () => {
  //   localStorage.removeItem('theme');
  // };

  render() {
    return (
      <Host>
        <div class="track" onClick={this.toggleTheme}>
          <div class="slide" data-count={this.currentTheme === 'light' ? 1 : 0}>
            🌙
            <div class="toggle"></div>
            🌕
          </div>
        </div>
      </Host>
    );
  }
}

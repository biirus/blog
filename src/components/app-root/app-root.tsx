import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <header>
          <h3>
            <stencil-route-link url="/">iBurn</stencil-route-link>
          </h3>

          <theme-control></theme-control>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0.001}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route group="ru" url="/ru/:page*" component="app-page" />
              <stencil-route component="app-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}

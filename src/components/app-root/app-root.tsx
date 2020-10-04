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
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />

              <stencil-route
                exact={true}
                url={['/ru/', '/ru']}
                routeRender={() => <stencil-router-redirect url="/" />}
              />

              <stencil-route
                url="/ru/:page"
                routeRender={({ match }) => (
                  <app-page url={match!.url}></app-page>
                )}
              />

              <stencil-route component="app-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}

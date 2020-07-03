import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <app-nav></app-nav>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0.001}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route group="ru" url="/ru/:page*" component="app-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

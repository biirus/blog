import { Component, h, Host, State, writeTask } from '@stencil/core';

async function loadPages(pages: FileInfo[]) {
  const [page, ...rest] = pages;

  if (!page) {
    return;
  }

  await fetch(`/assets/data/pages${page.url}.json`);
  loadPages(rest);
}

function getLatestPages(pages: FileInfo[]) {
  const PAGES_TO_LOAD = 5;
  return pages.slice(0, PAGES_TO_LOAD);
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() isCached = false;

  componentWillLoad() {
    if (this.isCached) {
      return;
    }

    writeTask(() => {
      fetch(`/assets/data/info.json`)
        .then((r) => r.json())
        .then((languages) => languages.ru)
        .then(getLatestPages)
        .then(loadPages)
        .then(() => (this.isCached = true));
    });
  }
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

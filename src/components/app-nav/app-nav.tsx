import { Component, Host, h, State, Build } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true,
})
export class AppNav {
  @State() pages: Dir;

  async componentWillLoad() {
    const response = await fetch(
      `${
        Build.isBrowser ? process.env.API_HOST : 'http://localhost:8080'
      }/api/navigation`
    );
    this.pages = await response.json();
  }

  private renderDir(dir: Dir) {
    return (
      <ul>
        {dir.files.map((file) => {
          if ('isDir' in file) {
            return (
              <li>
                <div>{file.info.title}</div>
                {this.renderDir(file)}
              </li>
            );
          }

          return (
            <li>
              <stencil-route-link
                url={file.url}
                anchorTitle={file.title}
                anchorRole="menuitem"
              >
                {file.title}
              </stencil-route-link>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log(this.pages);

    return <Host>{this.renderDir(this.pages)}</Host>;
  }
}

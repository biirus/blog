import { Component, Host, h, State } from '@stencil/core';
import { getApiHost } from '../../utils/config';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true,
})
export class AppNav {
  @State() pages: Dir;

  async componentWillLoad() {
    const response = await fetch(`${getApiHost()}/api/navigation`);
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

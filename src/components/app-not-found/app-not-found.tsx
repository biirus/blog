import { Component, h } from '@stencil/core';
import { helmet } from '../../utils/helmet';

@Component({
  tag: 'app-not-found',
  styleUrl: 'app-not-found.css',
  shadow: false,
})
export class AppNotFound {
  render() {
    helmet({
      title: 'Page not found',
      tags: ['Ivan Burnaev', 'Blog'],
    } as FileInfo);

    return (
      <div>
        <h1>Page not found</h1>
        <video loop muted autoplay playsinline>
          <source src="/assets/404.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

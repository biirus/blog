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
        <video muted autoplay loop playsinline src="/assets/404.mp4"></video>
      </div>
    );
  }
}

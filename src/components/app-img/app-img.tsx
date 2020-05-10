import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: true,
})
export class AppImg {
  private sizes = [320, 640, 960, 1280, 1920, 2560];
  /**
   * Image source
   */
  @Prop({ reflect: true }) readonly src: string;

  private isLocalImg() {
    return /^\/assets\/.*/.test(this.src);
  }

  private getSrcSet() {
    if (!this.isLocalImg()) {
      return '';
    }

    const parts = this.src.split('.');
    const ext = parts.pop();

    return this.sizes
      .map((size) => {
        return `${parts.join('')}-${size}.${ext} ${size}w`;
      })
      .join(', \n');
  }

  render() {
    return (
      <img
        alt="Ferrari"
        src={this.src}
        srcset={this.getSrcSet()}
        // sizes="(min-width: 37.5em) 640px, 320px"
      ></img>
    );
  }
}

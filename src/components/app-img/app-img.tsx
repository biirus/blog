import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: true,
})
export class AppImg {
  private sizes = [320, 640, 960, 1280, 1920, 2560];

  @State() srcSet: string = '';

  /**
   * Image source
   */
  @Prop({ reflect: true }) readonly src: string;

  componentWillLoad() {
    if (!this.isLocalImg()) {
      this.cleanSrcSet();
    }

    const parts = this.src.split('.');
    const ext = parts.pop();

    this.srcSet = this.sizes
      .map((size) => {
        return `${parts.join('')}-${size}.${ext} ${size}w`;
      })
      .join(', \n');
  }

  private isLocalImg = () => {
    return /^\/assets\/.*/.test(this.src);
  };

  private cleanSrcSet = () => {
    this.srcSet = '';
  };

  render() {
    return (
      <img
        alt="Ferrari"
        src={this.src}
        srcset={this.srcSet}
        onError={this.cleanSrcSet}
      ></img>
    );
  }
}

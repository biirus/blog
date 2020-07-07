import { Component, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: true,
})
export class AppImg {
  private sizes = [320, 640, 960, 1280, 1920, 2560];

  @State() imgSrc: string = '';
  @State() srcSet: string = '';

  /**
   * Image source
   */
  @Prop({ reflect: true }) readonly src: string;

  /**
   * Image alt
   */
  @Prop({ reflect: true }) readonly alt: string;

  componentWillLoad() {
    if (!this.isLocalImg() || !Boolean(this.src)) {
      return;
    }

    const parts = this.src.split('.');
    const ext = parts.pop();

    const availableImages = this.sizes.map((size) => {
      return `${parts.join('')}-${size}.${ext} ${size}w`;
    });
    this.imgSrc = availableImages[0].split(' ').shift();
    this.srcSet = availableImages.join(', \n');
  }

  private isLocalImg = () => {
    return /^\/assets\/.*/.test(this.src);
  };

  render() {
    return (
      <Host>
        <img alt={this.alt} src={this.imgSrc} srcset={this.srcSet} />
      </Host>
    );
  }
}

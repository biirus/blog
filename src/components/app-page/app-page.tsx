import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "app-page",
  styleUrl: "app-page.css",
  shadow: true,
})
export class AppPage {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

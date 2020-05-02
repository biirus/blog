import { r as registerInstance, h, H as Host } from './index-564ea8d0.js';
import { g as getApiHost } from './config-03ca1e67.js';

const appNavCss = ":host{display:block}";

const AppNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        const response = await fetch(`${getApiHost()}/api/navigation`);
        this.pages = await response.json();
    }
    renderDir(dir) {
        return (h("ul", null, dir.files.map((file) => {
            if ('isDir' in file) {
                return (h("li", null, h("div", null, file.info.title), this.renderDir(file)));
            }
            return (h("li", null, h("stencil-route-link", { url: file.url, anchorTitle: file.title, anchorRole: "menuitem" }, file.title)));
        })));
    }
    render() {
        console.log(this.pages);
        return h(Host, null, this.renderDir(this.pages));
    }
};
AppNav.style = appNavCss;

export { AppNav as app_nav };

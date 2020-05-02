import { r as registerInstance, h } from './index-564ea8d0.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("h1", null, "Stencil App Starter")), h("main", null, h("app-nav", null), h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 1 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { group: "pages", url: "/:page*", component: "app-page" }))))));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };

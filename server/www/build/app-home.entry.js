import { r as registerInstance, h } from './index-564ea8d0.js';

const appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "app-home" }, h("p", null, "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ", h("a", { href: "https://stenciljs.com" }, "stenciljs.com"), " to get started."), h("h1", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam vero omnis vel. Molestias aut soluta qui voluptates quibusdam temporibus possimus ipsa tempora provident! Ex, ea ipsum amet provident quaerat pariatur saepe! Cum debitis adipisci quasi minus possimus perspiciatis enim autem delectus aliquam fuga, id necessitatibus neque cumque laborum, facilis soluta fugit dolor corrupti quo eum magnam suscipit mollitia. Reiciendis neque quaerat, pariatur eaque voluptatibus delectus esse quos quas eligendi excepturi ut voluptas, qui vel! Nesciunt dignissimos consequatur consectetur, deleniti, inventore quas aliquid, quam dolorum voluptate obcaecati accusamus! Esse, voluptatibus. Eaque quas suscipit reprehenderit blanditiis assumenda facere, nemo placeat commodi voluptatem ab quia molestias, doloremque asperiores. Iusto suscipit deleniti, dolorum fugiat voluptates quia. Quibusdam est voluptatum alias voluptatibus enim dicta magni quaerat omnis corporis, quo autem debitis blanditiis nisi doloribus eum provident vitae numquam. Beatae sunt cumque, id architecto iure odit quaerat blanditiis vel ea! Ipsam vel aut perspiciatis recusandae, officiis quas error rerum quidem? Similique ab praesentium delectus eos, error sequi reiciendis tempore animi officia optio cum voluptatibus facere laborum repellat, inventore aliquid voluptatum ratione? Blanditiis aliquid quisquam est."), h("stencil-route-link", { url: "/profile/stencil" }, h("button", null, "Profile page"))));
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };

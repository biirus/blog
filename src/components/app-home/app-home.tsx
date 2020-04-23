import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
          vero omnis vel. Molestias aut soluta qui voluptates quibusdam
          temporibus possimus ipsa tempora provident! Ex, ea ipsum amet
          provident quaerat pariatur saepe! Cum debitis adipisci quasi minus
          possimus perspiciatis enim autem delectus aliquam fuga, id
          necessitatibus neque cumque laborum, facilis soluta fugit dolor
          corrupti quo eum magnam suscipit mollitia. Reiciendis neque quaerat,
          pariatur eaque voluptatibus delectus esse quos quas eligendi excepturi
          ut voluptas, qui vel! Nesciunt dignissimos consequatur consectetur,
          deleniti, inventore quas aliquid, quam dolorum voluptate obcaecati
          accusamus! Esse, voluptatibus. Eaque quas suscipit reprehenderit
          blanditiis assumenda facere, nemo placeat commodi voluptatem ab quia
          molestias, doloremque asperiores. Iusto suscipit deleniti, dolorum
          fugiat voluptates quia. Quibusdam est voluptatum alias voluptatibus
          enim dicta magni quaerat omnis corporis, quo autem debitis blanditiis
          nisi doloribus eum provident vitae numquam. Beatae sunt cumque, id
          architecto iure odit quaerat blanditiis vel ea! Ipsam vel aut
          perspiciatis recusandae, officiis quas error rerum quidem? Similique
          ab praesentium delectus eos, error sequi reiciendis tempore animi
          officia optio cum voluptatibus facere laborum repellat, inventore
          aliquid voluptatum ratione? Blanditiis aliquid quisquam est.
        </h1>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}

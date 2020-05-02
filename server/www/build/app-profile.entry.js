import { r as registerInstance, h } from './index-564ea8d0.js';

const appProfileCss = ".app-profile{padding:10px}";

const AppProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!"), h("h4", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem voluptatum placeat qui a ullam vero autem aspernatur aliquid fugiat est magnam, ea molestias accusantium cum nemo. Aliquid quo molestias corporis libero voluptatibus officia eum harum quos numquam consectetur quisquam vero ipsa, expedita id ipsam! Doloribus eaque earum corrupti, deleniti alias, sint explicabo animi placeat odio facere aliquam commodi nobis saepe ut magnam similique sit asperiores aperiam provident? Est, saepe reprehenderit ut ipsam non neque sed ex, at asperiores eius facere ad nulla placeat veritatis blanditiis, dolorum dolor nesciunt autem! Facilis consequuntur maxime adipisci nisi officia tempora quaerat dolor illum in atque totam nesciunt saepe, minus nam magni unde repellat quia quibusdam odio modi cum necessitatibus! Aliquam, maxime? Fugiat molestiae, tempora expedita delectus dignissimos obcaecati asperiores nisi ea sapiente saepe omnis sed ipsum error dolorum sequi vero assumenda quod consequuntur sunt. Quasi cupiditate rerum nemo explicabo autem atque veritatis, modi similique delectus, maiores illo pariatur veniam, amet quos ullam obcaecati velit dolore et! Molestiae aspernatur accusantium possimus nulla dolores doloribus in beatae nisi unde consequatur? Autem molestias impedit quibusdam doloribus veritatis aperiam neque vel voluptate debitis assumenda quisquam cupiditate et porro similique maiores, velit hic rerum iure aut, fugiat asperiores. Beatae expedita, eum impedit doloremque ad iusto eius placeat doloribus corporis dolores exercitationem, mollitia laboriosam pariatur repudiandae quaerat officia veritatis excepturi laborum minima! Aliquam, sapiente iure. Iusto cupiditate facilis deserunt. Nihil reiciendis sapiente asperiores unde sunt mollitia sequi laborum corrupti, a, praesentium voluptate quos voluptates. Inventore eveniet magnam fuga fugit hic doloribus ut beatae, nam nisi necessitatibus ea impedit deleniti unde ex molestiae cupiditate illo, accusamus voluptates cum repudiandae, suscipit quis alias? Totam placeat tenetur, deserunt voluptates error commodi nemo voluptatem minus repudiandae eaque quia, magni perspiciatis! Earum impedit dolorem modi exercitationem perspiciatis harum a repudiandae et, adipisci, expedita nulla! Eligendi maiores quis consectetur voluptas temporibus distinctio, a ex impedit, voluptates doloribus quidem tempore possimus similique nesciunt iure ipsam illo repudiandae, voluptatibus nostrum? Aliquam illo qui aut placeat soluta dicta, delectus molestiae reprehenderit reiciendis facere quas id non quaerat, recusandae sed explicabo inventore necessitatibus maiores quia asperiores aliquid voluptatibus deleniti. Eligendi explicabo laudantium possimus officiis officia eum deleniti natus voluptates sapiente illo ipsam blanditiis expedita, consequuntur quae omnis! Quidem dolor quia neque voluptatem sequi reprehenderit, ex quo nisi molestiae illum autem vel sapiente aperiam quis eaque error quibusdam iste laborum similique at. Praesentium, sequi eum soluta natus nihil nostrum atque!")));
        }
    }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };

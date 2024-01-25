import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "body.svelte-1mr6hrh{background-image:var(--bg-image);background-position:center;background-size:cover}body.svelte-1mr6hrh{width:100vw;margin-left:auto;margin-right:auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-17g8xn4_START --><link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"><!-- HEAD_svelte-17g8xn4_END -->`, ""}   <body class="svelte-1mr6hrh">${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};

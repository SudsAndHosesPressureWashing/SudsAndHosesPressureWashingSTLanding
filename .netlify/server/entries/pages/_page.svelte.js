import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/Logo.kNQiBYlV.png";
const css = {
  code: ".hero.svelte-wrbx7.svelte-wrbx7{display:flex;align-items:center;text-align:center;flex-direction:row;height:100vh}.banner.svelte-wrbx7.svelte-wrbx7{backdrop-filter:blur(40px)}.hero.svelte-wrbx7 h1.svelte-wrbx7{backdrop-filter:blur(50px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero svelte-wrbx7" data-svelte-h="svelte-9irtg9"><div class="banner svelte-wrbx7"><img${add_attribute("src", logo, 0)} alt="Logo"> <h1 class="svelte-wrbx7">We&#39;re working to build you a great page. In the meantime, feel free to call
        at <a href="tel:7048809955">(704) 880-9955</a></h1></div></div>`;
});
export {
  Page as default
};

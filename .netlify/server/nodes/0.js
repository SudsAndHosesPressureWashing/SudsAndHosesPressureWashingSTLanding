

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0._0OebSHZ.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.hK4aBnVI.js"];
export const stylesheets = ["_app/immutable/assets/0.ThDb_1QN.css"];
export const fonts = [];

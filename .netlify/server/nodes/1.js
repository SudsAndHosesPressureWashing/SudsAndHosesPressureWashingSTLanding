

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Hdoc3BI9.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.hK4aBnVI.js","_app/immutable/chunks/entry.ZjwMCJ6B.js"];
export const stylesheets = [];
export const fonts = [];

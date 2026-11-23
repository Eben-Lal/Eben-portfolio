/** A link counts as provided only when it is a non-empty string. */
export const hasUrl = (url) => typeof url === "string" && url.trim() !== "";

export const isExternal = (url) => hasUrl(url) && /^https?:\/\//i.test(url);

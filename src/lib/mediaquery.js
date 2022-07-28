import watchMedia from "svelte-media";

const mediaqueries = {
  mobile: "(max-width: 768px)",
  // dark: "(prefers-color-scheme: dark)",
};

export const mq = watchMedia(mediaqueries);
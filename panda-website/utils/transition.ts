export const PANDA_WEBSITE_VARIANTS = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  }
};
export const PANDA_WEBSITE_TRANSITION_Y = {
  type: "easeIn",
  duration: 1,
};

export const genVariant = (delay: number) => {
  return {
    ...PANDA_WEBSITE_VARIANTS,
    onscreen: {
      ...PANDA_WEBSITE_VARIANTS.onscreen,
      transition: {...PANDA_WEBSITE_TRANSITION_Y, delay,}
    }
  }
}

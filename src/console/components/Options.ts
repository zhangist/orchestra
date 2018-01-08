const options = (global as any).OPTIONS || {};

// theme
const themeOptions = options.theme || {};
const theme: any = {
  size: themeOptions.size || "normal",
};

export default {
  theme,
};

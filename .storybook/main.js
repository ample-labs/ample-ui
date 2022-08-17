const { mergeConfig } = require("vite");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "themeprovider-storybook/register"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = './';
    }
    return mergeConfig(config, {
      define: {
        'process.env.FORCE_SIMILAR_INSTEAD_OF_MAP': false
      }
    });
  },
}
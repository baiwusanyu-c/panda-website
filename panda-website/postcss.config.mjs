/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {}, // 添加 autoprefixer 支持
    'postcss-px-to-viewport': { // 示例插件，按需添加
      viewportWidth: 1080,
      viewportUnit: 'vw',
      unitPrecision: 2,
      selectorBlackList: ['.ignore'],
      minPixelValue: 1
    },
    tailwindcss: {},
  },
};

export default config;

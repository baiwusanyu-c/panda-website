/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {}, // 添加 autoprefixer 支持
    tailwindcss: {},
    // 'postcss-px-to-viewport': { // 示例插件，按需添加
    //   viewportWidth: 1080,
    //   viewportUnit: 'rem',
    //   unitPrecision: 2,
    //   selectorBlackList: ['.text-', '.font-', '.tracking-', 'body'], // 排除这些类名
    //   minPixelValue: 0, // 最小像素值，0 也会被转换
    // },
  },
};

export default config;

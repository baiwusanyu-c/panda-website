import {
  genChaPandaAntdTheme,
  genThemeColors,
} from "@chapanda/style-preset/antd";
const getChaPandaAntdTheme = () => {
  const themeColors = genThemeColors().colors;
  return genChaPandaAntdTheme({
    components: {
      Segmented: {
        itemSelectedColor: themeColors["cbd-brand-5"],
      },
      Input: {
        hoverBg: themeColors["cbd-white"],
        activeBg: themeColors["cbd-white"],
      },
      InputNumber: {
        hoverBg: themeColors["cbd-white"],
        activeBg: themeColors["cbd-white"],
      },
      Mentions: {
        hoverBg: themeColors["cbd-white"],
        activeBg: themeColors["cbd-white"],
      },
      DatePicker: {
        activeBg: themeColors["cbd-white"],
      },
    },
  });
};

export const theme = getChaPandaAntdTheme();

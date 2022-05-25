
// require('antd/dist/antd.css');
// require("../styles/variables.less");
require("../styles/globals.css");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
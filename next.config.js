/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withAntdLess = require("next-plugin-antd-less");
const modifyVars = require("./constants/theme/modifyVars");


module.exports = nextTranslate(
  withAntdLess({
    // optional: you can modify antd less variables directly here
    modifyVars,
    // Or better still you can specify a path to a file
    lessVarsFilePath: "./styles/variables.less",
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},

    // Other Config Here...
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    webpack(config) {
      return config;
    },
  })
);
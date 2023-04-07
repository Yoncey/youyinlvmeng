const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: ".",
  transpileDependencies: true,
  lintOnSave: false,
  //webpack配置
  configureWebpack: {
    //关闭webpack的性能提示
    performance: {
      hints: false,
    },
  },
});

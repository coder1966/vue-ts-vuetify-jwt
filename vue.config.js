module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://localhost:5012/api", // 对应自己的接口
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

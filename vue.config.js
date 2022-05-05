module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    },
    devServer: {
      proxy: {
        '': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api': ''
          // }
        }
      }
    }
  },
};

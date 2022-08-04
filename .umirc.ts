import { defineConfig } from 'umi';
import path from 'path';
// import routes from "./config/routes";
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: routes,
  fastRefresh: {},
  // mfsu: {
  //   chunks: ['vendors', 'umi'],
  // },
  webpack5: {},
  mfsu: {},
  antd: {},
  copy: [
    { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
    { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
    { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
  ],
  define: {
    CESIUM_BASE_URL: '/', //cesium默认路径地址配置，没改好,这个地址相对于路由
  },
  // dva: {},
  // chunks: ['react', 'vendors', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 1,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           react: {
  //             chunks: 'all',
  //             name: 'react',
  //             test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //             priority: 20,
  //           },
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }: any) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
});

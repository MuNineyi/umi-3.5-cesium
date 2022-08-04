# umi-3.5-cesium
Run Cesium 1.78 with Umi 3.5

参照这种方式，是可以运行的
### 配置文件如下
可以正常启用 mfsu，但是，如果出现异常问题，最好是删除 src/.umi/.cache 文件夹，也就是清除 webpack 和 mfsu 的缓存，重新执行「pnpm run dev」，
```ts
# file .umirc.ts

import { defineConfig } from 'umi';
import path from 'path';
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  webpack5: {},
  mfsu: {},
  antd: {},
  copy: [
    { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
    { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
    { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
  ],
  define: {
    CESIUM_BASE_URL: '/',
  },
});

### 样式文件
样式文件并非使用传统的引用方式，而是使用了相对路径，总感觉不太对
```less
# file global.less
@import '~antd/es/style/themes/default.less';
@import '~antd/es/style/themes/dark';
@import '../node_modules/cesium/Source/Widgets/widgets.css';
.root {
  height: 100%;
}

```
### dist 文件夹
会在 dist 文件夹创建出三个文件夹，并把响应内容复制进去，总体来说，效果达成了
```

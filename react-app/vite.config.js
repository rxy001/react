import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
// import {nodeResolve} from '@rollup/plugin-node-resolve';

// const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // TODO: 为什么会去编译 packages/react 源码？？
    // nodeResolve({
    //   modulePaths: [path.resolve(projectRootDir, 'build/node_modules')],
    // }),
  ],
});

import { Config } from '@stencil/core';
import envPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  plugins: [envPlugin()],
  outputTargets: [
    {
      type: 'www',
      dir: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://biirus.github.io',
      prerenderConfig: './stencil-prerender.config.ts',
      copy: [{ src: '../data', dest: 'assets/data' }],
    },
  ],
};

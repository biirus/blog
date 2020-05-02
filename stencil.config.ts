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
      dir: 'server/www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://biirus.github.io',
    },
  ],
};

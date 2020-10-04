import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  staticSite: false,
  trailingSlash: true,
  hydrateOptions: () => {
    return {
      // staticComponents: ['app-page'],
    };
  },
};

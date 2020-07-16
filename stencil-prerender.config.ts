import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  staticSite: false,
  hydrateOptions: () => {
    return {
      staticComponents: ['app-page'],
    };
  },
};

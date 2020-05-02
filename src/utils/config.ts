import { Build } from '@stencil/core';

export function getApiHost() {
  if (Build.isBrowser) {
    return process.env.API_HOST;
  }

  return 'http://localhost:8080';
}

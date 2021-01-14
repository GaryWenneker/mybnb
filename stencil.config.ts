import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ip-stencil-route-listener',
  globalStyle: 'src/assets/css/styles.css',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [{ src: '_redirects' }],
  plugins: [sass({
    injectGlobalPaths: [
      'sssrc/scss/styles.scss',
    ]
  })],
};

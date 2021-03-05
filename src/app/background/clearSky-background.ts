import { Background } from './symbols';

export const clearSkyBackground: Background = {
  name: 'clearSky',
  properties: {
    background: 'url(assets/clearSky.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

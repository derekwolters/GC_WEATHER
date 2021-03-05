import { Background } from './symbols';

export const rainBackground: Background = {
  name: 'rain',
  properties: {
    background: 'url(assets/rain.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

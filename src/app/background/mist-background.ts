import { Background } from './symbols';

export const mistBackground: Background = {
  name: 'mist',
  properties: {
    background: 'url(assets/mist.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

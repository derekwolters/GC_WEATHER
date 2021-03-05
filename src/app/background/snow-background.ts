import { Background } from './symbols';

export const snowBackground: Background = {
  name: 'snow',
  properties: {
    background: 'url(assets/snow.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

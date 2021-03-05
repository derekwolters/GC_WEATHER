import { Background } from './symbols';

export const thunderstormBackground: Background = {
  name: 'thunderstorm',
  properties: {
    background: 'url(assets/thunderstorm.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

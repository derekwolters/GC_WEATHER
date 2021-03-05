import { Background } from './symbols';

export const showerRainBackground: Background = {
  name: 'showerRain',
  properties: {
    background: 'url(assets/showerRain.jpg) no-repeat center center fixed',
    height: '100vh',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  }
};

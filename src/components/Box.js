// src/components/Box.js

import Clickable from './Clickable';

export default Clickable.extend.attrs({
  position: ({ position: p }) => p || 'relative',
  width: ({ width: w }) => w || 'full',
})``;

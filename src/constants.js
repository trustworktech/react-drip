// src/constants.js

// flex alignments
export const align = {
  column: 'column',
  center: 'center',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  left: 'left',
  right: 'right',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  top: 'flex-start',
};

// api bases
export const apiBase = '/api';
export const apiEventBase = `${apiBase}/event`;
export const apiActivityBase = `${apiBase}/activity`;

// border radii
export const borderRadii = {
  n: '0',
  square: '0',
  round: '4px',
  button: '44px',
  circle: '50%',
};

// colors
export const colors = {
  black: '#000',
  darkGrey: '#777',
  // green: '#78e9c0',
  green: '#7bc96f',
  grey: '#ccc',
  haze: 'rgba(255, 255, 255, 0.7)',
  // hoverGrey: '#fafafa',
  hoverGrey: '#f2f2f2',
  lightGrey: '#f2f2f2',
  red: '#ff8080',
  transparent: 'transparent',
  white: '#fff',
  yellow: '#ffd600',
};

// font sizes
export const fontSizes = {
  n: '0',
  xs: '0.75rem',
  s: '1rem',
  m: '1.25rem',
  l: '1.5rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '2rem',
};

// font weights
export const fontWeights = {
  light: '200',
  m: '500',
  bold: '600',
};

// icon sizes
export const iconSizes = {
  s: 16,
  m: 24,
  l: 32,
};

// image sizes
export const imgSizes = {
  s: '32px',
  m: '40px',
  l: '48px',
};

// months
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// months
export const monthToNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

// const sizeFactor = { value: 2, type: 'rem' };
// sizes
export const sizes = {
  // none: 0 * sizeFactor.value) + sizeFactor.type,
  n: '0',
  xs: '0.25rem',
  s: '0.5rem',
  m: '1rem',
  l: '1.5rem',
  xl: '2rem',
  xxl: '2.5rem',
  xxxl: '3rem',
  full: '100%',
};

// weekDays
export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// widths
export const widths = {
  auto: 'auto',
  contain: '900px',
  full: '100%',
  half: '50%',
  s: '400px',
};

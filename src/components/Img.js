// src/components/Input.js

import PropTypes from 'prop-types';
import React from 'react';

import { colors, imgSizes } from '../constants';
import Clickable from './Clickable';

const ImgStyle = Clickable.extend.attrs({
  display: 'inline-flex',
  flex: '0 0 auto',
  position: ({ position: p }) => p || 'relative',
})`
  box-sizing: content-box;
  overflow: hidden;
  position: ${({ position }) => position};
  ${({ size }) => `
    height: ${imgSizes[size] || size};
    min-height: ${imgSizes[size] || size};
    min-width: ${imgSizes[size] || size};
    width: ${imgSizes[size] || size};
  `};
  img {
    ${({ backgroundColor: bc }) => bc && `background-color: ${colors[bc]}`};
    object-fit: cover;
    ${({ size }) => `
      height: ${imgSizes[size] || size};
      min-height: ${imgSizes[size] || size};
      min-width: ${imgSizes[size] || size};
      width: ${imgSizes[size] || size};
    `};
  }
`;

const Img = ({
  alt,
  size,
  src,
  ...props
}: {
  alt: string,
  size: string,
  src: string,
  props?: any, // eslint-disable-line
}) => (
  <ImgStyle backgroundColor={src ? null : 'lightGrey'} size={size} title={alt} {...props}>
    <img alt={src ? alt : ''} src={src} />
  </ImgStyle>
);

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  src: PropTypes.string,
};

Img.defaultProps = {
  size: 'm',
  src: '',
};

export default Img;

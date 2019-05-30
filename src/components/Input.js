// src/components/Input.js

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { align, borderRadii, colors, fontSizes, fontWeights, sizes, widths } from '../constants';
import { getDarkMode } from '../selectors';
import { margin, padding } from '../utils/styleUtils';

const Input = styled(({
  alignItems,
  alignSelf,
  animateHeight,
  animateWidth,
  backgroundColor,
  bodyId,
  border,
  borderRadius,
  bottom,
  children,
  click,
  color,
  column,
  completed,
  cursor,
  darkMode,
  dispatch,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  focus,
  fontSize,
  height,
    hideHeight, // eslint-disable-line
    hideWidth, // eslint-disable-line
  hover,
  inset,
  justifyContent,
  left,
  m,
  mb,
  ml,
  mr,
  mt,
  maxHeight,
  maxWidth,
  minWidth,
  noBorder,
  noOverflow,
  noTransition,
  p,
  pb,
  pl,
  pr,
  pt,
  position,
  innerRef,
  right,
  staticContext,
  textAlign,
  top,
  width,
  wrap,
  zIndex,
  ...rest
}) => <input type="text" {...rest} />).attrs({
  p: ({ p }) => p || 'm',
  textAlign: ({ textAlign: ta }) => ta || 'left',
  width: ({ width }) => width || 'auto',
})`
  background-color: ${({ backgroundColor: bc, darkMode }) =>
    colors[bc || (darkMode ? 'darkGrey' : 'lightGrey')]};
  border-radius: ${borderRadii.round};
  color: ${colors.black};
  flex: 0 1 auto;
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.m};
  ${props => margin(props)};
  min-height: ${({ mh }) => sizes[mh] || mh || '40px'};
  ${props => padding(props)};
  text-align: ${({ textAlign: ta }) => align[ta]};
  &:-webkit-autofill {
    background-color: ${colors.transparent} !important;
  }
  min-width: 50px;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`};
  width: ${({ width }) => widths[width]};
`;

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(Input);

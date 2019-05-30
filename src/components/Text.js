// src/components/Text.js

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { align, borderRadii, colors, fontSizes, fontWeights, widths } from '../constants';
import { getDarkMode } from '../selectors';
import { boxShadow, clickShadow, margin, padding, transition, truncate } from '../utils/styleUtils';

const Text = styled(({
  backgroundColor,
  borderRadius,
    boxShadow, // eslint-disable-line
  click,
  color,
  center,
  children,
  cursor,
  darkMode,
  dispatch,
  display,
  flexDirection,
  flexGrow,
  flexShrink,
  fontSize,
  fontWeight,
  indent,
  left,
  lineHeight,
  lineThrough,
  m,
  mb,
  ml,
  mr,
  mt,
  noHover,
  noOverflow,
  p,
  pb,
  pl,
  pr,
  pt,
  tabs,
  textAlign,
  width,
  ...rest
}) => <p {...rest}>{children}</p>)`
  ${({ backgroundColor: bc }) => bc && `background-color: ${colors[bc]}`};
  border-radius: ${({ borderRadius: br }) => borderRadii[br] || br || borderRadii.round};
  ${({ boxShadow: bs }) => bs && boxShadow()};
  ${({ click }) => click && clickShadow};
  color: ${({ color, darkMode }) => colors[color || (darkMode ? 'darkGrey' : 'black')]};
  ${({ cursor, onClick }) => (cursor || onClick) && 'cursor: pointer'};
  display: ${({ display: d }) => d || 'inline'};
  flex: 0 1 auto;
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  ${({ flexShrink: fs }) => fs && `flex-shrink: ${fs}`};
  font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeights[fontWeight] || 'inherit'};
  ${({ indent }) => indent && 'text-indent: 2.5rem'};
  ${({ lineHeight: lh }) => lh && `line-height: ${lh}`};
  ${({ lineThrough }) =>
    lineThrough &&
    `
    color: ${colors.darkGrey};
    text-decoration: line-through;
  `};
  ${props => margin(props)};
  ${({ mh }) => mh && `min-height: ${mh}`};
  overflow-wrap: break-word;
  ${props => padding(props)};
  text-align: ${({ textAlign: ta }) => align[ta] || 'inherit'};
  ${transition};
  width: ${({ width }) => widths[width] || width || widths.auto};
  word-wrap: break-word;
  word-break: break-word;
  ${({ noOverflow }) => noOverflow && truncate()};
`;

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(Text);

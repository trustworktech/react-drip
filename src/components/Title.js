// src/components/Title.js

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { colors, fontSizes, fontWeights, widths } from '../constants';
import { getDarkMode } from '../selectors';
import { padding, truncate } from '../utils/styleUtils';
import Clickable from './Clickable';

const Title = styled(({
  backgroundColor,
  children,
  darkMode,
  dispatch,
  flexDirection,
  flexGrow,
  flexShrink,
  fontSize,
  left,
  onClick,
  pb,
  textAlign,
  width,
  ...rest
}) =>
  onClick ? (
      <Clickable alignItems="center" onClick={onClick} {...rest}>
        {children}
      </Clickable>
  ) : (
      <h1 {...rest}>{children}</h1>
  )).attrs({
  color: ({ color: c, darkMode }) => c || (darkMode ? 'darkGrey' : 'black'),
  fontSize: ({ fontSize: fs }) => fs || 'l',
  width: ({ width: w }) => w || 'auto',
})`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
  color: ${({ color }) => colors[color]};
  flex: 0 1 auto;
  ${({ flexShrink: fs }) => fs && `flex-shrink: ${fs}`};
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  font-size: ${({ fontSize: fs }) => fontSizes[fs] || fs};
  font-weight: ${fontWeights.m};
  margin: 0;
  ${({ mh }) => mh && `min-height: ${mh}`};
  min-width: 48px;
  ${props => padding(props)};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${truncate()};
  width: ${({ width }) => widths[width]};
  a {
    color: ${colors.green} !important;
  }
`;

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(Title);

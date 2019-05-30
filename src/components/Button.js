// src/components/Button.js

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { align, borderRadii, colors, fontSizes, fontWeights, widths } from '../constants';
import { getDarkMode } from '../selectors';
import { isDesktop } from '../utils/deviceUtils';
import { buttonShadow, margin, padding, transition } from '../utils/styleUtils';

const Button = styled(({
  alignItems,
  backgroundColor,
  borderRadius,
    boxShadow, // eslint-disable-line
  button,
  children,
  darkMode,
  dispatch,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  hide,
  hover,
  href,
  justifyContent,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  maxHeight,
  minHeight,
  noHover,
  noMin,
  noShadow,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  pointer,
  s3Url,
  staticContext,
  textAlign,
  to,
  type,
  uploadedFiles,
  uploaderOptions,
  width,
  zIndex,
  ...rest
}) =>
  to ? (
      <Link href={href} to={to} {...rest}>
        {children}
      </Link>
  ) : href ? (
      <a href={href} {...rest}>
        {children}
      </a>
  ) : (
      <button type={type || 'button'} {...rest}>
        {children}
      </button>
  )).attrs({
  flex: ({ flex: f }) => f || '0 0 auto',
  p: ({ p }) => p || (isDesktop() ? 'm' : 's'),
})`
  align-items: ${({ alignItems: ai }) => align[ai] || align.center};
  ${({ alignSelf: as }) => as && `align-self: ${align[as]}`};
  background-color: ${({ backgroundColor: bc, darkMode, hide }) =>
    colors[bc || (hide ? 'transparent' : darkMode ? 'darkGrey' : 'white')]} !important;
  border-radius: ${({ borderRadius: br }) => borderRadii[br] || br || borderRadii.button};
  color: ${({ color: c }) => colors[c] || colors.black};
  cursor: ${({ hide, noHover, pointer }) =>
    (hide || noHover) && !pointer ? 'default !important' : 'pointer'};
  ${({ disabled }) => disabled && 'cursor: not-allowed; opacity: 0.2'};
  display: flex;
  ${({ flex: f }) => f && `flex: ${f}`};
  ${({ flexDirection: fd }) => fd && `flex-direction: ${align[fd]}`};
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  ${({ flexShrink: fs }) => fs && `flex-shrink: ${fs}`};
  ${({ flexWrap: fw }) => fw && `flex-wrap: ${fw}`};
  font-size: ${({ fontSize: fs }) => fontSizes[fs] || fs || fontSizes.m};
  font-weight: ${({ fontWeight: fw }) => fontWeights[fw] || fontWeights.m};
  justify-content: ${({ justifyContent: jc }) => align[jc] || align.center};
  ${props => margin(props)};
  min-width: ${isDesktop() ? '56px' : '40px'};
  ${props => padding(props)};
  ${({ textAlign: ta }) => ta && `text-align: ${ta}`};
  text-decoration: none;
  ${transition};
  ${({ width: w }) => w && `width: ${widths[w] || w}`};
  z-index: ${({ zIndex }) => zIndex || 5};
  ${({ hide, noShadow }) => !hide && !noShadow && buttonShadow};
`;

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(Button);

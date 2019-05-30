// src/compontnst/Clickable.js

import React from 'react';
import styled from 'styled-components';

import { align, borderRadii, colors, fontSizes, sizes, widths } from '../constants';
import {
  buttonShadow,
  clickShadow,
  hideHeight,
  hideWidth,
  hoverShadow,
  margin,
  padding,
} from '../utils/styleUtils';

export default styled(({
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
  focused,
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
  mx,
  my,
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
  px,
  py,
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
}) => (
    <div {...rest} ref={innerRef}>
      {children}
    </div>
)).attrs({
  cursor: ({
    button, click, cursor, hover,
  }) => button || cursor || click || hover,
  flexWrap: ({ wrap: w }) => w && 'wrap',
  role: 'button',
  tabIndex: '-1',
})`
  ${({ alignItems: ai }) => ai && `align-items: ${align[ai]}`};
  ${({ alignSelf: as }) => as && `align-self: ${align[as]}`};
  background-color: ${({ backgroundColor: bc }) => colors[bc] || bc};
  border-radius: ${({ borderRadius: br }) => borderRadii[br] || br};
  ${({ bottom: b }) => b && `bottom: ${sizes[b] || b}`};
  ${({ button }) => button && buttonShadow};
  ${({ click }) => click && clickShadow};
  color: ${({ color, darkMode }) => colors[color || (darkMode ? 'grey' : 'black')]};
  ${({ cursor }) => cursor && 'cursor: pointer'};
  display: ${({ display: d }) => d || 'flex'};
  ${({ flex: f }) => f && `flex: ${f}`};
  ${({ column: c, flexDirection: fd }) =>
    (fd || c) && `flex-direction: ${align[fd || (c && 'column')]}`};
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  ${({ flexShrink: fs }) => fs && `flex-shrink: ${fs}`};
  ${({ flexWrap: fw }) => fw && `flex-wrap: ${fw}`};
  ${({ justifyContent: jc }) => jc && `justify-content: ${align[jc]}`};
  font-size: ${({ fontSize }) => fontSizes[fontSize || 'm']};
  ${({ height: h }) => h && `height: ${sizes[h] || h}`};
  ${({ animateHeight, animateWidth }) => (animateHeight || animateWidth) && 'overflow: hidden'};
  ${({ animateHeight, maxHeight }) => animateHeight && `max-height: ${maxHeight}`};
  ${({ animateWidth, maxWidth }) => animateWidth && `max-width: ${maxWidth}`};
  ${({ hideHeight: hh }) => hh && hideHeight};
  ${({ hideWidth: hw }) => hw && hideWidth};
  ${({ hover }) => hover && hoverShadow};
  ${({ left: l }) => l && `left: ${sizes[l] || l}`};
  ${props => margin(props)};
  ${({ minWidth: mw }) => mw && `min-width: ${widths[mw] || mw}`};
  ${({ noOverflow: no }) => no && 'overflow: hidden'};
  ${props => padding(props)};
  position: ${({ position: p }) => p};
  ${({ right: r }) => r && `right: ${sizes[r] || r}`};
  text-align: ${({ textAlign: ta }) => ta || 'left'};
  text-decoration: none;
  ${({ top: t }) => t && `top: ${sizes[t] || t}`};
  ${({ width: w }) => w && `width: ${widths[w] || w}`};
  ${({ zIndex: z }) => z && `z-index: ${z}`};
`;

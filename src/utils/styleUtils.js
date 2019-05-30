// src/utils/styleUtils.js

import { align, sizes } from '../constants';

// big hover box shadow
export const bigBoxShadow = () => 'box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2)';

// regular box shadow
export const boxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1)';

export const sideBoxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1)';

// inset box shadow
export const insetBoxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1) inset';

// transition
export const transition = 'transition: box-shadow 200ms, padding 100ms, transform 200ms';

// button shadow and transition with focus and active states
export const buttonShadow = `
  ${transition};
  ${boxShadow()};
  &:hover {
    ${bigBoxShadow()};
  }
  &:active {
    ${insetBoxShadow()};
  }
  &:visited {
    box-shadow: none;
  }
`;

// hover shadow to make things look clickable while hovered
export const hoverShadow = `
  ${transition};
  box-shadow: none;
  &:hover {
    ${boxShadow()};
  }
  &:active {
    ${insetBoxShadow()};
  }
  &:visited {
    box-shadow: none;
  }
`;

// add box shadow when clicked
export const clickShadow = `
  ${transition};
  box-shadow: none;
  &:active {
    ${insetBoxShadow()};
  }
`;

// flex style helper
export const flex = ({
  alignItems: ai,
  alignSelf: as,
  flex: f,
  flexDirection: fd,
  flexGrow: fg,
  flexShrink: fs,
  flexWrap: fw,
  justifyContent: jc,
}) => `
  ${ai && `align-items: ${align[ai]}`};
  ${as && `align-self: ${align[as]}`};
  display: flex;
  ${f && `flex: ${f}`};
  ${fd && `flex-direction: ${align[fd]}`};
  ${fg && `flex-grow: ${fg}`};
  ${fs && `flex-shrink: ${fs}`};
  ${fw && `flex-wrap: ${fw}`};
  ${jc && `justify-content: ${align[jc]}`};
`;

// hide element with height
export const hideHeight = `
  min-height: 0;
  max-height: 0;
`;

// hide element with width
export const hideWidth = `
  min-width: 0;
  max-width: 0;
`;

// margin style helper
export const marginHelper = m =>
  typeof m === 'string' &&
  `margin: ${m
    .split(' ')
    .map(part => sizes[part] || part)
    .join(' ')};`;

// margin style
export const margin = ({
  m, mx, my, mb, ml, mr, mt,
}) => {
  let styles = '';
  if (m) styles += marginHelper(m);
  if (mx) {
    styles += `margin-left: ${sizes[mx] || mx};`;
    styles += `margin-right: ${sizes[mx] || mx};`;
  }
  if (my) {
    styles += `margin-bottom: ${sizes[my] || my};`;
    styles += `margin-top: ${sizes[my] || my};`;
  }
  if (mb) styles += `margin-bottom: ${sizes[mb] || mb};`;
  if (ml) styles += `margin-left: ${sizes[ml] || ml};`;
  if (mr) styles += `margin-right: ${sizes[mr] || mr};`;
  if (mt) styles += `margin-top: ${sizes[mt] || mt};`;
  return styles;
};

// padding style helper
export const paddingHelper = p =>
  typeof p === 'string' &&
  `padding: ${p
    .split(' ')
    .map(part => sizes[part] || part)
    .join(' ')};`;

// padding style
export const padding = ({
  p, px, py, pb, pl, pr, pt,
}) => {
  let styles = '';
  if (p) styles += paddingHelper(p);
  if (px) {
    styles += `padding-left: ${sizes[px] || px};`;
    styles += `padding-right: ${sizes[px] || px};`;
  }
  if (py) {
    styles += `padding-bottom: ${sizes[py] || py};`;
    styles += `padding-top: ${sizes[py] || py};`;
  }
  if (pb) styles += `padding-bottom: ${sizes[pb] || pb};`;
  if (pl) styles += `padding-left: ${sizes[pl] || pl};`;
  if (pr) styles += `padding-right: ${sizes[pr] || pr};`;
  if (pt) styles += `padding-top: ${sizes[pt] || pt};`;
  return styles;
};

// position style helper
export const position = ({
  bottom: b, left: l, position: p, right: r, top: t,
}) => `
  ${b ? `bottom: ${sizes[b] || b}` : null};
  ${l ? `left: ${sizes[l] || l}` : null};
  position: ${p};
  ${r ? `right: ${sizes[r] || r}` : null};
  ${t ? `top: ${sizes[t] || t}` : null};
`;

// truncate style
export const truncate = width =>
  `
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${width || '100%'};
`;

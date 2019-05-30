// src/components/TextArea.js

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { borderRadii, colors, fontSizes, sizes } from '../constants';
import { padding } from '../utils/styleUtils';

export default styled(({ backgroundColor, lineThrough, ...rest }) => (
  <TextareaAutosize {...rest} />
))`
  background-color: ${({ backgroundColor: bc }) =>
    bc ? colors[bc || 'lightGrey'] : 'transparent'};
  border-radius: ${borderRadii.round};
  color: ${({ color: c }) => c && colors[c]};
  display: flex;
  flex: 1 0 auto;
  font-size: ${fontSizes.m};
  ${({ indent }) => indent && 'text-indent: 2.5rem'};
  ${({ lineThrough }) =>
    lineThrough &&
    `
    color: ${colors.darkGrey};
    text-decoration: line-through;`};
  padding: ${sizes.s};
  ${props => padding(props)};
  resize: none;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &:disabled {
    color: ${({ color: c }) => colors[c || 'black']};
  }
`;

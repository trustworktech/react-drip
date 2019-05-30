// src/components/Layout/Body.js

import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { colors, widths } from '../constants';
import { getDarkMode } from '../selectors';
import { padding } from '../utils/styleUtils';
import Clickable from './Clickable';

const Container = Clickable.extend.attrs({
  flexDirection: ({ flexDirection: fd }) => fd || 'column',
  flexShrink: ({ flexShrink: fs }) => fs || '0',
  height: ({ height: h }) => h || 'auto',
  m: ({ m }) => m || '0 auto',
  width: 'full',
})`
  background-color: ${({ backgroundColor: bc }) => colors[bc]};
  max-width: ${({ width }) => widths[width || 'contain']};
  ${({ opacity }) => opacity && 'opacity: 0.5'};
  position: relative;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  max-width: ${widths.contain};
`;

const BodyStyles = styled.div`
  background-color: transparent;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  ${props => padding(props)};
`;

const Body = ({
  id, dispatch, p, ...props
}) => (
  <BodyStyles id={id} p={p}>
    <Container {...props} />
  </BodyStyles>
);

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(Body);

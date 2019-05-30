// src/components/Label.js

import React from 'react';

import { isDesktop } from '../utils/deviceUtils';
import Text from './Text';

const Label = ({ children, ...props }) => (
  <Text p={`${isDesktop() ? 'l' : 'm'} n ${isDesktop() ? 'm' : 's'}`} {...props}>
    {children}
  </Text>
);

export default Label;

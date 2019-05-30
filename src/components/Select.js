// src/components/Select.js

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { borderRadii, colors, fontSizes, fontWeights, sizes } from '../constants';
import { margin, padding } from '../utils/styleUtils';

const SelectStyle = styled.select.attrs({
  p: ({ p }) => p || 's',
  backgroundColor: ({ backgroundColor: bc }) => bc || 'hoverGrey',
})`
  background-color: ${({ backgroundColor: bc }) => colors[bc || 'lightGrey']};
  border-radius: ${borderRadii.round};
  color: ${colors.black};
  flex: 0 1 auto;
  ${({ flexGrow: fg }) => fg && `flex-grow: ${fg}`};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.m};
  ${props => margin(props)};
  min-height: ${({ mh }) => sizes[mh] || mh || '40px'};
  height: ${({ h }) => sizes[h] || h || '40px'};
  ${props => padding(props)};
  &:-webkit-autofill {
    background-color: ${colors.transparent} !important;
  }
`;

class Select extends Component {
  render() {
    const { options } = this.props;

    return (
      <SelectStyle
        innerRef={(element) => {
          this.input = element;
        }}
        {...this.props}
      >
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </SelectStyle>
    );
  }
}

Select.propTypes = {
  focus: PropTypes.bool,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  focus: false,
};

export default Select;

// src/components/Header.js

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from './Box';
import { widths } from '../constants';
import { isDesktop } from '../utils/deviceUtils';
import { boxShadow } from '../utils/styleUtils';

const HeaderStyle = Box.extend.attrs({
  backgroundColor: ({ darkMode, backgroundColor: bc }) => bc || (darkMode ? 'black' : 'white'),
  flexShrink: '0',
  p: ({ p }) => (p || isDesktop() ? 'm' : 's'),
  zIndex: ({ zIndex: z }) => z || 15,
  width: 'full',
})`
  ${({ noBorder }) => !noBorder && boxShadow()};
  z-index: ${({ zIndex }) => `${zIndex} !important`};
`;

const HeaderContainer = Box.extend.attrs({
  alignItems: 'center',
  height: 'full',
  m: '0 auto',
  width: 'full',
})`
  max-width: ${widths.contain};
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atTop: true,
    };

    (this: any).handleBodyScroll = this.handleBodyScroll.bind(this);
  }

  componentDidMount() {
    const { bodyId } = this.props;

    if (bodyId) {
      const body = document.getElementById(bodyId);
      if (body) {
        this.body = body;
        this.body.addEventListener('scroll', this.handleBodyScroll);
      }
    }
  }

  componentWillUnmount() {
    if (this.body) {
      this.body.removeEventListener('scroll', this.handleBodyScroll);
    }
  }

  body: any;

  handleBodyScroll() {
    const { atTop } = this.state;
    if (this.body && this.body.scrollTop > 0 && atTop) {
      this.setState({ atTop: false });
      return;
    }
    if (this.body && this.body.scrollTop <= 0 && !atTop) {
      this.setState({ atTop: true });
    }
  }

  render() {
    const {
      children, containerId, justifyContent, ...props
    } = this.props;
    const { atTop } = this.state;
    return (
      <HeaderStyle border={!atTop} className="header" {...props}>
        <HeaderContainer className="header-container" justifyContent={justifyContent}>
          {children}
        </HeaderContainer>
      </HeaderStyle>
    );
  }
}

Header.propTypes = {
  bodyId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  justifyContent: PropTypes.string,
};

Header.defaultProps = {
  bodyId: '',
  children: undefined,
  justifyContent: 'spaceBetween',
};

const mapStateToProps = ({ darkMode }) => ({ darkMode });

export default connect(mapStateToProps)(Header);

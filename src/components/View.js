import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { colors } from '../constants';
import { getDarkMode } from '../selectors';

const View = styled.div`
  background-color: ${({ darkMode }) => colors[darkMode ? 'black' : 'white']};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
});

export default connect(mapStateToProps)(View);

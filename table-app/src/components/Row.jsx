import React from 'react';
import styled from 'styled-components';
import TBody from './TBody';

const Row = styled.tr`
`;


const RowComponent = ({children}) => (
  <TBody>
    <Row>
      {children}
    </Row>
  </TBody>
)
export default RowComponent;
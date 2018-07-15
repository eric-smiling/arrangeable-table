import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
`;

const NestedRow = ({children}) => {
  return (
    <Row>
      {children}
    </Row>
  );
}

export default NestedRow;
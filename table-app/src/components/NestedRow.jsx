import React from 'react';
import styled from 'styled-components';

const FirstRow = styled.tr`
  &:hover,
  &:hover + tr {
    background: #eee;
  }
`;
const Row = styled.tr`
`;

const NestedRow = ({children, isFirst}) => {
  if (isFirst) {
    return (
      <FirstRow>
        {children}
      </FirstRow>
    );
  }
  return (
    <Row>
      {children}
    </Row>
  );
}

export default NestedRow;
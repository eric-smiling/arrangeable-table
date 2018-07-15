import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid gray;
  width: 100%;
`;

const TableComponent = ({children}) => (
  <Table>
    {children}
  </Table>
);

export default TableComponent;
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid gray;
  width: 100%;
`;

const TableBody = styled.tbody`
`;

const TableComponent = ({children}) => (
  <Table>
    <TableBody>
      {children}
    </TableBody>
  </Table>
);

export default TableComponent;
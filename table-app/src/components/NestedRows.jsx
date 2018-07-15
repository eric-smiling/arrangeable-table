import React from 'react';
import styled from 'styled-components';

import HeaderCell from './HeaderCell';

const NestedRows = ({children, header}) => {

  const rows = React.Children
    .toArray(children)
    .filter(child => child.type.name === 'NestedRow');

  const headerCell = (
    <HeaderCell
      rowSpan={rows.length}
    >
      {header}
    </HeaderCell>
  );

  const firstRow = rows.shift();

  const firstRowWithHeader = React.cloneElement(
    firstRow,
    firstRow.props,
    [headerCell].concat(React.Children.toArray(firstRow.props.children))
  );

  return (
    <React.Fragment>
      {firstRowWithHeader}
      {rows}
    </React.Fragment>
  );
}


export default NestedRows;
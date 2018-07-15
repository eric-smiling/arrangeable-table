import React from 'react';
import styled from 'styled-components';

// table
import Row from '../components/Row';
import Cell from '../components/Cell';
import HeaderCell from '../components/HeaderCell';

// not table
import Headline from '../components/Headline';



const HeaderRow = (props) => (
  <Row>
    <HeaderCell>
      <Headline>Our plans</Headline>
    </HeaderCell>
    <Cell>
      <Headline>Plus</Headline>
    </Cell>
    <Cell>
      <Headline>Pro</Headline>
    </Cell>
    <Cell>
      <Headline>Business</Headline>
    </Cell>
    <Cell>
      <Headline>Premium</Headline>
    </Cell>
  </Row>
);

export default HeaderRow;
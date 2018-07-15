import React from 'react';

// table
import Row from '../components/Row';
import Cell from '../components/Cell';
import HeaderCell from '../components/HeaderCell';

// not table
import Headline from '../components/Headline';

import {
  PLANS,
  PLAN_DISPLAY_NAMES,
} from '../constants';


const HeaderRow = ({plans}) => (
  <Row>
    <HeaderCell>
      <Headline>Our plans</Headline>
    </HeaderCell>
    {
      plans.map(plan => (
        <Cell>
          <Headline>
            {PLAN_DISPLAY_NAMES[plan]}
          </Headline>
        </Cell>
      ))
    }
  </Row>
);

export default HeaderRow;
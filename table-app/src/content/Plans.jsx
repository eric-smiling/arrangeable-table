import React from 'react';
import styled from 'styled-components';

import Table from '../table/Table';
import Row from '../table/Row';
import Cell from '../table/Cell';

const Plans = (props) => {

  return (
    <Table>
      <Row>
        <Cell>
          one
        </Cell>
        <Cell>
          two
        </Cell>
        <Cell>
          three
        </Cell>
      </Row>
      <Row>
        <Cell>
          four
        </Cell>
        <Cell>
          five
        </Cell>
        <Cell>
          six
        </Cell>
      </Row>
    </Table>
  );
};

Plans.propTypes = {

};

export default Plans;
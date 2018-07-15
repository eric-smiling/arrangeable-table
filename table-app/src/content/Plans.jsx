import React from 'react';
import styled from 'styled-components';

// table
import Table from '../components/Table';
import Row from '../components/Row';
import NestedRows from '../components/NestedRows';
import NestedRow from '../components/NestedRow';
import Cell from '../components/Cell';
import HeaderCell from '../components/HeaderCell';

// not table
import Headline from '../components/Headline';
import SubHeadline from '../components/SubHeadline';
import TextList from '../components/TextList';

// content
import HeaderRow from '../content/HeaderRow';
import PlayerRow from '../content/PlayerRow';
import DistributionRow from '../content/DistributionRow';
import PrivacyRow from '../content/PrivacyRow';


const Plans = (props) => {

  return (
    <Table>
      <HeaderRow />
      <PlayerRow />
      <PrivacyRow />
      <DistributionRow />
    </Table>
  );
};

Plans.propTypes = {

};

export default Plans;
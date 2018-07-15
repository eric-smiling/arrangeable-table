import React from 'react';
import PropTypes from 'prop-types';
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

// constants
import { PLANS } from '../constants';

const PlansTable = ({plans}) => (
  <Table>
    <HeaderRow
      plans={plans}
    />
    <PlayerRow
      plans={plans}
    />
    <PrivacyRow
      plans={plans}
    />
    <DistributionRow
      plans={plans}
    />
    <PrivacyRow
      plans={plans}
    />
    <PlayerRow
      plans={plans}
    />
  </Table>
);

PlansTable.propTypes = {
  plans: PropTypes.array,

  // TODO:
  // support/allow parent component to control order and presence/absence of rows
  //rowConfiguration: PropTypes.object
};

PlansTable.defaultProps = {
  plans: [
    PLANS.BASIC,
    PLANS.PLUS,
    PLANS.PRO,
    PLANS.BUSINESS,
  ],
};

export default PlansTable;
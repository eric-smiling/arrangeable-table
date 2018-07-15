import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// table
import Table from '../components/Table';

// content components
import HeaderRow from '../content/HeaderRow';
import PlayerRow from '../content/PlayerRow';
import DistributionRow from '../content/DistributionRow';
import PrivacyRow from '../content/PrivacyRow';

// constants
import { PLANS } from '../constants';

const propTypes = {
  plans: PropTypes.array,

  // TODO:
  // allow parent component to control order and presence/absence of specific content rows
  //rowConfiguration: PropTypes.object
};

// note: Parent component controls which plan types / columns are currently displayed
// by the table
const defaultProps = {
  plans: [
    PLANS.BASIC,
    PLANS.PLUS,
    PLANS.PRO,
    PLANS.BUSINESS,
  ],
};

const PlansTable = ({plans}) => (
  <Table>
    <HeaderRow
      plans={plans}
    />
    <PrivacyRow
      plans={plans}
    />
    <PlayerRow
      plans={plans}
    />
    <DistributionRow
      plans={plans}
    />
  </Table>
);

PlansTable.propTypes = propTypes;
PlansTable.defaultProps = defaultProps;

export default PlansTable;
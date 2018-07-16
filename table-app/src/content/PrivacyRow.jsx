import React from 'react';
import PropTypes from 'prop-types';

// table
import Row from '../components/Row';
import Cell from '../components/Cell';
import HeaderCell from '../components/HeaderCell';

// not table
import SubHeadline from '../components/SubHeadline';
import TextList from '../components/TextList';

// content
import UnavailableCell from './UnavailableCell';

// constants
import { PLANS } from '../constants';


const propTypes = {
  // currently displayed plans
  plans: PropTypes.array,

  // content for each plan
  itemsByPlan: PropTypes.object,
};

const defaultProps = {

  // selectively override DEFAULT values by adding entries for specific plan types
  // to mark as "not available" for a plan, set value for plan to []
  // parent components can also completely override
  itemsByPlan: {
    DEFAULT: [
      'Password protection',
      'Domain-level privacy',
      'Private link sharing',
      'Private team projects',
    ],
    [PLANS.PLUS]: [
      'Password protection',
      'Domain-level privacy',
      'Private link sharing',
    ],

    // example of "not available"
    //[PLANS.PLUS]: []
  },
};

const PrivacyRow = ({plans, itemsByPlan}) => {
  return (
    <Row>
      <HeaderCell>
        <SubHeadline>Privacy</SubHeadline>
      </HeaderCell>
      {
        plans.map(plan => {
          const items = itemsByPlan[plan] || itemsByPlan.DEFAULT;

          if (items.length) {
            return (
              <Cell>
                <TextList
                  items={items}
                />
              </Cell>
            );
          }

          return (
            <UnavailableCell />
          );
        })
      }
    </Row>
  );
};

PrivacyRow.propTypes = propTypes;
PrivacyRow.defaultProps = defaultProps;

export default PrivacyRow;

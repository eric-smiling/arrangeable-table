import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// table
import NestedRows from '../components/NestedRows';
import NestedRow from '../components/NestedRow';
import Cell from '../components/Cell';

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
  listsByPlan: PropTypes.object,
};

const defaultProps = {

  // selectively override DEFAULT values by adding entries for specific plan types
  // to mark as "not available" for a plan, set value for plan to []
  // parent components can also completely override
  listsByPlan: [
    {
      DEFAULT: [
        'Publish natively to Facebook, YouTube & Twitter',
      ],
    },
    {
      DEFAULT: [
        'Shareable video albums',
        'Embeddable playlists',
        'Portfolio sites with custom domains',
      ],
      [PLANS.BASIC]: [
        'Shareable video albums',
        'Embeddable playlists',
      ]
    },
    {
      DEFAULT: [
        'Custom cards & calls-to-action in the player',
        'Collect email addresses in the player',
        'Marketing software integrations',
      ],
      [PLANS.BASIC]: [],
      [PLANS.PLUS]: [],
    },
  ],
};

const DistributionRow = ({plans, listsByPlan}) => (
  <NestedRows
    header={
      <SubHeadline>Distribution &amp; Marketing</SubHeadline>
    }
  >
    {
      listsByPlan.map(itemsByPlan => (
        <NestedRow>
          {plans.map(plan => {
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
          })}
        </NestedRow>
      ))
    }
  </NestedRows>
);

DistributionRow.propTypes = propTypes;
DistributionRow.defaultProps = defaultProps;

export default DistributionRow;

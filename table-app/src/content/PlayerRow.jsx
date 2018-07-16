import React from 'react';
import PropTypes from 'prop-types';

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
        'Unlimited bandwidth in the Vimeo player',
        '4K & HDR support',
        'No ads before, after, or on your video',
      ],
    },
    {
      DEFAULT: [
        'Embed anywhere',
        'Customize colors & components',
        'Customize end-screens',
        'Add your logo',
        'Playback speed control',
        'Third-party player support',
      ],
      [PLANS.PLUS]: [
        'Customize video player',
        'Custom end screens',
      ],
    },
  ],
};

const PlayerRow = ({plans, listsByPlan}) => {

  return (
      <NestedRows
        header={
          <SubHeadline>Video Player</SubHeadline>
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
};

PlayerRow.propTypes = propTypes;
PlayerRow.defaultProps = defaultProps;

export default PlayerRow;

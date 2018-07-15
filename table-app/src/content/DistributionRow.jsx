import React from 'react';
import styled from 'styled-components';

// table
import NestedRows from '../components/NestedRows';
import NestedRow from '../components/NestedRow';
import Cell from '../components/Cell';

// not table
import SubHeadline from '../components/SubHeadline';
import TextList from '../components/TextList';


// DISCLAIMER: hardcoded content is repeated  here. 
// See PrivacyRow.jsx for a sample, alternative implementation.
const DistributionRow = (props) => {

  return (
    <NestedRows
      header={
        <SubHeadline>Distribution &amp; Marketing</SubHeadline>
      }
    >
      <NestedRow>
        <Cell>
          <TextList
            items={[
              'Publish natively to Facebook, YouTube & Twitter'
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Publish natively to Facebook, YouTube & Twitter'
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Publish natively to Facebook, YouTube & Twitter'
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Publish natively to Facebook, YouTube & Twitter'
            ]}
          />
        </Cell>
      </NestedRow>
      <NestedRow>
        <Cell>
          <TextList
            items={[
              'Shareable video albums',
              'Embeddable playlists',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Shareable video albums',
              'Embeddable playlists',
              'Portfolio sites with custom domains',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Shareable video albums',
              'Embeddable playlists',
              'Portfolio sites with custom domains',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Shareable video albums',
              'Embeddable playlists',
              'Portfolio sites with custom domains',
            ]}
          />
        </Cell>
      </NestedRow>
      <NestedRow>
        <Cell>
          <em>Not Included</em>
        </Cell>
        <Cell>
          <em>Not Included</em>
        </Cell>
        <Cell>
          <TextList
            items={[
              'Custom cards & calls-to-action in the player',
              'Collect email addresses in the player',
              'Marketing software integrations',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Custom cards & calls-to-action in the player',
              'Collect email addresses in the player',
              'Marketing software integrations',
            ]}
          />
        </Cell>
      </NestedRow>
    </NestedRows>
  );
};

export default DistributionRow;
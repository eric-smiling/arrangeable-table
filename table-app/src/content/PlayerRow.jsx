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
const PlayerRow = (props) => {

  return (
      <NestedRows
        header={
          <SubHeadline>Video Player</SubHeadline>
        }
      >
        <NestedRow>
          <Cell>
            <TextList
              items={[
                'Unlimited bandwidth in the Vimeo player',
                '4K & HDR support',
                'No ads before, after, or on your video',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Unlimited bandwidth in the Vimeo player',
                '4K & HDR support',
                'No ads before, after, or on your video',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Unlimited bandwidth in the Vimeo player',
                '4K & HDR support',
                'No ads before, after, or on your video',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Unlimited bandwidth in the Vimeo player',
                '4K & HDR support',
                'No ads before, after, or on your video',
              ]}
            />
          </Cell>
        </NestedRow>
        <NestedRow>
          <Cell>
            <TextList
              items={[
                'Customize video player',
                'Custom end screens',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Embed anywhere',
                'Customize colors & components',
                'Customize end-screens',
                'Add your logo',
                'Playback speed control',
                'Third-party player support',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Embed anywhere',
                'Customize colors & components',
                'Customize end-screens',
                'Add your logo',
                'Playback speed control',
                'Third-party player support',
              ]}
            />
          </Cell>
          <Cell>
            <TextList
              items={[
                'Embed anywhere',
                'Customize colors & components',
                'Customize end-screens',
                'Add your logo',
                'Playback speed control',
                'Third-party player support',
              ]}
            />
          </Cell>
        </NestedRow>
      </NestedRows>
  );
};

export default PlayerRow;
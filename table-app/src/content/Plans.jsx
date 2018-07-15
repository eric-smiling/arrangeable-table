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


const Plans = (props) => {

  return (
    <Table>
      <Row>
        <HeaderCell>
          <Headline>Our plans</Headline>
        </HeaderCell>
        <Cell>
          <Headline>Plus</Headline>
        </Cell>
        <Cell>
          <Headline>Pro</Headline>
        </Cell>
        <Cell>
          <Headline>Business</Headline>
        </Cell>
        <Cell>
          <Headline>Premium</Headline>
        </Cell>
      </Row>

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

      <Row>
        <HeaderCell>
          <SubHeadline>Privacy</SubHeadline>
        </HeaderCell>
        <Cell>
          <TextList
            items={[
              'Password protection',
              'Domain-level privacy',
              'Private link sharing',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Password protection',
              'Domain-level privacy',
              'Private link sharing',
              'Private team projects',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Password protection',
              'Domain-level privacy',
              'Private link sharing',
              'Private team projects',
            ]}
          />
        </Cell>
        <Cell>
          <TextList
            items={[
              'Password protection',
              'Domain-level privacy',
              'Private link sharing',
              'Private team projects',
            ]}
          />
        </Cell>
      </Row>
    </Table>
  );
};

Plans.propTypes = {

};

export default Plans;
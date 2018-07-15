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
    </Table>
  );
};

Plans.propTypes = {

};

export default Plans;
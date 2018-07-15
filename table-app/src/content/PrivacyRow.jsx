import React from 'react';
import styled from 'styled-components';

// table
import Row from '../components/Row';
import Cell from '../components/Cell';
import HeaderCell from '../components/HeaderCell';

// not table
import SubHeadline from '../components/SubHeadline';
import TextList from '../components/TextList';


const PrivacyRow = (props) => {

  return (
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
  );
};

export default PrivacyRow;
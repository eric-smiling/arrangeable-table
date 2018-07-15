import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
`;

const Item = styled.li`
    color: rgb(26, 46, 58);
    font-size: 14px;
    line-height: 18px;
`;

const TextList = ({items}) => (
  <List>
    {
      items.map((item, i) => (
        <Item
          key={`text-list-${i}`}
        >
          {item}
        </Item>
      ))
    }
  </List>
);

export default TextList;
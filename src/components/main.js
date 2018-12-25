import React, { Component } from 'react';
import styled from 'styled-components';
import { groupBy, forIn, intersection } from 'lodash-es';

import Block from '../components/block';

export default class Main extends Component {
  extractData = data => {
    const { filters } = this.props;
    let response = [];
    let group = groupBy(
      data.filter(({ tags }) => {
        let items = Array.from(filters);
        return !items.length || intersection(tags, items).length;
      }),
      'category'
    );
    forIn(group, (items, title) => {
      response.push(<Blocks key={title} {...{ title, items }} />);
    });
    return response;
  };

  render() {
    const {
      profile: { posts }
    } = this.props;
    return this.extractData(posts);
  }
}

const Blocks = ({ title, items }) => (
  <Wrapper>
    <h1>{title}</h1>
    {items.map(item => (
      <BlockWrapper key={item.id}>
        <Block {...item} />
      </BlockWrapper>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > h1 {
    width: 100%;
  }
`;

const BlockWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

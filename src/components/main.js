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
  <>
    <h1 className="sticky">{title}</h1>
    <Masonry brakePoints={[350, 500, 750]}>
      {items.map((item, idx) => (
        <Block {...item} />
      ))}
    </Masonry>
  </>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > h1 {
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

class Masonry extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <MasonryWrapper>
        <div className="masonry" ref="Masonry">
          {this.mapChildren().map((col, ci) => {
            return (
              <div className="column" key={ci}>
                {col.map((child, i) => {
                  return <div key={i}>{child}</div>;
                })}
              </div>
            );
          })}
        </div>
      </MasonryWrapper>
    );
  }
}

const MasonryWrapper = styled.div`
  .masonry {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    width: 100%;
    margin: auto;
  }
  .column {
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
  }
  .tile {
    margin: 4px;
  }
`;

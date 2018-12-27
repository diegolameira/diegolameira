import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Pill from '../components/pill';

export default class Block extends PureComponent {
  render() {
    const {
      id,
      title,
      subtitle,
      startDate,
      endDate,
      duration,
      description,
      tags
    } = this.props;
    return (
      <Box>
        <h2>
          <em>{`${startDate} ~ ${endDate} (${duration})`}</em>
          {title}
        </h2>
        <h3>{subtitle}</h3>
        <ReactMarkdown source={description} />
        {(tags || []).map(tag => (
          <Pill className="small" key={`box-${id}-${tag}`}>
            {tag}
          </Pill>
        ))}
      </Box>
    );
  }
}

const Box = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  margin-bottom: 4%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  & > h2 {
    font-weight: 500;
    margin: 0;
  }
  & > h3 {
    margin-top: 0.5em;
  }
`;

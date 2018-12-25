import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Pill from '../components/pill';

export default class Block extends PureComponent {
  render() {
    const {
      id,
      title,
      subtitle,
      startDate,
      endDate,
      description,
      tags
    } = this.props;
    return (
      <Box>
        <h2>
          {title} <em>{`${startDate} ~ ${endDate}`}</em>
        </h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        {(tags || []).map(tag => (
          <Pill key={`box-${id}-${tag}`}>{tag}</Pill>
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
`;

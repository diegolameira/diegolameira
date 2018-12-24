import React, { PureComponent } from 'react';
import Pill from './pill';

export default class extends PureComponent {
  render() {
    const { tags, actives, onSelect } = this.props;
    return (
      <>
        {tags.map(tag => (
          <Pill
            key={tag}
            selected={actives.includes(tag)}
            onClick={() => onSelect(tag)}
          >
            {tag}
          </Pill>
        ))}
      </>
    );
  }
}

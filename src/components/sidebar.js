import React, { Component } from 'react';
import { flatten, uniq } from 'lodash-es';

import Profilepic from './profilepic';
import Filter from '../components/filter';

export default class Sidebar extends Component {
  render() {
    const {
      profile: { description, pictureUrl, displayName, posts },
      filters,
      toggleFilter
    } = this.props;

    const tags = uniq(flatten(posts.map(i => i.tags || [])));

    return (
      <>
        <header>
          <Profilepic url={pictureUrl} />
          <h2>Hello, my name is</h2>
          <h1>{displayName}</h1>
        </header>

        <hr />

        <p>{description}</p>

        <hr />

        {!tags.length ? (
          false
        ) : (
          <>
            <h1>
              Skills <em>(select to filter)</em>
            </h1>

            <Filter
              tags={tags}
              actives={Array.from(filters)}
              onSelect={toggleFilter}
            />
          </>
        )}
      </>
    );
  }
}

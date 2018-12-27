import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DateTime from 'luxon/src/datetime';
import { distanceInWords, distanceInWordsToNow } from 'date-fns';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: new Set()
    };
  }

  toggleFilter = selected => {
    this.setState(({ filters }) => {
      const newSet = new Set(filters);
      if (newSet.has(selected)) newSet.delete(selected);
      else newSet.add(selected);
      return {
        filters: newSet
      };
    });
  };

  render() {
    const {
      props: { children },
      state: { filters },
      toggleFilter
    } = this;
    return (
      <Query query={query('5c221ae2a498830017416c75')}>
        {({ loading: isLoading, error, data }) => {
          // TODO: improve this
          if (error) {
            console.log(error);
            return <h1>Sorry, can't get my infos right now...</h1>;
          }
          const profile = parseProfile(data.profile);
          return children({ isLoading, error, profile, filters, toggleFilter });
        }}
      </Query>
    );
  }
}

const parseProfile = profile => {
  if (!profile) return {};
  const {
    picture: { url: pictureUrl },
    posts,
    name: displayName,
    ...rest
  } = profile;
  return {
    ...rest,
    displayName,
    pictureUrl,
    posts: posts.map(
      ({
        category: { title: category },
        startDate,
        endDate,
        current,
        tags,
        ...p
      }) => ({
        ...p,
        endDate: current ? 'onwards' : parseDate(endDate),
        startDate: parseDate(startDate),
        category,
        duration: calcDuration(startDate, endDate, current),

        tags: tags.map(({ title }) => title)
      })
    )
  };
};

const calcDuration = (start, end, isCurrent) =>
  isCurrent
    ? distanceInWordsToNow(new Date(start))
    : distanceInWords(new Date(start), new Date(end));

const parseDate = date =>
  DateTime.fromISO(date).toLocaleString({ month: 'long', year: 'numeric' });

const query = id => gql`
{
  profile(id: "${id}") {
    name
    description
    email
    picture {
      url
    }
    posts(sort: "startDate:desc") {
      title
      subtitle
      startDate
      endDate
      current
      description
      category {
        title
      }
      tags {
        title
      }
    }
  }
}
`;

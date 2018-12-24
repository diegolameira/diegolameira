import React, { createContext, Component } from 'react';

export const { Provider, Consumer } = createContext({
  profile: {},
  filters: new Set(),
  toggleFilter: filter => {}
});

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      profile: {},
      filters: new Set()
    };
  }

  componentDidMount() {
    fetch('./profile.json')
      .then(res => res.json())
      .then(profile => {
        console.log(profile);
        this.setState({
          isLoading: false,
          profile
        });
      });
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
      state,
      toggleFilter
    } = this;

    const value = {
      ...state,
      toggleFilter
    };
    return <Provider value={value}>{children(value)}</Provider>;
  }
}

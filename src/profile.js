import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Page from './components/page';
import Sidebar from './components/sidebar';
import Main from './components/main';

import Profile from './containers/profile';

export default class ProfilePage extends PureComponent {
  render() {
    return (
      <Profile>
        {({ isLoading, profile, filters, toggleFilter }) =>
          isLoading ? (
            <Loading />
          ) : (
            <Page sidebar={<Sidebar {...{ profile, filters, toggleFilter }} />}>
              <Main {...{ profile, filters, toggleFilter }} />
            </Page>
          )
        }
      </Profile>
    );
  }
}

const Loading = styled.h1.attrs(() => ({
  children: 'Loading...'
}))`
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;

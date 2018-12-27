import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import ProfilePage from './profile';
import LuxonSettings from 'luxon/src/settings';

import './styles.css';

LuxonSettings.defaultLocale = 'en';

const client = new ApolloClient({
  uri: 'https://resumes-api.herokuapp.com/graphql'
});

const theme = {
  primary: 'rgb(255, 150, 0)',
  secondary: 'rgb(100, 50, 190)'
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ProfilePage />
    </ThemeProvider>
  </ApolloProvider>,
  rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ProfilePage from './profile';

import './styles.css';

const client = new ApolloClient({
  uri: 'https://resumes-api.herokuapp.com/graphql'
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
    <ProfilePage />
  </ApolloProvider>,
  rootElement
);

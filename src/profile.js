import React, { PureComponent } from 'react';

import Page from './components/page';

export default class ProfilePage extends PureComponent {
  render() {
    return (
      <Page sidebar={<h1>Sidebar</h1>}>
        <h1>Diego Lameira</h1>
      </Page>
    );
  }
}

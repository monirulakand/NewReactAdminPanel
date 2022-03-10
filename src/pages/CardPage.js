import React, { Component } from 'react';
import Page from '../components/Page';

class CardPage extends Component {
  render() {
    return (
      <Page title="Room" breadcrumbs={[{ name: 'room', active: true }]}>

      </Page>
    );
  }
}

export default CardPage;

import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button} from 'framework7-react';
import * as firebase from 'firebase';



export class Logout extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    console.log('logging out');

    firebase.auth().signOut();
  }

  render () {
    return (
      <Page>
        <Navbar title="Log Out" backLink="Back" sliding />
        <ContentBlock inner>
          Bye!
        </ContentBlock>
      </Page>
    );
  }
};

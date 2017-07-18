import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button} from 'framework7-react';
import * as firebase from 'firebase';

export class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      fname: 'dirtbag jim',
      lname: '',
      email: '',
      img_url:'',
      sport: '',
      trad: '',
      boulder: '',
      home_crag: '',
      location: 'wherever the van is'
    }
  }

  componentDidMount() {

    const rootRef = firebase.database().ref();
    const userRef = rootRef.child('users').child(firebase.auth().currentUser.uid);
    userRef.on('value', snap => {
      console.log(snap)
      this.setState({
        fname: snap.child('fname').val(),
        lname: snap.child('lname').val(),
        img_url: snap.child('img_url').val(),
        sport: snap.child('sport').val(),
        trad: snap.child('trad').val(),
        boulder: snap.child('boulder').val(),
        home_crag: snap.child('home_crag').val(),
        location: snap.child('location').val()
      })
    });
  }

  render () {
    return (
      <Page>
        <Navbar title="Profile" backLink="Back" sliding />
        <ContentBlock inner>
          <img src={this.state.img_url} alt='photo' height='200' width='200'/>
          <p>{this.state.fname}</p>
          <p>{this.state.location}</p>
          <p>Home Crag: {this.state.home_crag}</p>
          <p>Sport: {this.state.sport}</p>
          <p>Trad: {this.state.trad}</p>
          <p>Boulder: {this.state.boulder}</p>
        	<Button openPopup='#edit-profile-popup'>edit</Button>
        </ContentBlock>
      </Page>
    );
  }
};

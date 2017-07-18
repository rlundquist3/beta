import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button} from 'framework7-react';
import * as firebase from 'firebase';



export class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      fname: 'Lrrrr',
      lname: '',
      email: 'lrrrr@omicronpersei8.planet',
      img_url: 'https://cdn.meme.am/cache/images/folder716/600x600/17330716/lrrrr.jpg',
      sport: '5.18+',
      trad: '5.17+',
      boulder: 'V22',
      home_crag: 'Omicron',
      location: 'Omicron Persei 8'
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

import React, {Component} from 'react';
import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';
import * as firebase from 'firebase';
import {updateProfileInfo} from '../../index'

export class EditProfile extends Component {
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

  submitBtnClicked() {
    console.log('form submitted');

    this.setState ({
      fname: (document.getElementById('edit-fname').firstChild.value ? document.getElementById('edit-fname').firstChild.value : document.getElementById('edit-fname').firstChild.placeholder),
      lname: (document.getElementById('edit-lname').firstChild.value ? document.getElementById('edit-lname').firstChild.value : document.getElementById('edit-lname').firstChild.placeholder),
      location: (document.getElementById('edit-location').firstChild.value ? document.getElementById('edit-location').firstChild.value : document.getElementById('edit-location').firstChild.placeholder),
      home_crag: (document.getElementById('edit-crag').firstChild.value ? document.getElementById('edit-crag').firstChild.value : document.getElementById('edit-crag').firstChild.placeholder),
      sport: (document.getElementById('edit-sport').firstChild.value ? document.getElementById('edit-sport').firstChild.value : document.getElementById('edit-sport').firstChild.placeholder),
      trad: (document.getElementById('edit-trad').firstChild.value ? document.getElementById('edit-trad').firstChild.value : document.getElementById('edit-trad').firstChild.placeholder),
      boulder: (document.getElementById('edit-boulder').firstChild.value ? document.getElementById('edit-boulder').firstChild.value : document.getElementById('edit-boulder').firstChild.placeholder),
    });

    const imageFile = document.getElementById('edit-picture').firstChild.files[0];

    updateProfileInfo(this.state, imageFile);
  }

  render() {
    return (
			<Page>
        <Navbar title="Edit Profile" backLink="Back" sliding />
				<List form>
					<ListItem>
						<FormLabel>first name</FormLabel>
						<FormInput id='edit-fname' name="fname" placeholder={this.state.fname} type="text" />
					</ListItem>
          <ListItem>
						<FormLabel>last name</FormLabel>
						<FormInput id='edit-lname' name="lname" placeholder={this.state.lname} type="text" />
					</ListItem>
					<ListItem>
						<FormLabel>location</FormLabel>
						<FormInput id='edit-location' name="location" type="text" placeholder={this.state.location} />
					</ListItem>
          <ListItem>
						<FormLabel>home crag</FormLabel>
						<FormInput id='edit-crag' name="home_crag" type="text" placeholder={this.state.home_crag} />
					</ListItem>
          <ListItem>
						<FormLabel>sport grade</FormLabel>
						<FormInput id='edit-sport' name="sport" type="text" placeholder={this.state.sport} />
					</ListItem>
          <ListItem>
						<FormLabel>trad grade</FormLabel>
						<FormInput id='edit-trad' name="trad" type="text" placeholder={this.state.trad} />
					</ListItem>
          <ListItem>
						<FormLabel>boulder grade</FormLabel>
						<FormInput id='edit-boulder' name="boulder" type="text" placeholder={this.state.boulder} />
					</ListItem>
          <ListItem>
						<FormLabel>profile picture</FormLabel>
						<FormInput id='edit-picture' name="picture" type="file" />
					</ListItem>
				</List>

        <Button id='profile-submit-btn' onClick={() => this.submitBtnClicked()} back>submit</Button>
			</Page>
    );
  }
};

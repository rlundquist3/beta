import React, {Component} from 'react';
import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';
import * as firebase from 'firebase';

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

    console.log('componentDidMount')

    // const rootRef = firebase.database().ref();
    // const userRef = (firebase.auth().currentUser ? firebase.auth().currentUser.uid : null);
    //
    // if (userRef) {
    //   console.log('userRef')
    //   userRef.on('value', snap => {
    //     this.setState({
    //       fname: snap.child('fname').val(),
    //       lname: snap.child('lname').val(),
    //       img_url: snap.child('img_url').val(),
    //       sport: snap.child('sport').val(),
    //       trad: snap.child('trad').val(),
    //       boulder: snap.child('boulder').val(),
    //       home_crag: snap.child('home_crag').val(),
    //       location: snap.child('location').val()
    //     })
    //   });
    // }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const rootRef = firebase.database().ref();
        const userRef = (firebase.auth().currentUser ? firebase.auth().currentUser.uid : null);

        if (userRef) {
          console.log('userRef')
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
      } else {}
    });
  }

  render() {
    return (
      <LoginScreen id="edit-profile-popup">
    		<View>
    			<Pages>
    				<Page loginScreen>
    					<LoginScreenTitle>Edit Profile</LoginScreenTitle>
    					<List form>
    						<ListItem>
    							<FormLabel>fname</FormLabel>
    							<FormInput id='edit-fname' name="fname" placeholder="Lrrrr" type="text" value={this.state.fname} />
    						</ListItem>
                <ListItem>
    							<FormLabel>lname</FormLabel>
    							<FormInput id='edit-lname' name="lname" placeholder="Ruler of the Planet Omicron Persei 8" type="text" />
    						</ListItem>
    						<ListItem>
    							<FormLabel>location</FormLabel>
    							<FormInput id='edit-location' name="location" type="text" placeholder="Omicron Persei 8" />
    						</ListItem>
                <ListItem>
    							<FormLabel>home crag</FormLabel>
    							<FormInput id='edit-crag' name="home_crag" type="text" placeholder="Super big rock" />
    						</ListItem>
                <ListItem>
    							<FormLabel>sport grade</FormLabel>
    							<FormInput id='edit-sport' name="sport" type="text" placeholder="5.19+" />
    						</ListItem>
                <ListItem>
    							<FormLabel>trad grade</FormLabel>
    							<FormInput id='edit-trad' name="trad" type="text" placeholder="5.18-" />
    						</ListItem>
                <ListItem>
    							<FormLabel>boulder grade</FormLabel>
    							<FormInput id='edit-boulder' name="boulder" type="text" placeholder="V22" />
    						</ListItem>
                <ListItem>
    							<FormLabel>profile picture</FormLabel>
    							<FormInput id='edit-picture' name="picture" type="file" />
    						</ListItem>
    					</List>
    					<List>
    						<ListButton id='profile-submit-btn' title="all done" closeLoginScreen />
                <ListButton title="Cancel" closeLoginScreen />
    					</List>
    				</Page>
    			</Pages>
    		</View>
    	</LoginScreen>
    );
  }
};

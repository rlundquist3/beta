import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button, List, Link, Card, CardHeader, CardContent, CardFooter} from 'framework7-react';
import * as firebase from 'firebase';

import {climbWithRequest} from '../../data/requests';

export class UserCard extends Component {
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

    const userRef = firebase.database().ref('users').child(this.props.uid);

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

  climbWithBtnClicked() {
    const req = climbWithRequest(firebase.auth().currentUser.uid, this.props.uid);

    console.log(req.toJSON());
  }

  render () {
    return (
      <Card>
        <CardHeader>{this.state.fname}</CardHeader>
        <CardContent>
          <img src={this.state.img_url} alt='photo' height='100' width='100'/>
          <p>{this.state.location}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => this.climbWithBtnClicked()} back>Tryna Climb?</Button>
        </CardFooter>
      </Card>
    );
  }
};

import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button, List, Link, Card, CardHeader, CardContent, CardFooter} from 'framework7-react';
import * as firebase from 'firebase';

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

    console.log('setting state for: ' + this.props.uid);
    userRef.on('value', snap => {
      console.log('state before '); console.log(this.state);
      console.log(snap.val());
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
      console.log('state after '); console.log(this.state);
    });
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
          <Link>Connect</Link>
        </CardFooter>
      </Card>
    );
  }
};

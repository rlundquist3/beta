import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button, List, Link, Card, CardHeader, ContentContent, CardFooter} from 'framework7-react';
import * as firebase from 'firebase';
import {UserCard} from './UserCard';

export class UserCardScroller extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users : {
        thisistotallyreal : {
          fname: 'dirtbag jim',
          lname: '',
          email: '',
          img_url:'',
          sport: '',
          trad: '',
          boulder: '',
          home_crag: '',
          location: 'wherever the van is'
        },
      }
    }
  }

  componentDidMount() {
    const usersRef = firebase.database().ref('users');

    usersRef.on('value', snap => {
      this.setState({
        users: snap.val()
      });
    });
  }

  render () {
    return (
      <List>
        {Object.keys(this.state.users).map(key =>
          <UserCard uid={key} />
        )}
      </List>
    );
  }
};

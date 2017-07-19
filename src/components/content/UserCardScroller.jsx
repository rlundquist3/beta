import React, {Component} from 'react';
import {Page, ContentBlock, Navbar, Button, List, Link, Card, CardHeader, ContentContent, CardFooter, Swiper, SwiperSlide} from 'framework7-react';
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
      <Swiper nextButton prevButton params={{speed:500, slidesPerView: 3, spaceBetween: 10}}>
        {Object.keys(this.state.users).map(key =>
          <SwiperSlide>
            <UserCard uid={key} />
          </SwiperSlide>
        )}
      </Swiper>
    );
  }
};

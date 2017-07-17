// for iOS Theme
/*
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
*/

// for Material Theme
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

import './css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import * as firebase from 'firebase';
import {Dom7} from 'framework7-react';
import $ from 'jquery';

var config = {
    apiKey: "AIzaSyD1G2eYVg0nqQKO7ysLLiSFG4JabiJWR3w",
    authDomain: "beta-a0eb3.firebaseapp.com",
    databaseURL: "https://beta-a0eb3.firebaseio.com",
    projectId: "beta-a0eb3",
    storageBucket: "beta-a0eb3.appspot.com",
    messagingSenderId: "39798322804"
  };
firebase.initializeApp(config);

const rootRef = firebase.database().ref();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

$('#log-in-btn').on('click', function() {
  console.log('attempting login');

  const auth = firebase.auth();
  const email = document.getElementById('log-in-email').firstChild.value
  const pass = document.getElementById('log-in-pass').firstChild.value
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

  // var provider = firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithPopup(provider).then(function(result) {
  //   var token = result.credential.accessToken;
  //   var user = result.user;
  // }).catch(function(error) {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   var email = error.email;
  //   var credential = error.credential;
  // });
});

$('#sign-up-btn').on('click', function() {
  console.log('attempting sign up');

  const auth = firebase.auth();
  const email = document.getElementById('log-in-email').firstChild.value
  const pass = document.getElementById('log-in-pass').firstChild.value
  console.log(email);
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

$('#logout-btn').on('click', function() {
  console.log('logging out');

  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in');
    console.log(user)
    $('#logout-btn').removeClass('hidden')
    document.getElementById('panel-username').setTitle(user.email);
  } else {
    console.log('not logged in');
    $('#logout-btn').addClass('hidden')
  }
});

$('#profile-submit-btn').on('click', function() {
  const userRef = rootRef.child('users').child(firebase.auth().currentUser.uid);

  const profileData = {
    name: (document.getElementById('edit-name').firstChild.value != '' ? document.getElementById('edit-name').firstChild.value : null),
    location: (document.getElementById('edit-location').firstChild.value != '' ? document.getElementById('edit-location').firstChild.value : null),
    home_crag: (document.getElementById('edit-crag').firstChild.value != '' ? document.getElementById('edit-crag').firstChild.value : null),
    sport: (document.getElementById('edit-sport').firstChild.value != '' ? document.getElementById('edit-sport').firstChild.value : null),
    trad: (document.getElementById('edit-trad').firstChild.value != '' ? document.getElementById('edit-trad').firstChild.value : null),
    boulder: (document.getElementById('edit-boulder').firstChild.value != '' ? document.getElementById('edit-boulder').firstChild.value : null),
    //TODO: edit picture
  }

  userRef.update(profileData);
});

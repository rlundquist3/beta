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
const storageRef = firebase.storage().ref();

export const getUsers = (num) => {
  const userRef = rootRef.child('users').limitToFirst(num);
  return userRef;
};

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
    $('#log-in-popup-btn').addClass('hidden')
    document.getElementById('panel-username').setTitle(user.email);
  } else {
    console.log('not logged in');
    $('#logout-btn').addClass('hidden')
    $('#log-in-popup-btn').removeClass('hidden')
  }
});

$('#profile-submit-btn').on('click', function() {
  const userRef = rootRef.child('users').child(firebase.auth().currentUser.uid);

  const profileData = {
    fname: document.getElementById('edit-fname').firstChild.value,
    lname: document.getElementById('edit-lname').firstChild.value,
    location: document.getElementById('edit-location').firstChild.value,
    home_crag: document.getElementById('edit-crag').firstChild.value,
    sport: document.getElementById('edit-sport').firstChild.value,
    trad: document.getElementById('edit-trad').firstChild.value,
    boulder: document.getElementById('edit-boulder').firstChild.value,
    // fname: (document.getElementById('edit-fname').firstChild.value != '' ? document.getElementById('edit-fname').firstChild.value : null),
    // lname: (document.getElementById('edit-lname').firstChild.value != '' ? document.getElementById('edit-lname').firstChild.value : null),
    // location: (document.getElementById('edit-location').firstChild.value != '' ? document.getElementById('edit-location').firstChild.value : null),
    // home_crag: (document.getElementById('edit-crag').firstChild.value != '' ? document.getElementById('edit-crag').firstChild.value : null),
    // sport: (document.getElementById('edit-sport').firstChild.value != '' ? document.getElementById('edit-sport').firstChild.value : null),
    // trad: (document.getElementById('edit-trad').firstChild.value != '' ? document.getElementById('edit-trad').firstChild.value : null),
    // boulder: (document.getElementById('edit-boulder').firstChild.value != '' ? document.getElementById('edit-boulder').firstChild.value : null),
  }

  userRef.update(profileData);

  //TODO: edit picture
  // File or Blob named mountains.jpg
  var file = document.getElementById('edit-picture').firstChild.files[0]

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg'
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function() {
      // Upload completed successfully, now we can get the download URL
      var img_url = uploadTask.snapshot.downloadURL;
      userRef.update({
        img_url: img_url
      });
    });
});

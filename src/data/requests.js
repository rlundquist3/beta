// for Material Theme
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../components/App';
import * as firebase from 'firebase';
import {Dom7} from 'framework7-react';
import $ from 'jquery';
import {rootRef} from '../index'

// Problem to import rootRef?
// const rootRef = firebase.database().ref();

export const climbWithRequest = (from, to) => {
  const climbWithRef = rootRef.child('climbWithRequest');

  const data = {
    from: from,
    to: to,
    status: 'new',
  };

  return climbWithRef.push(data);
}

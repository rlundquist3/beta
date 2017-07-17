import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';

import {routes} from '../routes';
import {MainViews} from './Components';

// let framework7;
// let currentRoute;
//
// export const getFramework7 = () => framework7;
// export const getCurrentRoute = () => currentRoute;

export const App = () => (

  <Framework7App routes={routes} themeType='material'>
    <Statusbar />

    <MainViews />

  </Framework7App>
);

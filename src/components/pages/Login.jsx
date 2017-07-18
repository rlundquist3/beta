import React, {Component} from 'react';
import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';
import {signup, login, logout} from '../../index'

export class Login extends Component {

  loginBtnClicked() {
    console.log('attempting login');

    const email = document.getElementById('log-in-email').firstChild.value;
    const pass = document.getElementById('log-in-pass').firstChild.value;

    login(email, pass);
  }

  signupBtnClicked() {
    console.log('attempting signup');

    const email = document.getElementById('log-in-email').firstChild.value;
    const pass = document.getElementById('log-in-pass').firstChild.value;

    signup(email, pass);
  }

  logoutBtnClicked() {
    console.log('attempting logout');

    logout();
  }

	render() {
		return (
			<Page>
				<LoginScreenTitle>Login</LoginScreenTitle>
				<List form>
					<ListItem>
						<FormLabel>email</FormLabel>
						<FormInput id='log-in-email' name="email" placeholder="lrrr@omicronpersei8.planet" type="email" />
					</ListItem>
					<ListItem>
						<FormLabel>password</FormLabel>
						<FormInput id='log-in-pass' name="password" type="password" placeholder="!i@mLrrr!" />
					</ListItem>
				</List>
				<Button id='log-in-btn' onClick={() => this.loginBtnClicked()} back>Log In</Button>
		    <Button id='sign-up-btn'onClick={() => this.signupBtnClicked()} back>Sign Up</Button>
		    <Button id='logout-btn' onClick={() => this.logoutBtnClicked()} back>Log Out</Button>
		    <Button back>Cancel</Button>
			</Page>
		);
	}
}

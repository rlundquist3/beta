import React from 'react';
import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';

export const Login = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>email</FormLabel>
							<FormInput id='log-in-email' name="email" placeholder="cool_climber@crush.com" type="email" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput id='log-in-pass' name="password" type="password" placeholder="mydogsendsharderthanyourdog" />
						</ListItem>
					</List>
					<List>
						<ListButton id='log-in-btn' title="Log In" closeLoginScreen />
            <ListButton id='sign-up-btn' title="Sign Up" closeLoginScreen />
            <ListButton id='logout-btn' title="Log Out" closeLoginScreen />
            <ListButton title="Cancel" closeLoginScreen />
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

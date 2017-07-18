import React from 'react';
import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';

export const EditProfile = () => (
	<LoginScreen id="edit-profile-popup">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Edit Profile</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>fname</FormLabel>
							<FormInput id='edit-fname' name="fname" placeholder="Lrrrr" type="text" />
						</ListItem>
            <ListItem>
							<FormLabel>lname</FormLabel>
							<FormInput id='edit-lname' name="lname" placeholder="Ruler of the Planet Omicron Persei 8" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>location</FormLabel>
							<FormInput id='edit-location' name="location" type="text" placeholder="Omicron Persei 8" />
						</ListItem>
            <ListItem>
							<FormLabel>home crag</FormLabel>
							<FormInput id='edit-crag' name="home_crag" type="text" placeholder="Super big rock" />
						</ListItem>
            <ListItem>
							<FormLabel>sport grade</FormLabel>
							<FormInput id='edit-sport' name="sport" type="text" placeholder="5.19+" />
						</ListItem>
            <ListItem>
							<FormLabel>trad grade</FormLabel>
							<FormInput id='edit-trad' name="trad" type="text" placeholder="5.18-" />
						</ListItem>
            <ListItem>
							<FormLabel>boulder grade</FormLabel>
							<FormInput id='edit-boulder' name="boulder" type="text" placeholder="V22" />
						</ListItem>
            <ListItem>
							<FormLabel>profile picture</FormLabel>
							<FormInput id='edit-picture' name="picture" type="file" />
						</ListItem>
					</List>
					<List>
						<ListButton id='profile-submit-btn' title="all done" closeLoginScreen />
            <ListButton title="Cancel" closeLoginScreen />
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

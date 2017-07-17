import React, {PropTypes} from 'react';
import $ from 'jquery';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';
import * as firebase from 'firebase';
import {Login} from './popups/Login';
import {EditProfile} from './popups/EditProfile';

export const MainViews = (props, context) => (
  <Views>
    <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
      {context.framework7AppContext.theme.ios ? (
        <Navbar>
          <NavLeft>
            <Link icon="icon-bars" openPanel="left" />
          </NavLeft>
          <NavCenter sliding>Framework7</NavCenter>
          <NavRight>
            <Link icon="icon-bars" openPanel="right"></Link>
          </NavRight>
        </Navbar>
      ) : null}
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ?
            <Navbar title="Beta">
              <NavRight>
                <Link icon="icon-bars" openPanel="right"></Link>
              </NavRight>
            </Navbar>
           : null}
           <ContentBlockTitle>Welcome to Beta</ContentBlockTitle>
           <ContentBlock inner>
             Beta is a place for climbers to connect with locals and visitors, find partners, share guidebooks and beta, and find places to stay. It can be hard to dive into a new crag, especially for newbies&mdash;let's make it easier together!
           </ContentBlock>
           <ContentBlockTitle>Find Climbers Near You</ContentBlockTitle>
           <ContentBlock inner>
             Cool map shit!
           </ContentBlock>
           <ContentBlockTitle>Find a Guidebook</ContentBlockTitle>
           <ContentBlock inner>
             I'm looking for guidebook <i>x</i>...you got it, bro?
           </ContentBlock>
        </Page>
      </Pages>
    </View>
    <Login />
    <EditProfile />
    <RightPanel />
  </Views>
);

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
	<Panel right cover>
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
      {context.framework7AppContext.theme.ios ? <Navbar id='panel-username' title=''></Navbar> : null}
			<Pages>
				<Page>
          {context.framework7AppContext.theme.material ? <Navbar id='panel-username' title=''></Navbar> : null}
					<List>
						<ListItem link="/profile/" title="Profile"></ListItem>
						<ListItem link="/account/" title="Account"></ListItem>
            <ListButton id='log-in-popup-btn' openPopup='#login-screen' title="Log In"></ListButton>
            <ListButton link="/logout/" title="Log Out"></ListButton>
					</List>

				</Page>
			</Pages>
		</View>
	</Panel>
);

RightPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

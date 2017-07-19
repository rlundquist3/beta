import React, {PropTypes} from 'react';
import $ from 'jquery';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Dom7
} from 'framework7-react';
import * as firebase from 'firebase';
import {UserCardScroller} from './content/UserCardScroller';

import {getUsers} from '../index'

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
            <Navbar title='&#946;'>
              <NavRight>
                <Link ><i className='material-icons'>notifications</i></Link>
                <Link openPanel="right"><i className='material-icons'>more_vert</i></Link>
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
           <UserCardScroller uids={getUsers(10)}/>
           <ContentBlockTitle>Find a Guidebook</ContentBlockTitle>
           <ContentBlock inner>
             I'm tryna find a guidebook for Mars...you got it, bro?
           </ContentBlock>
        </Page>
      </Pages>
    </View>
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
						<ListItem link="/profile/"><i className='material-icons'>face</i>Profile</ListItem>
						<ListItem link="/account/"><i className='material-icons'>settings</i>Account</ListItem>
          </List>
          <List>
            <ListButton link='/login/' title='Log In'></ListButton>
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

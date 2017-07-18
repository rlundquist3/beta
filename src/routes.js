import {About} from './components/pages/About';
import {SignUp} from './components/pages/SignUp';
import {Profile} from './components/pages/Profile';
import {EditProfile} from './components/pages/EditProfile';
import {Account} from './components/pages/Account';
import {Logout} from './components/pages/Logout';
import {Login} from './components/pages/Login';

export const routes = [{
  path: '/about/',
  component: About
}, {
  path: '/signup/',
  component: SignUp
}, {
  path: '/profile/',
  component: Profile
}, {
  path: '/editprofile/',
  component: EditProfile
}, {
  path: '/account/',
  component: Account
}, {
  path: '/logout/',
  component: Logout
}, {
  path: '/login/',
  component: Login
}];

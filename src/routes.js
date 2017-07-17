import {About} from './components/pages/About';
import {SignUp} from './components/pages/SignUp';
import {Profile} from './components/pages/Profile';
import {Account} from './components/pages/Account';


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
  path: '/account/',
  component: Account
}];

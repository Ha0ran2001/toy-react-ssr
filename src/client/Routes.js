import Home from './components/Home';
import UserList from './components/UserList';

const Routes = [
  {
    exact: true,
    path: '/users',
    component: Home,
  },
  {
    exact: true,
    path: '/',
    component: UserList,
  },
];

export default Routes;

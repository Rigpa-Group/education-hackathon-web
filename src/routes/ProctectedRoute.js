import {Login} from '../components/auth/Login/Login';
import UserManagement from '../containers/UserManagement/UserManagement';

export const protectedRoutes = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    authorized: ['Admin'],
    component: Login,
    visible: 'false',
  },
  {
    title: 'User Management',
    path: '/users',
    authorized: ['Admin'],
    component: UserManagement,
    visible: 'false',
  },
];

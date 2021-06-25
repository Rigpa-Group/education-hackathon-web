import {Login} from '../components/auth/Login/Login';
import UserManagement from '../containers/UserManagement/UserManagement';
import {UserProfile} from '../containers/UserManagement/Userprofile/UserProfile';

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
  {
    title: 'User Profile',
    path: '/profile',
    authorized: ['Admin'],
    component: UserProfile,
    visible: 'false',
  },
  {
    title: 'User Profile',
    path: '/profile/:id',
    authorized: ['Admin'],
    component: UserProfile,
    visible: 'false',
  },
];

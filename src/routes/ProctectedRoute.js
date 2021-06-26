import {Login} from '../components/auth/Login/Login';
import UserManagement from '../containers/UserManagement/UserManagement';
import {UserProfile} from '../containers/UserManagement/Userprofile/UserProfile';
import {Dashboard} from '../containers/Dashboard/Dashboard';
import ViewAll from '../views/landing/view-all/ViewAll';
import {ListCourse} from '../containers/Courses/ListCourse';
import {AddCourse} from '../containers/Courses/AddCourse';

export const protectedRoutes = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    authorized: ['Admin'],
    component: Dashboard,
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
  {
    title: 'Course List',
    path: '/course/list',
    authorized: ['Admin'],
    component: ListCourse,
    visible: 'false',
  },
  {
    title: 'Course Add',
    path: '/course/add',
    authorized: ['Admin'],
    component: AddCourse,
    visible: 'false',
  },
];

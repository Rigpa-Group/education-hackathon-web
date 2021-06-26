import UserManagement from '../containers/UserManagement/UserManagement';
import {UserProfile} from '../containers/UserManagement/Userprofile/UserProfile';
import {Dashboard} from '../containers/Dashboard/Dashboard';
import {ListCourse} from '../containers/Courses/ListCourse';
import {AddCourse} from '../containers/Courses/AddCourse';
import CourseDetail from '../views/landing/course-category/course-detail/CourseDetail';

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
    authorized: ['Admin', 'Tutor'],
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
    authorized: ['Admin', 'Tutor'],
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

  {
    title: 'Course Detail',
    path: '/course/detail/:id',
    authorized: ['Admin'],
    component: CourseDetail,
    visible: 'false',
  },
];

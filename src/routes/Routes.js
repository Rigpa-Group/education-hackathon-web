import {Login} from '../components/auth/Login/Login';
import {LandingComponent} from '../views/landing/LandingComponent/LandingComponent';
import CourseDetail from '../views/landing/course-category/course-detail/CourseDetail';
import ListSearchCourse from '../views/landing/course-category/ListSearchCourse/ListSearchCourse';

export const landingRoutes = [
  {
    title: 'Landing',
    path: '/',
    authorized: [''],
    component: LandingComponent,
    visible: 'false',
  },
  {
    title: 'Detail page',
    path: '/courses/detail/:id',
    authorized: [''],
    component: CourseDetail,
    visible: 'false',
  },
  {
    title: 'Search Course',
    path: '/courses/search/',
    authorized: [''],
    component: ListSearchCourse,
    visible: 'false',
  },
];

import {Login} from '../components/auth/Login/Login';

export const landingRoutes = [
  {
    title: 'About Us',
    path: '/about-us',
    authorized: [''],
    component: Login,
    visible: 'false',
  },
];

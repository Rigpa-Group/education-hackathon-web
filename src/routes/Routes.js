import {Login} from '../components/auth/Login/Login';
import {LandingComponent} from '../views/landing/LandingComponent/LandingComponent';

export const landingRoutes = [
  {
    title: 'Landing',
    path: '/',
    authorized: [''],
    component: LandingComponent,
    visible: 'false',
  },
];

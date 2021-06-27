import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import ReorderIcon from '@material-ui/icons/Reorder';

export const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    visible: true,
    authorized: ['Admin'],
    icon: <DashboardIcon/>
  },
  {
    title: 'User Managements',
    href: '/users',
    visible: true,
    authorized: ['Admin'],
    icon: <PeopleIcon/>,
  },
  {
    title: 'Courses',
    href: '/course/list',
    visible: true,
    authorized: ['Admin', 'Tutor'],
    icon: <ReorderIcon/>,
  },
  {
    title: 'Profile',
    href: '/profile',
    visible: true,
    authorized: ['Admin', 'Tutor'],
    icon: <AccountBoxIcon/>
  },
];

import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ReorderIcon from '@material-ui/icons/Reorder';
import CategoryIcon from '@material-ui/icons/Category';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

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
    href: '/courses',
    visible: true,
    authorized: ['Admin'],
    icon: <ReorderIcon/>,
  },
  {
    title: 'Profile',
    href: '/profile',
    visible: true,
    authorized: ['Admin'],
    icon: <AccountBoxIcon/>
  },
  {
    title: 'Settings',
    href: '/settings',
    visible: true,
    authorized: ['Admin'],
    icon: <SettingsIcon/>
  },
];

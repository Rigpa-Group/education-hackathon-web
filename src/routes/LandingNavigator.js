import React from 'react';
import {Route} from 'react-router-dom';
import {Home as MainLayout} from '../Views/Home/Home';

export const LandingNavigator = ({component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={props => {
        return (
          <MainLayout><Component {...props} {...rest}/></MainLayout>
        );
      }}
    />
  );
};

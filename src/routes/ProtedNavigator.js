import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {ProtectedMain as MainLayout} from '../containers/ProtectedMain/ProtectedMain';
import Authorized from './Authorized';

export const ProtectedNavigator = ({component: Component, ...rest}) => {
  //const {user} = useContext(StateContext);
  const user = {authenticated: true}
  return (
    <Route
      {...rest}
      render={props => {
        return user?.authenticated ? (
          <MainLayout><Authorized Component={Component}  {...rest}/></MainLayout>
        ) : (
          <Redirect exact
                    to={{pathname: '/login', state: {from: props.location}}}
          />
        );
      }
      }
    />
  );
};

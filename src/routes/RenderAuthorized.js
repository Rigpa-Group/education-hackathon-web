import React, {useContext} from 'react';
import {StateContext} from '../store/AppContext';

const RenderAuthorized = ({Component, authorized = [], ...props}) => {
  const {user: {role_ids}} = useContext(StateContext);
  const isAuthorized = authorized.some((value => role_ids?.map(role => role?.name).includes(value)));
  return (isAuthorized ? <>{props.children}</> : <></>);
};
export default RenderAuthorized;

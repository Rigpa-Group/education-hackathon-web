import React from 'react';

const Authorized = ({Component, authorized = [], ...props}) => {
  //const {user} = useContext(StateContext);
  return <Component {...props}/>;
  /*return (isAuthorized(roles, authorized) || props.skip ?
    <Component {...props}/> : window.location.href = '/forbidden');*/
};
export default Authorized;

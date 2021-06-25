import React, {useContext} from 'react';
import {StateContext} from '../store';
import {fetchIncludedObjectList} from '../shared/functions/IncludedBinding';

const RenderAuthorized = ({Component, authorized = [], ...props}) => {
  const {user} = useContext(StateContext);
  const dataList = user?.data?.relationships?.roles?.data;
  const roles = fetchIncludedObjectList(dataList, user?.included);
  const isAuthorized = authorized.some((value => roles?.map(role => role?.attributes?.name).includes(value)));
  return (isAuthorized ? <>{props.children}</> : <></>);
};
export default RenderAuthorized;

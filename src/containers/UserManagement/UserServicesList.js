import {usersApi} from '../../services/UserServices';

export const fetchUsers = (params) => {
  return usersApi('get', null, params);
};

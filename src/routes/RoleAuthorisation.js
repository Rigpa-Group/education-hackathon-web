export const isAuthorized = (roles = [], authorized = []) => {
  return authorized.some((value => roles.map(role => role?.name).includes(value)));
};

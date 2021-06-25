export const isAuthorized = (roles = [], authorized = []) => {
  return authorized.some((value => roles.map(role => role?.attributes?.name).includes(value)));
};

export const truncate = (str, length) => {
  return str?.length > length ? str?.substring(0, length) + '...' : str;
};

export const avatarTruncate = (str, length) => {
  return str?.length > length ? str?.substring(0, length) + '' : str;
};

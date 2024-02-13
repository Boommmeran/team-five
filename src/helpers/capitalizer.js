export const capitalizer = str => {
  return str === 'without'
    ? `${str} priority`.charAt(0).toUpperCase() + str.slice(1)
    : str.charAt(0).toUpperCase() + str.slice(1);
};

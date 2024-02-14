export const capitalizer = str => {
  const text = str === 'without' ? `${str} priority` : str;
  return text.charAt(0).toUpperCase() + text.slice(1);  
};

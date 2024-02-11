import React, { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  const handleClick = evnt => {
    if (ref.current && !ref.current.contains(evnt.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

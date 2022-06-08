import { useEffect } from 'react';
import { useState } from 'react';

export const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia('(max-width: 40rem)');
      setMatch(matches);
    };
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

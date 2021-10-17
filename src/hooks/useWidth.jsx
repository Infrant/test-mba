import { useState, useEffect } from 'react';

const getWindowWidth = () => document.documentElement.clientWidth;

const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => setWindowWidth(getWindowWidth());

    window.addEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWidth;

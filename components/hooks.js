import { useState, useEffect } from 'react';

export const useWindowTop = () => {
    const [showBanner, setShowBanner] = useState(true);
    useEffect(() => {
      window.onscroll = () => {
        if (window.pageYOffset < 10) {
          console.log('at top and whats banner', showBanner);
          setShowBanner(true)
        } else {
          setShowBanner(false)
        }
      }
      return () => (window.onscroll = null);
    });
    return showBanner;
}

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width = 0, innerHeight: height = 0 } = window || {};
    return {
      width,
      height
    };
  } else {
    return { width: 100, height: 100 }
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

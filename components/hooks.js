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
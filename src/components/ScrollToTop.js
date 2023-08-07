import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const top = 0;
    window.scrollTo({top, behavior: 'smooth'})
  }, [pathname]);
}

export default ScrollToTop;
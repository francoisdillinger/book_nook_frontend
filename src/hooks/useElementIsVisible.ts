import { useState, useEffect, RefObject } from 'react';

function useElementIsVisible(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    },
    { threshold: 1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default useElementIsVisible;

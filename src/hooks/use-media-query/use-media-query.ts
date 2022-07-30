import { useEffect, useState } from 'react';

export default function useMediaQuery(width: number) {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    function updateTarget(e: MediaQueryListEvent) {
      setTargetReached(e.matches);
    }

    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width]);

  return targetReached;
}

import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import WrapperContext from './WrapperContext';

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(WrapperContext);

  const scrollY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  // Informa o progresso no console
  useEffect(() => {
    scrollY.onChange(scrollY => {
      console.log({ scrollY });
    });

    scrollProgress.onChange(scrollProgress => {
      console.log({ scrollProgress });
    });
  }, [scrollY, scrollProgress]);

  useEffect(() => {
    if (wrapperRef.current) {
      const updateScrollValue = () => {
        if (wrapperRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = wrapperRef.current;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop);
          scrollProgress.set(scrollTop / fullScroll);
        }
      };
      wrapperRef.current.addEventListener('scroll', updateScrollValue);

      return () =>
        wrapperRef.current?.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY, scrollProgress, wrapperRef]);

  return { scrollY, scrollProgress };
}

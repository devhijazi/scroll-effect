import { Container } from './styles';

import useWrapperScroll from '../useWrapperScroll';

import { sectionModel } from '../WrapperContext';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useTransform } from 'framer-motion';

interface Props {
  section: sectionModel;
  children: any;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>;

export const WrapperOverlay = ({ children, section }: Props): JSX.Element => {
  const { scrollY } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: section.sectionRef.current?.offsetTop,
      offsetHeight: section.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [section.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions(),
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const sectionScrollProgress = useTransform(
    scrollY,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight,
  );

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, 0.05, 0.05, 0.42],
    [0, 1, 1, 0],
  );

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none',
  );

  // console.log(section.sectionRef);

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
};

export default WrapperOverlay;

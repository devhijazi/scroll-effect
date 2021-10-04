import { Container } from './styles';
import useSection from '../useSection';
import { useEffect, useRef } from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  wrapperName: string;
  overlayNode: React.ReactNode;
}

export const WrapperSection = ({
  wrapperName,
  overlayNode,
  children,
  ...props
}: Props): JSX.Element => {
  const { registerSection } = useSection(wrapperName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection({
        wrapperName,
        overlayNode,
        sectionRef,
      });
    }
  }, []);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default WrapperSection;

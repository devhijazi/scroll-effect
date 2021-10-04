import { useTransform } from 'framer-motion';
import useWrapperScroll from '../useWrapperScroll';
import { Container, Header, Hamburger, Footer } from './styles';

export const UniqueOverlay = (): JSX.Element => {
  const { scrollProgress } = useWrapperScroll();

  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <h1>DHZ</h1>
        <Hamburger />
      </Header>

      <Footer style={{ opacity }}>
        <span>Todos os direitos reservados</span>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;

import { Container, Header, Buttons } from './styles';

interface Props {
  label: string;
  description: string;
}

export const DefaultOverlayContent = ({
  label,
  description,
}: Props): JSX.Element => {
  return (
    <Container>
      <Header>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Header>

      <Buttons>
        <button type="button">Continuar...</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;

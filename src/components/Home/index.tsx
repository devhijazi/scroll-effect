import { Container, Spacer } from './styles';
import { DefaultOverlayContent } from '../DefaultOverlayContent';
import { Wrapper } from '../Wrapper/Default';
import { WrapperSection } from '../Wrapper/WrapperSection';

import { UniqueOverlay } from '../Wrapper/UniqueOverlay';

export const Home = (): JSX.Element => (
  <Container>
    <Wrapper>
      <div>
        {[
          'Gabriel Hijazi',
          'Sobre Mim',
          'Meu Trabalho',
          'Projetos',
          'Contato',
        ].map(wrapperName => (
          <WrapperSection
            key={wrapperName}
            className="colored"
            wrapperName={wrapperName}
            overlayNode={
              <DefaultOverlayContent
                label={wrapperName}
                description="Fullstack Developer"
              />
            }
          />
        ))}
      </div>
      <Spacer />
      <UniqueOverlay />
    </Wrapper>
  </Container>
);

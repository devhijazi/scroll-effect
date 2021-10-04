import { useCallback, useRef, useState } from 'react';
import { Container, OverlaysRoot } from './styles';

import WrapperOverlay from '../WrapperOverlay';
import WrapperContext, { sectionModel } from '../WrapperContext';

export const Wrapper = ({ children }: any): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredSection, setRegisteredSection] = useState<sectionModel[]>(
    [],
  );

  const registerSection = useCallback((section: sectionModel) => {
    setRegisteredSection(state => [...state, section]);
  }, []);

  const unregisterSection = useCallback((wrapperName: string) => {
    setRegisteredSection(state =>
      state.filter(section => section.wrapperName !== wrapperName),
    );
  }, []);

  const getSectionByName = useCallback(
    (wrapperName: string) => {
      return (
        registeredSection.find(item => item.wrapperName === wrapperName) || null
      );
    },
    [registeredSection],
  );

  return (
    <WrapperContext.Provider
      value={{
        wrapperRef,
        registeredSection,
        registerSection,
        unregisterSection,
        getSectionByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredSection.map(item => (
            <WrapperOverlay key={item.wrapperName} section={item}>
              {item.overlayNode}
            </WrapperOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </WrapperContext.Provider>
  );
};

export default Wrapper;

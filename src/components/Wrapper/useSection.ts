import { useCallback, useContext, useEffect } from 'react';
import WrapperContext from './WrapperContext';

export default function useSection(wrapperName: string) {
  const { registerSection, unregisterSection, getSectionByName } =
    useContext(WrapperContext);

  useEffect(() => {
    return () => unregisterSection(wrapperName);
  }, [wrapperName, unregisterSection]);

  const getSection = useCallback(
    () => getSectionByName(wrapperName),
    [getSectionByName, wrapperName],
  );

  return { registerSection, getSection };
}

import React, { createContext } from 'react';

export interface sectionModel {
  wrapperName: string;
  overlayNode: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}
interface WrapperContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredSection: sectionModel[];

  registerSection: (section: sectionModel) => void;
  unregisterSection: (wrapperName: string) => void;
  getSectionByName: (wrapperName: string) => sectionModel | null;
}
export default createContext<WrapperContext>({} as WrapperContext);

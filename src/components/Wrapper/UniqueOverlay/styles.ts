import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BurgerSVG } from './IconSVG';

export const Container = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  min-height: 52px;
`;

export const Logo = styled.div``;

export const Hamburger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  padding-right: 5px;
`;

export const Footer = styled(motion.footer)`
  position: fixed;

  bottom: 0;

  left: 0;
  right: 0;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;
  }
`;

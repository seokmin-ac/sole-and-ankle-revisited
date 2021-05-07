/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <IconButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </IconButton>
        <VerticalAlignment />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <VerticalAlignment>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </VerticalAlignment>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 75px;
  background-color: ${COLORS.white};

  & a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const IconButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
  background: none;
  border: none;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${22 / 16}rem;
  margin-left: 32px;
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;

  & > a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const VerticalAlignment = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;
  margin: auto auto 32px 32px;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
`;

export default MobileMenu;

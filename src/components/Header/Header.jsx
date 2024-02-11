import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useTheme } from 'hooks/useTheme';
import {
  Container,
  ThemeContainer,
  Theme,
  AddBtn,
  IconWrap,
  Navigation,
  NavigationList,
  NavigationItem,
} from './Header.styled';
import { Icon } from 'components/Icon';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  const { theme, setTheme } = useTheme();

  const handleLightTheme = () => {
    setTheme('light');
  };

  const handleDarkTheme = () => {
    setTheme('dark');
  };

  const handleVioletTheme = () => {
    setTheme('violet');
  };

  return (
    <div>
      <Container>
        <ThemeContainer>
          <AddBtn type="button" onClick={() => setOpen(!isOpen)}>
            <Theme>
              <h4>Theme</h4>
            </Theme>
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
          </AddBtn>
          {isOpen && (
            <Navigation isOpen={isOpen} ref={menuRef}>
              <NavigationList>
                <NavigationItem onClick={handleLightTheme}>
                  Light
                </NavigationItem>
                <NavigationItem onClick={handleDarkTheme}>Dark</NavigationItem>
                <NavigationItem onClick={handleVioletTheme}>
                  Violet
                </NavigationItem>
              </NavigationList>
            </Navigation>
          )}
        </ThemeContainer>
        <UserInfo />
      </Container>
    </div>
  );
};

import { UserInfo } from 'components/UserInfo';
import { MenuBtn, Wrap } from './Header.styled';
import Modal from 'react-modal';
import { useRef, useState } from 'react';
import { Sidebar } from 'components/SideBar';
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

const customStyles = {
  content: {
    inset: 0,
    width: 'fit-content',
    height: 'fit-content',
    boxShadow: '0px 4px 16px 0px #1616160D',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

export const Header = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <Container>
      <Wrap>
        <MenuBtn type="button" onClick={openMenu}>
          MENU
        </MenuBtn>
        <Modal
          isOpen={isMenuOpen}
          onRequestClose={closeMenu}
          style={customStyles}
          contentLabel="Sidebar"
        >
          <Sidebar />
        </Modal>
      </Wrap>
      <ThemeContainer>
        <AddBtn type="button" onClick={() => console.log('fdsga')}>
          <Theme>
            <h4>Theme</h4>
          </Theme>
          <IconWrap>
            <Icon name="plus" />
          </IconWrap>{' '}
        </AddBtn>
        {false && (
          <Navigation isOpen={() => console.log('fdsga')} ref={menuRef}>
            <NavigationList>
              <NavigationItem onClick={() => console.log('fdsga')}>
                Light
              </NavigationItem>
              <NavigationItem onClick={() => console.log('fdsga')}>
                Dark
              </NavigationItem>
              <NavigationItem onClick={() => console.log('fdsga')}>
                Violet
              </NavigationItem>
            </NavigationList>
          </Navigation>
        )}
      </ThemeContainer>
      <UserInfo />
    </Container>
  );
};

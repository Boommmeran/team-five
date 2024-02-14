import { UserInfo } from 'components/UserInfo';
import Modal from 'react-modal';
import { useState } from 'react';
import { Sidebar } from 'components/SideBar';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Icon } from 'components/Icon';
import { scrollSwitcher } from 'helpers/scrollSwitcher';

import {
  HeaderStyled,
  HeaderWrapper,
  MenuBtn,
  customStylesForModal,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
    // scrollSwitcher(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
    // scrollSwitcher(false);
  };

  return (
    <HeaderStyled>
      <MenuBtn type="button" onClick={openMenu}>
        <Icon name="menu" stroke="var(--secondaryTextColor)" />
      </MenuBtn>

      <HeaderWrapper>
        <ThemeSwitcher />
        <UserInfo />
      </HeaderWrapper>
      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        style={customStylesForModal}
        contentLabel="Sidebar"
      >
        <Sidebar />
      </Modal>
    </HeaderStyled>
  );
};

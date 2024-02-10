import { UserInfo } from 'components/UserInfo/UserInfo';
import { MenuBtn, Wrap } from './Header.styled';
import Modal from 'react-modal';
import { useState } from 'react';
import { Sidebar } from 'components/SideBar';

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

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <Wrap>
      <MenuBtn type="button" onClick={openMenu}>
        MENU
      </MenuBtn>
      <UserInfo />
      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        contentLabel="Sidebar"
      >
        <Sidebar />
      </Modal>
    </Wrap>
  );
};

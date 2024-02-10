import { Container, Name, Avatar, Button } from './UserInfo.styled';
import { EditProfile } from 'components/EditProfile';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

import { useAuth } from 'hooks';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

Modal.setAppElement('#root');

export const UserInfo = () => {
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Name>{user.name}</Name>
      <Avatar src="" alt="image user" onClick={openModal} />
      <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Modal">
        <EditProfile />
        <Button onClick={closeModal}>
          <Icon name="close" stroke="var(--primaryTextColor)" />
        </Button>
      </Modal>
    </Container>
  );
};

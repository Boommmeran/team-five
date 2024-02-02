import {
  Container,
  Name,
    Avatar,
  Button,
} from '../../components/UserInfo/UserInfo.styled';
import { EditProfile } from '../EditProfile/EditProfile';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',

  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

Modal.setAppElement('#root');

export const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Name>Name</Name>
      <Avatar src="" alt="avatar" onClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        contentLabel="Modal"
      >
              <EditProfile />
              <Button onClick={closeModal}>X</Button>
      </Modal>
    </Container>
  );
};

import { Container, Name, Avatar, Button, ButtonSvg } from './UserInfo.styled';
import { EditProfile } from 'components/EditProfile';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

import { useAuth } from 'hooks';

const cloudinaryBaseURL =
  'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/';

export const UserInfo = () => {
  const { user } = useAuth();
  const { showImage } = useAuth();

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
      <ButtonSvg onClick={openModal}>
        {showImage ? (
          <Avatar
            src={cloudinaryBaseURL + user.avatarURL}
            width="32"
            height="32"
            alt="user photo"
            onClick={openModal}
          />
        ) : (
          <Icon name="user" width="32px" height="32px" />
        )}
      </ButtonSvg>

      <Modal
        isOpen={isModalOpen}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Modal"
        onRequestClose={closeModal}
      >
        <EditProfile closeModal={closeModal} />
        <Button onClick={closeModal}>
          <Icon name="close" stroke="var(--secondaryTextColor)" />
        </Button>
      </Modal>
    </Container>
  );
};

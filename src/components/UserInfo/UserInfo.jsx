import { Container, Name, Avatar, Button, ButtonSvg } from './UserInfo.styled';
import { EditProfile } from 'components/EditProfile';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

import { useAuth } from 'hooks';

const cloudinaryBaseURL =
  'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/';
// const avatarURL = 'pictures/user-1x.webp';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

export const UserInfo = () => {
  const { user } = useAuth();
  const { showSvg } = useAuth();
  const { showImage } = useAuth();
console.log(showSvg)
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
      {showSvg && (
        <ButtonSvg onClick={openModal}>
          <Icon
          name="user"
          fill="var(--secondaryBgColor)"
          stroke="red"
          width="32px"
          height="32px"
          
        />
        </ButtonSvg>
        
      )} 

      {showImage && (
        <Avatar
          src={cloudinaryBaseURL + user.avatarURL}
          width="32"
          height="32"
          alt="user photo"
          onClick={openModal}
        />
      )}
       {/* <Avatar
          src={cloudinaryBaseURL + user.avatarURL}
          width="32"
          height="32"
          alt="user photo"
          onClick={openModal}
        /> */}

      <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Modal">
        <EditProfile />
        <Button onClick={closeModal}>
          <Icon name="close" stroke="var(--primaryTextColor)" />
        </Button>
      </Modal>
    </Container>
  );
};

import {
  Container,
  Name,
  Avatar,
  Button,
} from '../../components/UserInfo/UserInfo.styled';
import { EditProfile } from '../EditProfile/EditProfile';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
// import { updateAvatar } from 'redux/auth/authOperation';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
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
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

//   useEffect(() => {
//     dispatch(updateAvatar());
  
// }, [dispatch])

  return (
    <Container>
      <Name>{user.name}</Name>
      <Avatar src="" alt="image user" onClick={openModal} />
      <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Modal">
        <EditProfile />
        <Button onClick={closeModal}>X</Button>
      </Modal>
    </Container>
  );
};

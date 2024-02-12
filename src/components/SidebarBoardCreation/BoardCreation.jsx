import { useState } from "react";
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { BoardCreatingModal } from 'components/BoardCreatingModal';
import {
  BoardCreationBlock,
  BtnCreate,
  customStylesForModal,
} from './BoardCreation.styled';


export const BoardCreation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BoardCreationBlock>
      <p>
        Create a<br />
        new board
      </p>
      <BtnCreate type="button" onClick={openModal}>
        <Icon name="plus" width="20" height="20" />
      </BtnCreate>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStylesForModal}
        contentLabel="Creation board modal"
      >
        <BoardCreatingModal
          onClose={closeModal}
          title="New board"
          btnText="Create"
        />
      </Modal>
    </BoardCreationBlock>
  );
};
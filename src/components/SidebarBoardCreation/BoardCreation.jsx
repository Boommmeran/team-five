import { useState } from "react";
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import {
  BoardCreationBlock,
  BtnCreate,
  BoardText,
} from './BoardCreation.styled';
import { BoardCreatingModal } from "components/BoardCreatingModal";


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
      <BoardText>
        Create a{' '}new board
      </BoardText>
      <BtnCreate type="button" onClick={openModal}>
        <Icon name="plus" width="20" height="20" />
      </BtnCreate>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
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
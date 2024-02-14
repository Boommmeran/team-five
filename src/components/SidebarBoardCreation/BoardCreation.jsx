import { useState } from "react";
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { BoardCreationBlock, BtnCreate } from "./BoardCreation.styled";
import { BoardCreatingModal } from "components/BoardCreatingModal";

const customStyles = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

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
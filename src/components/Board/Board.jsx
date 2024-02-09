import { Column } from 'components/Column';
import { IconWrap, AddBtn, Wrap } from './Board.styled';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import { EditColumnModal } from 'components/EditColumnModal/EditColumnModal';

export const Board = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Wrap>
      <ul>
        <li>
          <Column />
        </li>
      </ul>
      <AddBtn type="button" onClick={openModal}>
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another column
      </AddBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <EditColumnModal
          title={'Add column'}
          onClose={closeModal}
          reqFunc={value => console.log(value)}
        />
      </Modal>
    </Wrap>
  );
};

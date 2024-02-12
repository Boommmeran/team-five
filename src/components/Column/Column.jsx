import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import Card from 'components/Card/Card';
import { AddBtn, CardList, IconWrap } from './Column.styled';
import { EditColumnModal } from 'components/EditColumnModal/EditColumnModal';
import AddCardModal from 'components/AddCardModal/AddCardModal';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ColumnHead } from 'components/ColumnHead/ColumnHead';

export const Column = ({ columnId, title }) => {
  const [modalColumnIsOpen, setmodalColumnIsOpen] = useState(false);
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
  const { cards } = useSelector(state => state.cards);
  const filtredCards = cards; //?.filter(({ column: { _id } }) => _id === columnId);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 4px 16px 0px #1616160D',
      padding: 0,
    },
    overlay: {
      background: 'rgba(0,0,0,0.5)',
    },
  };

  const openColumnModal = () => {
    setmodalColumnIsOpen(true);
  };

  const closeColumnModal = () => {
    setmodalColumnIsOpen(false);
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  return (
    <>
      <ColumnHead
        title={title}
        openModal={openColumnModal}
        columnId={columnId}
      />

      <CardList>
        {filtredCards.map(card => (
          <Card key={nanoid()} card={card} />
        ))}
      </CardList>

      <AddBtn type="button" onClick={openCardModal}>
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another card
      </AddBtn>
      <Modal
        isOpen={modalCardIsOpen}
        onRequestClose={closeCardModal}
        style={customStyles}
        contentLabel="Card Add Modal"
        ariaHideApp={false}
      >
        <AddCardModal
          columnId={columnId}
          title={'Add card'}
          btnText={'Add'}
          onClose={closeCardModal}
        />
      </Modal>
      <Modal
        isOpen={modalColumnIsOpen}
        onRequestClose={closeColumnModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <EditColumnModal
          title={'Edit column'}
          onClose={closeColumnModal}
          reqFunc={value => console.log(value)}
        />
      </Modal>
    </>
  );
};

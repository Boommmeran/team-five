import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import Card from 'components/Card/Card';
import { AddBtn, CardList, IconWrap, customStyles } from './Column.styled';
import AddCardModal from 'components/AddCardModal/AddCardModal';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ColumnHead } from 'components/ColumnHead';
import { useSearchParams } from 'react-router-dom';

export const Column = ({ columnId, title }) => {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
  const { cards } = useSelector(state => state.cards);
  const [searchParams] = useSearchParams();
  const priority = searchParams.get('priority');

  let filtredCards = cards?.filter(({ column: { _id } }) => _id === columnId);

  if (priority) {
    filtredCards = filtredCards?.filter(card => card.priority === priority)
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  return (
    <>
      <ColumnHead title={title} columnId={columnId} />
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
    </>
  );
};

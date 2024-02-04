import React from 'react';
import Modal from 'react-modal';
import FormAddCard from '../FormAddCard';
import { ModalBody } from './AddCardModal.styled.jsx';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// const exemplCards = [
//   {
//     id: 'id-1',
//     title: 'First Card',
//     text: 'My first Card',
//     priority: 'without',
//     deadline: 'Today, March 8',
//     owner: '',
//   },
// ];

Modal.setAppElement('#root');

export default function AddCardModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // const [cards, setCards] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('cards')) ?? exemplCard;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  // const addCards = newCards => {
  
  //   return setCards(prevState => [
  //     ...prevState,
  //     { ...newCards, id: nanoid() },
  //   ]);
  // };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add another card</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalBody>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add card</h2>
          <button onClick={closeModal}>close</button>
          <FormAddCard />
          {/* <FormAddCard onAdd={addCards} /> */}
        </ModalBody>
      </Modal>
    </div>
  );
}

import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

import {
  customStyles,
  CardBody,
  CardDetals,
  Priority,
  PriorityDetals,
  CardColor,
  CardTitle,
  CardDescription,
  CardSolid,
  PriorityTitle,
  PriorityTipe,
  PriorityColor,
  Deadline,
  DeadlineTitle,
  DeadlineDate,
  CardButtons,
  CardInformation,
  Bell,
  Button,
} from './Card.styled';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/cards/cardsOperations';
import EditCardModal from 'components/EditCardModal/EditCardModal';

export default function Card({ card }) {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { _id: cardId, title, text, deadline, priority } = card;
  const dateDeadline = new Date(deadline);
  const formatedDate = `${dateDeadline.getDate()}/${
    dateDeadline.getMonth() + 1
  }/${dateDeadline.getFullYear()}`;
  const cardTextDescription = text.substring(0, 90) + '...';

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      boxShadow: '0px 4px 16px 0px #1616160D',
    },
    overlay: {
      background: 'rgba(0,0,0,0.5)',
    },
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard({ cardId }));
  };

  return (
    <CardBody>
      <CardColor $priority={priority}></CardColor>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{cardTextDescription}</CardDescription>
      <CardSolid></CardSolid>
      <CardDetals>
        <CardInformation>
          <Priority>
            <PriorityTitle>Priority</PriorityTitle>
            <PriorityDetals>
              <PriorityColor $priority={priority}></PriorityColor>
              <PriorityTipe>{priority}</PriorityTipe>
            </PriorityDetals>
          </Priority>
          <Deadline>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineDate>{formatedDate}</DeadlineDate>
          </Deadline>
        </CardInformation>
        <CardButtons>
          <Bell type="button">
            <Icon name="bell" width="16" height="16" />
          </Bell>
          <Button type="button">
            <Icon name="arrow-in-circle" width="16" height="16" />
          </Button>
          <Button type="button" onClick={openCardModal}>
            <Icon name="pencil" width="16" height="16" />
          </Button>
          <Button type="button" onClick={handleDeleteCard}>
            <Icon name="trash" width="16" height="16" />
          </Button>
        </CardButtons>
      </CardDetals>
      <Modal
        isOpen={modalCardIsOpen}
        onRequestClose={closeCardModal}
        style={customStyles}
        contentLabel="Card Add Modal"
        ariaHideApp={false}
      >
        <EditCardModal card={card} onClose={closeCardModal} />
      </Modal>
    </CardBody>
  );
}

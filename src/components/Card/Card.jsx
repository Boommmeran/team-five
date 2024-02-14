import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

import {
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
import { MoveCardDropdown } from 'components/MoveCardDropdown/MoveCardDropdown';

export default function Card({ card }) {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
  const [isOpenMoveCardModal, setIsOpenMoveCardModal] = useState(false);
  const dispatch = useDispatch();
  const {
    _id: cardId,
    title,
    text,
    deadline,
    priority,
    column: { _id: columnId },
  } = card;
  const dateDeadline = new Date(deadline);
  const formatedDate = `${dateDeadline.getUTCDate()}/${(
    dateDeadline.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${dateDeadline.getFullYear()}`;
  const cardTextDescription = text.substring(0, 90) + '...';

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard({ cardId }));
  };

  const hendleMoveCardModalOpen = () => {
    setIsOpenMoveCardModal(true);
  };

  const hendleMoveCardModalClose = () => {
    setIsOpenMoveCardModal(false);
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
          <Button type="button" onClick={hendleMoveCardModalOpen}>
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
        className={'modal-content'}
        overlayClassName={'modal-overlay'}
      >
        <EditCardModal card={card} onClose={closeCardModal} />
      </Modal>
      <Modal
        isOpen={isOpenMoveCardModal}
        onRequestClose={hendleMoveCardModalClose}
        className={'modal-content'}
        overlayClassName={'modal-overlay'}
      >
        <MoveCardDropdown currColumnId={columnId} cardId={cardId} />
      </Modal>
    </CardBody>
  );
}

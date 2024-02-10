import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import AddCardModal from 'components/AddCardModal/AddCardModal';

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

const cardItem ={
  title: 'Quiz Creation',
  text: 'Create engaging and interactive quizzes using Kahoot`s intuitive quiz builder. Design questions, provide multiple-choice answers, and include multimedia elements such as images and videos.',
  priority: {
    enum: ["without", "low", "medium", "high"],
  },
  deadline: '14/02/2024',
}

export default function Card(cardItem) {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);

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

  return (
    <CardBody>
      <CardColor priority ="without"></CardColor>
      {/* <CardColor priority ={cardItem.priority}></CardColor> */}
      <CardTitle>{cardItem.title}Quiz Creation</CardTitle>
      <CardDescription>{cardItem.text}
        Create engaging and interactive quizzes using Kahoot's intuitive quiz
        builder. Design questions, provide multiple-choice answers, and include
        multimedia elements such as images and videos.
      </CardDescription>
      <CardSolid></CardSolid>
      <CardDetals>
        <CardInformation>
          <Priority>
            <PriorityTitle>Priority</PriorityTitle>
            <PriorityDetals>
              <PriorityColor priority ="without"></PriorityColor>
              {/* <PriorityColor priority ={cardItem.priority}></PriorityColor> */}
              <PriorityTipe>{cardItem.priority}Without</PriorityTipe>
            </PriorityDetals>
          </Priority>
          <Deadline>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineDate>{cardItem.deadline}14/02/2024</DeadlineDate>
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
          <Button type="button">
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
        <AddCardModal
          title={'Edit card'}
          btnText={'Edit'}
          onClose={closeCardModal}
          reqFunc={values => console.log(values)}
        />
      </Modal>
    </CardBody>
  );
}

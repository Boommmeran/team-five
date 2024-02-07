import { Icon } from 'components/Icon';
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
} from './Card.styled';

export default function Card() {
  return (
    <CardBody>
      <CardColor></CardColor>
      <CardTitle>Quiz Creation</CardTitle>
      <CardDescription>
        Create engaging and interactive quizzes using Kahoot's intuitive quiz
        builder. Design questions,
      </CardDescription>
      <CardSolid></CardSolid>
      <CardDetals>
        <CardInformation>
          <Priority>
            <PriorityTitle> Priority</PriorityTitle>
            <PriorityDetals>
              <PriorityColor></PriorityColor>
              <PriorityTipe>Without</PriorityTipe>
            </PriorityDetals>
          </Priority>
          <Deadline>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineDate>14/02/2024</DeadlineDate>
          </Deadline>
        </CardInformation>
        <CardButtons>
          <button type="button">
            <Icon name="icon-bell" width="16" height="16" />
          </button>
          <button type="button">
            <Icon name="icon-puzzle" width="16" height="16" />
          </button>
          <button type="button">
            <Icon name="pencil" width="16" height="16" />
          </button>
          <button type="button">
            <Icon name="trash" width="16" height="16" />
          </button>
        </CardButtons>
      </CardDetals>
    </CardBody>
  );
}

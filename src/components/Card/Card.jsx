import { CardBody,CardDetals,Priority ,PriorityDetals} from './Card.styled';

export default function Сard() {
  return (
    <CardBody>
      <h4>Quiz Creation</h4>
      <p>Create engaging and interactive quizzes using Kahoot's intuitive quiz builder. Design questions, provide multiple-choice answers, and include multimedia elements such as images and videos. </p>
      <p>_________________________________</p>
      <CardDetals>
        <Priority>
          <p> Priority</p>
        <PriorityDetals>
        <p>0</p> 
          <p>without</p>
        </PriorityDetals>
        </Priority>
        <div>
          <p>Deadline</p>
          <p>14/02/2024</p>
        </div>
        <p>bell</p>
        <p>move</p>
        <p>edit</p>
        <p>delete</p>
      </CardDetals>
    </CardBody>
  );
}

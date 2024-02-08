import { Icon } from "components/Icon";
import { BoardItemContainer, ControlIconsContainer } from "./BoardItem.styled";

export const BoardItem = ({ board, onDelete }) => {
  return (
    <BoardItemContainer>
      <Icon name={board.icon} width="18" height="18" style={{ opacity: 0.5 }} />
      <p>{board.title}</p>
      <ControlIconsContainer>
        <button type="button">
          <Icon name="pencil" width="16" height="16" />
        </button>
        <button type="button" onClick={onDelete}>
          <Icon name="trash" width="16" height="16" />
        </button>
      </ControlIconsContainer>
    </BoardItemContainer>
  );
};
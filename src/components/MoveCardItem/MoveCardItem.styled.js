import styled from 'styled-components';

export const MoveCardItemStyled = styled.li`
  &.current {
    color: var(--accent);

    &button {
      pointer-events: none;
    }
  }
`;

export const MoveCardItemButtonStyled = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
`;
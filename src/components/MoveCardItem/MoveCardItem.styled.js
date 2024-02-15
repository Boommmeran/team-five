import styled from 'styled-components';

export const MoveCardItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  color: var(--secondaryTextColor);
  &.current {
    color: var(--accent);

    &button {
      pointer-events: none;
    }
    &.current svg {
      stroke: var(--accent);
    }
  }

  svg {
    &.current {
      stroke: var(--accent);
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

import styled from 'styled-components';

export const ControlIconsContainer = styled.div`
  margin-left: auto;
  display: none;
  gap: 8px;

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;

export const BoardItemContainer = styled.li`
  height: 61px;
  margin: 0 -14px 0 -14px;
  padding: 0 14px 0 14px;
  display: flex;
  align-items: center;
  stroke: var(--primaryTextColor);
  opacity: 0.5;
  transition: var(--transition);

  p {
    margin-left: 4px;
    font-family: 'Poppins-Medium';
    font-size: 14px;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondaryBgColor);
    opacity: 1;

    > ${ControlIconsContainer} {
      display: flex;
      opacity: 0.5;
    }
  }
`;
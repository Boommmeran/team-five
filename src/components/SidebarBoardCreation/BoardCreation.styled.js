import styled from 'styled-components';

export const BoardCreationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--cardsLine);
  border-bottom: 1px solid var(--cardsLine);
  font-family: 'Poppins-Medium';
  padding: 14px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    padding: 14px 24px 14px 16px;
  }
`;

export const BoardText = styled.p`
  width: 77px;
`;

export const BtnCreate = styled.button`
  width: 40px;
  height: 36px;
  background-color: var(--btnPlus);
  border: none;
  border-radius: 6px;
  transition: var(--transition);
  cursor: pointer;
  stroke: var(--btnText);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--btnPlusHover);
  }
`;
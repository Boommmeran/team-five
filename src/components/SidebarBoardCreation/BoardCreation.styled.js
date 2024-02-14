import styled from 'styled-components';

export const BoardCreationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: rgba(255, 255, 255, 0.1) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 40px;
  font-family: 'Poppins-Medium';
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
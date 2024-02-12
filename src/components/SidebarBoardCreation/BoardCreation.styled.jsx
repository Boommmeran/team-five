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
  cursor: pointer;
  stroke: var(--btnText);
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--btnPlusHover);
  }
`;

export const customStylesForModal = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};
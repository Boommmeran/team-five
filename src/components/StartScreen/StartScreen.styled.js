import styled from 'styled-components';

export const StartContainer = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: var(--secondaryBgColor);
`;

export const StartText = styled.p`
  min-width: 280px;
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.33;
  

  color: var(--secondaryTextColor);

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    line-height: 1.29;
    width: 486px;
    margin: auto;
  }
`;



export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

export const BoardCreationBtn = styled.button`
  margin: 0;
  padding: 0;

  border: none;
  outline: none;

  background-color: inherit;
  color: var(--btnPlus);
  cursor: pointer;
  transition: color var(--transition);
  &:hover,
  &:focus {
    color: var(--btnPlusHover);
  }
`;

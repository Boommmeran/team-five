import styled from 'styled-components';

export const DashBoardWrap = styled.div`
  background: var(--secondaryBgColor);
  width: 100vw;
  height: 100vh;
`;

export const StartText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 280px;

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

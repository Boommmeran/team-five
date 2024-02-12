import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

export const MenuBtn = styled.button`
  @media (min-width: 1180px) {
    display: none;
  }
`;

export const HeaderStyled = styled.header`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  gap: 4px;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 14px;
  background-color: var(--headerBgColor);
  color: var(--primaryTextColor);
  letter-spacing: -0.02em;
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const AddBtn = styled.button`
  gap: 8px;
  background: transparent;
  max-width: 335px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  column-gap: 4px;
  align-items: right;
  color: var(--nonAccentTextColor);
`;

export const IconWrap = styled.div`
  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--nonAccentTextColor);
  }
`;

export const Navigation = styled.nav`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  position: absolute;
  top: 54px;
  text-align: left;
  padding-left: 12px;
  width: 81px;
  height: 84px;
  background-color: #151515;
  border-radius: 8px;
  cursor: pointer;
  // opacity: 0;
  // transform: translateY(-10px);
  // visibility: hidden;
  // transition: 0.3s;
`;

export const NavigationList = styled.ul`
  list-style-type: none;
`;

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
`;

export const Theme = styled.div`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  display: flex;
  column-gap: 4px;
  align-items: right;
`;

export const NavigationItem = styled.button`
  display: flex;
  padding: 0;
  padding-bottom: 8px;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--secondaryTextColor);
  &:hover {
    animation: ${fade} 2s linear infinite alternate;
    transform: scale(1.05);
    color: var(--btnPlus);
  }
`;

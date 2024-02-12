import styled from 'styled-components';

export const HeaderStyled = styled.header`
  grid-column: 1 / 2;
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

  @media screen and (min-width: 1180px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const MenuBtn = styled.button`
  border: none;
  background-color: inherit;

  svg {
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 1440px) {
    display: none;
  }
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
  align-items: baseline;
  gap: 14px;
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

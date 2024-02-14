import styled from 'styled-components';

export const SidebarStylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  padding: 14px;
  color: var(--primaryTextColor);

  @media only screen and (min-width: 768px) {
    width: 260px;
    padding: 24px;
  }

  /* @media (max-width: 1439px) {
    display: none;
  } */
`;

export const Logo = styled.div`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  letter-spacing: -0.04em;
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 70px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const BoardContainer = styled.div`
  font-family: 'Poppins-Medium';
  font-size: 14px;

  h3 {
    margin-bottom: 8px;
    font-size: 12px;
    font-family: 'Poppins-Regular';
    opacity: 50%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 12px;
  opacity: 50%;
`;

export const BoardList = styled.ul`
  margin-bottom: 40px;
  font-family: 'Poppins-Medium';
`;

export const LogOut = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  stroke: var(--borderInThemeModal);
  transition: var(--transition);
  cursor: pointer;

  p {
    margin-left: 14px;
    color: var(--primaryTextColor);
  }

  &:hover,
  &:focus,
  &:active {
    stroke: var(--hover);
  }

  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

import styled from 'styled-components';

export const SidebarStylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  padding: 14px 0 0;
  color: var(--primaryTextColor);
  overflow-y: scroll;
  max-height: 100vh;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    width: 260px;
    padding: 24px 0 0;
  }

  @media only screen and (max-width: 1439px) {
    padding: 24px 0;
  }
`;

export const Logo = styled.div`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  letter-spacing: -0.04em;
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 70px;
  margin-left: 16px;

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

export const Title = styled.h2`
  margin-bottom: 8px;
  margin-left: 16px;
  font-size: 12px;
  opacity: 50%;
`;

export const BoardList = styled.ul`
  margin-bottom: 40px;
  font-family: 'Poppins-Medium';
  overflow-y: scroll;
  min-height: 17vh;
  max-height: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogOut = styled.button`
  margin: 0;
  padding: 16px 0 0 16px;
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

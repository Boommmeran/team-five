import styled from 'styled-components';

export const SidebarContainer = styled.section`
  width: 225px;
  min-height: 100vh;
  padding: 14px;
  color: var(--primaryTextColor);
  letter-spacing: -0.02em;
  text-align: left;
  background-color: var(--primaryBgColor);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    width: 260px;
    padding: 24px;
  }
`;

export const Logo = styled.div`
  font-family: 'Poppins-SemiBold';
  letter-spacing: -0.04em;
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 70px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
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
  cursor: pointer;
  stroke: var(--borderInThemeModal);
  transition: var(--transition);

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

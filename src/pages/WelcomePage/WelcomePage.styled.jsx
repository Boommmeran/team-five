import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-family: 'Poppins-semiBold', sans-serif;
  font-size: 40px;
  letter-spacing: -2px;
  gap: 15px;
`;
export const WrapForNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin-top: 55px;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: 'Poppins-medium', sans-serif;
  color: black;
  font-size: 14px;
  width: 344px;
  height: 49px;
  cursor: pointer;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    background-color: black;
    color: white;
  }
`;
export const WraperWelcomeSection = styled.section`
  background: linear-gradient(rgba(255, 255, 255, 1) 30%, #bedbb0 92.19%);
  width: 100vw;
  height: 812px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    height: 1024px;
  }
  @media only screen and (min-width: 1440px) {
    height: 770px;
  }
`;
export const WraperContentWelcome = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 473px;
  }
`;
export const ThumbWelcomeImg = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  width: 124px;
  height: 124px;
  @media only screen and (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;

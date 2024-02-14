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
  svg {
    width: 48px;
    height: 48px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 20px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
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
  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;
export const WraperWelcomeSection = styled.section`
  background: linear-gradient(rgba(255, 255, 255, 1) 30%, #bedbb0 92.19%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const WraperContentWelcome = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 473px;
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
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
export const TextStyledWelcome = styled.p`
  font-size: 14px;
  width: 335px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 473px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 10px;
    width: 100%;
  }
`;

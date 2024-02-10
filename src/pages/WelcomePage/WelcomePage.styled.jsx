import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-family: 'Poppins-semiBold', sans-serif;
  font-size: 40px;
  letter-spacing: -2px;
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
  font-family: 'Poppins-medium', sans-serif;
  color: black;
  font-size: 14px;
  width: 344px;
  height: 49px;
  &.active {
    color: orange;
  }
`;
export const WraperWelcome = styled.div`
  background-color: rgba(196, 196, 196, 0);
`;

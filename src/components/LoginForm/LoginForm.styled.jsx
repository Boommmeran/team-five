import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LabelStyled = styled.label`
  position: relative;
`;
export const LoginStyled = styled.div`
  border-radius: 8px;
  height: 363px;
  background-color: black;
  display: flex;
  flex-direction: column;

  padding: 34px 29px 34px 29px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
    padding: 49px 42px 49px 42px;
  }
`;
export const LoginInputStyled = styled.input`
  display: flex;
  width: 287px;
  height: 49px;
  color: red;
  border: 1px solid black;
  border-radius: 8px;
  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;
export const IconStyledEye = styled.i`
  position: absolute;
  top: 0;
  right: 0;
`;
export const StyledNavLinkLogin = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins-medium', sans-serif;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
`;
export const WrapForLoginNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  gap: 15px;
  margin-bottom: 42px;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LabelStyled = styled.label`
  position: relative;
`;
export const LoginStyledSection = styled.section`
  background: linear-gradient(rgba(255, 255, 255, 1) 30%, #bedbb0 92.19%);
  width: 100%;
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
export const LogInputStyled = styled.input`
  display: flex;
  width: 287px;
  height: 49px;
  color: rgba(255, 255, 255, 0.3);
  background: inherit;
  padding: 15px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  border-radius: 8px;
  outline: none;
  &:hover,
  &:focus,
  &:active {
    color: white;
    border-color: rgba(190, 219, 176, 1);
  }
  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;
export const IconStyledEye = styled.i`
  position: absolute;
  top: 33%;
  right: 5%;
  stroke: rgba(255, 255, 255, 0.3);
  &:active {
    stroke: white;
  }
`;

export const StyledNavLinkLogin = styled(NavLink)`
  font-family: 'Poppins-medium', sans-serif;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: white;
  }
  &.active {
    color: white;
  }
`;
export const FormLoginStyled = styled.form`
  width: 335px;
  height: 300px;
  padding: 20px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(21, 21, 21, 1);
  border-radius: 8px;
  gap: 10px;
  @media only screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
    padding: 40px 38px;
  }
`;
export const WrapForLoginNav = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  gap: 15px;
  margin-bottom: 25px;
`;
export const ButtonLogin = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  cursor: pointer;
  color: black;
  width: 287px;
  height: 49px;
  background: rgba(190, 219, 176, 1);
  border: 1px solid rgba(190, 219, 176, 0.4);
  border-radius: 8px;
  &:hover,
  &:focus {
    background: rgba(157, 200, 136, 1);
  }
  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;

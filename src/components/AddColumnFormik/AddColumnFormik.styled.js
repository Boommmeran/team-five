import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 221px;
  position: relative;
  padding: 24px;
  min-width: 320px;
  background: var(--modalBgColor);

  @media only screen and (max-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background: var(--modalBgColor);
`;

export const StyledField = styled(Field)`
  font: inherit;
  cursor: pointer;
  padding-left: 18px;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 287px;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  background: var(--modalBgColor);
  color: var(--textColorcalendar);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    &::placeholder {
      color: transparent;
    }
  }

  transition: opacity var(--transition);

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  outline: none;
  background-color: inherit;

  cursor: pointer;
`;

export const Label = styled.h3`
  
  font-family: 'Poppins-Medium';
 
  font-weight: 500; */
  font-size: 18px;
  letter-spacing: -0.02em;
  
  color: var(--textColorcalendar);
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  width: 287px;
  height: 49px;
  background: var(--accent);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--btnBgColorHover);
  }

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Poppins-Medium';

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  color: var(--btnText);
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 2px;
  right: 8px;

  color: red;
  font-size: 12px;
`;

export const StylePlus = styled.div`
  border: none;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--btnText);
  margin-right: 8px;
  stroke: white;
`;

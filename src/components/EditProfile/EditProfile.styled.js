import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  position: relative;
  padding: 24px;
  width: 100%;
  height: 440px;
  border-radius: 8px;
  background: var(--modalBgColor);

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 24px 0;
  font-family: 'Poppins-Medium';
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;
export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.input`
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 68px;
  height: 68px;
  /* border: 1px solid black; */
  cursor: pointer;
  border-radius: 8px;
`;

export const StyledField = styled(Field)`
  position: relative;
  margin-bottom: 14px;
  padding: 14px 18px;
  width: 100%;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  opacity: 0.4;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
  transition: var(--transition);

  &:focus,
  &:active {
    opacity: 1;
    &::placeholder{
      color:transparent;
    }
    
  }
`;
export const LastField = styled(Field)`
  margin-bottom: 24px;
  padding: 14px 18px;
  width: 100%;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  opacity: 0.4;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -2;
  color: var(--primaryTextColor);
  transition: var(--transition);

  &:focus,
  &:active {
    opacity: 1;
    &::placeholder{
      color:transparent;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  padding: 14px 126px;
  color: var(--primaryTextColor);
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -2;
`;



export const ErrMsg = styled(ErrorMessage)`


  position: absolute;
  top: 2px;
  right: 4px;

  color: red;
  font-size: 12px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: block;

  svg {
    position: absolute;
    top: 16px;
    right: 15px;
    opacity:0,5;
    &:active{
      opacity:1;
    }
  }
`;




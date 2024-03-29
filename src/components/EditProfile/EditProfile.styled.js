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
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
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
  background-color: var(--modalBgColor);
  color: var(--secondaryTextColor);
  transition: opacity var(--transition);

  &:focus,
  &:active {
    opacity: 1;
  }
`;

export const IconStyledEye = styled.i`
  position: absolute;
  top: 23%;
  right: 5%;
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
  letter-spacing: -0.02em;
  background: var(--modalBgColor);
  color: var(--secondaryTextColor);
  transition: opacity var(--transition);

  &:focus,
  &:active {
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  padding: 14px 126px;
  color: var(--btnText);
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0, 02em;
  transition: background-color var(--transition);
  &:hover,
  &:focus {
    background: var(--hover);
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 2px;
  right: 8px;

  font-size: 12px;
  font-style: italic;
  color: red;
`;

export const Label = styled.label`
  position: relative;
  display: block;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: block;
`;

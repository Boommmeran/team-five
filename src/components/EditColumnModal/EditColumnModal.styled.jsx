import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  width: 350px;
  height: 221px;
  background: #151515;
  gap: 24px;
`;

export const StyledField = styled(Field)`
  font: inherit;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 302px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  background: #1f1f1f;
  opacity: 0.4;
`;

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  width: 302px;
  height: 49px;
  background: #bedbb0;
  font-size: 20px;
`;

export const ButtonText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
`;

export const ErrMsg = styled(ErrorMessage)`
  color: #f5530d;
`;

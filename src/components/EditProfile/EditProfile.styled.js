import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  position: relative;
  padding: 24px;
  width: 100%;
  height: 440px;
  background: var(--headerBgColor);

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 24px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;
export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  
`;

export const AvatarField = styled(Field)`
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 68px;
  height: 68px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 8px;
`;

export const StyledField = styled(Field)`
  margin-bottom: 14px;
  padding: 14px 18px;
  width: 100%;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;

  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;
export const LastField = styled(Field)`
  margin-bottom: 24px;
  padding: 14px 18px;
  width: 100%;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;

  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;

export const Button = styled.button`
  width: 100%;
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  padding: 14px 126px;
  color: var(--primaryTextColor);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ButtonAvatar = styled.button`
  position: absolute;
  top: 130px;
  right: 155px;

  width: 24px;
  height: 24px;
  background: var(--accent);
  border-radius: 8px;
  border: 0;
  

  @media only screen and (min-width: 768px) {
    right: 186px;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: red;
  font-style: italic;
  font-size: 14px;
`;

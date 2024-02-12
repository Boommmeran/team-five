import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerForModal = styled.div`
  position: relative;
  padding: 24px 34px 50px 24px;
  width: 320px;
  height: 381px;

  background: var(--headerBgColor);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);

  @media only screen and (min-width: 375px) {
    width: 345px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 355px;
    padding: 24px;
  }
`;

export const TitleForModal = styled.h3`
  margin-bottom: 24px;

  text-align: start;
  font-family: 'Poppins-Medium';
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;
export const StyledFormInModal = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldInModal = styled(Field)`
  position: relative;
  margin-bottom: 14px;
  padding: 14px 18px;
  width: 100%;

  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  resize: none;
  opacity: 0.4;

  font-size: 14px;
  line-height: 1.4;

  color: var(--primaryTextColor);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }

  transition: opacity var(--transition);

  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 19px;
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export const StyledTextareaInModal = styled(Field)`
  position: relative;
  margin-bottom: 24px;
  padding: 14px 18px;
  width: 100%;

  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  resize: none;
  opacity: 0.4;

  font-size: 14px;
  height: calc(30px * 4);
  line-height: 1.5;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }

  color: var(--primaryTextColor);

  transition: opacity var(--transition);

  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ButtonForModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 100%;

  background-color: var(--accent);
  border: 0;
  border-radius: 8px;

  color: var(--primaryTextColor);
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;

  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--btnBgColorHover);
  }

  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
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

import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  border-radius: 8px;
  height: 522px;
  position: relative;
  padding: 24px;
  width: 100%;
  background: var(--primaryBgColor);

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleModal = styled.h2`
  margin-bottom: 24px;
  font-family: 'Poppins-Medium';
  font-size: 18px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 2px;
  right: 4px;

  color: red;
  font-size: 12px;
`;

export const TitleCard = styled(Field)`
  padding-left: 18px;
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  width: 287px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  margin-bottom: 14px;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    &::placeholder {
      color: transparent;
    }
  }

  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
`;

export const StyledDescription = styled(Field)`
  padding-left: 18px;
  outline: transparent;
  outline-offset: -1px;
  padding-top: 14px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  width: 287px;
  height: 154px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  margin-bottom: 24px;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    &::placeholder {
      color: transparent;
    }
  }

  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const LabelColorStyle = styled.p`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  margin-bottom: 4px;
`;

export const StyleRadioButton = styled.div`
  height: 18px;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const RadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
`;
export const RadioButtonBlu = styled.label`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #8fa1d0;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    border: 2px solid #8fa1d0;
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

export const RadioButtonRed = styled.label`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #e09cb5;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    border: 2px solid #e09cb5;
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

export const RadioButtonGreen = styled.label`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #bedbb0;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    border: 2px solid #bedbb0;
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

export const RadioButtonGrey = styled.label`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: rgba(22, 22, 22, 0.3);
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    border: 2px solid rgba(22, 22, 22, 0.3);
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

export const DeadlineStyle = styled.p`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  margin-bottom: 4px;
`;

export const AddButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  width: 287px;
  height: 49px;
  background: var(--btnPlus);
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--btnBgColorHover);
  }
  cursor: pointer;
  @media only screen and (min-width: 375px) {
    width: 287px;
  }

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
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
  stroke: var(--plusInBtn);
`;

export const AddCardButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: var(--btnPlus);
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

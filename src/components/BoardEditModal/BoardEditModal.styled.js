import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  padding: 24px;
  width: 335px;
  height: 433px;

  border-radius: 8px;

  background-color: var(--modalBgColor);

  stroke: var(--primaryTextColor);

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const ModalTitle = styled.h3`
  margin-bottom: 24px;

  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--textColorcalendar);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  outline: none;
  background-color: inherit;

  opacity: 0.5;
  transition: opacity var(--transition);

  > svg {
    stroke: var(--textColorcalendar);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  cursor: pointer;
`;

export const FormWrap = styled(Form)`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const Input = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 14px 0 14px 18px;
  margin-bottom: 24px;

  font-family: 'Poppins-Regular';
  font-size: 14px;

  border: 1px solid var(--accent);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);

  color: var(--textColorcalendar);
  background-color: var(--modalBgColor);
  opacity: 0.4;

  transition: opacity var(--transition);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`;

export const Text = styled.p`
  margin-bottom: 14px;

  color: var(--textColorcalendar);
`;

export const IconsListWrap = styled.ul`
  display: flex;
  gap: 8px;

  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;
  background-color: inherit;

  width: 18px;
  height: 18px;

  opacity: 0.5;
  transition: opacity var(--transition);

  cursor: pointer;
  > svg {
    stroke: var(--primaryTextColor);
  }

  &:focus,
  &:hover {
    opacity: 1;
  }
`;

export const InvisibleInput = styled(Field)`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const BackgroundsPallet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
  height: 60px;
  margin-bottom: 40px;
`;

export const LabelPic = styled.label``;

export const Div = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  transition: transform var(--transition);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 287px;
  height: 49px;

  padding: 10px 0 11px 0;
  border: none;

  /* border: 1px solid black; */
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--btnText);
  background-color: var(--accent);
  transition: background-color var(--transition);

  cursor: pointer;

  @media (min-width: 768px) {
    width: 302px;
  }

  &:hover,
  &:focus {
    background-color: var(--btnBgColorHover);
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  background-color: var(--btnText);

  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--plusInBtn);
  }
`;

import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  border-radius: 8px;
  height: 522px;
  position: relative;
  padding: 24px;
  width: 100%;
  background: var(--primaryBgColor);
  /* background: black; */

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleModal = styled.h2`
  margin-bottom: 24px;
  font-weight: 500;
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

export const TitleCard = styled(Field)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 287px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  margin-bottom: 14px;
`;
export const StyledDescription = styled(Field)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 287px;
  height: 154px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  margin-bottom: 24px;
`;

export const LabelColorStyle = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);
  margin-bottom: 4px;
`;

export const StyleRadioButton = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
`;

export const RadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;

  &:hover,
  &:focus,
  &:active {
    position: static;
    width: 14px;
    height: 14px;
  
  }
`;
export const RadioButtonBlue = styled.div`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #8fa1d0;
`;

export const DeadlineStyle = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);
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
`;

export const StylePlus = styled.div`
  border: none;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  margin-right: 8px;
  stroke: white;
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

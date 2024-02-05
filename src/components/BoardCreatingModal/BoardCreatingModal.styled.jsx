import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  padding: 24px;
  width: 335px;
  height: 433px;

  stroke: black;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 24px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  outline: none;
  background-color: inherit;
`;

export const FormWrap = styled(Form)`
    font-size: 14;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.02em;
`

export const Input = styled(Field)`
    width: 287px;
    height: 49px;
    padding: 14px 0 14px 18px;
    margin-bottom: 24px;

    border: 1px solid rgba(0 0 0 0.4);
    border-radius: 8px;
`
export const Text = styled.p`
    margin-bottom: 24px;
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 8px;

  > svg {
    width: 14px;
    height: 14px;
    stroke: black;
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

  border: 1px solid black;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

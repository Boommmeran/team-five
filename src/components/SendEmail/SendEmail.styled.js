import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerForModal = styled.div`
  position: absolute;
  padding: 24px 29px 50px 24px;
  min-width: 100%;
  height: 381px;
  background: var(--headerBgColor);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 var(--nonAccentTextColor);

  @media only screen and (min-width: 375px) {
    min-width: 0;
    width: 345px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 355px;
    padding: 24px;
  }
`;

export const TitleForModal = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  margin-bottom: 24px;
  text-align: start;
  letter-spacing: -0.02em;
  color: var(--primaryTextColor);
`;
export const StyledFormInModal = styled(Form)`
  /* position: relative; */
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

  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;

export const ButtonForModal = styled.button`
  /* width: 100%; */
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  padding: 14px 45%;
  color: var(--primaryTextColor);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  /* @media only screen and (min-width: 375px) {
    padding: 14px 126px;
  } */
`;

// export const ButtonClose = styled.button`
//   position: absolute;
//   top: 14px;
//   right: 14px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding: 0;
//   border: none;
//   background: none;
//   cursor: pointer;
// `;

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

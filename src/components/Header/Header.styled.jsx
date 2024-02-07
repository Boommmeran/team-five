import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  max-width: 1180px;
  height: 68px;
  padding: 14px;
  color: var(--primaryTextColor);
  letter-spacing: -0.02em;
  justify-content: right;
  background-color: var(--headerBgColor);
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  max-width: 335px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  cursor: pointer;
`;

export const Theme = styled.div`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  display: flex;
  column-gap: 4px;
  align-items: right;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 14px;
    height: 14px;
    stroke: white;
  }
`;

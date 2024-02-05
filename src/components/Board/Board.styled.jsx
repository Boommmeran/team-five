import styled from 'styled-components';

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
  gap: 8px;

  max-width: 335px;

  padding: 14px 79px;

  border: 1px solid black;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

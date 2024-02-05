import styled from 'styled-components';

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;

  background-color: inherit;

  stroke: black;
  > svg {
    width: 16px;
    height: 16px;
  }
`;

export const BoardName = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const Wrap = styled.div`
  @media (max-width: 767px) {
    padding: 14px 0px;
  }

  @media (min-width: 768px) {
    padding: 26px 0px;
  }

  @media (min-width: 1440px) {
    padding: 10px 0px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
